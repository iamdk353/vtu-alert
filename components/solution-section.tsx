"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SlideIn, SlideUp } from "@/components/motion-wrapper";
import { Check, X, Radar, Sparkles, Send } from "lucide-react";

const vtuIssues = [
  "No notification system",
  "Manual checking required",
  "Easy to miss updates",
];

const ourSolution = [
  "Instant push notifications",
  "Automated tracking",
  "Never miss an update",
];

export function SolutionSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              The Solution
            </p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              Automated tracking. Instant alerts.
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We monitor the official VTU website continuously and notify you
              the moment something new appears.
            </p>
          </SlideUp>
        </div>

        {/* How it works - 3 steps */}
        <SlideUp delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-muted/30 border-border relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 left-6 bg-foreground text-background w-6 h-6 flex items-center justify-center text-xs font-mono font-bold">
                  1
                </div>
                <Radar className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="font-semibold mb-2">We watch VTU</h3>
                <p className="text-sm text-muted-foreground">
                  Our system monitors the VTU website every few minutes for any
                  changes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 left-6 bg-foreground text-background w-6 h-6 flex items-center justify-center text-xs font-mono font-bold">
                  2
                </div>
                <Sparkles className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="font-semibold mb-2">We detect changes</h3>
                <p className="text-sm text-muted-foreground">
                  New circulars are detected instantly
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 left-6 bg-foreground text-background w-6 h-6 flex items-center justify-center text-xs font-mono font-bold">
                  3
                </div>
                <Send className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="font-semibold mb-2">We notify you</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant alerts via browser push .
                </p>
              </CardContent>
            </Card>
          </div>
        </SlideUp>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <SlideIn delay={0.2} direction="left">
            <Card className="h-full border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <X className="w-5 h-5 text-destructive" />
                  VTU Website
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vtuIssues.map((issue, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </SlideIn>

          <SlideIn delay={0.3} direction="right">
            <Card className="h-full border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Check className="w-5 h-5 text-accent" />
                  VTU Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ourSolution.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
