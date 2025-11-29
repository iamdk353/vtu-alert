"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Finally I never miss a single VTU update! This saved me from missing my exam fee deadline.",
    name: "Priya S.",
    role: "CSE Student, 6th Sem",
  },
  {
    quote: "I used to check the VTU website 5 times a day. Now I just wait for the notification. Life changer.",
    name: "Rahul M.",
    role: "ECE Student, 8th Sem",
  },
  {
    quote: "Got the revaluation result notification before even my friends knew. This is actually useful!",
    name: "Aishwarya K.",
    role: "ISE Student, 4th Sem",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Testimonials</p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              Loved by VTU students.
            </h2>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-card border-border">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
