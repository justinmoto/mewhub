"use client";

import { useMemo, useState } from "react";
import {
  CartDrawerScreen,
  CartPageScreen,
  EmptyCartScreen,
  HomepageScreen,
  ProductDetailScreen,
  SearchEmptyScreen,
  SearchOpenScreen,
  SearchResultsScreen,
  ShopScreen,
} from "./screens/shopping";
import {
  CheckoutContactScreen,
  CheckoutMethodScreen,
  CheckoutPaymentScreen,
  CheckoutReviewScreen,
  CheckoutShippingScreen,
} from "./screens/checkout";
import {
  OrderConfirmationScreen,
  TrackingResultScreen,
  TrackingSearchScreen,
} from "./screens/post-purchase";
import {
  ButtonStatesScreen,
  CartStateVariantsScreen,
  CheckoutStateVariantsScreen,
  ErrorStatesScreen,
  FormStatesScreen,
  LoadingStatesScreen,
  ProductStateVariantsScreen,
} from "./screens/ui-states";
import { ColorPaletteScreen } from "./screens/color-palette";
import { TypographyScreen } from "./screens/typography";

type ScreenId =
  | "colors"
  | "typography"
  | "home"
  | "shop"
  | "search-open"
  | "search-results"
  | "search-empty"
  | "pdp"
  | "cart-drawer"
  | "cart"
  | "cart-empty"
  | "checkout-contact"
  | "checkout-shipping"
  | "checkout-method"
  | "checkout-payment"
  | "checkout-payment-gcash"
  | "checkout-payment-card"
  | "checkout-review"
  | "order-confirm"
  | "track-search"
  | "track-transit"
  | "track-processing"
  | "track-shipped"
  | "track-delivered"
  | "track-cancelled"
  | "track-error"
  | "m-home"
  | "m-pdp"
  | "m-cart-drawer"
  | "m-cart"
  | "m-checkout"
  | "m-payment"
  | "m-review"
  | "m-confirm"
  | "m-tracking"
  | "ui-buttons"
  | "ui-forms"
  | "ui-errors"
  | "ui-loading"
  | "ui-product"
  | "ui-cart"
  | "ui-checkout";

