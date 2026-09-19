import { CUSTOMER, HERO_PRODUCT } from "@/lib/store-data";
import { Logo } from "../icons";
import { CheckoutProgress, OrderSummaryCard } from "../store-chrome";

function CheckoutShell({
  current,
  title,
  children,
  cta,
  mobile = false,
}: {
  current: "contact" | "shipping" | "method" | "payment" | "review";
  title: string;
  children: React.ReactNode;
  cta: string;
  mobile?: boolean;
}) {
  return (
    <div className="store-screen min-h-[780px] bg-[var(--muted-bg)]">
      <div className="border-b border-[var(--border)] bg-white px-5 py-4">
        <div className="mx-auto flex max-w-[1040px] items-center justify-between">
          <Logo size="sm" />
          <span className="text-xs text-gray-400">Secure Checkout</span>
        </div>
      </div>
      <div className={`mx-auto max-w-[1040px] ${mobile ? "px-4 py-5" : "px-6 py-8"}`}>
        <CheckoutProgress current={current} />
        <div className={`mt-6 gap-6 ${mobile ? "flex flex-col" : "grid grid-cols-[1fr_360px]"}`}>
          <div className="rounded-2xl border border-[var(--border)] bg-white p-5 md:p-6">
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            <div className="mt-5">{children}</div>
            <button className="btn-primary mt-6 w-full">{cta}</button>
          </div>
          {!mobile && <OrderSummaryCard />}
          {mobile && (
            <details className="rounded-2xl border border-[var(--border)] bg-white p-4" open>
              <summary className="cursor-default list-none text-sm font-semibold">
                Order summary · ₱799
              </summary>
              <div className="mt-3">
                <OrderSummaryCard compact />
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

export function CheckoutContactScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <CheckoutShell
      current="contact"
      title="Contact Information"
      cta="CONTINUE TO SHIPPING"
      mobile={mobile}
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
          <input className="input-field" defaultValue={CUSTOMER.email} readOnly />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input className="input-field" defaultValue={CUSTOMER.phone} readOnly />
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="accent-[var(--accent)]" defaultChecked readOnly />
          Email me with news and offers
        </label>
      </div>
    </CheckoutShell>
  );
}

export function CheckoutShippingScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <CheckoutShell
      current="shipping"
      title="Shipping Information"
      cta="CONTINUE TO SHIPPING METHOD"
      mobile={mobile}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium">First Name</label>
            <input className="input-field" defaultValue={CUSTOMER.firstName} readOnly />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Last Name</label>
            <input className="input-field" defaultValue={CUSTOMER.lastName} readOnly />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Country</label>
          <input className="input-field bg-gray-50" defaultValue="Philippines" readOnly />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Address</label>
          <input
            className="input-field"
            defaultValue="12 Maharlika St."
            readOnly
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Apartment / Unit / Barangay
          </label>
          <input className="input-field" defaultValue="Brgy. San Antonio, Unit 4B" readOnly />
        </div>
        <div className={`grid gap-3 ${mobile ? "grid-cols-1" : "grid-cols-3"}`}>
          <div>
            <label className="mb-1.5 block text-sm font-medium">City</label>
            <input className="input-field" defaultValue={CUSTOMER.city} readOnly />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Province</label>
            <input className="input-field" defaultValue={CUSTOMER.province} readOnly />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Postal Code</label>
            <input className="input-field" defaultValue={CUSTOMER.postal} readOnly />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
          <input className="input-field" defaultValue={CUSTOMER.phone} readOnly />
        </div>
      </div>
    </CheckoutShell>
  );
}

export function CheckoutMethodScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <CheckoutShell
      current="method"
      title="Shipping Method"
      cta="CONTINUE TO PAYMENT"
      mobile={mobile}
    >
      <div className="space-y-3">
        <div className="radio-card selected">
          <div className="radio-outer">
            <div className="radio-inner" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900">Standard Delivery</p>
              <p className="font-bold text-[var(--accent)]">₱0 — FREE</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Estimated delivery: 3–7 business days</p>
          </div>
        </div>
        <div className="radio-card opacity-60">
          <div className="radio-outer" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900">Express Delivery</p>
              <p className="font-semibold">₱149</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Estimated delivery: 1–3 business days</p>
          </div>
        </div>
      </div>
    </CheckoutShell>
  );
}

