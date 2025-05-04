import { neon } from "@neondatabase/serverless"

// Create a SQL client with the database URL from environment variables
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to check if an error is a unique constraint violation
export function isUniqueViolation(error: any): boolean {
  return error?.code === "23505"
}
