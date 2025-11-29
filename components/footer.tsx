"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TextShimmer } from "./motion-primitives/text-shimmer";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="VTU Alerts Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="font-mono font-semibold">VTU Alerts</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/iamdk353"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TextShimmer className="text-sm font-semibold">
                Built By
              </TextShimmer>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VTU Alerts. Not affiliated with VTU.
          </p>
        </div>
      </div>
    </footer>
  );
}
