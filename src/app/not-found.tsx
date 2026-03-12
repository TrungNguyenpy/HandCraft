import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md px-10 py-8 text-center">
        <h1 className="text-2xl font-bold text-[#4a3a30] mb-2">
          Không tìm thấy trang
        </h1>
        <p className="text-gray-600 mb-6">Đường dẫn bạn truy cập không tồn tại.</p>
        <Link
          href="/"
          className="inline-block bg-[#3d332d] text-white px-5 py-2 rounded-lg hover:bg-[#2c241f]"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  )
}

