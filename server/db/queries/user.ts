"use server"

import { User } from "@/types/user";
import { db } from "..";


/**
 * Get a user by user ID
 * @param user_id The ID of the user
 * @returns A User object or null if not found
 */
export async function getUserById(user_id: string): Promise<User | null> {
    console.log("getting user");

    const user = await db.query.user.findFirst({
        where: (model, { eq }) => eq(model.id, user_id)
    }) ?? null;

    console.log("got user", user)

    return user;
}

