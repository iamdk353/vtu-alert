"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, SlideUp } from "@/components/motion-wrapper"
import { ArrowRight, Bell } from "lucide-react"

export function HeroSection() {
  const enableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        new Notification("VTU Alerts Enabled!", {
          body: "You'll now receive instant notifications for all VTU circulars.",
          icon: "/favicon.ico",
        })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <FadeIn delay={0}>
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 font-mono text-xs inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-accent animate-pulse" />
              One-Click Setup — No Signup Required
            </Badge>
          </FadeIn>

          {/* Main Headline */}
          <SlideUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-6">
              Never Miss a VTU Circular Again.
            </h1>
          </SlideUp>

          {/* Sub-headline */}
          <SlideUp delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
              First platform to auto-notify students the moment VTU publishes a circular. Exams, results, academic
              calendars — delivered instantly.
            </p>
          </SlideUp>

          {/* CTA Buttons */}
          <SlideUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base" onClick={enableNotifications}>
                <Bell className="w-4 h-4 mr-2" />
                Enable Notifications
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 h-12 text-base bg-transparent"
                asChild
              >
                <a href="#how-it-works">
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.35}>
            <p className="text-sm text-muted-foreground mt-4">No account needed. Just click and you're done.</p>
          </SlideUp>

          {/* Stats Row */}
          <FadeIn delay={0.5}>
            <div className="mt-16 pt-10 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-semibold font-mono">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of pain solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-semibold font-mono">5min</div>
                  <div className="text-sm text-muted-foreground mt-1">Update frequency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-semibold font-mono">1-Click</div>
                  <div className="text-sm text-muted-foreground mt-1">Setup time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-semibold font-mono">0</div>
                  <div className="text-sm text-muted-foreground mt-1">Sign up required</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
