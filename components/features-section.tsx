"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";
import {
  Bell,
  FolderOpen,
  History,
  MousePointerClick,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "One-Click Setup",
    description:
      "No signup, no email, no account. Just click once and you're subscribed.",
  },
  {
    icon: Bell,
    title: "Browser Push Notifications",
    description:
      "Get instant alerts directly in your browser the moment a new circular drops.",
  },

  {
    icon: Shield,
    title: "Privacy First",
    description: "No personal data collected. We only send you VTU circulars.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Features
            </p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              Everything you need to stay informed.
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Comprehensive notification system designed specifically for VTU
              students.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-card border-border hover:border-foreground/20 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-muted flex items-center justify-center mb-4 group-hover:bg-foreground transition-colors">
                    <feature.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
