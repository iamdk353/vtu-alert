"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, ScaleIn, SlideUp } from "@/components/motion-wrapper";
import { Bell, Check, FileText, Mail } from "lucide-react";

export function ScreenshotSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Preview
            </p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              Clean, intuitive interface.
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Designed for speed and clarity. See your updates at a glance.
            </p>
          </SlideUp>
        </div>

        {/* Mock UI Preview */}
        <ScaleIn delay={0.3}>
          <Card className="max-w-4xl mx-auto overflow-hidden border-border">
            <CardContent className="p-0">
              {/* Mock Header */}
              <div className="bg-foreground text-background px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent flex items-center justify-center">
                    <Bell className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="font-mono text-sm font-medium">
                    VTU Alerts{" "}
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-background/10 text-background text-xs"
                >
                  3 new
                </Badge>
              </div>

              {/* Mock Notification List */}
              <div className="divide-y divide-border">
                {/* Notification 1 */}
                <div className="px-6 py-4 flex items-start gap-4 bg-accent/5">
                  <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-accent text-accent-foreground text-xs px-2 py-0">
                        Exam
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        2 min ago
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">
                      B.E/B.Tech 7th & 8th Sem Examination Timetable
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      December 2024 examinations schedule released...
                    </p>
                  </div>
                  <Check className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>

                {/* Notification 2 */}
                <div className="px-6 py-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs px-2 py-0">
                        Results
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        1 hour ago
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">
                      Revaluation Results - Nov 2024
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Results for revaluation applications...
                    </p>
                  </div>
                  <Check className="w-4 h-4 text-accent shrink-0" />
                </div>

                {/* Notification 3 */}
                <div className="px-6 py-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs px-2 py-0">
                        Academic
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        3 hours ago
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">
                      Academic Calendar 2024-25 Amendment
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Updated academic calendar with revised dates...
                    </p>
                  </div>
                  <Check className="w-4 h-4 text-accent shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>
        </ScaleIn>
      </div>
    </section>
  );
}
