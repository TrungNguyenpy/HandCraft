"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md px-10 py-8 max-w-lg">
        <h1 className="text-2xl font-bold text-[#4a3a30] mb-2">
          Đã xảy ra lỗi
        </h1>
        <p className="text-gray-600 mb-4">
          Ứng dụng gặp lỗi không mong muốn. Bạn có thể thử lại.
        </p>
        <pre className="text-xs bg-[#f4f1ea] p-4 rounded-md overflow-auto mb-4">
          {error.message}
        </pre>
        <button
          onClick={reset}
          className="bg-[#3d332d] text-white px-5 py-2 rounded-lg hover:bg-[#2c241f]"
        >
          Thử lại
        </button>
      </div>
    </div>
  )
}

