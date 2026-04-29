import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { patients } from "./lib/db/schema"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const client = neon(process.env.DATABASE_URL!)
const db = drizzle(client)

async function clear() {
  console.log("Clearing database...")
  await db.delete(patients)
  console.log("Done! All patients removed.")
  process.exit(0)
}

clear().catch((err) => {
  console.error(err)
  process.exit(1)
})