import { Heart, Facebook, Instagram, Send } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#4a3a30] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 px-10 py-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#bfa574] w-10 h-10 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-white" />
            </div>

            <h2 className="text-xl font-semibold text-white">ArtisanHome</h2>
          </div>

          <p className="text-sm leading-relaxed">
            Chúng tôi tôn vinh giá trị của đôi bàn tay Việt, mang đến những sản phẩm thủ
            công tinh xảo và độc bản.
          </p>

          <div className="flex gap-4 mt-4 text-lg">
            <Facebook className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Về chúng tôi</li>
            <li className="hover:text-white cursor-pointer">Câu chuyện thương hiệu</li>
            <li className="hover:text-white cursor-pointer">Blog thủ công</li>
            <li className="hover:text-white cursor-pointer">Tuyển dụng</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Hỗ trợ khách hàng</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Chính sách vận chuyển</li>
            <li className="hover:text-white cursor-pointer">Chính sách đổi trả</li>
            <li className="hover:text-white cursor-pointer">Hướng dẫn mua hàng</li>
            <li className="hover:text-white cursor-pointer">Bảo mật thông tin</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Bản tin</h3>
          <p className="text-sm mb-4">
            Đăng ký để nhận ưu đãi và cập nhật mới nhất từ chúng tôi.
          </p>

          <div className="flex items-center bg-[#5a4a3f] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email của bạn"
              className="bg-transparent px-4 py-2 outline-none text-sm w-full placeholder-gray-400"
            />

            <button className="px-3 text-white hover:text-[#d6c4a1]">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#6b5a4f] max-w-7xl mx-auto" />

      <div className="text-center text-sm text-gray-400 py-6">
        © 2024 ArtisanHome. All rights reserved. Made with love for handmade arts.
      </div>
    </footer>
  )
}

