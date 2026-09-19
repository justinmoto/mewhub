import { CATALOG, HERO_PRODUCT } from "@/lib/store-data";
import { IconClose, IconSearch, Stars } from "../icons";
import {
  AnnouncementBar,
  PriceBlock,
  StoreFooter,
  StoreHeader,
  TrustRow,
} from "../store-chrome";

function ProductCard({
  product,
}: {
  product: (typeof CATALOG)[number];
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="badge-sale absolute left-3 top-3">{product.discount}% OFF</span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Stars rating={product.rating} />
          <span>({product.reviewCount})</span>
        </div>
        <PriceBlock
          price={product.price}
          compareAt={product.compareAt}
          discount={product.discount}
          size="sm"
        />
        <button className="btn-primary mt-1 w-full !py-2.5 text-sm">Add to Cart</button>
      </div>
    </div>
  );
}

export function HomepageScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader cartCount={0} mobile={mobile} />

      <section
        className={`relative overflow-hidden ${
          mobile ? "min-h-[520px]" : "min-h-[560px]"
        }`}
      >
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PRODUCT.image}
            alt="Cat enjoying playtime"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
        </div>
        <div
          className={`relative mx-auto flex max-w-[1120px] items-center ${
            mobile ? "px-5 py-16" : "px-6 py-24"
          }`}
        >
          <div className={mobile ? "max-w-full" : "max-w-xl"}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              MEOHUB · Philippines
            </p>
            <h1
              className={`font-display font-semibold tracking-tight text-gray-900 ${
                mobile ? "text-[34px] leading-[1.15]" : "text-[52px] leading-[1.08]"
              }`}
            >
              Make Playtime More Fun for Your Cat
            </h1>
            <p
              className={`mt-4 text-gray-600 ${
                mobile ? "text-[15px] leading-relaxed" : "text-lg leading-relaxed"
              }`}
            >
              Discover the Orbit Auto Play Cat Toy — smart motion, quiet motor, and endless
              entertainment for curious cats.
            </p>
            <div className={`mt-7 flex ${mobile ? "flex-col" : "flex-row"} gap-3`}>
              <button className="btn-primary">SHOP NOW</button>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-8" : "px-6 py-10"}`}>
        <TrustRow />
      </section>

      <section className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-8" : "px-6 py-12"}`}>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-gray-900 md:text-3xl">
              Featured Product
            </h2>
            <p className="mt-1 text-sm text-gray-500">Our bestseller for playful cats</p>
          </div>
        </div>
        <div
          className={`overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-md)] ${
            mobile ? "" : "grid grid-cols-2"
          }`}
        >
          <div className={`relative bg-gray-50 ${mobile ? "aspect-[4/3]" : "min-h-[420px]"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PRODUCT.gallery[1]}
              alt={HERO_PRODUCT.name}
              className="h-full w-full object-cover"
            />
            <span className="badge-sale absolute left-4 top-4">
              {HERO_PRODUCT.discount}% OFF
            </span>
          </div>
          <div className={`flex flex-col justify-center ${mobile ? "p-5" : "p-10"}`}>
            <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
              {HERO_PRODUCT.name}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Stars rating={HERO_PRODUCT.rating} />
              <span>
                {HERO_PRODUCT.rating} · {HERO_PRODUCT.reviewCount} reviews
              </span>
            </div>
            <div className="mt-4">
              <PriceBlock
                price={HERO_PRODUCT.price}
                compareAt={HERO_PRODUCT.compareAt}
                discount={HERO_PRODUCT.discount}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {HERO_PRODUCT.description}
            </p>
            <button className="btn-primary mt-6 w-full sm:w-auto">Add to Cart — ₱799</button>
          </div>
        </div>
      </section>

      <section className={`bg-[var(--muted-bg)] ${mobile ? "px-4 py-10" : "px-6 py-16"}`}>
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-center font-display text-2xl font-semibold text-gray-900 md:text-3xl">
            Why cats love Orbit
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-500">
            Designed for daily enrichment — quiet, durable, and easy for pet parents.
          </p>
          <div className={`mt-8 grid gap-4 ${mobile ? "grid-cols-1" : "md:grid-cols-4"}`}>
            {[
              { title: "Smart Motion", desc: "Randomized patterns keep cats engaged longer." },
              { title: "Quiet Motor", desc: "Play without startling sensitive cats." },
              { title: "Soft Feathers", desc: "Gentle attachments safe for batting & pouncing." },
              { title: "Easy Setup", desc: "Unbox, switch on, and let the fun begin." },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  ●
                </div>
                <h3 className="font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-10" : "px-6 py-16"}`}>
        <h2 className="text-center font-display text-2xl font-semibold text-gray-900 md:text-3xl">
          How It Works
        </h2>
        <div className={`mt-8 grid gap-6 ${mobile ? "grid-cols-1" : "md:grid-cols-3"}`}>
          {[
            { step: "1", title: "Order", desc: "Checkout in minutes with COD, GCash, or card." },
            { step: "2", title: "We Ship", desc: "Free nationwide delivery in 3–7 business days." },
            { step: "3", title: "Your Cat Enjoys", desc: "Unbox and watch the playtime begin." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`bg-white ${mobile ? "px-4 py-10" : "px-6 py-16"}`}>
        <div className="mx-auto max-w-[1120px]">
          <h2 className="font-display text-2xl font-semibold text-gray-900 md:text-3xl">
            Loved by cat parents
          </h2>
          <div className={`mt-6 grid gap-4 ${mobile ? "grid-cols-1" : "md:grid-cols-3"}`}>
            {[
              {
                name: "Aira M.",
                loc: "Quezon City",
                text: "My cat goes crazy for this every afternoon. Quiet and sturdy — worth every peso.",
              },
              {
                name: "Kenji L.",
                loc: "Cebu City",
                text: "COD was easy, arrived in 4 days. Packaging was clean and product looks premium.",
              },
              {
                name: "Sam P.",
                loc: "Davao",
                text: "Finally something that keeps our kitten busy while we work from home.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-5"
              >
                <Stars />
                <p className="mt-3 text-sm leading-relaxed text-gray-700">“{r.text}”</p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  {r.name}{" "}
                  <span className="font-normal text-gray-400">· {r.loc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-[800px] ${mobile ? "px-4 py-10" : "px-6 py-16"}`}>
        <h2 className="text-center font-display text-2xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-3">
          {[
            ["How long is delivery?", "Standard delivery takes 3–7 business days nationwide."],
            ["Do you accept COD?", "Yes — Cash on Delivery is available for most areas."],
            ["Is shipping available nationwide?", "Yes, we ship across the Philippines for free."],
            ["How do I track my order?", "Use Track Order with your order number (e.g. #MEO12345)."],
            [
              "What if my item arrives damaged?",
              "Contact support within 7 days for a free replacement.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              open
              className="rounded-xl border border-[var(--border)] bg-white px-5 py-4"
            >
              <summary className="cursor-default list-none font-semibold text-gray-900">
                {q}
              </summary>
              <p className="mt-2 text-sm text-gray-500">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#2a2118] px-6 py-16 text-center text-[#fffcf7]">
        <h2 className="font-display text-3xl font-semibold">Ready to spoil your cat?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#d4c8b8]">
          Free shipping nationwide. COD available. Satisfaction guaranteed.
        </p>
        <button className="btn-primary mt-6 !bg-[var(--accent)]">SHOP THE ORBIT TOY</button>
      </section>

      <StoreFooter mobile={mobile} />
    </div>
  );
}

export function ShopScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader cartCount={0} mobile={mobile} />
      <div className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-6" : "px-6 py-10"}`}>
        <h1 className="font-display text-3xl font-semibold text-gray-900">Shop</h1>
        <p className="mt-1 text-sm text-gray-500">All products for happier cats</p>

        <div className={`mt-6 flex gap-3 ${mobile ? "flex-col" : "flex-row items-center"}`}>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconSearch className="h-4 w-4" />
            </span>
            <input
              className="input-field !pl-10"
              placeholder="Search cat products..."
              readOnly
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {["All", "Toys", "Feeders", "Beds"].map((c, i) => (
              <button
                key={c}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                  i === 0
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] bg-white text-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <select className="input-field max-w-[180px] !py-2.5 text-sm" defaultValue="featured">
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div
          className={`mt-8 grid gap-4 ${
            mobile ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"
          }`}
        >
          {CATALOG.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <StoreFooter mobile={mobile} />
    </div>
  );
}

export function SearchOpenScreen() {
  return (
    <div className="store-screen relative min-h-[700px]">
      <AnnouncementBar />
      <StoreHeader />
      <div className="overlay-dim" />
      <div className="absolute left-1/2 top-24 w-full max-w-2xl -translate-x-1/2 px-4">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-lg)]">
          <div className="flex items-center gap-3">
            <IconSearch />
            <input
              className="w-full border-none text-lg outline-none placeholder:text-gray-400"
              placeholder="Search products..."
              defaultValue=""
              autoFocus
              readOnly
            />
            <IconClose />
          </div>
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Popular searches
            </p>
            <div className="flex flex-wrap gap-2">
              {["cat toy", "automatic", "feather", "tunnel"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchResultsScreen() {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader />
      <div className="mx-auto max-w-[1120px] px-6 py-10">
        <p className="text-sm text-gray-500">
          Search results for <span className="font-semibold text-gray-900">“cat toy”</span>
        </p>
        <p className="mt-1 text-sm text-gray-400">3 products found</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {CATALOG.filter((p) =>
            /toy|wand|tunnel|orbit/i.test(p.name + p.subtitle)
          ).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <StoreFooter />
    </div>
  );
}

export function SearchEmptyScreen() {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader />
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
          ⌕
        </div>
        <h1 className="mt-5 font-display text-2xl font-semibold text-gray-900">
          No products found
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Try searching for another cat product.
        </p>
        <button className="btn-primary mt-6">VIEW ALL PRODUCTS</button>
      </div>
      <StoreFooter />
    </div>
  );
}

export function ProductDetailScreen({ mobile = false }: { mobile?: boolean }) {
  const p = HERO_PRODUCT;
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader cartCount={0} mobile={mobile} />
      <div className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-5" : "px-6 py-10"}`}>
        <div className={`gap-10 ${mobile ? "flex flex-col" : "grid grid-cols-2"}`}>
          <div>
            <div className="relative overflow-hidden rounded-2xl bg-gray-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.gallery[0]} alt={p.name} className="aspect-square w-full object-cover" />
              <span className="badge-sale absolute left-4 top-4">{p.discount}% OFF</span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {p.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-lg border-2 ${
                    i === 0 ? "border-[var(--accent)]" : "border-transparent"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className={mobile ? "pb-24" : ""}>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
              {p.subtitle}
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold text-gray-900">
              {p.name}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Stars rating={p.rating} />
              <span>
                {p.rating} ({p.reviewCount} reviews)
              </span>
            </div>
            <div className="mt-4">
              <PriceBlock
                price={p.price}
                compareAt={p.compareAt}
                discount={p.discount}
                size="lg"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{p.description}</p>

            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-gray-900">Color</p>
              <div className="flex gap-2">
                {["Mint Green", "Soft White", "Charcoal"].map((v, i) => (
                  <button
                    key={v}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      i === 0
                        ? "border-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent)]"
                        : "border-[var(--border)] text-gray-600"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <p className="text-sm font-semibold text-gray-900">Qty</p>
              <div className="flex items-center rounded-lg border border-[var(--border)]">
                <button className="px-3 py-2 text-lg text-gray-500">−</button>
                <span className="w-10 text-center text-sm font-semibold">1</span>
                <button className="px-3 py-2 text-lg text-gray-500">+</button>
              </div>
            </div>

            <div className={`mt-6 flex gap-3 ${mobile ? "flex-col" : ""}`}>
              <button className="btn-primary flex-1">ADD TO CART</button>
              <button className="btn-secondary flex-1">BUY IT NOW</button>
            </div>

            <div className="mt-6 space-y-2 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)] p-4 text-sm text-gray-600">
              <p>📦 Free shipping nationwide · 3–7 business days</p>
              <p>💵 Cash on Delivery available</p>
              <p>↩️ Easy 7-day replacement for damaged items</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {[
              [
                "Description",
                "Orbit Auto Play uses gentle motorized motion and soft feather attachments to trigger your cat’s natural hunting instincts — ideal for indoor cats that need daily enrichment.",
              ],
              [
                "Features",
                "Quiet motor · Randomized patterns · Soft feather tips · USB rechargeable · Auto shut-off timer",
              ],
              [
                "Specifications",
                "Size: 18 × 18 × 6 cm · Weight: 320g · Material: ABS + soft feathers · Charge: USB-C",
              ],
              ["What's Included", "1× Orbit base · 2× feather attachments · 1× USB-C cable · Guide"],
            ].map(([t, b]) => (
              <div key={t}>
                <h3 className="font-semibold text-gray-900">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{b}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">Shipping Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Free nationwide shipping via J&T / LBC partners. Orders placed before 2 PM ship
                same day (weekdays).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Returns</h3>
              <p className="mt-1 text-sm text-gray-600">
                Damaged or defective items can be replaced within 7 days of delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">FAQ</h3>
              <p className="mt-1 text-sm text-gray-600">
                Suitable for kittens and adult cats. Supervise first play sessions. Replace
                feathers as needed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold">Customer Reviews</h2>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-4xl font-bold">4.8</span>
                <div>
                  <Stars />
                  <p className="text-sm text-gray-500">Based on 214 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {[
              [5, 78],
              [4, 16],
              [3, 4],
              [2, 1],
              [1, 1],
            ].map(([stars, pct]) => (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-8 text-gray-500">{stars}★</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-gray-400">{pct}%</span>
              </div>
            ))}
          </div>
          <div className={`mt-8 grid gap-4 ${mobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {[
              {
                name: "Mia S.",
                text: "My Maine Coon is obsessed. Arrived fast to Pasig.",
                photo: true,
              },
              {
                name: "Carlo V.",
                text: "Looks more premium than the price. COD was smooth.",
                photo: false,
              },
            ].map((r) => (
              <div key={r.name} className="rounded-xl border border-[var(--border)] p-4">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]">
                    Verified purchase
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-700">{r.text}</p>
                <p className="mt-3 text-sm font-semibold">{r.name}</p>
                {r.photo && (
                  <div className="mt-3 h-20 w-20 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={HERO_PRODUCT.imageAlt}
                      alt="Customer photo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {mobile && (
        <div className="sticky bottom-0 z-30 border-t border-[var(--border)] bg-white p-3">
          <button className="btn-primary w-full">ADD TO CART — ₱799</button>
        </div>
      )}
      <StoreFooter mobile={mobile} />
    </div>
  );
}

export function CartDrawerScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="store-screen relative min-h-[720px]">
      <AnnouncementBar />
      <StoreHeader cartCount={1} mobile={mobile} />
      <div className="px-6 py-20 opacity-40">
        <div className="h-40 rounded-2xl bg-gray-100" />
      </div>
      <div className="overlay-dim" />
      <div
        className={`cart-drawer ${mobile ? "!w-full" : ""}`}
        style={mobile ? { width: "100%" } : undefined}
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <h2 className="text-lg font-semibold">Your Cart (1)</h2>
          <IconClose />
        </div>
        <div className="flex-1 overflow-auto p-5">
          <div className="flex gap-3">
            <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_PRODUCT.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between gap-2">
                <p className="text-sm font-semibold">{HERO_PRODUCT.name}</p>
                <button className="text-xs text-gray-400">Remove</button>
              </div>
              <p className="text-xs text-gray-500">Mint Green</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center rounded border border-[var(--border)] text-sm">
                  <span className="px-2 py-1">−</span>
                  <span className="px-2">1</span>
                  <span className="px-2 py-1">+</span>
                </div>
                <span className="text-sm font-semibold">₱799</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border)] p-5">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold">₱799</span>
          </div>
          <p className="mb-4 text-xs text-gray-400">Shipping calculated at checkout · FREE nationwide</p>
          <button className="btn-primary w-full">CHECKOUT</button>
          <button className="btn-secondary mt-2 w-full">VIEW CART</button>
        </div>
      </div>
    </div>
  );
}

export function CartPageScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader cartCount={1} mobile={mobile} />
      <div className={`mx-auto max-w-[1120px] ${mobile ? "px-4 py-6" : "px-6 py-10"}`}>
        <h1 className="font-display text-3xl font-semibold">Your Cart</h1>
        <div className={`mt-8 gap-8 ${mobile ? "flex flex-col" : "grid grid-cols-[1fr_360px]"}`}>
          <div className="rounded-2xl border border-[var(--border)] p-4 md:p-5">
            <div className={`flex gap-4 ${mobile ? "flex-col" : ""}`}>
              <div className="h-28 w-28 overflow-hidden rounded-xl bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HERO_PRODUCT.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-semibold">{HERO_PRODUCT.name}</p>
                      <p className="text-sm text-gray-500">Variant: Mint Green</p>
                    </div>
                    <button className="text-sm text-gray-400">Remove</button>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-lg border border-[var(--border)]">
                    <button className="px-3 py-2">−</button>
                    <span className="w-8 text-center text-sm font-semibold">1</span>
                    <button className="px-3 py-2">+</button>
                  </div>
                  <p className="font-bold">₱799</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-5">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₱799</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-[var(--accent)]">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span>-₱500</span>
              </div>
              <div className="flex justify-between border-t border-[var(--border)] pt-3 text-base font-bold">
                <span>Total</span>
                <span>₱799</span>
              </div>
            </div>
            <button className="btn-primary mt-5 w-full">PROCEED TO CHECKOUT</button>
            <button className="btn-ghost mt-2 w-full text-sm">Continue Shopping</button>
          </div>
        </div>
      </div>
      <StoreFooter mobile={mobile} />
    </div>
  );
}

export function EmptyCartScreen() {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader />
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-24 text-center">
        <div className="text-5xl">🛒</div>
        <h1 className="mt-5 font-display text-2xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-sm text-gray-500">
          Looks like you haven&apos;t added anything yet.
        </p>
        <button className="btn-primary mt-6">START SHOPPING</button>
      </div>
      <StoreFooter />
    </div>
  );
}
