const TYPE_SCALE = [
  {
    name: "Display / Hero",
    sample: "Make Playtime More Fun",
    className: "font-display text-[52px] font-semibold leading-[1.08] tracking-tight",
    size: "52px",
    weight: "600",
    family: "Fraunces",
    use: "Homepage hero headline",
  },
  {
    name: "Page Title",
    sample: "Orbit Auto Play Cat Toy",
    className: "font-display text-3xl font-semibold tracking-tight",
    size: "30px",
    weight: "600",
    family: "Fraunces",
    use: "Product titles, section headers",
  },
  {
    name: "Section Heading",
    sample: "Why cats love Orbit",
    className: "font-display text-2xl font-semibold",
    size: "24px",
    weight: "600",
    family: "Fraunces",
    use: "Benefits, FAQ, reviews headers",
  },
  {
    name: "Card Title",
    sample: "Smart Motion",
    className: "font-sans text-base font-semibold",
    size: "16px",
    weight: "600",
    family: "Outfit",
    use: "Cards, product names in grid",
  },
  {
    name: "Body",
    sample:
      "Orbit keeps your cat entertained with smart motion patterns, soft feather attachments, and quiet motor play.",
    className: "font-sans text-base leading-relaxed",
    size: "16px",
    weight: "400",
    family: "Outfit",
    use: "Descriptions, paragraphs",
  },
  {
    name: "Body Small",
    sample: "Free shipping nationwide · 3–7 business days",
    className: "font-sans text-sm leading-relaxed",
    size: "14px",
    weight: "400",
    family: "Outfit",
    use: "Helper text, meta, reviews",
  },
  {
    name: "Label / Eyebrow",
    sample: "MEOHUB · PHILIPPINES",
    className:
      "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]",
    size: "12px",
    weight: "600",
    family: "Outfit",
    use: "Eyebrows, category labels",
  },
  {
    name: "Button",
    sample: "ADD TO CART",
    className: "font-sans text-[15px] font-semibold tracking-wide",
    size: "15px",
    weight: "600",
    family: "Outfit",
    use: "Primary & secondary CTAs",
  },
  {
    name: "Price",
    sample: "₱799",
    className: "font-sans text-[28px] font-bold",
    size: "28px",
    weight: "700",
    family: "Outfit",
    use: "Product price display",
  },
  {
    name: "Caption",
    sample: "Based on 214 reviews",
    className: "font-sans text-xs text-[var(--muted)]",
    size: "12px",
    weight: "400",
    family: "Outfit",
    use: "Captions, footnotes",
  },
];

export function TypographyScreen() {
  return (
    <div className="store-screen bg-[var(--background)] p-8 md:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        Brand system
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
        MEOHUB Typography
      </h1>
      <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
        Two-font system: Fraunces for display headlines, Outfit for UI and body.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Display
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
            Fraunces
          </p>
          <p className="mt-2 font-display text-lg text-[var(--muted)]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            CSS var: <span className="font-mono text-[var(--accent)]">--font-fraunces</span>
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">Class: <span className="font-mono">.font-display</span></p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Sans / UI
          </p>
          <p className="mt-3 font-sans text-4xl font-semibold text-[var(--foreground)]">
            Outfit
          </p>
          <p className="mt-2 font-sans text-lg text-[var(--muted)]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            CSS var: <span className="font-mono text-[var(--accent)]">--font-outfit</span>
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">Class: <span className="font-mono">.font-sans</span> (default)</p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {TYPE_SCALE.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
              <span className="font-semibold uppercase tracking-wide text-[var(--foreground)]">
                {item.name}
              </span>
              <span className="font-mono">{item.family}</span>
              <span className="font-mono">{item.size}</span>
              <span className="font-mono">w{item.weight}</span>
              <span>{item.use}</span>
            </div>
            <p className={`${item.className} text-[var(--foreground)]`}>{item.sample}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-6">
        <h3 className="font-semibold text-[var(--foreground)]">Rules</h3>
        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
          <li>• Use <strong className="text-[var(--foreground)]">Fraunces</strong> for hero + major section titles only</li>
          <li>• Use <strong className="text-[var(--foreground)]">Outfit</strong> for navigation, body, buttons, prices, forms</li>
          <li>• Keep body copy dark brown (`#2A2118`) for readability on warm white</li>
          <li>• Eyebrows: uppercase + wide tracking + accent color</li>
        </ul>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Direct page: <span className="font-semibold text-[var(--foreground)]">/typography</span>
        </p>
      </div>
    </div>
  );
}
