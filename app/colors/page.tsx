import { ColorPaletteScreen } from "@/components/screens/color-palette";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOHUB Color Palette",
  description: "Brand color tokens for the MEOHUB storefront mockup.",
};

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-[var(--muted-bg)] py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
        <ColorPaletteScreen />
      </div>
    </main>
  );
}
