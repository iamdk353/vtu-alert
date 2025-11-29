"use client";

import { FadeIn, SlideUp } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Enable notifications",
    description:
      "Simply turn on browser notifications when you visit our website. No sign-up required.",
  },
  {
    step: "02",
    title: "Receive instant alerts",
    description:
      "Get notified immediately whenever VTU publishes a new circular or update.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              How It Works
            </p>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
              Get started instantly.
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Just enable notifications and stay updated with VTU circulars.
            </p>
          </SlideUp>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="flex">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-12 h-12 bg-foreground text-background flex items-center justify-center font-mono font-bold text-sm mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mx-8">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
