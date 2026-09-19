export const BRAND = {
  name: "MEOHUB",
  tagline: "Better play for happier cats",
};

export const HERO_PRODUCT = {
  id: "meo-orbit-01",
  name: "Orbit Auto Play Cat Toy",
  shortName: "Orbit Auto Play",
  subtitle: "Interactive Automatic Cat Toy",
  price: 799,
  compareAt: 1299,
  discount: 38,
  rating: 4.8,
  reviewCount: 214,
  variant: "Mint Green",
  sku: "ORBIT-MG",
  image:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
  ],
  description:
    "Orbit keeps your cat entertained with smart motion patterns, soft feather attachments, and quiet motor play — perfect for busy pet parents across the Philippines.",
};

export const CATALOG = [
  HERO_PRODUCT,
  {
    id: "meo-feather-02",
    name: "Whisker Wand Feather Stick",
    shortName: "Whisker Wand",
    subtitle: "Interactive Wand Toy",
    price: 249,
    compareAt: 399,
    discount: 38,
    rating: 4.6,
    reviewCount: 89,
    variant: "Natural",
    sku: "WAND-01",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    description: "Lightweight wand with replaceable feathers for daily play sessions.",
  },
  {
    id: "meo-tunnel-03",
    name: "Hideaway Cat Play Tunnel",
    shortName: "Hideaway Tunnel",
    subtitle: "Collapsible Play Tunnel",
    price: 599,
    compareAt: 899,
    discount: 33,
    rating: 4.7,
    reviewCount: 132,
    variant: "Gray",
    sku: "TUNNEL-GY",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    description: "Soft collapsible tunnel for chasing, hiding, and zoomies.",
  },
  {
    id: "meo-bowl-04",
    name: "Elevated Ceramic Feeder",
    shortName: "Ceramic Feeder",
    subtitle: "Ergonomic Cat Bowl",
    price: 449,
    compareAt: 649,
    discount: 31,
    rating: 4.9,
    reviewCount: 67,
    variant: "White",
    sku: "BOWL-WH",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    description: "Elevated ceramic bowl that supports comfortable mealtime posture.",
  },
];

export function formatPeso(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export const CUSTOMER = {
  firstName: "Justin",
  lastName: "Reyes",
  email: "justin.reyes@email.com",
  phone: "0917 123 4567",
  address: "12 Maharlika St., Brgy. San Antonio",
  city: "Makati City",
  province: "Metro Manila",
  postal: "1203",
};

export const ORDER = {
  number: "#MEO12345",
  tracking: "JTPH1234567890",
  courier: "J&T Express",
  estimated: "Sep 22–25, 2026",
};
