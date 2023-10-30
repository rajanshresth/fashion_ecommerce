import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
  schema: "./src/server/db/schema/*",
  out: "./src/server/db/schema.ts/",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'default value',
  }
} satisfies Config;