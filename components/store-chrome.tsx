import { IconCart, IconMenu, IconSearch, Logo } from "./icons";

export function AnnouncementBar() {
  return (
    <div className="bg-[#2a2118] px-4 py-2 text-center text-[12px] font-medium tracking-wide text-[#f6f1ea] sm:text-[13px]">
      FREE SHIPPING NATIONWIDE • COD AVAILABLE
    </div>
  );
}

export function StoreHeader({
  cartCount = 0,
  mobile = false,
}: {
  cartCount?: number;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <IconMenu />
          <Logo size="sm" />
          <div className="flex items-center gap-3">
            <IconSearch />
            <div className="relative">
              <IconCart />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-[14px] font-medium text-gray-700 md:flex">
          <span className="hover:text-[var(--accent)]">Shop</span>
          <span className="hover:text-[var(--accent)]">Categories</span>
          <span className="hover:text-[var(--accent)]">About</span>
          <span className="hover:text-[var(--accent)]">Track Order</span>
        </nav>
        <div className="flex items-center gap-4 text-gray-700">
          <IconSearch />
          <div className="relative">
            <IconCart />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>
          <div className="md:hidden">
            <IconMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export function StoreFooter({ mobile = false }: { mobile?: boolean }) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <div
        className={`mx-auto grid max-w-[1120px] gap-8 px-6 py-12 ${
          mobile ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"
        }`}
      >
        <div className={mobile ? "col-span-2" : ""}>
          <Logo size="sm" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
            Cat products designed for happier playtime — shipped nationwide across the
            Philippines.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>All Products</li>
            <li>Toys</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Help</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm font-medium text-gray-700">
            <span>Facebook</span>
            <span>TikTok</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-6 py-4 text-center text-xs text-gray-400">
        © 2026 MEOHUB. Made for cat parents in the Philippines.
      </div>
    </footer>
  );
}

export function PriceBlock({
  price,
  compareAt,
  discount,
  size = "md",
}: {
  price: number;
  compareAt: number;
  discount: number;
  size?: "sm" | "md" | "lg";
}) {
  const current =
    size === "lg" ? "text-[28px]" : size === "sm" ? "text-[16px]" : "text-[22px]";
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={`font-bold text-gray-900 ${current}`}>
        ₱{price.toLocaleString("en-PH")}
      </span>
      <span className="price-compare">₱{compareAt.toLocaleString("en-PH")}</span>
      <span className="badge-sale">{discount}% OFF</span>
    </div>
  );
}

export function TrustRow() {
  const items = [
    { icon: "🇵🇭", label: "Ships Nationwide" },
    { icon: "💳", label: "Secure Checkout" },
    { icon: "📦", label: "Fast Delivery" },
    { icon: "🐱", label: "Cat Approved" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-sm font-medium text-gray-800">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function CheckoutProgress({
  current,
}: {
  current: "contact" | "shipping" | "method" | "payment" | "review";
}) {
  const steps = [
    { id: "contact", label: "Contact" },
    { id: "shipping", label: "Shipping" },
    { id: "method", label: "Method" },
    { id: "payment", label: "Payment" },
    { id: "review", label: "Review" },
  ] as const;
  const idx = steps.findIndex((s) => s.id === current);

  return (
    <div className="checkout-progress">
      {steps.map((step, i) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={`checkout-step ${
              i < idx ? "done" : i === idx ? "current" : ""
            }`}
          >
            <span className="checkout-dot">
              {i < idx ? "✓" : i + 1}
            </span>
            <span className="hidden sm:inline">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-gray-300">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function OrderSummaryCard({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
        Order Summary
      </h3>
      <div className="mb-4 flex gap-3">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80"
            alt="Orbit Auto Play"
            className="h-full w-full object-cover"
          />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-[10px] font-bold text-white">
            1
          </span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">Orbit Auto Play Cat Toy</p>
          <p className="text-xs text-gray-500">Mint Green</p>
        </div>
        <p className="text-sm font-semibold">₱799</p>
      </div>
      {!compact && (
        <div className="mb-3 flex gap-2">
          <input
            className="input-field !py-2 text-sm"
            placeholder="Discount code"
            defaultValue=""
            readOnly
          />
          <button className="btn-secondary !px-3 !py-2 text-sm">Apply</button>
        </div>
      )}
      <div className="space-y-2 border-t border-[var(--border)] pt-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₱799</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-[var(--accent)]">FREE</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discount</span>
          <span>-₱500</span>
        </div>
        <div className="flex justify-between border-t border-[var(--border)] pt-3 text-base font-bold text-gray-900">
          <span>Total</span>
          <span>₱799</span>
        </div>
      </div>
    </div>
  );
}
