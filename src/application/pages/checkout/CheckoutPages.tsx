import {
  BasketExperience,
  BookingConfirmationExperience,
  BookingRequestConfirmationExperience,
  PaymentConfirmationExperience,
  PaymentExperience,
} from "../../../components/checkout/CheckoutExperiences";

export const BasketPage = () => <BasketExperience />;
export const PaymentPage = () => <PaymentExperience />;
export const BookingRequestConfirmationPage = () => (
  <BookingRequestConfirmationExperience />
);
export const BookingConfirmationPage = () => (
  <BookingConfirmationExperience />
);
export const PaymentConfirmationPage = () => (
  <PaymentConfirmationExperience />
);
