import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-[#4a3a30]">
      <h1 className="text-2xl font-bold mb-2">Đăng ký</h1>
      <p className="text-gray-600 mb-6">
        Trang đăng ký (skeleton). Sẽ tích hợp auth + validation sau.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border rounded-lg px-4 py-2"
        />
        <button
          type="button"
          className="w-full bg-[#3d332d] text-white py-2 rounded-lg hover:bg-[#2c241f]"
        >
          Tạo tài khoản
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6">
        Đã có tài khoản?{" "}
        <Link href="/login" className="underline hover:text-[#8c7851]">
          Đăng nhập
        </Link>
      </p>
    </main>
  )
}

