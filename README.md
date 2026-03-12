## ArtisanHome (Handmade Ecommerce)

Website ecommerce bán đồ handmade xây bằng **Next.js App Router**.

### Tech stack

- **Next.js** (App Router)
- **Prisma + Postgres**
- **Tailwind CSS**
- **Zustand** (cart state)
- **Zod** (API validation)

### Local development

1) Cài dependencies

```bash
npm install
```

2) Cấu hình env

- Tạo `.env` với `DATABASE_URL`
- Ví dụ:

```bash
DATABASE_URL="postgresql://postgres:123456@localhost:5432/handcraft"
```

3) Run dev server

```bash
npm run dev
```

Mở `http://localhost:3000`.

### Project notes

Xem `PROJECT_NOTES.md` để nắm kiến trúc, cấu trúc folder, và các quyết định kỹ thuật.
