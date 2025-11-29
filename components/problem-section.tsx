"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { AlertTriangle, Clock, EyeOff, Search } from "lucide-react"

const problems = [
  {
    icon: EyeOff,
    title: "No official notifications",
    description: "VTU website has zero push notifications, email alerts, or SMS updates.",
  },
  {
    icon: Clock,
    title: "Delayed information",
    description: "Students learn about critical updates days or weeks late through word of mouth.",
  },
  {
    icon: Search,
    title: "Manual checking required",
    description: "You have to manually visit the VTU website and hunt through pages daily.",
  },
  {
    icon: AlertTriangle,
    title: "Missed deadlines",
    description: "Important exam dates, fee deadlines, and result announcements get missed.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">The Problem</p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              VTU does not offer real-time notifications.
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Students miss exam updates, academic calendars, and critical circulars every single day.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-card border-border hover:border-foreground/20 transition-colors">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
