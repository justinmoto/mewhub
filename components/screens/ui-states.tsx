export function ButtonStatesScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Button States</h1>
      <p className="mt-1 text-sm text-gray-500">Primary CTA variants used across MEOHUB</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Normal", el: <button className="btn-primary w-full">ADD TO CART</button> },
          {
            label: "Hover",
            el: (
              <button className="btn-primary w-full !bg-[var(--accent-hover)]">ADD TO CART</button>
            ),
          },
          {
            label: "Pressed",
            el: (
              <button className="btn-primary w-full !bg-[var(--accent-hover)] scale-[0.98]">
                ADD TO CART
              </button>
            ),
          },
          {
            label: "Disabled",
            el: (
              <button className="btn-primary w-full cursor-not-allowed opacity-40">
                ADD TO CART
              </button>
            ),
          },
          {
            label: "Loading",
            el: (
              <button className="btn-primary w-full">
                <span className="spinner" /> Processing…
              </button>
            ),
          },
          {
            label: "Secondary",
            el: <button className="btn-secondary w-full">LEARN MORE</button>,
          },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {item.label}
            </p>
            {item.el}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FormStatesScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Form Field States</h1>
      <div className="mx-auto mt-8 max-w-md space-y-5 rounded-2xl border border-[var(--border)] bg-white p-6">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Empty</label>
          <input className="input-field" placeholder="Email address" readOnly />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Focused</label>
          <input className="input-field input-focused" defaultValue="jus" readOnly />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Filled</label>
          <input className="input-field" defaultValue="justin.reyes@email.com" readOnly />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Error</label>
          <input className="input-field input-error" defaultValue="justin@" readOnly />
          <p className="mt-1.5 text-sm text-[var(--danger)]">
            Please enter a valid email address.
          </p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Valid</label>
          <input className="input-field input-valid" defaultValue="justin.reyes@email.com" readOnly />
        </div>
      </div>
    </div>
  );
}

export function ErrorStatesScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Error States</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Invalid email",
            msg: "Please enter a valid email address.",
            field: "justin@",
          },
          {
            title: "Invalid phone number",
            msg: "Please enter a valid Philippine mobile number.",
            field: "12345",
          },
          {
            title: "Missing address",
            msg: "Please enter your complete shipping address.",
            field: "",
          },
          {
            title: "Payment failed",
            msg: "Payment could not be completed. Please try another payment method.",
            field: null,
          },
          {
            title: "Product unavailable",
            msg: "This product is currently unavailable.",
            field: null,
          },
        ].map((e) => (
          <div key={e.title} className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <h3 className="font-semibold text-gray-900">{e.title}</h3>
            {e.field !== null && (
              <input
                className="input-field input-error mt-3"
                defaultValue={e.field}
                placeholder="Required"
                readOnly
              />
            )}
            <div className="mt-3 rounded-lg bg-[var(--danger-soft)] px-3 py-2 text-sm text-[var(--danger)]">
              {e.msg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoadingStatesScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Loading States</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-400">Product loading</p>
          <div className="skeleton aspect-square w-full" />
          <div className="skeleton mt-3 h-4 w-3/4" />
          <div className="skeleton mt-2 h-4 w-1/2" />
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-400">Cart loading</p>
          <div className="flex gap-3">
            <div className="skeleton h-16 w-16" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-2/3" />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-400">Checkout loading</p>
          <div className="space-y-3">
            <div className="skeleton h-11 w-full" />
            <div className="skeleton h-11 w-full" />
            <div className="skeleton h-11 w-full" />
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-8 text-center">
          <p className="mb-6 text-xs font-semibold uppercase text-gray-400">Payment processing</p>
          <div className="mx-auto spinner spinner-dark h-8 w-8 border-[3px]" />
          <p className="mt-4 text-sm font-medium text-gray-700">Processing payment…</p>
          <p className="mt-1 text-xs text-gray-400">Please don’t close this window</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 md:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-400">Order tracking</p>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="skeleton h-5 w-5 rounded-full" />
                <div className="skeleton h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductStateVariantsScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Product States</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Normal", badge: null, muted: false },
          { title: "Sale", badge: "38% OFF", muted: false },
          { title: "Out of stock", badge: "Sold out", muted: true },
          { title: "Selected variant", badge: null, muted: false, selected: true },
        ].map((c) => (
          <div
            key={c.title}
            className={`overflow-hidden rounded-2xl border bg-white ${
              c.selected ? "border-[var(--accent)] shadow-[0_0_0_1px_var(--accent)]" : "border-[var(--border)]"
            } ${c.muted ? "opacity-60" : ""}`}
          >
            <div className="relative aspect-[4/5] bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
              {c.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-bold text-white ${
                    c.badge === "Sold out" ? "bg-gray-700" : "bg-[var(--sale)]"
                  }`}
                >
                  {c.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-gray-400">{c.title}</p>
              <p className="mt-1 text-sm font-semibold">Orbit Auto Play Cat Toy</p>
              <p className="mt-1 text-sm font-bold">₱799</p>
              <button
                className={`mt-3 w-full rounded-lg py-2 text-sm font-semibold ${
                  c.muted
                    ? "cursor-not-allowed bg-gray-200 text-gray-500"
                    : "bg-[var(--accent)] text-white"
                }`}
              >
                {c.muted ? "Unavailable" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CartStateVariantsScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Cart States</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center">
          <p className="text-xs font-semibold uppercase text-gray-400">Empty</p>
          <div className="mt-4 text-4xl">🛒</div>
          <p className="mt-3 font-semibold">Your cart is empty</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <p className="text-xs font-semibold uppercase text-gray-400">Has product</p>
          <div className="mt-4 flex gap-3">
            <div className="h-14 w-14 rounded-lg bg-gray-100" />
            <div className="flex-1">
              <p className="text-sm font-semibold">Orbit Auto Play</p>
              <p className="text-xs text-gray-500">Qty 1 · ₱799</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <p className="text-xs font-semibold uppercase text-gray-400">Updating</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="spinner spinner-dark" />
            <span className="text-sm text-gray-600">Updating cart…</span>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <p className="text-xs font-semibold uppercase text-gray-400">Error</p>
          <div className="mt-4 rounded-lg bg-[var(--danger-soft)] px-3 py-2 text-sm text-[var(--danger)]">
            Couldn’t update cart. Please try again.
          </div>
        </div>
      </div>
    </div>
  );
}

export function CheckoutStateVariantsScreen() {
  return (
    <div className="store-screen bg-[var(--muted-bg)] p-8">
      <h1 className="font-display text-2xl font-semibold">Checkout States</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="text-xs font-semibold uppercase text-gray-400">Normal</p>
          <input className="input-field mt-3" defaultValue="justin.reyes@email.com" readOnly />
          <button className="btn-primary mt-3 w-full">Continue</button>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="text-xs font-semibold uppercase text-gray-400">Validation error</p>
          <input className="input-field input-error mt-3" defaultValue="" placeholder="Email" readOnly />
          <p className="mt-1 text-sm text-[var(--danger)]">Email is required</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <p className="text-xs font-semibold uppercase text-gray-400">Payment error</p>
          <div className="mt-3 rounded-lg bg-[var(--danger-soft)] p-3 text-sm text-[var(--danger)]">
            Payment could not be completed. Please try another payment method.
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center">
          <p className="text-xs font-semibold uppercase text-gray-400">Successful order</p>
          <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--success-soft)] text-[var(--success)]">
            ✓
          </div>
          <p className="mt-3 font-semibold">Order Confirmed!</p>
        </div>
      </div>
    </div>
  );
}
