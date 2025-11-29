"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion-wrapper";
import { Bell } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function CTASection() {
  const [notificationStatus, setNotificationStatus] = useState<
    "idle" | "granted" | "denied"
  >("idle");

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="size-30 flex items-center justify-center mx-auto mb-8">
            <Image
              src="/logo.svg"
              alt="VTU Alerts Logo"
              width={70}
              height={70}
            />
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
            no signup just instant VTU alerts.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
