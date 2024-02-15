import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schemas from "./src/schema";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite, {
  schema: schemas,
});

export const schema = schemas;
