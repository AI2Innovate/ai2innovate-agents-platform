"use server"

import { sql, isUniqueViolation } from "@/lib/db"

export async function requestEarlyAccess(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Please provide your email address.",
    }
  }

  try {
    await sql`
      INSERT INTO early_access (email)
      VALUES (${email})
    `

    return {
      success: true,
      message: "Thank you for your interest! We'll notify you when early access is available.",
    }
  } catch (error) {
    console.error("Error requesting early access:", error)

    if (isUniqueViolation(error)) {
      return {
        success: true,
        message: "Thank you for your interest! We'll notify you when early access is available.",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
