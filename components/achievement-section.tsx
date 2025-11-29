"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn, ScaleIn, SlideUp } from "@/components/motion-wrapper";
import { Award, Rocket, Users, Zap } from "lucide-react";

export function AchievementSection() {
  return (
    <section id="about" className="py-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <Badge
                variant="secondary"
                className="mb-6 bg-background/10 text-background border-background/20 hover:bg-background/20"
              >
                Unique Achievement
              </Badge>
            </FadeIn>
            <SlideUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-6">
                First Independent and Automatic Notification Layer for VTU.
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-background/70 text-lg leading-relaxed mb-8">
                After 10+ years of students manually checking the VTU website,
                we built what VTU never did a real-time notification system. No
                existing VTU site, portal, or app provides this.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>First of its kind</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Built for students</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Rocket className="w-4 h-4 text-accent" />
                  <span>Always improving</span>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Achievement Badge */}
          <ScaleIn delay={0.4}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 border border-background/20 flex items-center justify-center">
                  <div className="w-48 h-48 border border-background/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent flex items-center justify-center">
                      <Award className="w-12 h-12 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background text-foreground px-4 py-2 font-mono text-xs whitespace-nowrap">
                  PIONEER SOLUTION
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
