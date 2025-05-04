"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { joinWaitlist } from "@/app/actions/waitlist"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [isPending, startTransition] = useTransition()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("fullName", fullName)
    formData.append("email", email)
    formData.append("role", role)

    startTransition(async () => {
      const result = await joinWaitlist(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setFullName("")
        setEmail("")
        setRole("")
        onClose()
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Waitlist</h2>
          <p className="text-gray-500 dark:text-gray-400">Be the first to experience Ai2Innovate Agents</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="border-gray-300 dark:border-gray-700 focus-visible:ring-[#6D54EB]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border-gray-300 dark:border-gray-700 focus-visible:ring-[#6D54EB]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger id="role" className="border-gray-300 dark:border-gray-700 focus:ring-[#6D54EB]">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="product_manager">Product Manager</SelectItem>
                <SelectItem value="business_owner">Business Owner</SelectItem>
                <SelectItem value="marketer">Marketer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-[#6D54EB] hover:bg-[#6D54EB]/90 text-white" disabled={isPending}>
            {isPending ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </div>
  )
}
