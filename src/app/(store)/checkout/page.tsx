import Link from "next/link"

export default function CheckoutPage() {
  return (
    <main className="max-w-5xl mx-auto p-10 text-[#4a3a30]">
      <h1 className="text-3xl font-bold mb-2">Checkout</h1>
      <p className="text-gray-600 mb-6">
        Trang checkout đang ở dạng skeleton (sẽ kết nối với Orders/Payment sau).
      </p>

      <Link
        href="/cart"
        className="inline-block underline hover:text-[#8c7851]"
      >
        Quay lại giỏ hàng
      </Link>
    </main>
  )
}

