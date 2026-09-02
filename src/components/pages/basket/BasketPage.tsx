import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import type { HireProduct } from "../../../types/commerce";
import hireProducts from "../../../data/commerce/hireProducts.json";
import { CheckoutIntroSection, CheckoutStepsSection, CheckoutActionsSection, CheckoutBasketCard, CheckoutScheduleCard } from "./sections/BasketSections1";
import { CheckoutCustomerCard, CheckoutFulfilmentCard, CheckoutAccessCard } from "./sections/BasketSections2";
import { CheckoutExtrasCard, CheckoutPaymentCard, CheckoutReviewCard, BookingEstimateSidebar, CheckoutHelpSection } from "./sections/BasketSections3";

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
        <CheckoutIntroSection />
        <CheckoutStepsSection step={step} setStep={setStep} otpVerified={otpVerified} />
        <CheckoutActionsSection step={step} setStep={setStep} otpVerified={otpVerified} nextCheckout={nextCheckout} />
        
        <section className="checkout-shell">
          <div className="checkout-main">
            <CheckoutBasketCard step={step} basketItems={basketItems} quantities={quantities} setQuantities={setQuantities} />
            <CheckoutScheduleCard step={step} />
            <CheckoutCustomerCard step={step} />
            <CheckoutFulfilmentCard step={step} />
            <CheckoutAccessCard step={step} />
            <CheckoutExtrasCard step={step} extras={extras} toggleExtra={toggleExtra} />
            <CheckoutPaymentCard step={step} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} otpVerified={otpVerified} setOtpVerified={setOtpVerified} />
            <CheckoutReviewCard step={step} paymentMethod={paymentMethod} setStep={setStep} />
          </div>
          
          <BookingEstimateSidebar threeDayHire={threeDayHire} gst={gst} estimatedTotal={estimatedTotal} setStep={setStep} />
        </section>
        
        <CheckoutHelpSection />
      </main>
      <PublicFooter />
    </div>
  );
}