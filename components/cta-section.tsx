"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion-wrapper";
import { Bell, CheckCircle } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [notificationStatus, setNotificationStatus] = useState<
    "idle" | "granted" | "denied"
  >("idle");

  const enableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setNotificationStatus(permission === "granted" ? "granted" : "denied");
      if (permission === "granted") {
        new Notification("VTU Alerts Enabled!", {
          body: "You'll now receive instant notifications for all VTU circulars.",
          icon: "/favicon.ico",
        });
      }
    }
  };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="w-16 h-16 bg-accent flex items-center justify-center mx-auto mb-8">
            <Bell className="w-8 h-8 text-accent-foreground" />
          </div>
        </FadeIn>
        <SlideUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
            Join thousands of VTU students who never miss important updates.
          </h2>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Enable browser notifications with one click. No account, no email,
            no signup — just instant VTU alerts.
          </p>
        </SlideUp>
        <SlideUp delay={0.3}>
          {notificationStatus === "granted" ? (
            <div className="flex items-center justify-center gap-2 text-accent">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                Notifications enabled! You're all set.
              </span>
            </div>
          ) : (
            <Button
              onClick={enableNotifications}
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg"
            >
              <Bell className="w-5 h-5 mr-2" />
              Enable Notifications
            </Button>
          )}
        </SlideUp>
      </div>
    </section>
  );
}
