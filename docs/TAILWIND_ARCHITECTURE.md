# SK Event Hire Tailwind architecture

## Principles

- Tailwind CSS v4 is the only styling engine.
- New UI components use Tailwind utilities directly in JSX.
- Route-level composition lives under `src/application/pages/<feature>`.
- Reusable feature sections live under `src/components/<feature>`.
- Shared route selection is isolated in `src/app/AppRouter.tsx`.
- Redux Toolkit state lives under `src/redux/features`.
- `app/page.tsx` remains a minimal framework entry point.
- The approved legacy Tailwind compatibility layer is retained during this
  structure-only refactor to guarantee pixel parity. It is not the pattern for
  new components.

## Page folders

- `home` — public landing page
- `hire-products` — catalogue and product details
- `packages` and `collections` — package and collection routes
- `checkout` — basket, payment and confirmation screens
- `quote-request` and `quotation` — public and customer quote journeys
- `gallery` and `blog` — editorial and case-study routes
- `information` — About, Contact, Planning, FAQ, Help, policies, referrals and roadmap
- `customer-account` — account, booking, tracking and change flows
- `administration` — admin, authentication and account overview routes

The folder boundaries keep page routing, reusable sections, data-backed flows and Tailwind styling independently maintainable without changing the approved interface.
