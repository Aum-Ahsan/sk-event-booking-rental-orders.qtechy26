"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Field } from "../../../landing/shared/FormControls";
export type HireProduct = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: string;
  summary: string;
  description: string;
  dimensions: string;
  capacity: string;
  finish: string;
  minimum: string;
  rating?: number;
  reviews?: number;
};

const coreHireProducts: HireProduct[] = [
  {
    slug: "kids-bistro-chair",
    name: "Kids Bistro Chair",
    category: "Chairs",
    image: "https://padvgroup.com.au/images/PadV/Chairs/Aram%20chair/IMG-20241215-WA0005.jpg",
    price: "$1.50 per day",
    summary: "Contemporary, sleek children’s seating for flexible event themes.",
    description: "Our Kids Bistro Chairs feature a contemporary and sleek design that effortlessly complements various event themes and décor styles.",
    dimensions: "Approx. 330 L × 360 W × 570 H mm · 300 mm seat height",
    capacity: "1 child · recommended ages 2–6",
    finish: "Stackable, easy-clean moulded plastic",
    minimum: "Minimum hire may apply",
    rating: 4.4,
    reviews: 9,
  },
  {
    slug: "aram-bistro-chair",
    name: "Aram Bistro Chair",
    category: "Chairs",
    image: "https://padvgroup.com.au/images/PadV/Chairs/Aram%20chair/IMG-20241215-WA0007.jpg",
    price: "$2 per day",
    summary: "Contemporary large bistro chair for functions and celebrations.",
    description: "Our Large Bistro Chairs feature a contemporary and sleek design that effortlessly complements various event themes and décor styles.",
    dimensions: "390 W × 510 D × 810 H mm · 445 mm seat height",
    capacity: "1 adult · reference load rating up to 180 kg",
    finish: "Stackable commercial moulded chair",
    minimum: "Minimum hire may apply",
    rating: 4.6,
    reviews: 24,
  },
  {
    slug: "kids-folding-table",
    name: "Kids Folding Table",
    category: "Tables",
    image: "https://padvgroup.com.au/images/PadV/Table/IMG-20241215-WA0024.jpg",
    price: "$8 per day",
    summary: "Lightweight, hard-wearing children’s table with folding legs.",
    description: "Our plastic moulded trestle tables are extremely hard wearing while remaining lightweight, with folding legs for easy setup and pack-down.",
    dimensions: "Approx. 1220 L × 600 W × 500 H mm",
    capacity: "Children’s dining and activities · up to 6 seats",
    finish: "Easy-clean HDPE top · powder-coated folding legs",
    minimum: "1 table",
    rating: 4.5,
    reviews: 12,
  },
  {
    slug: "milan-chafing-dish",
    name: "Milan Chafing Dish",
    category: "Tableware",
    image: "https://padvgroup.com.au/images/PadV/Chafing%20dish/IMG-20241215-WA0033.jpg",
    price: "$9 per day",
    summary: "Buffet-service chafing set for keeping freshly cooked dishes warm.",
    description: "If you’re looking to keep freshly cooked dishes warm during buffet service, the Milan chafing set is a practical event-hire choice.",
    dimensions: "590 D × 332 W × 270 H mm",
    capacity: "9 L · full-size 1/1 GN pan",
    finish: "4.1 kg polished stainless steel · twin burners",
    minimum: "1 set",
    rating: 4.6,
    reviews: 15,
  },
  {
    slug: "six-foot-folding-table",
    name: "6ft Folding Table",
    category: "Tables",
    image: "https://padvgroup.com.au/images/PadV/Table/IMG-20241215-WA0014.jpg",
    price: "$10 per day",
    summary: "Durable, lightweight six-foot trestle table with folding legs.",
    description: "Our plastic moulded trestle tables are extremely hard wearing while remaining lightweight, with folding legs for easy setup and pack-down.",
    dimensions: "1838 L × 762 W × 736 H mm",
    capacity: "Reference evenly distributed load up to 212 kg",
    finish: "UV-protected HDPE top · powder-coated folding steel frame",
    minimum: "1 table",
    rating: 4.7,
    reviews: 18,
  },
  {
    slug: "1000w-halogen-floodlight",
    name: "1000W Halogen Floodlight",
    category: "Lighting",
    image: "https://padvgroup.com.au/images/PadV/Outdoor%20Light/IMG-20241215-WA0030.jpg",
    price: "$15 per day",
    summary: "Portable high-output light for temporary indoor and outdoor use.",
    description: "This portable 1000W halogen floodlight is suitable for indoor use and temporary outdoor event lighting, including contractor and setup applications.",
    dimensions: "Adjustable tripod · 1.8 m power cord",
    capacity: "2 × 500 W adjustable halogen heads · 1000 W total",
    finish: "IP44 weather-resistant diecast heads · tempered safety glass",
    minimum: "1 light",
    rating: 4.5,
    reviews: 11,
  },
  {
    slug: "patio-heater",
    name: "Patio Heater",
    category: "Lounge & bar",
    image: "https://padvgroup.com.au/images/PadV/Heater/IMG-20241215-WA0019.jpg",
    price: "$35 per day",
    summary: "Outdoor gas patio heater providing comfortable radiant warmth.",
    description: "Designed for outdoor environments, the Devanti gas patio heater provides sun-like warmth when your event needs it most.",
    dimensions: "Approx. 815 diameter × 2250 H mm",
    capacity: "11–13.5 kW reference heat output · LPG fuel",
    finish: "Stainless and coated steel · freestanding outdoor unit",
    minimum: "1 heater",
    rating: 4.8,
    reviews: 31,
  },
  {
    slug: "lpg-gas-bottle",
    name: "LPG Gas Bottle",
    category: "Lounge & bar",
    image: "https://padvgroup.com.au/images/PadV/Gas%20bottle/Gas-Bottle.jpg",
    price: "$35 per day",
    summary: "LPG fuel bottle for compatible hired heating and cooking equipment.",
    description: "LPG is used as fuel for compatible heating and cooking appliances. Suitability and safe connection requirements are confirmed with the selected hire equipment.",
    dimensions: "Approx. 315 diameter × 475 H mm",
    capacity: "Nominal 9 kg cylinder · 8.5 kg safe LPG fill · 17.6 L water capacity",
    finish: "Safety-inspected Australian LCC27/POL-compatible cylinder",
    minimum: "1 bottle",
    rating: 4.7,
    reviews: 17,
  },
  {
    slug: "natural-bentwood-chair",
    name: "Natural Bentwood Chair",
    category: "Chairs",
    image: "/images/chairs-product.png",
    price: "$12 each",
    summary:
      "Classic curved timber dining chair for ceremonies and receptions.",
    description:
      "A lightweight, elegant bentwood chair with a natural timber frame and supportive seat. Suits garden weddings, long-table dinners and refined corporate events. Chairs are cleaned, inspected and transported in protective stillages.",
    dimensions: "410 W × 510 D × 880 H mm",
    capacity: "1 adult",
    finish: "Natural timber",
    minimum: "20 chairs",
  },
  {
    slug: "white-bistro-chair",
    name: "White Bistro Chair",
    category: "Chairs",
    image: "/images/chairs-product.png",
    price: "$4.40 each",
    summary: "Practical, stackable seating for community and backyard events.",
    description:
      "A commercial-grade white polypropylene chair that is easy to place, wipe clean and move. A reliable option for birthdays, school events, ceremonies and large community gatherings.",
    dimensions: "440 W × 520 D × 800 H mm",
    capacity: "1 adult",
    finish: "White polypropylene",
    minimum: "20 chairs",
  },
  {
    slug: "rustic-trestle-table",
    name: "Rustic Timber Trestle Table",
    category: "Tables",
    image: "/images/tables-product.png",
    price: "$65 each",
    summary: "Warm timber table seating six to eight guests.",
    description:
      "A solid 1.8 metre timber dining table with folding trestle legs and visible natural grain. Designed for family-style dining, weddings and relaxed corporate functions.",
    dimensions: "1800 L × 840 W × 760 H mm",
    capacity: "6–8 seated guests",
    finish: "Warm natural timber",
    minimum: "2 tables",
  },
  {
    slug: "round-banquet-table",
    name: "1.8 m Round Banquet Table",
    category: "Tables",
    image: "/images/tables-product.png",
    price: "$32 each",
    summary: "Commercial folding table seating eight to ten guests.",
    description:
      "A sturdy round banquet table that creates an inclusive dining layout. Add fitted linen for weddings, gala dinners and conferences.",
    dimensions: "1800 diameter × 750 H mm",
    capacity: "8–10 seated guests",
    finish: "Timber top, steel legs",
    minimum: "2 tables",
  },
  {
    slug: "clearspan-marquee",
    name: "Clearspan Marquee 6 × 12 m",
    category: "Marquees",
    image: "/images/marquee-product.png",
    price: "From $2,950",
    summary: "Weather-ready structure for up to 80 seated guests.",
    description:
      "A professionally installed clearspan marquee with white roof, structural frame and weighted anchoring. Side walls, flooring, lighting and climate options can be added after a site assessment.",
    dimensions: "6 W × 12 L m",
    capacity: "Up to 80 seated",
    finish: "White PVC roof and aluminium frame",
    minimum: "Site inspection required",
  },
  {
    slug: "festoon-lighting",
    name: "Warm Festoon Lighting Set",
    category: "Lighting",
    image: "/images/lighting-product.png",
    price: "$95 per 20 m",
    summary:
      "Commercial warm-white globes for indoor or sheltered outdoor use.",
    description:
      "Connectable festoon lighting with warm LED globes, tested cable and mounting accessories. Installation is quoted separately based on structure, height and venue access.",
    dimensions: "20 m set",
    capacity: "Connectable runs",
    finish: "Warm white LED",
    minimum: "1 set",
  },
  {
    slug: "stoneware-place-setting",
    name: "Ivory Stoneware Place Setting",
    category: "Tableware",
    image: "/images/tableware-product.png",
    price: "$4.80 per guest",
    summary: "Dinner plate, side plate and bowl in a soft ivory glaze.",
    description:
      "A coordinated commercial stoneware setting with gentle tonal variation. Professionally washed, counted and packed in transport crates.",
    dimensions: "280 mm dinner plate",
    capacity: "3 pieces per guest",
    finish: "Ivory reactive glaze",
    minimum: "24 settings",
  },
  {
    slug: "arched-backdrop",
    name: "Textured Arch Backdrop Set",
    category: "Décor",
    image: "/images/decor-product.png",
    price: "$220 set",
    summary: "Two freestanding arches for ceremonies, photos or signage.",
    description:
      "A pair of stable, freestanding arch panels in warm neutral tones. Suitable for floral styling, welcome signage and photo moments; florals and custom vinyl are quoted separately.",
    dimensions: "2.1 m and 1.8 m high",
    capacity: "2-panel set",
    finish: "Textured warm white",
    minimum: "1 set",
  },
  {
    slug: "oak-dance-floor",
    name: "Oak Dance Floor",
    category: "Flooring & staging",
    image: "/images/flooring-product.png",
    price: "From $980",
    summary: "Level modular floor sized to your guest count and venue.",
    description:
      "A commercial modular dance floor installed by our crew on a suitable level surface. Final size and subfloor requirements are confirmed after venue review.",
    dimensions: "From 4.8 × 4.8 m",
    capacity: "Approx. 55 dancers",
    finish: "Oak-look commercial panels",
    minimum: "Professional installation",
  },
  {
    slug: "linen-lounge-setting",
    name: "Linen Lounge Setting",
    category: "Lounge & bar",
    image: "/images/lounge-product.png",
    price: "$420 set",
    summary: "Neutral sofa, two occasional chairs and coffee table.",
    description:
      "A relaxed conversation setting for cocktail hours, green rooms and wedding lounges. Upholstery is steam-cleaned and protected for transport.",
    dimensions: "Approx. 3 × 2.5 m footprint",
    capacity: "5 seated guests",
    finish: "Oatmeal linen and oak",
    minimum: "1 setting",
  },
];

