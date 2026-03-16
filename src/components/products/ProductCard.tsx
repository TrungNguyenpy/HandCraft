"use client"

import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/features/cart/store/useCartStore"

type ProductCardProps = {
  id: number
  name: string
  price: number
  image_url: string
  category?: string
  artisan?: string
}

export default function ProductCard({
  id,
  name,
  price,
  image_url,
  category = "Handmade",
  artisan = "Nghệ nhân",
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div className="group transition-all duration-300 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-sm mb-5">

        <Link href={`/products/${id}`}>
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* CATEGORY */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>

        {/* HEART BUTTON */}
        <button
          onClick={() =>
            addItem({
              productId: id,
              name,
              price,
              image_url,
            })
          }
          className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          ❤
        </button>

      </div>

      {/* INFO */}
      <h3 className="font-bold text-lg mb-1 transition-colors group-hover:text-[#8c7851]">
        {name}
      </h3>

      <p className="text-sm text-stone-400 mb-3 uppercase tracking-tighter">
        {artisan}
      </p>

      <div className="flex items-center justify-between">

        <span className="text-xl font-bold tracking-tight">
          {price.toLocaleString()}đ
        </span>

        <button
          onClick={() =>
            addItem({
              productId: id,
              name,
              price,
              image_url,
            })
          }
          className="text-xs font-bold uppercase tracking-widest border-b-2 border-stone-800 pb-1 hover:border-[#8c7851] hover:text-[#8c7851] transition-all"
        >
          Mua ngay
        </button>

      </div>

    </div>
  )
}