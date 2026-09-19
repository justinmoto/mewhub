import { CUSTOMER, HERO_PRODUCT, ORDER } from "@/lib/store-data";
import { IconCheck } from "../icons";
import { AnnouncementBar, StoreFooter, StoreHeader } from "../store-chrome";

function StatusHero({
  icon,
  title,
  subtitle,
  tone = "success",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tone?: "success" | "info" | "warning" | "danger" | "neutral";
}) {
  const tones = {
    success: "bg-[var(--success-soft)] text-[var(--success)]",
    info: "bg-[var(--accent-soft)] text-[var(--accent)]",
    warning: "bg-amber-50 text-amber-600",
    danger: "bg-[var(--danger-soft)] text-[var(--danger)]",
    neutral: "bg-gray-100 text-gray-500",
  };
  return (
    <div className="text-center">
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl ${tones[tone]}`}
      >
        {icon}
      </div>
      <h1 className="mt-4 font-display text-2xl font-semibold text-gray-900 md:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}

export function OrderConfirmationScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader cartCount={0} mobile={mobile} />
      <div className={`mx-auto max-w-2xl ${mobile ? "px-4 py-8" : "px-6 py-14"}`}>
        <StatusHero
          icon={<IconCheck className="h-7 w-7" />}
          title="Order Confirmed!"
          subtitle={`Thank you for your order, ${CUSTOMER.firstName}!`}
        />
        <p className="mt-3 text-center text-sm text-gray-500">
          We&apos;ve sent your order confirmation to your email.
        </p>
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Order number</p>
              <p className="text-lg font-bold text-gray-900">{ORDER.number}</p>
            </div>
            <span className="rounded-full bg-[var(--success-soft)] px-3 py-1 text-xs font-semibold text-[var(--success)]">
              Confirmed
            </span>
          </div>
          <div className="mt-4 flex gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO_PRODUCT.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{HERO_PRODUCT.name}</p>
              <p className="text-xs text-gray-500">Qty 1 · Mint Green</p>
            </div>
            <p className="text-sm font-semibold">₱799</p>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">Total paid</p>
              <p className="font-semibold text-gray-900">₱799</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">Payment</p>
              <p className="font-semibold text-gray-900">Cash on Delivery</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">Ship to</p>
              <p>
                {CUSTOMER.firstName} {CUSTOMER.lastName}
                <br />
                {CUSTOMER.address}, {CUSTOMER.city}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Estimated delivery
              </p>
              <p className="font-semibold text-gray-900">{ORDER.estimated}</p>
            </div>
          </div>
        </div>
        <div className={`mt-6 flex gap-3 ${mobile ? "flex-col" : ""}`}>
          <button className="btn-primary flex-1">TRACK MY ORDER</button>
          <button className="btn-secondary flex-1">CONTINUE SHOPPING</button>
        </div>
      </div>
      <StoreFooter mobile={mobile} />
    </div>
  );
}

function TrackingTimeline({
  activeIndex,
}: {
  activeIndex: number;
}) {
  const steps = [
    "Order Placed",
    "Order Confirmed",
    "Preparing Order",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];
  return (
    <div className="mt-6">
      {steps.map((label, i) => {
        const done = i < activeIndex;
        const current = i === activeIndex;
        return (
          <div
            key={label}
            className={`timeline-item ${done ? "done" : ""} ${current ? "current" : ""}`}
          >
            <div className="timeline-dot">{done ? "✓" : ""}</div>
            <div>
              <p
                className={`text-sm font-semibold ${
                  done || current ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {label}
              </p>
              {(done || current) && (
                <p className="text-xs text-gray-400">
                  {current ? "Updated just now" : "Completed"}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TrackingSearchScreen() {
  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader />
      <div className="mx-auto max-w-lg px-6 py-16">
        <h1 className="text-center font-display text-3xl font-semibold">Track Your Order</h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          Enter your order number to see the latest status.
        </p>
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <label className="mb-1.5 block text-sm font-medium">Order number</label>
          <input className="input-field" placeholder="e.g. #MEO12345" defaultValue="" readOnly />
          <button className="btn-primary mt-4 w-full">TRACK ORDER</button>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
}

export function TrackingResultScreen({
  mobile = false,
  status = "transit",
}: {
  mobile?: boolean;
  status?: "processing" | "shipped" | "transit" | "delivered" | "cancelled" | "notfound";
}) {
  if (status === "notfound") {
    return (
      <div className="store-screen">
        <AnnouncementBar />
        <StoreHeader mobile={mobile} />
        <div className="mx-auto max-w-lg px-6 py-20 text-center">
          <StatusHero
            icon="?"
            title="We couldn't find that order"
            subtitle="Double-check your order number and try again."
            tone="neutral"
          />
          <input
            className="input-field input-error mt-8"
            defaultValue="#MEO99999"
            readOnly
          />
          <p className="mt-2 text-left text-sm text-[var(--danger)]">
            No order found with this number.
          </p>
          <button className="btn-primary mt-5 w-full">TRY AGAIN</button>
        </div>
        <StoreFooter mobile={mobile} />
      </div>
    );
  }

  const meta: Record<
    string,
    { label: string; title: string; subtitle: string; tone: "success" | "info" | "warning" | "danger"; step: number }
  > = {
    processing: {
      label: "Processing",
      title: "We're preparing your order",
      subtitle: "Your items are being packed with care.",
      tone: "info",
      step: 2,
    },
    shipped: {
      label: "Shipped",
      title: "Your order is on the way",
      subtitle: "Handed over to our courier partner.",
      tone: "info",
      step: 3,
    },
    transit: {
      label: "In Transit",
      title: "Your order is arriving today",
      subtitle: "Out for delivery in your area.",
      tone: "info",
      step: 4,
    },
    delivered: {
      label: "Delivered",
      title: "Your order has been delivered",
      subtitle: "Hope your cat loves it!",
      tone: "success",
      step: 5,
    },
    cancelled: {
      label: "Cancelled",
      title: "This order has been cancelled",
      subtitle: "No payment was collected for this order.",
      tone: "danger",
      step: 0,
    },
  };

  const m = meta[status];

  return (
    <div className="store-screen">
      <AnnouncementBar />
      <StoreHeader mobile={mobile} />
      <div className={`mx-auto max-w-2xl ${mobile ? "px-4 py-6" : "px-6 py-10"}`}>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-500">Order {ORDER.number}</p>
            <h1 className="font-display text-2xl font-semibold text-gray-900">
              Order Status: {m.label}
            </h1>
          </div>
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
              m.tone === "success"
                ? "bg-[var(--success-soft)] text-[var(--success)]"
                : m.tone === "danger"
                  ? "bg-[var(--danger-soft)] text-[var(--danger)]"
                  : "bg-[var(--accent-soft)] text-[var(--accent)]"
            }`}
          >
            {m.label}
          </span>
        </div>

        <StatusHero icon="📦" title={m.title} subtitle={m.subtitle} tone={m.tone} />

        {status !== "cancelled" && (
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-5">
            <TrackingTimeline activeIndex={m.step} />
          </div>
        )}

        <div className="mt-4 grid gap-3 rounded-2xl border border-[var(--border)] bg-white p-5 text-sm sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase text-gray-400">Courier</p>
            <p className="font-semibold">{ORDER.courier}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-400">Tracking number</p>
            <p className="font-semibold">{ORDER.tracking}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-400">Estimated delivery</p>
            <p className="font-semibold">{ORDER.estimated}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-400">Shipping address</p>
            <p>
              {CUSTOMER.address}, {CUSTOMER.city}
            </p>
          </div>
        </div>

        <button className="btn-secondary mt-6 w-full">CONTACT SUPPORT</button>
      </div>
      <StoreFooter mobile={mobile} />
    </div>
  );
}

export function OrderStatusScreens() {
  return null;
}
