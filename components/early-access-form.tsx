"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { requestEarlyAccess } from "@/app/actions/early-access"

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      const result = await requestEarlyAccess(formData)

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-[400px]:flex-row">
      <div className="flex-1">
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/90 border-0 focus-visible:ring-[#6D54EB]"
        />
      </div>
      <Button type="submit" disabled={isPending} className="gap-1.5 bg-white text-[#6D54EB] hover:bg-white/90">
        {isPending ? "Processing..." : "Get Early Access"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}
