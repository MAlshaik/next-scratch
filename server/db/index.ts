import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import 'dotenv/config';

import * as schema from "./schema";

// Cache the database connection in development to avoid creating a new connection on every HMR update.
const globalForDb = globalThis as unknown as { conn: postgres.Sql | undefined };

// Ensure that DATABASE_URL is defined in your environment variables
const DATABASE_URL = process.env.DATABASE_URL;

// Check if DATABASE_URL is undefined or not
const conn = globalForDb.conn ?? (DATABASE_URL ? postgres(DATABASE_URL) : postgres(''));

// Store the connection globally for future use
if (process.env.NODE_ENV !== "production") globalForDb.conn = conn;

// Create the database instance
export const db = drizzle(conn, { schema });

