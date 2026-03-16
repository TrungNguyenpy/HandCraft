import Hero from "@/components/home/hero"
import Categories from "@/components/home/categories"
import Story from "@/components/home/story"
import Testimonials from "@/components/home/testimonials"

import ProductGrid from "@/components/products/ProductGrid"
import ProductSidebar from "@/components/products/ProductSidebar"
import { getProducts } from "@/features/products/api/getProducts"

export const dynamic = "force-dynamic"

export default async function Home() {
  const products = await getProducts()

 return (
    <main>

      <Hero />

      <Categories />

      <Story />

      <Testimonials />

    </main>
  )
}

