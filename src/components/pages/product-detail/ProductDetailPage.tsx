import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import hireProducts from "../../../data/commerce/hireProducts.json";
import { ProductDetailGallerySection } from "./sections/ProductDetailGallerySection";
import { ProductDetailInfoSection } from "./sections/ProductDetailInfoSection";
import { ProductDetailBookingSection } from "./sections/ProductDetailBookingSection";
import { ProductDetailPriceSection } from "./sections/ProductDetailPriceSection";
import { ProductDetailOverviewSection } from "./sections/ProductDetailOverviewSection";
import { ProductDetailIncludedSection } from "./sections/ProductDetailIncludedSection";
import { ProductDetailDeliverySection } from "./sections/ProductDetailDeliverySection";
import { ProductDetailSafetySection } from "./sections/ProductDetailSafetySection";
import { ProductDetailReviewSection } from "./sections/ProductDetailReviewSection";
import { ProductDetailRelatedSection } from "./sections/ProductDetailRelatedSection";

export function ProductDetailPage({ slug }: { slug: string }) {
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
          <ProductDetailGallerySection
            p={p}
            gallery={gallery}
            zoomed={zoomed}
            setZoomed={setZoomed}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <div className="product-copy">
            <ProductDetailInfoSection p={p} checked={checked} />
            <ProductDetailBookingSection
              startDate={startDate} setStartDate={setStartDate}
              startTime={startTime} setStartTime={setStartTime}
              returnDate={returnDate} setReturnDate={setReturnDate}
              returnTime={returnTime} setReturnTime={setReturnTime}
              quantity={quantity} setQuantity={setQuantity}
              checked={checked} setChecked={setChecked}
            />
            <ProductDetailPriceSection
              p={p} quantity={quantity} rentalDays={rentalDays} unitDaily={unitDaily}
              hireSubtotal={hireSubtotal} bond={bond} gst={gst} total={total}
            />
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
          <ProductDetailOverviewSection p={p} />
          <ProductDetailIncludedSection p={p} />
          <ProductDetailDeliverySection />
          <ProductDetailSafetySection />
          <ProductDetailReviewSection />
        </section>
        <ProductDetailRelatedSection related={related} />
      </main>
      <PublicFooter />
    </div>
  );
}