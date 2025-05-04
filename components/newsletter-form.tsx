"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setEmail("")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <Input
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-[#6D54EB]"
      />
      <Button type="submit" disabled={isPending} className="bg-[#6D54EB] hover:bg-[#6D54EB]/90 text-white">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