export function CheckoutPaymentScreen({
  mobile = false,
  method = "cod",
}: {
  mobile?: boolean;
  method?: "cod" | "gcash" | "card";
}) {
  const options = [
    { id: "cod", label: "Cash on Delivery", note: "Pay when you receive your order" },
    { id: "gcash", label: "GCash", note: "Pay via GCash wallet" },
    { id: "maya", label: "Maya", note: "Pay via Maya wallet" },
    { id: "card", label: "Credit / Debit Card", note: "Visa, Mastercard" },
    { id: "bank", label: "Online Banking", note: "BDO, BPI, UnionBank & more" },
  ];

  return (
    <CheckoutShell
      current="payment"
      title="Payment Method"
      cta="CONTINUE TO REVIEW"
      mobile={mobile}
    >
      <div className="space-y-3">
        {options.map((o) => {
          const selected = method === o.id;
          return (
          <div
            key={o.id}
            className={`radio-card ${selected ? "selected" : ""}`}
          >
            <div className="radio-outer">
              {selected && <div className="radio-inner" />}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{o.label}</p>
              <p className="text-sm text-gray-500">{o.note}</p>
            </div>
          </div>
          );
        })}

        {method === "card" && (
          <div className="mt-2 space-y-3 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)] p-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Card number</label>
              <input className="input-field" defaultValue="4242 4242 4242 4242" readOnly />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Expiration</label>
                <input className="input-field" defaultValue="12 / 28" readOnly />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">CVV</label>
                <input className="input-field" defaultValue="123" readOnly />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Name on card</label>
              <input className="input-field" defaultValue="Justin Reyes" readOnly />
            </div>
          </div>
        )}

        {method === "gcash" && (
          <div className="rounded-xl border border-[var(--accent)] bg-[var(--accent-soft)] p-4 text-sm text-gray-700">
            <p className="font-semibold text-[var(--accent)]">GCash selected</p>
            <p className="mt-1">
              After placing your order, you&apos;ll be prompted to confirm payment in the GCash
              app. No real payment is processed in this mockup.
            </p>
          </div>
        )}
      </div>
    </CheckoutShell>
  );
}

export function CheckoutReviewScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <CheckoutShell
      current="review"
      title="Review Your Order"
      cta="PLACE ORDER"
      mobile={mobile}
    >
      <div className="space-y-4">
        {[
          {
            title: "Contact Information",
            body: (
              <>
                <p>{CUSTOMER.email}</p>
                <p>{CUSTOMER.phone}</p>
              </>
            ),
          },
          {
            title: "Shipping Address",
            body: (
              <>
                <p>
                  {CUSTOMER.firstName} {CUSTOMER.lastName}
                </p>
                <p>{CUSTOMER.address}</p>
                <p>
                  {CUSTOMER.city}, {CUSTOMER.province} {CUSTOMER.postal}
                </p>
                <p>Philippines</p>
                <p>{CUSTOMER.phone}</p>
              </>
            ),
          },
          {
            title: "Shipping Method",
            body: <p>Standard Delivery — FREE</p>,
          },
          {
            title: "Payment Method",
            body: <p>Cash on Delivery</p>,
          },
        ].map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-[var(--border)] p-4 text-sm text-gray-600"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              <span className="text-xs font-medium text-[var(--accent)]">Edit</span>
            </div>
            {section.body}
          </div>
        ))}

        <div className="rounded-xl border border-[var(--border)] p-4">
          <h3 className="mb-3 font-semibold text-gray-900">Order Items</h3>
          <div className="flex gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO_PRODUCT.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{HERO_PRODUCT.name}</p>
              <p className="text-xs text-gray-500">Qty 1 · Mint Green</p>
            </div>
            <p className="text-sm font-semibold">₱799</p>
          </div>
        </div>
      </div>
    </CheckoutShell>
  );
}
