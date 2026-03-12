import { Pool, type QueryResult, type QueryResultRow } from "pg"

// Prefer a single DATABASE_URL in production.
// For local dev, fall back to individual PG* env vars with safe defaults.
const connectionString = process.env.DATABASE_URL

const pool =
  connectionString
    ? new Pool({ connectionString })
    : new Pool({
        user: process.env.PGUSER ?? "postgres",
        host: process.env.PGHOST ?? "localhost",
        database: process.env.PGDATABASE ?? "handcraft",
        password: process.env.PGPASSWORD ?? "123456",
        port: Number(process.env.PGPORT ?? 5432),
      })

export function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  return pool.query(text, params)
}

export default pool

