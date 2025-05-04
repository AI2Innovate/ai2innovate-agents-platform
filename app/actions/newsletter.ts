"use server"

import { sql, isUniqueViolation } from "@/lib/db"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Please provide your email address.",
    }
  }

  try {
    await sql`
      INSERT INTO newsletter (email)
      VALUES (${email})
    `

    return {
      success: true,
      message: "You've been successfully subscribed to our newsletter!",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)

    if (isUniqueViolation(error)) {
      return {
        success: true,
        message: "You've been successfully subscribed to our newsletter!",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
