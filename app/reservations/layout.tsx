import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations — Ember & Ash",
  description: "Reserve your table at Ember & Ash, Mumbai's finest open-fire dining experience. Available Tuesday through Sunday from 5:30 PM.",
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
