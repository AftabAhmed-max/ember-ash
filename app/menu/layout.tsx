import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Ember & Ash",
  description: "Explore our seasonal à la carte menu and 7-course tasting menu. Open-fire starters, wood-roasted mains, pastry desserts, and a curated cocktail list.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
