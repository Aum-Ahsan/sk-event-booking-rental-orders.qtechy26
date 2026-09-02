# SK Event Hire project architecture

## Repository layout

```text
app/                         Next/Vinext route entry points and hosted API adapters
src/
  app/                       Application provider and route composition
  application/pages/         Route-level page components
  components/                Reusable feature and page-section components
    blog/
    checkout/
    gallery/
    home/
    information/
    packages/
    products/
    quote/
  redux/
    api/                     Central Axios instance and API functions
    features/                Feature-based Redux Toolkit slices
    store/                   Store and typed hooks
components/                  Approved UI compatibility implementation
server/
  src/
    config/                  Environment and database configuration
    models/                  Mongoose schemas
    services/                Business logic and database operations
    controllers/             HTTP request and response handling
    routes/                  Express endpoint definitions
    middleware/              Error, authentication and validation boundaries
    utils/                   Shared backend helpers
public/                      Brand and product imagery
tests/                       Build and rendered-route regression tests
```

The `src/application/pages` files are intentionally small. They import and arrange child
experiences from `src/components`, while routing stays isolated in
`src/app/AppRouter.tsx`.

## Main pages and parent-child relationships

| Page | Child feature component |
| --- | --- |
| Home | `HomeExperience` |
| Hire products | `ProductsExperience` |
| Product details | `ProductDetailExperience` |
| Packages / collections | `PackagesLandingExperience`, `PackageDetailExperience`, `CollectionsExperience` |
| Basket / payment / confirmation | Checkout experiences |
| Quote request / submitted | Quote experiences |
| Gallery / event story | `GalleryExperience` |
| Blog / article | Blog experiences |
| About, Our Story, Contact, Planning, Help, FAQ | Information experiences |
| Legal, Referral, Roadmap, Sitemap | Information experiences |

## Redux Toolkit features

- `basket` — add, update, remove and clear hire items.
- `catalogue` — search, category and price sorting state.
- `enquiry` — asynchronous Contact enquiry submission state.
- `referral` — asynchronous referral submission state.
- `ui` — mobile navigation and quick-cart visibility.

All HTTP calls go through `src/redux/api/axiosInstance.ts`. The API root is
read from `NEXT_PUBLIC_API_URL`.

## Backend flow

```text
Route -> Controller -> Service -> Model -> MongoDB
```

- Controllers own request parsing and response status codes.
- Services own business rules and database operations.
- Models own Mongoose schemas and indexes.
- Routes only map endpoints to controllers.

## Core API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/v1/health` | API health check |
| GET | `/api/v1/products` | List active rental products |
| GET | `/api/v1/products/:slug` | Retrieve one product |
| POST | `/api/v1/bookings` | Create a booking request |
| GET | `/api/v1/bookings/:reference` | Retrieve booking confirmation |
| POST | `/api/v1/enquiries` | Submit a contact enquiry |

## Styling rule

Tailwind CSS v4 remains the styling engine. New components place Tailwind
utilities directly in JSX. The existing approved interface is kept in its
compatibility stylesheet during this structure-only refactor so the visual
design does not change; page-by-page utility migration can be completed only
after visual approval.