const SECTIONS: {
  title: string;
  items: { id: ScreenId; label: string; mobile?: boolean }[];
}[] = [
  {
    title: "Brand",
    items: [
      { id: "colors", label: "Color Palette" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    title: "Customer Shopping Flow",
    items: [
      { id: "home", label: "1. Homepage" },
      { id: "shop", label: "2. Shop" },
      { id: "search-open", label: "3a. Search Opened" },
      { id: "search-results", label: "3b. Search Results" },
      { id: "search-empty", label: "3c. No Results" },
      { id: "pdp", label: "4. Product Page" },
      { id: "cart-drawer", label: "5. Add to Cart / Drawer" },
      { id: "cart", label: "6. Full Cart" },
      { id: "cart-empty", label: "7. Empty Cart" },
    ],
  },
  {
    title: "Checkout Flow",
    items: [
      { id: "checkout-contact", label: "8. Contact" },
      { id: "checkout-shipping", label: "9. Shipping Address" },
      { id: "checkout-method", label: "10. Shipping Method" },
      { id: "checkout-payment", label: "11a. Payment · COD" },
      { id: "checkout-payment-gcash", label: "11b. Payment · GCash" },
      { id: "checkout-payment-card", label: "11c. Payment · Card" },
      { id: "checkout-review", label: "12. Order Review" },
      { id: "order-confirm", label: "13. Confirmation" },
    ],
  },
  {
    title: "Post-Purchase",
    items: [
      { id: "track-search", label: "14. Track Order" },
      { id: "track-processing", label: "15. Processing" },
      { id: "track-shipped", label: "16. Shipped" },
      { id: "track-transit", label: "17. Out for Delivery" },
      { id: "track-delivered", label: "18. Delivered" },
      { id: "track-cancelled", label: "19. Cancelled" },
      { id: "track-error", label: "20. Tracking Error" },
    ],
  },
  {
    title: "Responsive / Mobile",
    items: [
      { id: "m-home", label: "21. Mobile Homepage", mobile: true },
      { id: "m-pdp", label: "22. Mobile Product", mobile: true },
      { id: "m-cart-drawer", label: "23a. Mobile Cart Drawer", mobile: true },
      { id: "m-cart", label: "23b. Mobile Cart", mobile: true },
      { id: "m-checkout", label: "24a. Mobile Checkout", mobile: true },
      { id: "m-payment", label: "24b. Mobile Payment", mobile: true },
      { id: "m-review", label: "24c. Mobile Review", mobile: true },
      { id: "m-confirm", label: "25. Mobile Confirmation", mobile: true },
      { id: "m-tracking", label: "26. Mobile Tracking", mobile: true },
    ],
  },
  {
    title: "UI States",
    items: [
      { id: "ui-buttons", label: "27. Button States" },
      { id: "ui-forms", label: "28. Form States" },
      { id: "ui-product", label: "29a. Product States" },
      { id: "ui-cart", label: "29b. Cart States" },
      { id: "ui-checkout", label: "29c. Checkout States" },
      { id: "ui-errors", label: "30. Error States" },
      { id: "ui-loading", label: "31. Loading States" },
    ],
  },
];

function renderScreen(id: ScreenId) {
  switch (id) {
    case "colors":
      return <ColorPaletteScreen />;
    case "typography":
      return <TypographyScreen />;
    case "home":
      return <HomepageScreen />;
    case "shop":
      return <ShopScreen />;
    case "search-open":
      return <SearchOpenScreen />;
    case "search-results":
      return <SearchResultsScreen />;
    case "search-empty":
      return <SearchEmptyScreen />;
    case "pdp":
      return <ProductDetailScreen />;
    case "cart-drawer":
      return <CartDrawerScreen />;
    case "cart":
      return <CartPageScreen />;
    case "cart-empty":
      return <EmptyCartScreen />;
    case "checkout-contact":
      return <CheckoutContactScreen />;
    case "checkout-shipping":
      return <CheckoutShippingScreen />;
    case "checkout-method":
      return <CheckoutMethodScreen />;
    case "checkout-payment":
      return <CheckoutPaymentScreen method="cod" />;
    case "checkout-payment-gcash":
      return <CheckoutPaymentScreen method="gcash" />;
    case "checkout-payment-card":
      return <CheckoutPaymentScreen method="card" />;
    case "checkout-review":
      return <CheckoutReviewScreen />;
    case "order-confirm":
      return <OrderConfirmationScreen />;
    case "track-search":
      return <TrackingSearchScreen />;
    case "track-processing":
      return <TrackingResultScreen status="processing" />;
    case "track-shipped":
      return <TrackingResultScreen status="shipped" />;
    case "track-transit":
      return <TrackingResultScreen status="transit" />;
    case "track-delivered":
      return <TrackingResultScreen status="delivered" />;
    case "track-cancelled":
      return <TrackingResultScreen status="cancelled" />;
    case "track-error":
      return <TrackingResultScreen status="notfound" />;
    case "m-home":
      return <HomepageScreen mobile />;
    case "m-pdp":
      return <ProductDetailScreen mobile />;
    case "m-cart-drawer":
      return <CartDrawerScreen mobile />;
    case "m-cart":
      return <CartPageScreen mobile />;
    case "m-checkout":
      return <CheckoutContactScreen mobile />;
    case "m-payment":
      return <CheckoutPaymentScreen mobile method="gcash" />;
    case "m-review":
      return <CheckoutReviewScreen mobile />;
    case "m-confirm":
      return <OrderConfirmationScreen mobile />;
    case "m-tracking":
      return <TrackingResultScreen mobile status="transit" />;
    case "ui-buttons":
      return <ButtonStatesScreen />;
    case "ui-forms":
      return <FormStatesScreen />;
    case "ui-errors":
      return <ErrorStatesScreen />;
    case "ui-loading":
      return <LoadingStatesScreen />;
    case "ui-product":
      return <ProductStateVariantsScreen />;
    case "ui-cart":
      return <CartStateVariantsScreen />;
    case "ui-checkout":
      return <CheckoutStateVariantsScreen />;
    default:
      return <HomepageScreen />;
  }
}

export function MockupViewer() {
  const [active, setActive] = useState<ScreenId>("home");
  const flat = useMemo(() => SECTIONS.flatMap((s) => s.items), []);
  const current = flat.find((i) => i.id === active);
  const isMobile = Boolean(current?.mobile);
  const index = flat.findIndex((i) => i.id === active);

  const go = (dir: -1 | 1) => {
    const next = flat[index + dir];
    if (next) setActive(next.id);
  };

  return (
    <div className="mockup-shell">
      <aside className="mockup-sidebar">
        <div className="mb-5 px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">
            Visual Mockup
          </p>
          <h1 className="mt-1 text-xl font-bold text-white">MEOHUB</h1>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Philippine cat ecommerce · full customer journey
          </p>
        </div>

        <nav className="space-y-5">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {section.title}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(item.id)}
                      className={`w-full rounded-lg px-2.5 py-2 text-left text-[13px] transition ${
                        active === item.id
                          ? "bg-amber-700/25 font-semibold text-amber-200"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="mockup-stage">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Now viewing
            </p>
            <h2 className="text-lg font-semibold text-white">{current?.label}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index <= 0}
              className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-30"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index >= flat.length - 1}
              className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-30"
            >
              Next →
            </button>
            <span className="ml-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {isMobile ? "Mobile frame" : "Desktop frame"}
            </span>
          </div>
        </div>

        <div className={isMobile ? "device-mobile" : "device-desktop"}>
          {renderScreen(active)}
        </div>
      </main>
    </div>
  );
}
