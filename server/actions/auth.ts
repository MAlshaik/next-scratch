"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { db } from "../db";
import { user, team, teamOnUser } from "../db/schema";  // Import all needed schemas
import { getURL } from "../helpers";

/**
 * Logs a user in
 * @param email the email of the user
 * @param password the password of the user
 * returns null if successful, or an error message if not
 */
export async function login(email: string, password: string): Promise<string | null> {
  const supabase = createClient();
  
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  return error ? error.message : null;
}

/**
 * Registers a user
 * @param email the email of the user
 * @param password the password of the user
 * @returns null if successful, or an error message if not
 */
export async function register(email: string, password: string, name: string) : Promise<string | null> {
    const supabase = createClient();

    const userData = {
      email,
      password
    };

    const { data, error } = await supabase.auth.signUp(userData);

    if (error) {
      return error.message;
    }

    const userId = data?.user?.id;
    const userEmail = data?.user?.email;

    if (!userId || !userEmail) {
        return "User ID or email not found.";
    }

    // Insert user into the user table
    const insertedUser = await db.insert(user).values({
        id: userId,
        name: name,
        email: userEmail
    }).returning({ id: user.id });
    
    if (!insertedUser) {
        return "Failed to insert user into the database.";
    }

    redirect('/auth/confirm')

    return null;
}

/**
 * Logs a user out
 */
export async function logout() {
    const supabase = createClient();
  
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      redirect('/error?message=' + error.message);
    }

    redirect('/');
}


/**
 * Logs in a user with Google
 * @returns redirects to the home page if successful, and back to login page if not
 */
export async function handleSignInWithGoogle(
) : Promise<void> {
  const supabase = createClient();

  const redirectUrl = getURL('/auth/callback');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl,
    },
  })

  if (error) {
    redirect('/login?message=' + error.message);
  }

  redirect(data.url)
}

/**
 * Check if id exists in user table in the database
 * populate the user object with the data from the database
 * @param data of the user
 * @returns null if successful, or an error message if not
 */
export async function populateGoogleUser(userId: string, userEmail: string, name: string): Promise<string | null> {
    
    if (!userId || !userEmail || !name) {
        return "User ID or email or name not found.";
    }

    console.log(`User ID: ${userId}, User Email: ${userEmail}, Name: ${name}`);

    
    // Insert user into the user table
    const insertedUser = await db.insert(user).values({
        id: userId,
        name: name,
        email: userEmail
    }).returning({ id: user.id });

    if (!insertedUser) {
        return "Failed to insert user into the database.";
    }

    
    return null;
}