const additionalProductSeeds = [
  [
    "gold-tiffany-chair",
    "Gold Tiffany Chair",
    "Chairs",
    "$9.50 each",
    "Elegant gold ceremony and dining chair.",
  ],
  [
    "black-bentwood-chair",
    "Black Bentwood Chair",
    "Chairs",
    "$12 each",
    "Refined black timber chair for modern events.",
  ],
  [
    "clear-ghost-chair",
    "Clear Ghost Chair",
    "Chairs",
    "$14 each",
    "Transparent statement seating with a light visual footprint.",
  ],
  [
    "velvet-dining-chair",
    "Velvet Dining Chair",
    "Chairs",
    "$18 each",
    "Soft upholstered dining chair for premium receptions.",
  ],
  [
    "kids-event-chair",
    "Kids Event Chair",
    "Chairs",
    "$4.80 each",
    "Safe, easy-clean seating sized for children.",
  ],
  [
    "bar-stool-oak",
    "Oak Bar Stool",
    "Chairs",
    "$16 each",
    "Natural timber stool for bars and cocktail tables.",
  ],
  [
    "cocktail-table",
    "White Cocktail Table",
    "Tables",
    "$38 each",
    "Standing-height table for drinks and casual networking.",
  ],
  [
    "serpentine-table",
    "Serpentine Display Table",
    "Tables",
    "$58 each",
    "Curved modular table for buffets and feature displays.",
  ],
  [
    "kids-trestle-table",
    "Kids Trestle Table",
    "Tables",
    "$25 each",
    "Low-height activity and dining table for children.",
  ],
  [
    "white-dining-table",
    "White Dining Table",
    "Tables",
    "$72 each",
    "Clean contemporary dining table seating six to eight.",
  ],
  [
    "black-banquet-table",
    "Black Banquet Table",
    "Tables",
    "$44 each",
    "Dark event table for modern dining and display layouts.",
  ],
  [
    "marquee-3x6",
    "Pop-up Marquee 3 × 6 m",
    "Marquees",
    "$390 event",
    "Compact weather cover for gardens and community events.",
  ],
  [
    "marquee-6x6",
    "Clearspan Marquee 6 × 6 m",
    "Marquees",
    "$1,850 event",
    "Professional installed structure for intimate events.",
  ],
  [
    "marquee-10x15",
    "Clearspan Marquee 10 × 15 m",
    "Marquees",
    "$5,900 event",
    "Large format structure for weddings and gala events.",
  ],
  [
    "marquee-sidewalls",
    "Marquee Sidewall Set",
    "Marquees",
    "$280 set",
    "Clear and solid wall options for weather protection.",
  ],
  [
    "fairy-light-curtain",
    "Fairy Light Curtain",
    "Lighting",
    "$180 set",
    "Warm cascading light backdrop for photos and speeches.",
  ],
  [
    "uplight-package",
    "Wireless Uplight Package",
    "Lighting",
    "$240 set",
    "Colour-adjustable ambient lighting for walls and marquees.",
  ],
  [
    "chandelier-crystal",
    "Crystal Chandelier",
    "Lighting",
    "$320 each",
    "Statement overhead light for formal event spaces.",
  ],
  [
    "pathway-lighting",
    "LED Pathway Lighting",
    "Lighting",
    "$150 set",
    "Low-level practical lighting for guest walkways.",
  ],
  [
    "glassware-set",
    "Classic Glassware Set",
    "Tableware",
    "$3.60 guest",
    "Water, wine and champagne glasses packed by guest count.",
  ],
  [
    "gold-cutlery-set",
    "Gold Cutlery Set",
    "Tableware",
    "$4.20 guest",
    "Four-piece warm gold place setting for formal dining.",
  ],
  [
    "linen-tablecloth",
    "Premium Linen Tablecloth",
    "Tableware",
    "$24 each",
    "Pressed event linen in selected sizes and colours.",
  ],
  [
    "servingware-set",
    "Shared Dining Serving Set",
    "Tableware",
    "$32 set",
    "Platters and serving tools for family-style tables.",
  ],
  [
    "round-plinth-set",
    "Round Plinth Set",
    "Décor",
    "$145 set",
    "Three display plinths for cakes, florals and products.",
  ],
  [
    "welcome-sign-frame",
    "Welcome Sign Frame",
    "Décor",
    "$85 each",
    "Freestanding frame for custom event signage.",
  ],
  [
    "floral-stand-set",
    "Floral Stand Set",
    "Décor",
    "$120 set",
    "Stable metal stands for ceremony and reception florals.",
  ],
  [
    "black-dance-floor",
    "Black Dance Floor",
    "Flooring & staging",
    "$1,120 event",
    "Modular statement floor professionally installed.",
  ],
  [
    "carpet-runner",
    "Ceremony Carpet Runner",
    "Flooring & staging",
    "$180 each",
    "Clean aisle runner for indoor or sheltered ceremonies.",
  ],
  [
    "low-stage",
    "Low Presentation Stage",
    "Flooring & staging",
    "$760 event",
    "Modular stage for speeches, panels and performances.",
  ],
  [
    "cocktail-lounge",
    "Cocktail Lounge Setting",
    "Lounge & bar",
    "$480 set",
    "Sofa, armchairs and tables for relaxed guest zones.",
  ],
  [
    "mobile-bar",
    "White Mobile Bar",
    "Lounge & bar",
    "$290 each",
    "Professional service bar with concealed preparation shelf.",
  ],
  [
    "velvet-ottoman-set",
    "Velvet Ottoman Set",
    "Lounge & bar",
    "$220 set",
    "Flexible upholstered seating for social and breakout areas.",
  ],
] as const;

const categoryImage: Record<string, string> = {
  Chairs: "/images/chairs-product.png",
  Tables: "/images/tables-product.png",
  Marquees: "/images/marquee-product.png",
  Lighting: "/images/lighting-product.png",
  Tableware: "/images/tableware-product.png",
  Décor: "/images/decor-product.png",
  "Flooring & staging": "/images/flooring-product.png",
  "Lounge & bar": "/images/lounge-product.png",
};
const additionalHireProducts: HireProduct[] = additionalProductSeeds.map(
  ([slug, name, category, price, summary]) => ({
    slug,
    name,
    category,
    image: categoryImage[category],
    price,
    summary,
    description: `${summary} Every unit is inspected, professionally prepared and packed for event transport.`,
    dimensions: "See product specification",
    capacity: "Confirmed for selected layout",
    finish: "Multiple finishes available",
    minimum: "Minimum hire may apply",
  }),
);
void additionalHireProducts;
export const hireProducts: HireProduct[] = coreHireProducts.slice(0, 8);

export const eventTypes = [
  "Wedding or engagement",
  "Birthday or private party",
  "Corporate event",
  "Baby shower",
  "Bridal shower",
  "Graduation celebration",
  "Community event",
  "Cultural celebration",
  "School event",
  "Conference or seminar",
  "Product launch",
  "Gala dinner",
  "Festival or market",
  "Outdoor garden party",
  "Memorial or celebration of life",
];

export const categories = [
  [
    "Chairs",
    "Kids and adult bistro seating",
    "https://padvgroup.com.au/images/PadV/Chairs/Aram%20chair/IMG-20241215-WA0007.jpg",
    "From $1.50",
  ],
  [
    "Tables",
    "Kids and six-foot folding tables",
    "https://padvgroup.com.au/images/PadV/Table/IMG-20241215-WA0014.jpg",
    "From $8",
  ],
  [
    "Lighting",
    "Portable temporary event lighting",
    "https://padvgroup.com.au/images/PadV/Outdoor%20Light/IMG-20241215-WA0030.jpg",
    "From $15",
  ],
  [
    "Tableware",
    "Buffet serving and food-warming equipment",
    "https://padvgroup.com.au/images/PadV/Chafing%20dish/IMG-20241215-WA0033.jpg",
    "From $9",
  ],
  [
    "Lounge & bar",
    "Outdoor heating and compatible LPG fuel",
    "https://padvgroup.com.au/images/PadV/Heater/IMG-20241215-WA0019.jpg",
    "From $35",
  ],
] as const;

