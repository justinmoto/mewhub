const COLORS = [
  {
    name: "Background",
    hex: "#FFFCF7",
    value: "#fffcf7",
    varName: "--background",
    use: "Main page background",
  },
  {
    name: "Muted Background",
    hex: "#F6F1EA",
    value: "#f6f1ea",
    varName: "--muted-bg",
    use: "Sections, footer, soft panels",
  },
  {
    name: "Foreground",
    hex: "#2A2118",
    value: "#2a2118",
    varName: "--foreground",
    use: "Headings & body text",
  },
  {
    name: "Muted Text",
    hex: "#7A6F64",
    value: "#7a6f64",
    varName: "--muted",
    use: "Secondary / helper text",
  },
  {
    name: "Border",
    hex: "#E8E0D5",
    value: "#e8e0d5",
    varName: "--border",
    use: "Card & section dividers",
  },
  {
    name: "Border Strong",
    hex: "#D4C8B8",
    value: "#d4c8b8",
    varName: "--border-strong",
    use: "Inputs, secondary buttons",
  },
  {
    name: "Accent",
    hex: "#8B5E3C",
    value: "#8b5e3c",
    varName: "--accent",
    use: "Primary CTAs, links, selected",
  },
  {
    name: "Accent Hover",
    hex: "#6F4A2F",
    value: "#6f4a2f",
    varName: "--accent-hover",
    use: "Button hover / pressed",
  },
  {
    name: "Accent Soft",
    hex: "#F3EBE3",
    value: "#f3ebe3",
    varName: "--accent-soft",
    use: "Soft highlights, selected bg",
  },
  {
    name: "Sale",
    hex: "#C45C3A",
    value: "#c45c3a",
    varName: "--sale",
    use: "Discount badges",
  },
  {
    name: "Success",
    hex: "#3F7A4C",
    value: "#3f7a4c",
    varName: "--success",
    use: "Confirmed / delivered",
  },
  {
    name: "Danger",
    hex: "#B42318",
    value: "#b42318",
    varName: "--danger",
    use: "Errors / cancelled",
  },
];

export function ColorPaletteScreen() {
  return (
    <div className="store-screen bg-[var(--background)] p-8 md:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        Brand system
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
        MEOHUB Color Palette
      </h1>
      <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
        Warm white + beige + cocoa brown. These are the live tokens used across the
        storefront mockup.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {["#fffcf7", "#f6f1ea", "#8b5e3c", "#6f4a2f", "#2a2118", "#c45c3a"].map((c) => (
          <div
            key={c}
            className="h-14 w-14 rounded-2xl border border-[var(--border)] shadow-[var(--shadow-sm)]"
            style={{ background: c }}
            title={c}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COLORS.map((color) => (
          <div
            key={color.varName}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]"
          >
            <div
              className="h-28 w-full border-b border-[var(--border)]"
              style={{ background: color.value }}
            />
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold text-[var(--foreground)]">{color.name}</h2>
                <span className="rounded-md bg-[var(--muted-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)]">
                  {color.hex}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-[var(--accent)]">{color.varName}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{color.use}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-6">
        <h3 className="font-semibold text-[var(--foreground)]">In use</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="btn-primary">Primary CTA</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-ghost">Ghost link</button>
          <span className="badge-sale">38% OFF</span>
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Direct page: <span className="font-semibold text-[var(--foreground)]">/colors</span>
        </p>
      </div>
    </div>
  );
}
