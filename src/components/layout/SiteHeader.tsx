"use client"

import Link from "next/link"
import { ShoppingCart, Search, Heart } from "lucide-react"
import { getCartCount, useCartStore } from "@/features/cart/store/useCartStore"

export default function SiteHeader() {
  const count = useCartStore((s) => getCartCount(s.items))

  return (
    <nav className="bg-[#4a3a30] text-white px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="bg-[#bfa574] w-10 h-10 flex items-center justify-center rounded-full"
        >
          <Heart size={20} />
        </Link>

        <Link href="/" className="text-2xl font-semibold">
          ArtisanHome
        </Link>
      </div>

      <ul className="flex gap-10 text-lg">
        <li>
          <Link href="/" className="cursor-pointer hover:text-[#d6c4a1]">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="cursor-pointer hover:text-[#d6c4a1]"
          >
            Cửa hàng
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#d6c4a1]">Về chúng tôi</li>
        <li className="cursor-pointer hover:text-[#d6c4a1]">Liên hệ</li>
      </ul>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-[#5a4a3f] px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Tìm đồ thủ công..."
            className="bg-transparent outline-none text-sm w-40 placeholder-gray-300"
          />
          <Search size={18} />
        </div>

        <Link href="/cart" className="relative cursor-pointer">
          <ShoppingCart size={24} />
          {count > 0 ? (
            <span className="absolute -top-2 -right-2 bg-[#d6c4a1] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          ) : null}
        </Link>
      </div>
    </nav>
  )
}

