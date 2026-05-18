import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ember & Ash",
  description: "The story behind Ember & Ash — born from a fire in Rajasthan, built with purpose in Mumbai. Meet Chef Aryan Kapoor and the team.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
