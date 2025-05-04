"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Layers, Globe, Shield, ChevronRight, MessageSquare, Mic, PenToolIcon as Tool, Cpu } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import ThemeToggle from "@/components/theme-toggle"
import WaitlistModal from "@/components/waitlist-modal"
import EarlyAccessForm from "@/components/early-access-form"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-[#6D54EB]/20 bg-white dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Ai2Innovate <span className="text-[#6D54EB]">Agents</span>
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="border-[#6D54EB] bg-[#6D54EB] text-white hover:bg-[#6D54EB]/90"
            >
              Join Waitlist
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#6D54EB] to-[#88B0E5]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    The Future of AI Automation. No Code. No Limits.
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Ai2Innovate Agents is reimagining how you build, deploy, and scale AI workflows. Be the first to
                    experience it.
                  </p>
                </div>
                <EarlyAccessForm />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-white mb-2">AI</div>
                        <div className="text-xl text-white/80">No Code Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Platform Description Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Build AI Agents Without Code
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A no-code AI agent builder allowing users to create, customize, and deploy AI agents across multiple
                  platforms.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg border border-[#6D54EB]/20 bg-white dark:bg-gray-800 p-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6D54EB] to-[#88B0E5]"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Create & Customize</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Build AI agents for text, voice, and tools without writing a single line of code. Customize
                    behavior, appearance, and capabilities through an intuitive interface.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#6D54EB]/10 p-2">
                        <MessageSquare className="h-5 w-5 text-[#6D54EB]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Text Agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#6D54EB]/10 p-2">
                        <Mic className="h-5 w-5 text-[#6D54EB]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Voice Agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#6D54EB]/10 p-2">
                        <Tool className="h-5 w-5 text-[#6D54EB]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tool Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#6D54EB]/10 p-2">
                        <Cpu className="h-5 w-5 text-[#6D54EB]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open Models</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-[#6D54EB]/20 bg-white dark:bg-gray-800 p-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#88B0E5] to-[#6D54EB]"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Deploy & Scale</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Deploy your AI agents across web, APIs, social platforms, and IoT devices. Scale your solutions with
                    our community marketplace and open model ecosystem.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#88B0E5]/10 p-2">
                        <Globe className="h-5 w-5 text-[#88B0E5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#88B0E5]/10 p-2">
                        <Layers className="h-5 w-5 text-[#88B0E5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">API Access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#88B0E5]/10 p-2">
                        <Zap className="h-5 w-5 text-[#88B0E5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Social Platforms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#88B0E5]/10 p-2">
                        <Shield className="h-5 w-5 text-[#88B0E5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">IoT Devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button onClick={() => setIsModalOpen(true)} className="bg-[#6D54EB] hover:bg-[#6D54EB]/90 text-white">
                Start Building Your AI Agents
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                  Reimagine What's Possible
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform brings AI automation to everyone, regardless of technical background.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm border-0 shadow-md overflow-hidden group">
                <div className="h-2 bg-[#6D54EB] w-full"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#6D54EB]/10 p-3 group-hover:bg-[#6D54EB]/20 transition-colors">
                    <Zap className="h-6 w-6 text-[#6D54EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Powered by advanced AI, designed for everyone
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm border-0 shadow-md overflow-hidden group">
                <div className="h-2 bg-[#88B0E5] w-full"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#88B0E5]/10 p-3 group-hover:bg-[#88B0E5]/20 transition-colors">
                    <Layers className="h-6 w-6 text-[#88B0E5]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Customizable workflows without complexity
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm border-0 shadow-md overflow-hidden group">
                <div className="h-2 bg-[#6D54EB] w-full"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#6D54EB]/10 p-3 group-hover:bg-[#6D54EB]/20 transition-colors">
                    <Globe className="h-6 w-6 text-[#6D54EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Multi-platform ready — wherever you build
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm border-0 shadow-md overflow-hidden group">
                <div className="h-2 bg-[#88B0E5] w-full"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#88B0E5]/10 p-3 group-hover:bg-[#88B0E5]/20 transition-colors">
                    <Shield className="h-6 w-6 text-[#88B0E5]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Enterprise-grade reliability with startup speed
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Join Now Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#88B0E5] to-[#6D54EB] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Join Now</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the journey from the beginning and enjoy exclusive benefits.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold text-white">01</div>
                <h3 className="text-xl font-bold">Get exclusive early access</h3>
                <p className="text-white/80">
                  Be among the first to experience our revolutionary platform before it's available to the public.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold text-white">02</div>
                <h3 className="text-xl font-bold">Shape the product with your feedback</h3>
                <p className="text-white/80">
                  Your input will directly influence the development of features and capabilities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold text-white">03</div>
                <h3 className="text-xl font-bold">Unlock future premium benefits</h3>
                <p className="text-white/80">
                  Early adopters will receive special pricing and exclusive features when we launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Get product updates, insider tips, and early invites
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay in the loop with all the latest developments and be the first to know when we launch.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <NewsletterForm />
              </div>
              <div className="mt-8 flex items-center justify-center">
                <a href="#" className="flex items-center text-[#88B0E5] hover:text-[#88B0E5]/80 transition-colors">
                  Learn more about our no-code platform
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © 2023 Ai2Innovate Agents. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="/privacy"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D54EB] dark:hover:text-[#88B0E5]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D54EB] dark:hover:text-[#88B0E5]"
            >
              Terms of Use
            </a>
            <a
              href="https://twitter.com"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D54EB] dark:hover:text-[#88B0E5]"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D54EB] dark:hover:text-[#88B0E5]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D54EB] dark:hover:text-[#88B0E5]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
