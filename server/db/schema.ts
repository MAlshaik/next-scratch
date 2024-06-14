import { pgTable, uuid, varchar, numeric, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Define user table
export const user = pgTable(
  "user",
  {
    id: uuid("id").notNull().primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull()
  }
);