export function PublicHeader({ active = "" }: { active?: string }) {
  const links = [
    ["Home", "/"],
    ["Hire Products", "/products"],
    ["Event Planning", "/planning"],
    ["Packages", "/packages"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];
  return (
    <>
      <div className="announcement">
        Melbourne event hire · Friendly local support{" "}
        <span>Call 03 9000 0000 · Get help</span>
      </div>
      <header className="public-header">
        <a
          className="public-brand brand-image-link"
          href="/"
          aria-label="SK Event Hire home"
        >
          <img
            src="/images/sk-event-hire-website-logo.png"
            alt="SK Event Hire"
          />
        </a>
        <nav>
          {links.map((x) => (
            <a
              className={x[0] === active ? "nav-active" : ""}
              aria-current={x[0] === active ? "page" : undefined}
              href={x[1]}
              key={x[0]}
            >
              {x[0]}
            </a>
          ))}
        </nav>
        <div>
          <a className="icon-link" href="/search" aria-label="Search">
            ⌕
          </a>
          <a className="icon-link" href="/basket" aria-label="Basket">
            Bag <sup>3</sup>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">☰</summary>
            <div>
              {links.map((x) => (
                <a
                  className={x[0] === active ? "nav-active" : ""}
                  href={x[1]}
                  key={x[0]}
                >
                  {x[0]}
                </a>
              ))}
              <a href="/collections">Event collections</a>
              <a href="/our-story">Our story</a>
              <a href="/request-quote">Request a quote</a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <b className="footer-column-title">Event Hire Details</b>
          <a
            className="footer-brand-logo"
            href="/"
            aria-label="SK Event Hire home"
          >
            <img
              src="/images/sk-event-hire-website-logo.png"
              alt="SK Event Hire"
            />
          </a>
          <p>
            Professionally prepared furniture, marquees, tableware, lighting and
            décor with practical delivery, setup and collection support.
          </p>
          <small>
            Indicative website pricing is in AUD and includes GST unless stated
            otherwise. Final availability, labour and transport appear in your
            quotation.
          </small>
        </div>
        <div className="footer-links">
          <b>Discover</b>
          <a href="/products">Product catalogue</a>
          <a href="/compare">Compare products</a>
          <a href="/collections">Event collections</a>
          <a href="/packages">Hire packages</a>
          <a href="/request-quote">Request a quote</a>
        </div>
        <div className="footer-links">
          <b>Inspiration</b>
          <a href="/our-story">Our story</a>
          <a href="/planning">Planning services</a>
          <a href="/gallery">Gallery & case studies</a>
          <a href="/reviews">Customer reviews</a>
          <a href="/blog">Planning resources</a>
          <a href="/roadmap">Planning roadmap</a>
        </div>
        <div className="footer-links">
          <b>Help</b>
          <a href="/contact">Contact & service areas</a>
          <a href="/help">Help centre</a>
          <a href="/faq">Complete FAQs</a>
          <a href="/referrals">Referral program</a>
          <a href="/rental-terms">Terms & policies</a>
          <a href="/privacy">Privacy</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="footer-connect">
          <section className="footer-social">
            <img
              src="/images/sk-event-hire-social-logo.png"
              alt="SK Event Hire social media logo"
            />
            <div>
              <b>Follow Us</b>
              <nav aria-label="Social media">
                <a href="#instagram" aria-label="Instagram">
                  ◎
                </a>
                <a href="#facebook" aria-label="Facebook">
                  f
                </a>
                <a href="#pinterest" aria-label="Pinterest">
                  p
                </a>
                <a href="#youtube" aria-label="YouTube">
                  ▶
                </a>
              </nav>
            </div>
          </section>
          <section>
            <b>Payment Methods</b>
            <div
              className="payment-marks"
              aria-label="Accepted payment methods"
            >
              <span>PayID</span>
              <span>Cash</span>
              <span>Bank transfer</span>
            </div>
            <small>
              Pay by approved PayID, cash or bank transfer using your booking reference.
            </small>
          </section>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SK Event Hire. All rights reserved.</span>
          <span>Melbourne, Victoria · Prices shown in AUD</span>
        </div>
      </div>
    </footer>
  );
}

export function PublicHome() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [faqOpen, setFaqOpen] = useState(-1);
  const startCards = categories.slice(0, 8);
  const occasions = [
    [
      "Weddings & engagements",
      "/images/hero-event.png",
      "/collection-weddings",
    ],
    ["Birthdays", "/images/decor-product.png", "/collections"],
    ["Corporate events", "/images/flooring-product.png", "/packages"],
    ["Cultural & community", "/images/tables-product.png", "/collections"],
    ["Outdoor parties", "/images/marquee-product.png", "/collections"],
  ];
  const popular = [
    [
      "White Bistro Chair",
      "Chairs",
      "From $8.50 ea",
      "/images/chairs-product.png",
      "/product-natural-bentwood-chair",
    ],
    [
      "1.8m Trestle Table",
      "Tables",
      "From $32.00",
      "/images/tables-product.png",
      "/products",
    ],
    [
      "Mushroom Gas Heater",
      "Heating",
      "From $75.00",
      "/images/lighting-product.png",
      "/products",
    ],
    [
      "3m × 6m Pop-up Marquee",
      "Marquees",
      "From $390.00",
      "/images/marquee-product.png",
      "/products",
    ],
  ];
  const services = [
    [
      "Event equipment hire",
      "Furniture, tableware, marquees and lighting, prepared for your date.",
      "From $420",
      "/images/hero-event.png",
    ],
    [
      "Marquee hire",
      "Weather-ready structures with flooring, walling and installation options.",
      "From $1,850",
      "/images/marquee-product.png",
    ],
    [
      "Outdoor wedding hire",
      "Coordinated ceremony and reception equipment for garden venues.",
      "From $2,450",
      "/images/decor-product.png",
    ],
    [
      "Corporate presentation",
      "Staging, seating, tables and practical lighting for business events.",
      "From $1,500",
      "/images/flooring-product.png",
    ],
  ];
  const reviews = [
    {
      initials: "MJ",
      name: "Mia & James",
      address: "Richmond, VIC",
      event: "Backyard wedding · 86 guests",
      date: "Hired in November 2025",
      rating: "5.0",
      count: "18 reviews",
      quote:
        "The team made our backyard wedding feel completely manageable. Delivery was on time, every item was spotless and the warm lighting looked beautiful.",
    },
    {
      initials: "OC",
      name: "Olivia Chen",
      address: "Docklands, VIC",
      event: "Corporate celebration · 140 guests",
      date: "Hired in March 2026",
      rating: "4.9",
      count: "11 reviews",
      quote:
        "Clear quotation, friendly advice and excellent furniture. The delivery window was accurate and the whole corporate event ran smoothly.",
    },
    {
      initials: "SP",
      name: "Sarah Patel",
      address: "Brighton, VIC",
      event: "Garden birthday · 64 guests",
      date: "Hired in February 2026",
      rating: "4.8",
      count: "7 reviews",
      quote:
        "The products were spotless and the collection process was simple. The team helped us choose the correct quantities and we would happily hire again.",
    },
  ];
  return (
    <div className="public-site home-v4">
      <PublicHeader active="Home" />
      <main>
        <section className="home-hero">
          <img
            src="/images/hero-event.png"
            alt="Beautiful outdoor wedding reception under a marquee at dusk"
          />
          <div className="home-hero-copy">
            <div className="eyebrow">Melbourne’s event hire team</div>
            <h1>Everything you need for a beautiful, stress-free event.</h1>
            <p>
              Plan, hire and bring it all together with quality event furniture,
              marquees, lighting and practical support from one Melbourne team.
            </p>
            <div className="hero-actions">
              <a className="public-cta" href="/request-quote">
                Request a quote
              </a>
              <a className="hero-light" href="/products">
                Browse event hire
              </a>
            </div>
          </div>
        </section>
        <section className="planning-search">
          <div className="search-title">
            <div>
              <b>What are you planning?</b>
              <span>
                Tell us the essentials and we’ll help shape your hire list.
              </span>
            </div>
            <a href="/request-quote">Prefer a detailed brief? →</a>
          </div>
          <div className="search-fields home-availability-fields">
            <label>
              <span>EVENT TYPE</span>
              <select defaultValue="Wedding or engagement">
                {eventTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              <span>EVENT DATE</span>
              <input type="date" defaultValue="2026-11-14" />
            </label>
            <label>
              <span>RETURN DATE</span>
              <input type="date" defaultValue="2026-11-15" />
            </label>
            <label>
              <span>LOCATION</span>
              <input defaultValue="Melbourne VIC" />
            </label>
            <label>
              <span>NUMBER OF GUESTS</span>
              <input type="number" min="1" defaultValue="80" />
            </label>
            <a href="/products">Check availability</a>
          </div>
        </section>
        <section className="mini-benefits">
          <span>
            <i>✓</i>
            <b>
              Melbourne-wide delivery<small>Metro and regional quotes</small>
            </b>
          </span>
          <span>
            <i>✓</i>
            <b>
              Flexible hire<small>Products, packages or support</small>
            </b>
          </span>
          <span>
            <i>✓</i>
            <b>
              Friendly advice<small>Real help from event people</small>
            </b>
          </span>
          <span>
            <i>✓</i>
            <b>
              Fair pricing<small>Clear, itemised quotations</small>
            </b>
          </span>
        </section>

        <section className="home-section warm">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Browse the range</div>
              <h2>Start with what you need</h2>
              <p>
                Explore our most popular hire categories for events of every
                size.
              </p>
            </div>
            <a href="/products">View all products →</a>
          </div>
          <div className="category-photo-grid">
            {startCards.map((x) => (
              <a href="/products" key={x[0]}>
                <img src={x[2]} alt={x[0]} />
                <span>
                  {x[0]} <b>→</b>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Plan by occasion</div>
              <h2>Planning for a special event?</h2>
              <p>
                Choose your event and explore practical packages, products and
                services.
              </p>
            </div>
            <a href="/collections">Explore all event types →</a>
          </div>
          <div className="occasion-grid">
            {occasions.map((x, i) => (
              <a
                className={i === 0 ? "occasion-main" : ""}
                href={x[2]}
                key={x[0]}
              >
                <img src={x[1]} alt={x[0]} />
                <span>{x[0]}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="home-section cool">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Customer favourites</div>
              <h2>Popular with Melbourne hosts</h2>
              <p>Practical favourites for celebrations of every size.</p>
            </div>
            <a href="/products">Browse all products →</a>
          </div>
          <div className="popular-grid">
            {popular.map((x) => (
              <article key={x[0]}>
                <a href={x[4]}>
                  <img src={x[3]} alt={x[0]} />
                </a>
                <div>
                  <small>{x[1]}</small>
                  <h3>{x[0]}</h3>
                  <span>
                    ★★★★★ <em>4.9</em>
                  </span>
                  <b>{x[2]}</b>
                  <a href={x[4]}>＋</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section warm">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Services that fit your event</div>
              <h2>A simpler way to hire</h2>
              <p>Start with a package or select only the support you need.</p>
            </div>
            <a href="/planning">View all services →</a>
          </div>
          <div className="service-grid">
            {services.map((x) => (
              <article key={x[0]}>
                <img src={x[3]} alt={x[0]} />
                <div>
                  <small>EVENT HIRE SERVICE</small>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                  <b>{x[2]}</b>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section process">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Simple from start to finish</div>
              <h2>From idea to event day in four easy steps</h2>
            </div>
          </div>
          <div>
            {[
              [
                "1",
                "Choose dates & products",
                "Tell us the event date, venue and what you need.",
              ],
              [
                "2",
                "Select package or delivery",
                "Choose self-pickup, delivery, setup or a tailored package.",
              ],
              [
                "3",
                "We confirm the details",
                "We check availability and send a clear final quotation.",
              ],
              [
                "4",
                "Enjoy your event",
                "Track the order while we prepare, deliver and collect.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                <a href="/request-quote">Learn more →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="help-split">
          <div>
            <div className="eyebrow">Need a little guidance?</div>
            <h2>Need help bringing it all together?</h2>
            <p>
              Our event team can recommend quantities, combinations and
              logistics for your space, guest count and budget.
            </p>
            <div className="guidance-points">
              <span>
                <b>✓</b> Product quantities for your guest count
              </span>
              <span>
                <b>✓</b> Venue access and delivery planning
              </span>
              <span>
                <b>✓</b> Wet-weather and backup options
              </span>
              <span>
                <b>✓</b> A clear, itemised hire estimate
              </span>
            </div>
            <div className="guidance-actions">
              <a href="/contact">Talk to our team →</a>
              <a href="/planning">Start an event brief</a>
            </div>
          </div>
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire team helping a customer plan an event"
          />
        </section>

        <section className="home-section warm">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Real event inspiration</div>
              <h2>See how it comes together</h2>
              <p>
                Explore real combinations of furniture, lighting, marquees and
                styling.
              </p>
            </div>
            <a href="/gallery">View the gallery →</a>
          </div>
          <div className="inspiration-grid">
            <a className="inspiration-main" href="/gallery">
              <img
                src="/images/lighting-product.png"
                alt="Outdoor wedding reception with warm lighting"
              />
              <span>Outdoor wedding reception</span>
            </a>
            <a href="/gallery">
              <img src="/images/hero-event.png" alt="Marquee wedding" />
              <span>Marquee wedding</span>
            </a>
            <a href="/gallery">
              <img
                src="/images/flooring-product.png"
                alt="Corporate function"
              />
              <span>Corporate function</span>
            </a>
            <a href="/gallery">
              <img src="/images/decor-product.png" alt="Cultural celebration" />
              <span>Cultural celebration</span>
            </a>
            <a href="/gallery">
              <img src="/images/marquee-product.png" alt="Garden celebration" />
              <span>Garden celebration</span>
            </a>
          </div>
        </section>

        <section className="home-section testimonial">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Verified event reviews</div>
              <h2>Trusted for events that matter</h2>
              <p>Real feedback from customers across Melbourne and Victoria.</p>
            </div>
          </div>
          <div className="testimonial-layout">
            <aside>
              <b>4.9</b>
              <span>★★★★★</span>
              <small>Average rating from verified event hires</small>
            </aside>
            <div className="review-slider">
              {reviews.map((review, i) => (
                <blockquote
                  className={reviewIndex === i ? "active" : ""}
                  key={review.name}
                >
                  <header>
                    <i aria-hidden="true">{review.initials}</i>
                    <div>
                      <b>{review.name}</b>
                      <small>{review.address}</small>
                      <em>✓ Verified hire</em>
                    </div>
                    <div className="review-rating">
                      <span>★★★★★</span>
                      <b>{review.rating}</b>
                      <small>{review.count}</small>
                    </div>
                  </header>
                  <p>“{review.quote}”</p>
                  <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #e2e8eb" }}>
                    <div style={{ lineHeight: 1.5, color: "#17364e", fontSize: "14px", paddingRight: "10px", flexWrap: "wrap", minWidth: 0 }}>
                      <span style={{ fontWeight: 600 }}>{review.event.replace('·', '-')}</span>
                      <span style={{ margin: "0 8px", color: "#a0aec0" }}>|</span>
                      <span style={{ fontWeight: 600, color: "#4a5568" }}>{review.date}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <nav style={{ display: "flex", alignItems: "center", gap: "12px", margin: 0, minHeight: "auto", borderTop: "none", paddingTop: 0 }}>
                        <button
                          aria-label="Previous review"
                          onClick={() => setReviewIndex((reviewIndex + 2) % 3)}
                          style={{ width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "#f0f4f8", display: "grid", placeItems: "center", cursor: "pointer", color: "#17364e" }}
                        >
                          ←
                        </button>
                        <span aria-live="polite" style={{ fontSize: "14px", minWidth: "auto", color: "#17364e", fontWeight: 600 }}>
                          {reviewIndex + 1} / {reviews.length}
                        </span>
                        <button
                          aria-label="Next review"
                          onClick={() => setReviewIndex((reviewIndex + 1) % 3)}
                          style={{ width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "#f0f4f8", display: "grid", placeItems: "center", cursor: "pointer", color: "#17364e" }}
                        >
                          →
                        </button>
                      </nav>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="service-area-home">
          <img
            src="/images/warehouse-team.png"
            alt="Event hire delivery team in Melbourne"
          />
          <div>
            <div className="eyebrow">Delivery & collection across Victoria</div>
            <h2>Event hire across Melbourne</h2>
            <p>
              Professional delivery, setup and collection for homes, venues,
              gardens and corporate spaces.
            </p>
            <div className="area-search">
              <input placeholder="Enter your suburb or postcode" />
              <a href="/contact">Check area</a>
            </div>
            <small>
              Warehouse pickup is available by appointment for eligible items.
            </small>
          </div>
        </section>

        <section className="home-section articles">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Planning tips & inspiration</div>
              <h2>Helpful ideas for a smoother event</h2>
            </div>
            <a href="/blog">Visit the planning guide →</a>
          </div>
          <div>
            {[
              [
                "How many chairs and tables do I need?",
                "/images/chairs-product.png",
              ],
              [
                "Choosing the right marquee size",
                "/images/marquee-product.png",
              ],
              [
                "Outdoor dinner party checklist",
                "/images/lighting-product.png",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <img src={x[1]} alt={x[0]} />
                <small>PLANNING GUIDE</small>
                <h3>{x[0]}</h3>
                <a href="/blog">Read guide →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section faq">
          <div className="home-heading">
            <div>
              <div className="eyebrow">Before you book</div>
              <h2>Questions before you book?</h2>
            </div>
            <a href="/help">View all FAQs →</a>
          </div>
          <div>
            {[
              "How long is the standard hire period?",
              "Do you deliver, set up and collect?",
              "Can I collect and return the equipment myself?",
              "What happens if my event date changes?",
              "Is a security bond required?",
            ].map((q, i) => (
              <div
                className={`faq-item ${faqOpen === i ? "open" : ""}`}
                key={q}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                  aria-expanded={faqOpen === i}
                >
                  {q}
                  <span>{faqOpen === i ? "−" : "＋"}</span>
                </button>
                {faqOpen === i && (
                  <p>
                    {i === 0
                      ? "Standard hire normally covers your agreed event period, with delivery and collection windows confirmed in the quotation. Longer hires can be arranged."
                      : "Our team will confirm the exact option, timing and any associated charge in your quotation."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="ready-band">
          <img src="/images/decor-product.png" alt="Event styling details" />
          <div className="ready-copy">
            <div className="eyebrow">Let’s make it easy</div>
            <h2>Ready to start planning?</h2>
            <p>
              Check availability, build a hire list or speak with our Melbourne
              event team.
            </p>
            <div>
              <a href="/request-quote">Request a quote</a>
              <a href="/products">Browse hire range</a>
              <a href="/contact">Talk to the team</a>
            </div>
          </div>
          <img src="/images/lighting-product.png" alt="Warm event lighting" />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(true);
  const [eventType, setEventType] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [page, setPage] = useState(1);
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [returnDate, setReturnDate] = useState("2026-09-14");
  const [postcode, setPostcode] = useState("3000");
  const [guestCount, setGuestCount] = useState(80);
  const categoryRail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, start: 0, left: 0 });
  const [availability, setAvailability] = useState(
    "Set your dates, postcode and guest count, then check availability.",
  );
  const baseListing = [...hireProducts];
  const listing = baseListing
    .filter((p) => {
      const matchesQuery = `${p.name} ${p.category} ${p.summary}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      const eventCategoryMap: Record<string, string[]> = {
        "Wedding or engagement": [
          "Chairs",
          "Tables",
          "Marquees",
          "Lighting",
          "Tableware",
          "Décor",
          "Flooring & staging",
          "Lounge & bar",
        ],
        "Birthday or private party": [
          "Chairs",
          "Tables",
          "Lighting",
          "Décor",
          "Lounge & bar",
        ],
        "Corporate event": [
          "Chairs",
          "Tables",
          "Lighting",
          "Flooring & staging",
          "Lounge & bar",
        ],
        "Outdoor garden party": [
          "Chairs",
          "Tables",
          "Marquees",
          "Lighting",
          "Lounge & bar",
        ],
      };
      const matchesEvent =
        eventType === "All" ||
        eventCategoryMap[eventType]?.includes(p.category);
      const numericPrice = Number(p.price.replace(/[^0-9.]/g, "")) || 0;
      return (
        matchesQuery &&
        matchesCategory &&
        matchesEvent &&
        numericPrice <= maxPrice
      );
    })
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : sort === "za"
          ? b.name.localeCompare(a.name)
          : sort === "low"
            ? parseFloat(a.price.replace(/[^0-9.]/g, "")) -
            parseFloat(b.price.replace(/[^0-9.]/g, ""))
            : sort === "high"
              ? parseFloat(b.price.replace(/[^0-9.]/g, "")) -
              parseFloat(a.price.replace(/[^0-9.]/g, ""))
              : sort === "new"
                ? b.slug.localeCompare(a.slug)
                : 0,
    );
  const pageSize = 9;
  const pageCount = Math.max(1, Math.ceil(listing.length / pageSize));
  const visibleProducts = listing.slice((page - 1) * pageSize, page * pageSize);
  const goToPage = (next: number) => {
    setPage(Math.min(pageCount, Math.max(1, next)));
    document
      .querySelector(".results-head")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setAvailableOnly(false);
    setEventType("All");
    setMaxPrice(3000);
    setPage(1);
  };
  return (
    <div className="public-site approved-catalogue">
      <PublicHeader active="Hire Products" />
      <main>
        <section className="catalogue-hero">
          <img
            src="/images/hero-event.png"
            alt="A complete Melbourne event hire setup"
          />
          <div>
            <div className="product-crumb">
              <a href="/">Home</a>
              <span>›</span>Hire Products
            </div>
            <div className="eyebrow">Product hire for every event</div>
            <h1>Everything for your event, in one place.</h1>
            <p>
              Browse beautifully prepared furniture, marquees, lighting,
              tableware and décor.
            </p>
          </div>
        </section>
        <section className="planning-search catalogue-planner">
          <div className="search-title">
            <div>
              <b>See what’s available for your event</b>
              <span>
                Set your dates, location and guest count to check relevant hire
                stock.
              </span>
            </div>
            <small>{availability}</small>
          </div>
          <div className="search-fields catalogue-availability-fields">
            <label>
              <span>EVENT TYPE</span>
              <select
                value={eventType === "All" ? eventTypes[0] : eventType}
                onChange={(e) => {
                  setEventType(e.target.value);
                  setPage(1);
                }}
              >
                {eventTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              <span>EVENT DATE</span>
              <input
                id="event-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </label>
            <label>
              <span>RETURN DATE</span>
              <input
                id="return-date"
                type="date"
                min={eventDate}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </label>
            <label>
              <span>POSTCODE</span>
              <input
                id="event-postcode"
                inputMode="numeric"
                value={postcode}
                onChange={(e) =>
                  setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
              />
            </label>
            <label>
              <span>NUMBER OF GUESTS</span>
              <input
                type="number"
                min="1"
                value={guestCount}
                onChange={(e) =>
                  setGuestCount(Math.max(1, Number(e.target.value) || 1))
                }
              />
            </label>
            <button
              onClick={() =>
                setAvailability(
                  eventDate && returnDate && postcode.length === 4
                    ? `${hireProducts.length} products checked for ${eventDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")} · ${guestCount} guests · ${postcode}`
                    : "Complete both dates and a four-digit postcode.",
                )
              }
            >
              Check availability
            </button>
          </div>
        </section>
        <section className="category-rail">
          <div className="eyebrow">Browse your way</div>
          <div className="rail-head">
            <h2>Browse by subcategory</h2>
            <div className="rail-actions">
              <button
                aria-label="Previous categories"
                onClick={() =>
                  categoryRail.current?.scrollBy({
                    left: -460,
                    behavior: "smooth",
                  })
                }
              >
                ←
              </button>
              <button
                aria-label="Next categories"
                onClick={() =>
                  categoryRail.current?.scrollBy({
                    left: 460,
                    behavior: "smooth",
                  })
                }
              >
                →
              </button>
              <button onClick={() => setCategory("All")}>
                View all categories
              </button>
            </div>
          </div>
          <div
            ref={categoryRail}
            className="category-drag-rail"
            onPointerDown={(e) => {
              drag.current = {
                active: true,
                start: e.clientX,
                left: categoryRail.current?.scrollLeft || 0,
              };
              categoryRail.current?.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (drag.current.active && categoryRail.current)
                categoryRail.current.scrollLeft =
                  drag.current.left - (e.clientX - drag.current.start);
            }}
            onPointerUp={(e) => {
              drag.current.active = false;
              categoryRail.current?.releasePointerCapture(e.pointerId);
            }}
            onPointerCancel={() => {
              drag.current.active = false;
            }}
          >
            {categories.map((c) => (
              <button
                className={category === c[0] ? "active" : ""}
                onClick={() => setCategory(c[0])}
                key={c[0]}
              >
                <img src={c[2]} alt={c[0]} />
                <b>{c[0]}</b>
              </button>
            ))}
          </div>
        </section>
        <section className="catalogue-search">
          <label>
            ⌕
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={"Search “Tiffany chair”, “heater” or “6m marquee”"}
            />
            <button type="button">Search</button>
          </label>
          <span>
            Sort by{" "}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="new">Newest first</option>
            </select>
          </span>
        </section>
        <section className="catalogue-workspace">
          <aside className="catalogue-filters">
            <div className="filter-card-head">
              <div>
                <div className="eyebrow">Refine products</div>
                <h3>Narrow your results</h3>
              </div>
              <button onClick={clearFilters}>Clear all</button>
            </div>
            <fieldset>
              <legend>Availability</legend>
              <label>
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                />
                Available for my dates<small>42</small>
              </label>
              <label>
                <input type="checkbox" />
                Show alternatives<small>8</small>
              </label>
            </fieldset>
            <fieldset>
              <legend>Category</legend>
              <label>
                <input
                  type="radio"
                  name="category"
                  checked={category === "All"}
                  onChange={() => setCategory("All")}
                />
                All products<small>{hireProducts.length}</small>
              </label>
              {["Chairs", "Tables", "Marquees", "Lighting", "Tableware"].map(
                (x, i) => (
                  <label key={x}>
                    <input
                      type="radio"
                      name="category"
                      checked={category === x}
                      onChange={() => setCategory(x)}
                    />
                    {x}
                    <small>{18 - i * 2}</small>
                  </label>
                ),
              )}
            </fieldset>
            <fieldset>
              <legend>Event type</legend>
              <label>
                <input
                  type="radio"
                  name="event"
                  checked={eventType === "All"}
                  onChange={() => {
                    setEventType("All");
                    setPage(1);
                  }}
                />
                All event types
              </label>
              {eventTypes.map((x) => (
                <label key={x}>
                  <input
                    type="radio"
                    name="event"
                    checked={eventType === x}
                    onChange={() => {
                      setEventType(x);
                      setPage(1);
                    }}
                  />
                  {x}
                </label>
              ))}
            </fieldset>
            <fieldset className="price-range-filter">
              <legend>Price per item/event</legend>
              <div>
                <span>$0</span>
                <output>${maxPrice.toLocaleString()}</output>
              </div>
              <input
                aria-label="Maximum price"
                type="range"
                min="0"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <small>
                Showing items priced up to ${maxPrice.toLocaleString()}
              </small>
            </fieldset>
          </aside>
          <div className="catalogue-results">
            <div className="results-head">
              <div>
                <h2>{listing.length} products</h2>
                <small>{availability}</small>
              </div>
              <div>
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  ▦
                </button>
                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  ☷
                </button>
              </div>
            </div>
            <div className="filter-chips">
              {availableOnly && (
                <span>
                  Available for my dates{" "}
                  <button onClick={() => setAvailableOnly(false)}>×</button>
                </span>
              )}
              {category !== "All" && (
                <span>
                  {category}{" "}
                  <button onClick={() => setCategory("All")}>×</button>
                </span>
              )}
              {eventType !== "All" && (
                <span>
                  {eventType}{" "}
                  <button onClick={() => setEventType("All")}>×</button>
                </span>
              )}
              <button onClick={clearFilters}>Clear all</button>
            </div>
            <div
              className={`reference-product-grid ${view === "list" ? "list-view" : ""}`}
            >
              {visibleProducts.map((p, i) => (
                <article key={p.slug}>
                  <a className="product-image" href={`/product-${p.slug}`}>
                    <img src={p.image} alt={p.name} />
                    <em>
                      {i % 4 === 0 ? "POPULAR" : i % 5 === 0 ? "PREMIUM" : ""}
                    </em>
                    <i>♡</i>
                  </a>
                  <div>
                    <small>{p.category}</small>
                    <h3>
                      <a href={`/product-${p.slug}`}>{p.name}</a>
                    </h3>
                    <span className="stars">
                      ★ {p.rating ?? `4.${9 - (i % 3)}`} <small>({p.reviews ?? 12 + i} reviews)</small>
                    </span>
                    <p>● &nbsp;Available · Professional unit prepared</p>
                    <div className="colour-dot">
                      ● &nbsp;{(i % 3) + 1} colour{i % 3 ? "s" : ""}
                    </div>
                    <b className="catalogue-price">
                      <strong>{p.price}</strong>{" "}
                      <small>
                        per item
                        <br />
                        GST calculated at checkout
                      </small>
                    </b>
                    <footer>
                      <a href={`/product-${p.slug}`}>Rent now</a>
                      <a href={`/basket?add=${p.slug}`}>Book now</a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
            {listing.length === 0 && (
              <div className="empty-results">
                <h3>No matching products</h3>
                <p>
                  Try another search or clear the filters to see the complete
                  hire range.
                </p>
                <button onClick={clearFilters}>Clear filters</button>
              </div>
            )}
            {listing.length > 0 && (
              <nav className="catalogue-pages" aria-label="Product pages">
                <button
                  disabled={page === 1}
                  onClick={() => goToPage(page - 1)}
                >
                  ← Previous
                </button>
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                  <button
                    className={page === n ? "active" : ""}
                    aria-current={page === n ? "page" : undefined}
                    onClick={() => goToPage(n)}
                    key={n}
                  >
                    {n}
                  </button>
                ))}
                <button
                  disabled={page === pageCount}
                  onClick={() => goToPage(page + 1)}
                >
                  Next →
                </button>
              </nav>
            )}
            <section className="catalogue-advice">
              <img
                src="/images/lighting-product.png"
                alt="Outdoor event planning"
              />
              <div>
                <div className="eyebrow">Helpful hire advice</div>
                <h2>Plan with confidence</h2>
                <p>
                  Choose products for your guest count, venue access and
                  weather. Our team can help with quantities, practical layouts
                  and safe setup.
                </p>
                <b>How many chairs and tables do I need? →</b>
                <b>Choosing the right marquee size →</b>
                <b>Outdoor event heating checklist →</b>
              </div>
            </section>
          </div>
        </section>
        <section className="catalogue-cta">
          <div>
            <small>NEED A COMPLETE EVENT PACKAGE?</small>
            <h2>Let’s make planning easier.</h2>
            <p>
              Tell us your guest count, venue and date. We’ll recommend products
              that work together.
            </p>
          </div>
          <div style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
            <a href="/request-quote">Get a tailored quote</a>
            <a href="/contact">Talk to our team</a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function ProductDetail({ slug }: { slug: string }) {
  const p = hireProducts.find((x) => x.slug === slug) || hireProducts[0];
  const gallery = [
    p.image,
    "/images/hero-event.png",
    "/images/warehouse-team.png",
    "/images/tables-product.png",
    "/images/lighting-product.png",
  ];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [zoomed, setZoomed] = useState(false);
  const [quantity, setQuantity] = useState(40);
  const [startDate, setStartDate] = useState("2026-09-12");
  const [returnDate, setReturnDate] = useState("2026-09-14");
  const [startTime, setStartTime] = useState("16:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const [checked, setChecked] = useState(false);
  const sameCategory = hireProducts.filter(
    (x) => x.category === p.category && x.slug !== p.slug,
  );
  const related = [
    ...sameCategory,
    ...hireProducts.filter(
      (x) => x.category !== p.category && x.slug !== p.slug,
    ),
  ].slice(0, 10);
  const dayMs = 24 * 60 * 60 * 1000;
  const rentalDays = Math.max(
    1,
    Math.ceil(
      (new Date(`${returnDate}T00:00:00`).getTime() -
        new Date(`${startDate}T00:00:00`).getTime()) /
      dayMs,
    ),
  );
  const unitDaily = Number(p.price.replace(/[^0-9.]/g, "")) || 0;
  const hireSubtotal = unitDaily * quantity * rentalDays;
  const bond = hireSubtotal >= 1000 ? 200 : hireSubtotal > 300 ? 100 : 50;
  const gst = hireSubtotal * 0.1;
  const total = hireSubtotal + bond + gst;
  const scrollToSection = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="public-site approved-detail">
      <PublicHeader active="Hire Products" />
      <main>
        <div className="product-crumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/products">Hire Products</a>
          <span>›</span>
          <a href={`/products#${p.category}`}>{p.category}</a>
          <span>›</span>
          {p.name}
        </div>
        <section className="product-detail">
          <div
            className={`product-gallery ${zoomed ? "zoomed" : ""}`}
          >
            <div className="detail-thumbs">
              {gallery.map((image, n) => (
                <button
                  className={selectedImage === image ? "active" : ""}
                  onClick={() => setSelectedImage(image)}
                  key={`${image}-${n}`}
                >
                  <img src={image} alt={`${p.name} view ${n + 1}`} />
                </button>
              ))}
            </div>
            <button
              className="main-product-image"
              onClick={() => setZoomed(!zoomed)}
              aria-label="Toggle product image zoom"
            >
              <img
                src={selectedImage}
                alt={p.name}
              />
            </button>
            <div className="image-assurance">
              <span>
                ◉ Real product image supplied for this rental item
              </span>
              <button onClick={() => setZoomed(!zoomed)}>
                ⌕ {zoomed ? "Reset zoom" : "Zoom image"}
              </button>
            </div>
          </div>
          <div className="product-copy">
            <div className="detail-badges">
              POPULAR {checked && <span>AVAILABLE FOR YOUR DATES</span>}
            </div>
            <h1>{p.name}</h1>
            <div className="rating">
              ★★★★★ <span>{p.rating ?? 4.7} ({p.reviews ?? 0} reviews) · Write a review</span>
            </div>
            <p>{p.description}</p>
            <h3>Product specification</h3>
            <div className="product-spec-summary">
              <span><small>Dimensions</small><b>{p.dimensions}</b></span>
              <span><small>Capacity</small><b>{p.capacity}</b></span>
              <span><small>Material / finish</small><b>{p.finish}</b></span>
              <span><small>Hire minimum</small><b>{p.minimum}</b></span>
            </div>
            <section className="booking-panel-detail">
              <h3>When do you need it?</h3>
              <p className="date-format-note">
                Enter dates in day / month / year order.
              </p>
              <div className="booking-date-grid">
                <label>
                  Event / start date
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setChecked(false);
                    }}
                  />
                  <small>{startDate.split("-").reverse().join(" / ")}</small>
                </label>
                <label>
                  Start time
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => {
                      setStartTime(e.target.value);
                      setChecked(false);
                    }}
                  />
                </label>
                <label>
                  Return date
                  <input
                    type="date"
                    min={startDate}
                    value={returnDate}
                    onChange={(e) => {
                      setReturnDate(e.target.value);
                      setChecked(false);
                    }}
                  />
                  <small>{returnDate.split("-").reverse().join(" / ")}</small>
                </label>
                <label>
                  Return time
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => {
                      setReturnTime(e.target.value);
                      setChecked(false);
                    }}
                  />
                </label>
              </div>
              <div className="quantity-availability-row">
                <label>
                  Quantity{" "}
                  <span>
                    <button
                      onClick={() => {
                        setQuantity(Math.max(1, quantity - 1));
                        setChecked(false);
                      }}
                    >
                      −
                    </button>
                    <input
                      inputMode="numeric"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(Math.max(1, Number(e.target.value) || 1));
                        setChecked(false);
                      }}
                    />
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                        setChecked(false);
                      }}
                    >
                      ＋
                    </button>
                  </span>
                </label>
                {checked && (
                  <small>
                    <b>155 available</b> on your selected dates
                  </small>
                )}
              </div>
              <button
                disabled={
                  !startDate ||
                  !returnDate ||
                  new Date(returnDate) < new Date(startDate)
                }
                onClick={() => setChecked(true)}
              >
                {checked
                  ? `✓ ${quantity} available for ${startDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")}`
                  : "Check availability"}
              </button>
            </section>
            <section className="price-panel rental-breakdown">
              <small>Estimated rental total</small>
              <b>${total.toFixed(2)}</b>
              <p>
                {quantity} × ${unitDaily.toFixed(2)} per day × {rentalDays} day
                {rentalDays === 1 ? "" : "s"}
              </p>
              <hr />
              <span>
                Selected product <b>{p.name}</b>
              </span>
              <span>
                Hire subtotal <b>${hireSubtotal.toFixed(2)}</b>
              </span>
              <span>
                Refundable security bond <b>${bond.toFixed(2)}</b>
              </span>
              <span>
                GST (10%) <b>${gst.toFixed(2)}</b>
              </span>
              <span className="price-total">
                Total payable <b>${total.toFixed(2)}</b>
              </span>
              <em>
                Bond is $50 up to $300 hire value, $100 above $300, and $200
                from $1,000. Final availability and delivery charges are
                confirmed during booking.
              </em>
              <a href={`/request-quote?product=${p.slug}`}>Add to quote</a>
              <a href={`/basket?book=${p.slug}`}>Book this product</a>
            </section>
          </div>
        </section>
        <nav className="detail-tabs" aria-label="Product detail sections">
          <button onClick={() => scrollToSection("overview")}>Overview</button>
          <button onClick={() => scrollToSection("included")}>
            What’s included
          </button>
          <button onClick={() => scrollToSection("delivery")}>
            Delivery & setup
          </button>
          <button onClick={() => scrollToSection("safety")}>Safety</button>
          <button onClick={() => scrollToSection("reviews")}>Reviews</button>
        </nav>
        <section className="detail-content" id="overview">
          <div className="eyebrow">Product details</div>
          <h2>At a glance</h2>
          <p>
            Important dimensions and practical details for planning your layout.
          </p>
          <div className="glance-grid">
            {[
              ["Overall width", "40 cm"],
              ["Overall height", "92 cm"],
              ["Seat height", "45 cm"],
              ["Seat width", "38 × 40 cm"],
              ["Material", p.finish],
              ["Weight", "4.3 kg"],
              ["Use", "Indoor / outdoor"],
              ["Stackable", "8 high"],
            ].map((x) => (
              <span key={x[0]}>
                <small>{x[0]}</small>
                <b>{x[1]}</b>
              </span>
            ))}
          </div>
          <section className="layout-guide">
            <img src={p.image} alt="Chair dimensions" />
            <div>
              <h3>Check your venue layout</h3>
              <p>
                Use dimensions to plan table spacing and make sure wheelchair
                paths and accessible aisle clearance are allowed.
              </p>
              <button>Download dimension guide</button>
            </div>
          </section>
          <section className="detail-split reverse" id="included">
            <div>
              <div className="eyebrow">Your hire includes</div>
              <h2>Included with your hire</h2>
              {[
                "Selected chair frame and size",
                "Selected padded seat cushion",
                "Professional cleaning before hire",
                "Protective transport and handling",
              ].map((x) => (
                <p key={x}>✓ &nbsp;{x}</p>
              ))}
            </div>
            <img src={p.image} alt="Chair finish detail" />
          </section>
          <section className="detail-split" id="delivery">
            <img
              src="/images/warehouse-team.png"
              alt="Delivery and event setup"
            />
            <div>
              <div className="eyebrow">Delivery & collection</div>
              <h2>How it gets to your event</h2>
              {[
                [
                  "Delivery",
                  "Available across Melbourne. Pricing depends on distance, access and order size.",
                ],
                [
                  "Customer pickup",
                  "Available by confirmed appointment for suitable orders.",
                ],
                [
                  "Setup",
                  "Optional placement service. Venue layout and access must be confirmed.",
                ],
                [
                  "Minimum order",
                  "Applies to delivered orders and is confirmed in your quote.",
                ],
              ].map((x) => (
                <p key={x[0]}>
                  <b>{x[0]}</b>
                  {x[1]}
                </p>
              ))}
            </div>
          </section>
          <section className="safety-band" id="safety">
            <div>
              <div className="eyebrow">Care & responsibility</div>
              <h2>Use it safely</h2>
              <p>
                Simple handling and venue checks help protect guests and
                equipment.
              </p>
            </div>
            <ol>
              <li>
                <b>Level surface</b>Place chairs on stable, level flooring.
              </li>
              <li>
                <b>Weather awareness</b>Move under cover during wind or severe
                weather.
              </li>
              <li>
                <b>Safe use</b>Do not stand on chairs or exceed rated seating
                use.
              </li>
              <li>
                <b>Return condition</b>Keep clean, dry and ready for collection.
              </li>
            </ol>
          </section>
          <section className="review-band" id="reviews">
            <div className="eyebrow">Verified customer feedback</div>
            <h2>What customers say</h2>
            <div>
              <aside>
                <b>4.9</b>
                <span>★★★★★</span>
                <small>Based on 142 verified hires</small>
              </aside>
              <blockquote>
                “The chairs arrived spotless and looked beautiful for our
                ceremony. Quantities and delivery timing were easy to confirm.”
                <footer>Verified wedding customer · Carlton North</footer>
                <a>Read all 142 reviews</a>
              </blockquote>
            </div>
          </section>
        </section>
        <section className="complete-setup">
          <div className="eyebrow">Frequently hired together</div>
          <h2>Complete your setup</h2>
          <p>Add compatible items without leaving this product.</p>
          <div className="related-grid reference-product-grid">
            {related.slice(0, 8).map((x, i) => (
              <article key={x.slug}>
                <a className="product-image" href={`/product-${x.slug}`}>
                  <img src={x.image} alt={x.name} />
                  <em>{i % 3 === 0 ? "POPULAR" : ""}</em>
                  <i>♡</i>
                </a>
                <div>
                  <small>{x.category}</small>
                  <h3>
                    <a href={`/product-${x.slug}`}>{x.name}</a>
                  </h3>
                  <span className="stars">
                    ★ 4.9 <small>({24 + i})</small>
                  </span>
                  <p>● &nbsp;Available · Professional unit prepared</p>
                  <b className="catalogue-price">
                    from <strong>{x.price}</strong>
                  </b>
                  <footer>
                    <a href={`/product-${x.slug}`}>View details</a>
                    <a href={`/basket?add=${x.slug}`}>Quick add</a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="catalogue-section related-products">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Related hire products</div>
              <h2>You may also like</h2>
            </div>
            <a href="/products">View the complete catalogue →</a>
          </div>
          <div className="related-grid reference-product-grid">
            {related.slice(2, 10).map((x, i) => (
              <article key={x.slug}>
                <a className="product-image" href={`/product-${x.slug}`}>
                  <img src={x.image} alt={x.name} />
                  <em>{i % 4 === 0 ? "POPULAR" : ""}</em>
                  <i>♡</i>
                </a>
                <div>
                  <small>{x.category}</small>
                  <h3>
                    <a href={`/product-${x.slug}`}>{x.name}</a>
                  </h3>
                  <span className="stars">
                    ★ 4.8 <small>({18 + i})</small>
                  </span>
                  <p>{x.summary}</p>
                  <b className="catalogue-price">
                    from <strong>{x.price}</strong>
                  </b>
                  <footer>
                    <a href={`/product-${x.slug}`}>View details</a>
                    <a href={`/basket?add=${x.slug}`}>Quick add</a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const eventPackages = [
  {
    slug: "garden-celebration",
    title: "Garden Celebration",
    event: "Birthday & social",
    guests: "40 guests",
    price: "From $1,480",
    image: "/images/lounge-product.png",
    items:
      "40 bistro chairs · 5 trestle tables · lounge setting · festoon lighting",
  },
  {
    slug: "wedding-reception",
    title: "Wedding Reception",
    event: "Wedding",
    guests: "80 guests",
    price: "From $4,950",
    image: "/images/hero-event.png",
    items:
      "80 bentwood chairs · 10 timber tables · tableware · marquee · lighting",
  },
  {
    slug: "corporate-gathering",
    title: "Corporate Gathering",
    event: "Corporate",
    guests: "100 guests",
    price: "From $3,280",
    image: "/images/tables-product.png",
    items:
      "Banquet seating · staging · lectern · service tables · practical lighting",
  },
  {
    slug: "outdoor-community",
    title: "Outdoor Community Event",
    event: "Community",
    guests: "120 guests",
    price: "From $5,600",
    image: "/images/marquee-product.png",
    items:
      "Clearspan marquee · bistro seating · trestle tables · flooring · lighting",
  },
];

export function ComparePage() {
  const ps = [hireProducts[0], hireProducts[1], hireProducts[2]];
  const rows: [string, (p: HireProduct) => string][] = [
    ["Category", (p) => p.category],
    ["From price", (p) => p.price],
    ["Dimensions", (p) => p.dimensions],
    ["Capacity", (p) => p.capacity],
    ["Finish", (p) => p.finish],
    ["Minimum hire", (p) => p.minimum],
  ];
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero">
          <div className="eyebrow">Product comparison</div>
          <h1>Compare the details that matter.</h1>
          <p>
            Review up to four products side by side, then open a product to
            select dates, variant and quantity.
          </p>
        </section>
        <section className="compare-wrap">
          <div className="compare-table">
            <div className="compare-head">
              <b>Compare</b>
              {ps.map((p) => (
                <article key={p.slug}>
                  <img src={p.image} alt={p.name} />
                  <small>{p.category}</small>
                  <h2>{p.name}</h2>
                  <a href={`/product-${p.slug}`}>View product →</a>
                </article>
              ))}
            </div>
            {rows.map((r) => (
              <div className="compare-row" key={r[0]}>
                <b>{r[0]}</b>
                {ps.map((p) => (
                  <span key={p.slug}>{r[1](p)}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="compare-actions">
            <a className="outline-cta" href="/products">
              ＋ Add or replace product
            </a>
            <a className="public-cta" href="/request-quote">
              Request quote for selected items
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PackagesPage({ detail }: { detail?: string }) {
  const selected = eventPackages.find((x) => x.slug === detail);
  if (selected)
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <div className="product-crumb">
            <a href="/packages">Packages</a>
            <span>›</span>
            {selected.title}
          </div>
          <section className="package-detail">
            <img src={selected.image} alt={selected.title} />
            <div>
              <div className="eyebrow">
                {selected.event} · {selected.guests}
              </div>
              <h1>{selected.title}</h1>
              <p>
                A curated starting point that stays fully editable. Change
                quantities, finishes or substitute products before availability
                and the final price are confirmed.
              </p>
              <div className="package-price">
                {selected.price}
                <small>Indicative package price incl. GST</small>
              </div>
              <h3>Starting inclusions</h3>
              <p>{selected.items}</p>
              <div className="package-options">
                <label>
                  <span>Guest count</span>
                  <input defaultValue={selected.guests.split(" ")[0]} />
                </label>
                <label>
                  <span>Service</span>
                  <select>
                    <option>Delivery & collection</option>
                    <option>Warehouse pickup & return</option>
                  </select>
                </label>
              </div>
              <a className="public-cta" href="/request-quote">
                Customise this package
              </a>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    );
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="image-hero">
          <img src="/images/hero-event.png" alt="Curated event hire package" />
          <div>
            <div className="eyebrow">Editable hire packages</div>
            <h1>Start complete. Make it yours.</h1>
            <p>
              Choose a guest-ready bundle, then adjust quantities, finishes,
              logistics and optional extras around your real venue.
            </p>
            <a className="public-cta" href="/collections">
              Browse by event type
            </a>
          </div>
        </section>
        <section className="public-section">
          <div className="package-grid">
            {eventPackages.map((p) => (
              <article className="package-card" key={p.slug}>
                <img src={p.image} alt={p.title} />
                <div>
                  <small>
                    {p.event} · {p.guests}
                  </small>
                  <h2>{p.title}</h2>
                  <p>{p.items}</p>
                  <footer>
                    <b>{p.price}</b>
                    <a href={`/package-${p.slug}`}>View & customise →</a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function CollectionsPage({ type }: { type?: string }) {
  const title =
    type === "weddings" ? "Wedding hire collection" : "Shop by event";
  const cards = [
    [
      "Weddings",
      "Ceremony, reception, dining and dance-floor essentials.",
      "/images/hero-event.png",
      "/collection-weddings",
    ],
    [
      "Birthdays & parties",
      "Flexible furniture, bar, lighting and styling pieces.",
      "/images/lounge-product.png",
      "/packages",
    ],
    [
      "Corporate events",
      "Presentation, dining, networking and branded-event equipment.",
      "/images/tables-product.png",
      "/packages",
    ],
    [
      "Outdoor events",
      "Marquees, flooring, weather walls, lighting and heaters.",
      "/images/marquee-product.png",
      "/packages",
    ],
  ];
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="collection-image-hero">
          <div>
            <div className="eyebrow">Curated event collections</div>
            <h1>{title}</h1>
            <p>
              {type
                ? "Build a coordinated wedding from ceremony seating to reception dining, lighting and late-night lounge areas."
                : "Browse coordinated products and editable packages selected around the type of event you are planning."}
            </p>
            <a href="#collection-list">Explore collections ↓</a>
          </div>
          <img
            src={
              type ? "/images/hero-event.png" : "/images/marquee-product.png"
            }
            alt={
              type
                ? "Coordinated wedding event collection"
                : "Curated SK Event Hire collection"
            }
          />
        </section>
        <section id="collection-list" className="public-section">
          <div className="collection-grid">
            {cards.map((c) => (
              <a href={c[3]} key={c[0]}>
                <img src={c[2]} alt={c[0]} />
                <span>
                  <small>Explore collection</small>
                  <h2>{c[0]}</h2>
                  <p>{c[1]}</p>
                  <b>View collection →</b>
                </span>
              </a>
            ))}
          </div>
        </section>
        {type && (
          <section className="catalogue-section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">Wedding favourites</div>
                <h2>Build a coordinated look</h2>
              </div>
            </div>
            <div className="product-list-grid">
              {hireProducts.slice(0, 6).map((p) => (
                <article className="product-list-card" key={p.slug}>
                  <a href={`/product-${p.slug}`}>
                    <img src={p.image} alt={p.name} />
                  </a>
                  <div>
                    <small>{p.category}</small>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                    <footer>
                      <b>{p.price}</b>
                      <a href={`/product-${p.slug}`}>View →</a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}

const subscribeBasketLocation = (notify: () => void) => {
  window.addEventListener("popstate", notify);
  return () => window.removeEventListener("popstate", notify);
};
const getBasketRequest = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("add") || params.get("book") || "";
};
const getServerBasketRequest = () => "";

export function BasketPage() {
  const [step, setStep] = useState(0);
  const [otpVerified, setOtpVerified] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("PayID");
  const requestedProduct = React.useSyncExternalStore(
    subscribeBasketLocation,
    getBasketRequest,
    getServerBasketRequest,
  );
  const basketSlugs =
    requestedProduct &&
      hireProducts.some((product) => product.slug === requestedProduct)
      ? [requestedProduct]
      : ["kids-bistro-chair", "aram-bistro-chair", "kids-folding-table"];
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "kids-bistro-chair": 20,
    "aram-bistro-chair": 40,
    "kids-folding-table": 4,
  });
  const [extras, setExtras] = useState<string[]>(["linen"]);
  const toggleExtra = (name: string) =>
    setExtras((x) =>
      x.includes(name) ? x.filter((y) => y !== name) : [...x, name],
    );
  const checkoutSteps = [
    "Basket",
    "Event details",
    "Delivery & return",
    "Extras",
    "Payment",
    "Review",
  ];
  const nextCheckout = () => {
    if (step === 4 && !otpVerified) return;
    setStep((x) => Math.min(5, x + 1));
    window.scrollTo({ top: 150, behavior: "smooth" });
  };
  const basketItems = basketSlugs
    .map((slug) => hireProducts.find((product) => product.slug === slug))
    .filter((product): product is HireProduct => Boolean(product));
  const dailySubtotal = basketItems.reduce(
    (total, product) =>
      total +
      (Number(product.price.replace(/[^0-9.]/g, "")) || 0) *
      (quantities[product.slug] || 1),
    0,
  );
  const threeDayHire = dailySubtotal * 3;
  const subtotalBeforeGst = threeDayHire + 240 + 85 + 49;
  const gst = subtotalBeforeGst * 0.1;
  const estimatedTotal = subtotalBeforeGst + gst;
  return (
    <div className={`public-site checkout-page wizard-step-${step}`}>
      <PublicHeader />
      <main>
        <section className="checkout-intro">
          <div>
            <span>SECURE EVENT HIRE CHECKOUT</span>
            <h1>Complete your booking request</h1>
            <p>
              Confirm your dates, venue, delivery and payment preference. We’ll
              verify stock and logistics before the booking becomes final.
            </p>
          </div>
          <aside>
            <b>Saved securely</b>
            <small>Your progress is protected on this device.</small>
            <a href="/privacy">Read our privacy policy →</a>
          </aside>
        </section>
        <nav className="checkout-steps" aria-label="Booking progress">
          {checkoutSteps.map((x, i) => (
            <button
              type="button"
              onClick={() => {
                if (i > 4 || step !== 4 || otpVerified) setStep(i);
              }}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </nav>
        <div className="wizard-actions wizard-actions-top">
          <button
            type="button"
            onClick={() => setStep((x) => Math.max(0, x - 1))}
            disabled={step === 0}
          >
            ← Back
          </button>
          <span>Step {step + 1} of 6</span>
          {step < 5 && (
            <button className="next" type="button" onClick={nextCheckout}>
              {step === 4 && !otpVerified
                ? "Confirm payment to continue"
                : "Save & continue →"}
            </button>
          )}
        </div>
        <section className="checkout-shell">
          <div className="checkout-main">
            <section className="checkout-card basket-card" hidden={step !== 0}>
              <header>
                <div>
                  <span>YOUR BASKET</span>
                  <h2>Your event hire basket</h2>
                  <p>Check quantities, options and dates before checkout.</p>
                </div>
                <a href="/products">Continue shopping</a>
              </header>
              {basketItems.map((product) => (
                <article className="checkout-item" key={product.slug}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <small>● Available</small>
                    <h3>{product.name}</h3>
                    <p>{product.dimensions}</p>
                    <a href={`/product-${product.slug}`}>View product details</a>
                  </div>
                  <label>
                    Quantity
                    <input
                      type="number"
                      value={quantities[product.slug] || 1}
                      min="1"
                      onChange={(event) =>
                        setQuantities((current) => ({
                          ...current,
                          [product.slug]: Math.max(1, Number(event.target.value) || 1),
                        }))
                      }
                    />
                  </label>
                  <strong>
                    ${(
                      (Number(product.price.replace(/[^0-9.]/g, "")) || 0) *
                      (quantities[product.slug] || 1)
                    ).toFixed(2)}
                    <small>per day · GST at checkout</small>
                  </strong>
                </article>
              ))}
              <footer>
                <b>!</b>
                <span>
                  <strong>Availability adjusted</strong> One item has limited
                  stock across the selected dates.
                </span>
                <a href="/products">View alternatives</a>
              </footer>
            </section>
            <section className="checkout-card" hidden={step !== 1}>
              <header>
                <div>
                  <span>EVENT SCHEDULE</span>
                  <h2>Confirm your hire dates</h2>
                  <p>
                    We use these dates to calculate the hire period and
                    availability.
                  </p>
                </div>
                <em>✓ Saved</em>
              </header>
              <div className="checkout-form two">
                <Field
                  label="Event required from"
                  value="12 Sep 2026 · 11:00 am"
                />
                <Field label="Event starts" value="12 Sep 2026 · 4:00 pm" />
                <Field label="Event ends" value="13 Sep 2026 · 11:00 pm" />
                <Field
                  label="Items returned by"
                  value="14 Sep 2026 · 12:00 pm"
                />
              </div>
              <label className="checkbox-line">
                <input type="checkbox" /> My venue can receive items one day
                early
              </label>
              <div className="days-note">
                <b>3 chargeable days</b>
                <span>
                  Saturday 12 September, Sunday 13 September and Monday 14
                  September.
                </span>
              </div>
            </section>
            <section className="checkout-card" hidden={step !== 1}>
              <header>
                <div>
                  <span>CUSTOMER & EVENT</span>
                  <h2>Your contact details</h2>
                  <p>Enter the booking contact details for this event.</p>
                </div>
                <a href="/contact">Need help?</a>
              </header>
              <div className="checkout-form two">
                <Field label="First name" value="Amelia" />
                <Field label="Last name" value="Thompson" />
                <Field label="Email" value="amelia.t@example.com" />
                <Field label="Mobile" value="0412 345 678" />
                <Field label="Company / organisation" value="Optional" />
                <Field label="ABN / purchase order" value="Optional" />
              </div>
              <h3>Where is the event?</h3>
              <div className="checkout-form two">
                <Field label="Event type" value="Wedding reception" />
                <Field label="Guest count" value="60" />
                <Field label="Venue name" value="Willow & Stone Estate" />
                <Field label="Postcode" value="3000" />
                <Field
                  wide
                  label="Event address"
                  value="18 Garden Lane, Melbourne VIC 3000"
                />
                <Field
                  wide
                  label="On-site contact"
                  value="Jordan Lee · 0412 000 111"
                />
              </div>
              <label className="checkbox-line">
                Event setting:{" "}
                <input type="radio" name="setting" defaultChecked /> Indoor{" "}
                <input type="radio" name="setting" /> Outdoor{" "}
                <input type="radio" name="setting" /> Both
              </label>
            </section>
            <section className="checkout-card" hidden={step !== 2}>
              <header>
                <div>
                  <span>FULFILMENT</span>
                  <h2>Delivery and return</h2>
                  <p>
                    Choose both journeys so labour and timing can be confirmed.
                  </p>
                </div>
              </header>
              <h3>How will you receive the items?</h3>
              <div className="choice-cards">
                {[
                  ["Customer pickup", "Collect from our warehouse"],
                  ["Delivery only", "Delivered to your venue"],
                  ["Delivery & setup", "Delivery, placement and setup"],
                ].map((x, i) => (
                  <label className={i === 2 ? "selected" : ""} key={x[0]}>
                    <input
                      name="receive"
                      type="radio"
                      defaultChecked={i === 2}
                    />
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                    <em>{i === 2 ? "From $240" : ""}</em>
                  </label>
                ))}
              </div>
              <h3>How will the items come back?</h3>
              <div className="choice-cards">
                {[
                  ["Customer return", "Return to our warehouse"],
                  ["SK collection", "We collect after your event"],
                  ["Pack-down + collection", "We pack down and collect"],
                ].map((x, i) => (
                  <label className={i === 1 ? "selected" : ""} key={x[0]}>
                    <input
                      name="return"
                      type="radio"
                      defaultChecked={i === 1}
                    />
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                    <em>{i === 1 ? "From $85" : ""}</em>
                  </label>
                ))}
              </div>
            </section>
            <section className="checkout-card access-card" hidden={step !== 2}>
              <header>
                <div>
                  <span>VENUE ACCESS</span>
                  <h2>Tell us about access</h2>
                  <p>
                    Clear access details help us allocate the right crew and
                    vehicle.
                  </p>
                </div>
              </header>
              <div className="access-layout">
                <img
                  src="/images/warehouse-team.png"
                  alt="Event delivery and venue access"
                />
                <div className="checkout-form two">
                  <Field
                    label="Parking / loading area"
                    value="Venue loading bay"
                  />
                  <Field label="Distance to setup" value="Under 25 metres" />
                  <Field
                    label="Stairs or lift"
                    value="Ground floor · no stairs"
                  />
                  <Field label="Stairs / doorway width" value="1.2 metres" />
                  <Field label="Ground surface" value="Lawn and paved path" />
                  <Field
                    label="Power available"
                    value="Yes · standard outlet"
                  />
                  <Field
                    label="Anchoring permitted"
                    value="Ground stakes permitted"
                  />
                  <Field
                    label="Venue restrictions"
                    value="No vehicle access after 3:00 pm"
                  />
                </div>
              </div>
            </section>
            <section className="checkout-card extras-card" hidden={step !== 3}>
              <header>
                <div>
                  <span>OPTIONAL ADD-ONS</span>
                  <h2>Useful extras</h2>
                  <p>
                    Add practical extras now and we’ll confirm final stock and
                    pricing.
                  </p>
                </div>
              </header>
              <div>
                {[
                  [
                    "linen",
                    "White fitted table linen",
                    "$16 each",
                    "/images/tableware-product.png",
                  ],
                  [
                    "pickup",
                    "Assisted at SK pickup",
                    "$55 service",
                    "/images/warehouse-team.png",
                  ],
                  [
                    "damage",
                    "Event damage protection",
                    "$49 per booking",
                    "/images/decor-product.png",
                  ],
                ].map((x) => (
                  <label
                    className={extras.includes(x[0]) ? "selected" : ""}
                    key={x[0]}
                  >
                    <img src={x[3]} alt="" />
                    <span>
                      <b>{x[1]}</b>
                      <small>{x[2]}</small>
                    </span>
                    <input
                      type="checkbox"
                      checked={extras.includes(x[0])}
                      onChange={() => toggleExtra(x[0])}
                    />
                  </label>
                ))}
              </div>
              <div className="promo">
                <span>
                  <b>Have a promo code?</b>
                  <small>
                    Promotions are validated before your total updates.
                  </small>
                </span>
                <input defaultValue="CELEBRATE20" />
                <button>Apply</button>
              </div>
            </section>
            <section className="checkout-card payment-card" hidden={step !== 4}>
              <header>
                <div>
                  <span>PAYMENT PREFERENCE</span>
                  <h2>Choose how you’d like to pay</h2>
                  <p>
                    No charge is made until your booking conditions are ready.
                  </p>
                </div>
              </header>
              <div className="payment-options">
                {["PayID", "Bank transfer", "Cash"].map((x) => (
                  <label className={paymentMethod === x ? "selected" : ""} key={x}>
                    <input
                      type="radio"
                      name="pay"
                      checked={paymentMethod === x}
                      onChange={() => {
                        setPaymentMethod(x);
                        setOtpVerified(false);
                      }}
                    />
                    <b>{x}</b>
                  </label>
                ))}
              </div>
              <div className="verify-checkout">
                <span>
                  <b>Confirm payment preference</b>
                  <small>
                    {paymentMethod === "PayID"
                      ? "PayID instructions and a unique payment reference will appear after approval."
                      : paymentMethod === "Bank transfer"
                        ? "Bank account details and your unique booking reference will appear after approval."
                        : "Cash payment must be approved by the event team and receipted when received."}
                  </small>
                </span>
                <button onClick={() => setOtpVerified(true)}>
                  {otpVerified ? "✓ Preference confirmed" : "Confirm preference"}
                </button>
              </div>
            </section>
            <section
              id="final-review"
              className="checkout-card review-card"
              hidden={step !== 5}
            >
              <header>
                <div>
                  <span>FINAL REVIEW</span>
                  <h2>Review your booking request</h2>
                  <p>
                    Check the important details before sending your request.
                  </p>
                </div>
              </header>
              <div className="review-summaries">
                {[
                  [
                    "Event and customer",
                    "Amelia Thompson · Wedding reception · 60 guests",
                  ],
                  ["Delivery and return", "Delivery + setup · SK collection"],
                  ["Payment", `${paymentMethod} · preference confirmed`],
                ].map((x) => (
                  <article key={x[0]}>
                    <b>{x[0]}</b>
                    <p>{x[1]}</p>
                    <button>Edit</button>
                  </article>
                ))}
              </div>
              <label className="checkbox-line">
                <input type="checkbox" defaultChecked /> I agree to the rental
                terms, cancellation policy, damage policy and payment
                conditions.
              </label>
              <footer>
                <button type="button" onClick={() => setStep(4)}>
                  ← Back to payment
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/booking-request-confirmation";
                  }}
                >
                  Send booking request
                </button>
              </footer>
            </section>
          </div>
          <aside className="booking-estimate">
            <span>BOOKING ESTIMATE</span>
            <h2>Your booking estimate</h2>
            <b>Wedding reception</b>
            <small>12–14 September 2026 · Melbourne VIC</small>
            {[
              ["Three-day product hire", `$${threeDayHire.toFixed(2)}`],
              ["GST", `$${gst.toFixed(2)}`],
              ["Delivery and setup", "$240.00"],
              ["Return collection", "$85.00"],
              ["Damage protection", "$49.00"],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </div>
            ))}
            <strong>
              <small>Estimated total</small>${estimatedTotal.toFixed(2)}
            </strong>
            <p>Final total is confirmed after stock and logistics review.</p>
            <button
              onClick={() => {
                setStep(5);
                window.scrollTo({ top: 150, behavior: "smooth" });
              }}
            >
              Continue to review
            </button>
            <small>Secure checkout · Details protected</small>
          </aside>
        </section>
        <section className="checkout-help">
          <div>
            <span>PLANNING SUPPORT</span>
            <h2>Need help before your event?</h2>
            <p>
              Talk to our event team about quantities, venue access, setup or
              schedule changes.
            </p>
          </div>
          <a href="tel:0390000000">Call 03 9000 0000</a>
          <a href="/contact">Message our team</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function BookingRequestConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <section className="confirmation-hero">
          <img
            src="/images/warehouse-team.png"
            alt="SK Event Hire team reviewing a booking request"
          />
          <div>
            <i>✓</i>
            <span>REQUEST RECEIVED</span>
            <h1>We’ve received your booking request.</h1>
            <p>
              Booking SKB-7K4M2 is awaiting availability and logistics approval.
              This request is saved on its own confirmation screen and is not
              yet a confirmed booking.
            </p>
            <dl>
              <div>
                <dt>Event</dt>
                <dd>Wedding reception</dd>
              </div>
              <div>
                <dt>Delivery window</dt>
                <dd>12 Sep · 11:00 am–2:00 pm</dd>
              </div>
              <div>
                <dt>SK collection</dt>
                <dd>14 Sep · 10:00 am–12:00 pm</dd>
              </div>
            </dl>
            <div className="confirmation-actions">
              <a className="primary" href="/booking-confirmation">
                Continue after approval →
              </a>
              <a href="/contact">Contact the booking team</a>
              <a href="/products">Return to products</a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function BookingConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation">
      <PublicHeader />
      <main>
        <section className="booking-confirmation standalone-card">
          <header>
            <div>
              <span>BOOKING CONFIRMED</span>
              <h1>Your booking is confirmed.</h1>
              <p>
                Your stock, crew and payment conditions are approved. Keep this
                operational schedule available for the event.
              </p>
            </div>
            <strong>
              <small>Booking number</small>SKB-10482
            </strong>
          </header>
          <div className="confirmation-timeline">
            {[
              [
                "Saturday 12 September",
                "Delivery and setup · 11:00 am–2:00 pm",
              ],
              ["Saturday 12–13 September", "Event hire period"],
              ["Monday 14 September", "Collection · 10:00 am–12:00 pm"],
            ].map((x, i) => (
              <article key={x[0]}>
                <i>{i + 1}</i>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <em>Scheduled</em>
              </article>
            ))}
          </div>
          <div className="confirmation-details">
            <article>
              <h3>Payment status</h3>
              <p>
                Amount due <b>$880.00</b>
              </p>
              <p>
                Payment methods <b>PayID · bank transfer · approved cash</b>
              </p>
              <a href="/payment">Pay deposit securely</a>
            </article>
            <article>
              <h3>Items confirmed</h3>
              <p>
                20 Kids Bistro Chairs
                <br />40 Aram Bistro Chairs
                <br />4 Kids Folding Tables
                <br />
                Delivery, setup and SK collection
              </p>
              <a href="/contact">Request an item list</a>
            </article>
            <article>
              <h3>Need support?</h3>
              <p>Message the booking team or call 03 9000 0000.</p>
              <a href="/contact">Contact booking team</a>
            </article>
          </div>
          <footer>
            <span>
              <b>Need to change your plans?</b>
              <small>
                Changes depend on availability and may affect pricing.
              </small>
            </span>
            <a href="/contact">Request a booking change</a>
            <a className="danger" href="/contact">
              Cancel booking
            </a>
          </footer>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PaymentJourneyPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState("payid");
  const [verified, setVerified] = useState(false);
  const [paid, setPaid] = useState(false);
  const methods = [
    ["payid", "P", "PayID", "Usually within minutes"],
    ["bank", "$", "Bank transfer", "1–2 business days"],
    ["cash", "⌘", "Cash", "Approval required"],
  ];
  const methodLabel =
    method === "payid" ? "PayID" : method === "bank" ? "Bank transfer" : "Cash";
  const pay = () => {
    if (!verified) {
      setStep(2);
      return;
    }
    setPaid(true);
    setTimeout(() => {
      window.location.href = "/payment-confirmation";
    }, 650);
  };
  return (
    <div className={`public-site payment-page payment-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section className="payment-intro">
          <div>
            <span>SECURE BOOKING PAYMENT</span>
            <h1>Complete your booking payment</h1>
            <p>
              Choose a payment method, verify the authorised payer and review
              the amount before confirming. Your booking is protected against
              duplicate charges.
            </p>
          </div>
          <aside>
            <b>▣ Secure checkout</b>
            <small>
              Payment information is encrypted and never displayed in full.
            </small>
            <a href="/payment-policy">Payment help →</a>
          </aside>
        </section>
        <nav className="payment-steps">
          {[
            "Booking review",
            "Payment method",
            "Verification",
            "Final review",
            "Confirmation",
          ].map((x, i) => (
            <button
              type="button"
              onClick={() => {
                if (i < 3 || verified) setStep(i);
              }}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </nav>
        <div className="wizard-actions">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((x) => Math.max(0, x - 1))}
          >
            ← Back
          </button>
          <span>Step {step + 1} of 5</span>
          {step < 3 && (
            <button
              className="next"
              type="button"
              onClick={() => {
                if (step === 2 && !verified) return;
                setStep((x) => x + 1);
              }}
            >
              {step === 2 && !verified
                ? "Verify code to continue"
                : "Continue →"}
            </button>
          )}
        </div>
        <section className="payment-shell">
          <div>
            <section className="pay-card">
              <header>
                <span>PAYMENT METHOD</span>
                <em>PCI-secure</em>
                <h2>How would you like to pay?</h2>
                <p>
                  Select an available payment option. Instructions and timing
                  are shown before confirmation.
                </p>
              </header>
              <div className="pay-methods">
                {methods.map((m) => (
                  <button
                    className={method === m[0] ? "selected" : ""}
                    onClick={() => setMethod(m[0])}
                    key={m[0]}
                  >
                    <i>{m[1]}</i>
                    <b>{m[2]}</b>
                    <small>{m[3]}</small>
                  </button>
                ))}
              </div>
              <div className="pay-fields">
                <label className="wide">
                  Payer name *<input value="Amelia Thompson" readOnly />
                </label>
                <label className="wide">
                  Payment reference *<input value="SKB-10482" readOnly />
                </label>
                <label className="wide">
                  Instructions
                  <input
                    value={
                      method === "payid"
                        ? "Use the approved SK Event Hire PayID and exact booking reference."
                        : method === "bank"
                          ? "Transfer to the approved account using the exact booking reference."
                          : "Arrange an approved cash handover and obtain an SK Event Hire receipt."
                    }
                    readOnly
                  />
                </label>
              </div>
              <label className="pay-consent">
                <input type="checkbox" defaultChecked /> I am authorised to make
                this {methodLabel} payment for booking SKB-10482.
              </label>
              <div className="pay-timing">
                <b>Payment timing</b>
                <span>
                  $880.00 is due for the confirmed products and services. Use
                  booking reference SKB-10482 with the selected payment method.
                </span>
              </div>
            </section>
            <section className="otp-card">
              <div>
                <span>IDENTITY VERIFICATION</span>
                <h2>Verify this payment</h2>
                <p>
                  Confirm that you will use booking reference <b>SKB-10482</b>
                  so the payment can be matched to the correct order.
                </p>
                <a href="/contact">Change mobile number</a>
              </div>
              <div>
                <button onClick={() => setVerified(true)}>
                  {verified ? "✓ Reference confirmed" : "Confirm reference"}
                </button>
                <small>
                  {verified ? "Payment reference saved" : "Required before final review"}
                </small>
              </div>
            </section>
            <section className="pay-card pay-review">
              <header>
                <span>FINAL PAYMENT REVIEW</span>
                <a href="/basket">Edit booking</a>
                <h2>Review before you pay</h2>
                <p>
                  Confirm the booking, payment method and amount. Totals are
                  recalculated securely when submitted.
                </p>
              </header>
              <div>
                {[
                  [
                    "BOOKING",
                    "SKB-10482",
                    "Wedding reception · 12–14 September 2026",
                  ],
                  [
                    "PAYMENT METHOD",
                    methodLabel,
                    "Amelia Thompson · Reference SKB-10482",
                  ],
                  [
                    "PAYMENT",
                    "$880.00 due now",
                    "Full confirmed invoice · $80.00 GST included",
                  ],
                ].map((x) => (
                  <article key={x[0]}>
                    <small>{x[0]}</small>
                    <b>{x[1]}</b>
                    <p>{x[2]}</p>
                  </article>
                ))}
              </div>
              <label>
                <input type="checkbox" defaultChecked /> I authorise SK Event
                Hire to record the $880.00 payment and agree to the payment, cancellation,
                damage/bond and privacy terms.
              </label>
              <footer>
                <a href="/basket">← Back</a>
                <button onClick={pay}>Confirm $880.00 payment</button>
              </footer>
            </section>
          </div>
          <PaymentSummary />
        </section>
        <section className="processing-band">
          <div className="progress-ring">
            <strong>{paid ? "100%" : "62%"}</strong>
          </div>
          <div>
            <span>PAYMENT PROCESSING</span>
            <h2>
              {paid ? "Payment confirmed." : "Please keep this page open."}
            </h2>
            <p>
              We’re securely confirming your payment with your bank. This
              usually takes less than a minute. Do not refresh or press Back.
            </p>
            {[
              "Payment details encrypted",
              "Payer authority and booking reference confirmed",
              "Bank authorisation in progress",
              "Receipt and booking update",
            ].map((x, i) => (
              <div className="process-row" key={x}>
                <i>{paid || i < 2 ? "✓" : i === 2 ? "…" : "•"}</i>
                <b>{x}</b>
                <small>
                  {paid || i < 2
                    ? "Complete"
                    : i === 2
                      ? "Processing"
                      : "Waiting"}
                </small>
              </div>
            ))}
          </div>
        </section>
        <section className="payment-outcomes">
          <span>CLEAR TRANSACTION OUTCOMES</span>
          <h2>Payment status and recovery</h2>
          <p>
            Every outcome explains what happened, whether the booking changed
            and what to do next.
          </p>
          <div>
            {[
              [
                "success",
                "✓",
                "PAYMENT SUCCESSFUL",
                "Your payment has been recorded.",
                "View confirmation",
                "#payment-confirmed",
              ],
              [
                "pending",
                "◷",
                "PAYMENT PENDING",
                "Your bank transfer is being matched.",
                "View transfer instructions",
                "/payment-policy",
              ],
              [
                "failed",
                "!",
                "PAYMENT NOT COMPLETED",
                "No payment was recorded.",
                "Try another method",
                "#payment-method",
              ],
            ].map((x) => (
              <article className={x[0]} key={x[0]}>
                <i>{x[1]}</i>
                <small>{x[2]}</small>
                <h3>{x[3]}</h3>
                <p>
                  The booking remains protected while we update your payment
                  status.
                </p>
                <dl>
                  <div>
                    <dt>Reference</dt>
                    <dd>SKB-10482</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{x[0]}</dd>
                  </div>
                </dl>
                <a href={x[5]}>{x[4]}</a>
              </article>
            ))}
          </div>
        </section>
        <section id="payment-confirmed" className="payment-confirmed">
          <header>
            <i>✓</i>
            <div>
              <span>PAYMENT & BOOKING CONFIRMED</span>
              <h2>Payment received. Your booking is secured.</h2>
              <p>
                Your full payment has been recorded and the approved stock and
                logistics schedule are now confirmed.
              </p>
            </div>
            <strong>
              <small>Booking number</small>SKB-10482
            </strong>
          </header>
          <div className="receipt-layout">
            <article>
              <header>
                <b>◉ SK Event Hire</b>
                <strong>RCT-10482-01</strong>
              </header>
              <div className="receipt-facts">
                <span>
                  Paid by<b>Amelia Thompson</b>
                </span>
                <span>
                  Payment date<b>23 July 2026</b>
                </span>
                <span>
                  Payment method<b>{methodLabel}</b>
                </span>
              </div>
              <p>
                Subtotal <b>$800.00</b>
              </p>
              <p>
                GST <b>$80.00</b>
              </p>
              <h3>
                Total paid <b>$880.00 AUD</b>
              </h3>
              <p>
                Remaining balance <b>$0.00 · Paid in full</b>
              </p>
            </article>
            <aside>
              <h3>Confirmed event schedule</h3>
              {[
                "12 Sep · Delivery and setup",
                "12–13 Sep · Wedding reception",
                "14 Sep · SK collection",
              ].map((x, i) => (
                <p key={x}>
                  <i>{i + 1}</i>
                  {x}
                </p>
              ))}
              <a href="/contact">Request receipt</a>
              <a href="/contact">Booking support</a>
            </aside>
          </div>
          <footer>
            <span>
              <b>What happens next?</b>
              <small>
                We’ll send the invoice and receipt copy, then provide a delivery
                update before your event.
              </small>
            </span>
            <a href="/contact">Request calendar invite</a>
            <a href="/contact">Contact booking team</a>
          </footer>
        </section>
        <section className="checkout-help">
          <div>
            <span>PAYMENT SUPPORT</span>
            <h2>Need help with a transaction?</h2>
            <p>
              Contact us with your booking and payment reference. Never send
              full card details by email.
            </p>
          </div>
          <a href="tel:0390000000">Call 03 9000 0000</a>
          <a href="/contact">Payment support</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PaymentSummary() {
  return (
    <aside className="payment-summary">
      <span>BOOKING SUMMARY</span>
      <h2>Payment overview</h2>
      <div className="summary-event">
        <b>Wedding reception</b>
        <small>
          12–14 September 2026
          <br />
          Booking SKB-10482
        </small>
      </div>
      {[
        [hireProducts[0].image, "20 × Kids Bistro Chairs"],
        [hireProducts[1].image, "40 × Aram Bistro Chairs"],
        [hireProducts[2].image, "4 × Kids Folding Tables"],
      ].map((x) => (
        <p key={x[1]}>
          <img src={x[0]} alt="" />
          {x[1]}
        </p>
      ))}
      {[
        ["Product hire", "$426.00"],
        ["Delivery, return and protection", "$374.00"],
        ["Subtotal", "$800.00"],
        ["GST", "$80.00"],
        ["Invoice total", "$880.00"],
      ].map((x) => (
        <div key={x[0]}>
          <span>{x[0]}</span>
          <b>{x[1]}</b>
        </div>
      ))}
      <strong>
        <small>Pay now</small>$880.00
      </strong>
      <em>
        ✓ Secure payment
        <br />✓ Duplicate protection
        <br />✓ Receipt by email and SMS
      </em>
    </aside>
  );
}

export function PaymentConfirmationPage() {
  return (
    <div className="public-site standalone-confirmation payment-confirmation-page">
      <PublicHeader />
      <main>
        <section className="payment-confirmed standalone-card">
          <header>
            <i>✓</i>
            <div>
              <span>PAYMENT & BOOKING CONFIRMED</span>
              <h1>Payment received. Your booking is secured.</h1>
              <p>
                Your full payment has been recorded and the approved stock and
                logistics schedule are now confirmed.
              </p>
            </div>
            <strong>
              <small>Booking number</small>SKB-10482
            </strong>
          </header>
          <div className="receipt-layout">
            <article>
              <header>
                <img
                  src="/images/sk-event-hire-social-logo.png"
                  alt="SK Event Hire"
                />
                <span>
                  <small>TAX INVOICE & PAYMENT RECEIPT</small>
                  <strong>INV-10482-01 · RCT-10482-01</strong>
                </span>
              </header>
              <div className="receipt-details-grid">
                <section>
                  <small>ISSUED BY</small>
                  <b>SK Event Hire</b>
                  <span>Melbourne, Victoria, Australia</span>
                  <span>03 9000 0000 · bookings@skeventhire.com.au</span>
                </section>
                <section>
                  <small>BILL TO</small>
                  <b>Amelia Thompson</b>
                  <span>18 Garden Lane, Melbourne VIC 3000</span>
                  <span>amelia.t@example.com · 0412 345 678</span>
                </section>
              </div>
              <div className="receipt-facts">
                <span>
                  Paid by<b>Amelia Thompson</b>
                </span>
                <span>
                  Payment date<b>23 July 2026</b>
                </span>
                <span>
                  Payment method<b>PayID</b>
                </span>
              </div>
              <div className="invoice-lines">
                <b>Product</b><b>Qty</b><b>Days</b><b>Amount</b>
                <span>Kids Bistro Chair</span><span>20</span><span>3</span><span>$90.00</span>
                <span>Aram Bistro Chair</span><span>40</span><span>3</span><span>$240.00</span>
                <span>Kids Folding Table</span><span>4</span><span>3</span><span>$96.00</span>
                <span>Delivery and setup</span><span>1</span><span>—</span><span>$240.00</span>
                <span>Return collection</span><span>1</span><span>—</span><span>$85.00</span>
                <span>Damage protection</span><span>1</span><span>—</span><span>$49.00</span>
              </div>
              <p>
                Subtotal <b>$800.00</b>
              </p>
              <p>
                GST <b>$80.00</b>
              </p>
              <h3>
                Invoice total <b>$880.00 AUD</b>
              </h3>
              <p>
                Payment received <b>$880.00 · Paid in full</b>
              </p>
            </article>
            <aside>
              <h3>Confirmed event schedule</h3>
              {[
                "12 Sep · Delivery and setup",
                "12–13 Sep · Wedding reception",
                "14 Sep · SK collection",
              ].map((x, i) => (
                <p key={x}>
                  <i>{i + 1}</i>
                  {x}
                </p>
              ))}
              <p className="receipt-email-status">
                <i>✓</i>Email copy prepared for amelia.t@example.com
              </p>
              <button type="button" onClick={() => window.print()}>
                Download / print invoice
              </button>
              <a href="mailto:amelia.t@example.com?subject=SK%20Event%20Hire%20invoice%20INV-10482-01">
                Email invoice copy
              </a>
              <a href="/contact">Booking support</a>
            </aside>
          </div>
          <footer>
            <span>
              <b>What happens next?</b>
              <small>
                We’ll send the invoice and receipt copy, then provide a delivery
                update before your event.
              </small>
            </span>
            <a href="/contact">Request calendar invite</a>
            <a href="/contact">Contact booking team</a>
          </footer>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function PublicQuotePage({ done = false }: { done?: boolean }) {
  if (done)
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <section className="public-result">
            <i>✓</i>
            <div className="eyebrow">Quotation request QR-260731-184</div>
            <h1>Your request is with our event team.</h1>
            <p>
              We will check date-range stock, logistics and pricing before
              sending a versioned quotation. Nothing has been reserved and no
              payment has been taken.
            </p>
            <div>
              <span>
                <b>Response target</b>Within 1 business day
              </span>
              <span>
                <b>Event date</b>14 November 2026
              </span>
              <span>
                <b>Contact</b>Email and SMS
              </span>
            </div>
            <a className="public-cta" href="/">
              Return to homepage
            </a>
          </section>
        </main>
        <PublicFooter />
      </div>
    );
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero compact-hero">
          <div className="eyebrow">Public quotation request</div>
          <h1>Tell us what the event needs.</h1>
          <p>
            A clear, no-payment request covering products, timing, venue and
            contact details.
          </p>
        </section>
        <section className="quote-entry">
          <div className="quote-stepper">
            {["Event", "Dates", "Venue", "Products", "Contact", "Review"].map(
              (x, i) => (
                <span className={i === 0 ? "active" : ""} key={x}>
                  <b>{i + 1}</b>
                  {x}
                </span>
              ),
            )}
          </div>
          <form>
            <h2>Event overview</h2>
            <div className="form-grid">
              <Field label="Event type" value="Wedding reception" />
              <Field label="Guest count" value="80" />
              <Field label="Event date" value="14 November 2026" />
              <Field
                label="Venue suburb / postcode"
                value="Richmond VIC 3121"
              />
              <Field
                wide
                label="Products or package"
                value="Bentwood seating, timber dining tables, tableware and festoon lighting"
              />
              <Field
                wide
                area
                label="Event notes"
                value="Garden ceremony followed by an indoor reception. Rear loading access is available."
              />
            </div>
            <div className="quote-notice">
              <b>Quotation only</b>
              <p>
                Submitting does not reserve stock or create a booking. We
                confirm availability, GST and the final price first.
              </p>
            </div>
            <div className="quote-buttons">
              <a className="outline-cta" href="/basket">
                Back to basket
              </a>
              <a className="public-cta" href="/quote-submitted">
                Review & submit request
              </a>
            </div>
          </form>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
