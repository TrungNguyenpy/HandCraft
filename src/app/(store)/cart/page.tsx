"use client"

import Image from "next/image"
import Link from "next/link"
import {
  getCartTotal,
  useCartStore,
} from "@/features/cart/store/useCartStore"

export default function CartPage() {
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const setQuantity = useCartStore((s) => s.setQuantity)
  const clear = useCartStore((s) => s.clear)
  const total = getCartTotal(items)

  return (
    <main className="max-w-7xl mx-auto p-10 text-[#4a3a30]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Giỏ hàng</h1>
        {items.length > 0 ? (
          <button
            onClick={clear}
            className="text-sm underline hover:text-[#8c7851]"
          >
            Xóa tất cả
          </button>
        ) : null}
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="mb-4">Giỏ hàng của bạn đang trống.</p>
          <Link
            href="/products"
            className="inline-block bg-[#3d332d] text-white px-5 py-2 rounded-lg hover:bg-[#2c241f]"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-xl shadow-md p-4 flex gap-4"
              >
                <div className="w-28 h-20 relative rounded-lg overflow-hidden bg-[#f4f1ea]">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.price.toLocaleString()}đ
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-sm underline hover:text-[#8c7851]"
                    >
                      Xóa
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <label className="text-sm text-gray-600">Số lượng</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        setQuantity(item.productId, Number(e.target.value))
                      }
                      className="w-20 border rounded-md px-2 py-1"
                    />
                    <div className="ml-auto font-bold text-[#8c7851]">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <aside className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Tóm tắt</h2>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Tạm tính</span>
              <span className="font-semibold">{total.toLocaleString()}đ</span>
            </div>
            <button className="mt-6 w-full bg-[#3d332d] text-white py-3 rounded-lg hover:bg-[#2c241f]">
              Thanh toán
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}

