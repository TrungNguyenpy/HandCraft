import type { Product } from "@/types/product"
import ProductCard from "./ProductCard"

type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          image_url={p.image_url}
        />
      ))}
    </div>
  )
}

