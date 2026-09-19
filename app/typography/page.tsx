import { TypographyScreen } from "@/components/screens/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOHUB Typography",
  description: "Brand typography system for the MEOHUB storefront mockup.",
};

export default function TypographyPage() {
  return (
    <main className="min-h-screen bg-[var(--muted-bg)] py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
        <TypographyScreen />
      </div>
    </main>
  );
}
