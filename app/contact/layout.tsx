import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ember & Ash",
  description: "Get in touch with Ember & Ash. Enquire about private events, press, partnerships, or careers at our Bandra West, Mumbai restaurant.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
