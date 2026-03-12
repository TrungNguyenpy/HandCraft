# PROJECT_NOTES

## 1) Kiến trúc project (high-level)

- **Framework**: Next.js App Router (`src/app`)
- **UI components**: `src/components/*`
- **Feature modules** (domain-first): `src/features/*`
- **Data layer**: Prisma + Postgres (`src/lib/prisma/client.ts`, `prisma/schema.prisma`)
- **API (BFF)**: `src/app/api/*` (validate bằng Zod, chuẩn hóa response)

## 2) Cấu trúc folder quan trọng

```text
src/
  app/
    (store)/                  # storefront routes (URL không đổi)
      layout.tsx              # header/footer chung
      page.tsx                # home
      products/
        page.tsx              # listing
        [id]/page.tsx         # detail
      cart/page.tsx
      checkout/page.tsx       # skeleton
      orders/page.tsx         # skeleton
    (auth)/
      layout.tsx
      login/page.tsx          # skeleton
      register/page.tsx       # skeleton
    api/
      products/route.ts       # pagination/filter/search
      products/[id]/route.ts
    error.tsx
    loading.tsx
    not-found.tsx

  components/
    layout/                   # SiteHeader/SiteFooter
    products/                 # listing components
    product/                  # product detail components

  features/
    products/                 # server queries hiện đặt ở `api/` (sẽ rename dần sang `queries/`)
    cart/
      store/useCartStore.ts   # Zustand + localStorage persist

  lib/
    prisma/client.ts

prisma/
  schema.prisma
```

## 3) Quyết định kỹ thuật

- **Prisma-only data layer**: bỏ `pg` để tránh trộn 2 kiểu truy cập DB.
- **Route Groups**: dùng `(store)` và `(auth)` để tách vùng chức năng nhưng **giữ nguyên URL**.
- **Cart state**: Zustand + persist localStorage (guest cart).
- **API validation**: Zod cho query/params trước khi mở rộng POST/PUT.

## 4) Các issue đã fix (theo yêu cầu)

- Prisma + pg bị trộn → **đã chuẩn hóa sang Prisma** (`src/lib/prisma/client.ts`, refactor product queries).
- Header/Footer đặt trong từng page → **đã chuyển vào** `src/app/(store)/layout.tsx`.
- `/products` placeholder → **đã refactor** thành listing page dùng `ProductGrid` + `ProductSidebar`.
- next/image remotePatterns → **đã cập nhật** trong `next.config.ts`.
- Product detail tách component → **đã tách** vào `src/components/product/*`.
- Thêm `app/loading.tsx`, `app/error.tsx`, `app/not-found.tsx`.
- Cart state + persist → **đã implement** và gắn vào Header + ProductCard + Cart page.
- API products → **đã chuẩn hóa** (pagination/filter/search + error handling + Zod).

## 5) Các feature ecommerce còn thiếu (quan trọng)

- **Authentication thực sự** (session/JWT, protected routes)
- **Checkout flow hoàn chỉnh** (address, shipping, order creation)
- **Payment integration** (Stripe/VNPay/PayPal + webhooks)
- **Orders persistence** (DB models + status machine)
- **Admin dashboard** (CRUD products/categories/orders)
- **Search/filter thực** gắn `searchParams` vào DB queries
- **Reviews/Wishlist** (DB-backed)
- **Image upload pipeline** (S3/Cloudinary)

## 6) Hướng dẫn nhanh cho developer mới

### Chạy dev

```bash
npm install
npm run dev
```

### Cấu hình DB

- Cần `DATABASE_URL` trong `.env`
- Prisma schema: `prisma/schema.prisma`

### API

- `GET /api/products?q=&categoryId=&minPrice=&maxPrice=&page=&limit=`
- `GET /api/products/:id`

