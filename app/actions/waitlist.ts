"use server"

import { sql, isUniqueViolation } from "@/lib/db"

export async function joinWaitlist(formData: FormData) {
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const role = formData.get("role") as string

  if (!fullName || !email || !role) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    await sql`
      INSERT INTO waitlist (full_name, email, role)
      VALUES (${fullName}, ${email}, ${role})
    `

    return {
      success: true,
      message: "You've been added to our waitlist. We'll be in touch soon!",
    }
  } catch (error) {
    console.error("Error adding to waitlist:", error)

    if (isUniqueViolation(error)) {
      return {
        success: true, // Still return success to avoid revealing that the email exists
        message: "You've been added to our waitlist. We'll be in touch soon!",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
