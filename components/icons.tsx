import { BRAND } from "@/lib/store-data";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  const mark = size === "lg" ? "h-9 w-9" : size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${mark} flex items-center justify-center rounded-full bg-[var(--accent)] text-white`}
      >
        <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="currentColor">
          <path d="M12 21c-4.2-2.4-7-5.6-7-9.2C5 8.1 7.2 6 9.6 6c1.3 0 2.5.6 3.4 1.6C14 6.6 15.1 6 16.4 6 18.8 6 21 8.1 21 11.8c0 3.6-2.8 6.8-7 9.2h-2z" />
          <circle cx="9.2" cy="4.2" r="1.4" />
          <circle cx="14.8" cy="4.2" r="1.4" />
          <circle cx="6.4" cy="7.2" r="1.2" />
          <circle cx="17.6" cy="7.2" r="1.2" />
        </svg>
      </div>
      <span className={`${text} font-bold tracking-tight text-gray-900`}>
        {BRAND.name}
      </span>
    </div>
  );
}

export function IconSearch({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCart({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M3 5h2l2.2 10.2a2 2 0 002 1.6h8.4a2 2 0 001.9-1.4L21 8H7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1.2" fill="currentColor" />
      <circle cx="17" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconMenu({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ rating = 4.8 }: { rating?: number }) {
  const full = Math.floor(rating);
  return (
    <span className="stars text-sm" aria-label={`${rating} stars`}>
      {"★".repeat(full)}
      {rating % 1 >= 0.5 ? "★" : ""}
      <span className="text-gray-300">{"★".repeat(5 - Math.ceil(rating))}</span>
    </span>
  );
}
