import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Ember & Ash",
  description: "A visual journey through Ember & Ash — the dining room, open-fire kitchen, signature dishes, cocktails, and private dining.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
