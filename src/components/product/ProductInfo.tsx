"use client"

import type { Product } from "@/types/product"
import Link from "next/link"
import { useCartStore } from "@/features/cart/store/useCartStore"

type ProductInfoProps = {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div className="w-full lg:w-2/5 space-y-6">
      <div>
        <p className="text-red-600 text-sm font-bold">
          🔥 Chỉ còn {product.stock} sản phẩm!
        </p>

        <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

        <div className="flex items-center gap-3 mt-2">
          ⭐⭐⭐⭐⭐
          <span className="text-sm text-gray-500">Đánh giá sản phẩm</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-3xl font-bold text-[#8c7851]">
            {product.price.toLocaleString()}đ
          </span>
        </div>
      </div>

      <div>
        <label className="font-bold block mb-2">Kiểu dáng</label>

        <select className="w-full border rounded-lg p-3">
          <option>Cặp đôi</option>
          <option>Gia đình</option>
          <option>Cá nhân</option>
        </select>
      </div>

      <div>
        <label className="font-bold block mb-2">Tùy chỉnh thông điệp</label>

        <textarea
          className="w-full border rounded-lg p-3 h-24"
          placeholder="Nhập nội dung..."
        />
      </div>

      <div className="space-y-3">
        <button
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              image_url: product.image_url,
            })
          }
          className="w-full bg-[#3d332d] text-white py-4 rounded-full font-bold"
        >
          Thêm vào giỏ hàng
        </button>

        <Link
          href="/checkout"
          className="block w-full text-center border-2 border-[#3d332d] py-4 rounded-full font-bold"
        >
          Mua ngay
        </Link>
      </div>

      <div className="bg-white p-5 rounded-xl border text-sm space-y-3">
        <div>
          <p className="font-bold">🚚 Giao hàng miễn phí</p>
          <p className="text-gray-500">Dự kiến: 3 - 5 ngày</p>
        </div>

        <div>
          <p className="font-bold">🛡 Bảo vệ người mua</p>
          <p className="text-gray-500">
            Hoàn tiền nếu sản phẩm không đúng mô tả
          </p>
        </div>
      </div>
    </div>
  )
}

