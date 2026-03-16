"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, Gift, Truck, ShieldCheck } from "lucide-react"

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

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-10 text-center py-20">
        <div className="mb-6 flex justify-center">
          <div className="bg-stone-100 p-8 rounded-full">
            <Truck size={48} className="text-stone-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4 text-[#3d332d]">
          Giỏ hàng của bạn đang trống
        </h1>

        <p className="text-gray-500 mb-8">
          Hãy thêm một vài sản phẩm thủ công vào đây nhé!
        </p>

        <Link
          href="/products"
          className="bg-[#3d332d] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition"
        >
          Tiếp tục mua sắm
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-[#4a3a30]">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-8">

          <div className="flex items-end justify-between border-b pb-4 border-stone-200">
            <h1 className="text-3xl font-bold">
              {items.length} sản phẩm trong giỏ hàng
            </h1>

            <button
              onClick={clear}
              className="text-sm underline hover:text-[#8c7851]"
            >
              Xóa tất cả
            </button>
          </div>

          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row gap-6">

                  {/* IMAGE */}
                  <div className="w-full md:w-32 h-32 relative rounded-xl overflow-hidden bg-stone-50 border">
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between gap-4">

                      <h3 className="font-medium text-lg hover:underline">
                        {item.name}
                      </h3>

                      <p className="font-bold text-xl text-[#8c7851]">
                        {(item.price * item.quantity).toLocaleString()}đ
                      </p>
                    </div>

                    <p className="text-sm text-gray-500">
                      {item.price.toLocaleString()}đ / sản phẩm
                    </p>

                    <div className="flex items-center gap-4 text-sm">

                      <button
                        onClick={() => removeItem(item.productId)}
                        className="flex items-center gap-1 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                        Xóa
                      </button>

                      <button className="flex items-center gap-1 hover:text-[#8c7851]">
                        <Gift size={16} />
                        Gói quà
                      </button>
                    </div>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex md:flex-col items-center gap-4">

                    <div className="flex items-center border rounded-full px-2 py-1 bg-stone-50">

                      <button
                        onClick={() =>
                          setQuantity(
                            item.productId,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-1"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="px-4 font-bold text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          setQuantity(
                            item.productId,
                            item.quantity + 1
                          )
                        }
                        className="p-1"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 uppercase">
                      Số lượng
                    </p>

                  </div>
                </div>

                {/* SHIPPING */}
                <div className="mt-6 pt-6 border-t flex items-center gap-3 text-sm text-stone-500">
                  <Truck size={18} className="text-green-600" />
                  <p>
                    Sẵn sàng giao hàng trong{" "}
                    <span className="font-bold">3-5 ngày</span>
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="w-full lg:w-[380px]">

          <div className="bg-white rounded-2xl shadow-sm border p-8 sticky top-24 space-y-6">

            <h2 className="text-xl font-bold border-b pb-4">
              Tóm tắt đơn hàng
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-sm">
                <span>Tạm tính</span>
                <span className="font-bold">
                  {total.toLocaleString()}đ
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Phí vận chuyển</span>
                <span className="text-green-600 font-bold">
                  Miễn phí
                </span>
              </div>

              <div className="pt-4 border-t flex justify-between items-end">

                <span className="font-bold text-lg">
                  Tổng cộng
                </span>

                <div className="text-right">
                  <p className="text-2xl font-bold text-[#8c7851]">
                    {total.toLocaleString()}đ
                  </p>

                  <p className="text-xs text-gray-400">
                    Đã bao gồm VAT
                  </p>
                </div>

              </div>

            </div>

            <button className="w-full bg-[#3d332d] text-white py-4 rounded-full font-bold text-lg hover:bg-black transition">
              Thanh toán
            </button>

            <div className="flex items-start gap-3 text-xs text-gray-500 pt-4">
              <ShieldCheck size={18} className="text-blue-600" />

              <p>
                <span className="font-bold text-stone-700">
                  Bảo vệ người mua:
                </span>{" "}
                Hoàn tiền nếu không nhận được hàng.
              </p>
            </div>

          </div>

        </aside>

      </div>
    </main>
  )
}