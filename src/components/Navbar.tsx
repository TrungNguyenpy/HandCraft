import { ShoppingCart, Search, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#4a3a30] text-white px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-[#bfa574] w-10 h-10 flex items-center justify-center rounded-full">
          <Heart size={20} />
        </div>

        <h1 className="text-2xl font-semibold">
          ArtisanHome
        </h1>
      </div>


      {/* Menu */}
      <ul className="flex gap-10 text-lg">
        <li className="cursor-pointer hover:text-[#d6c4a1]">
          Trang chủ
        </li>

        <li className="cursor-pointer border-b-2 border-[#d6c4a1] pb-1 text-[#d6c4a1]">
          Cửa hàng
        </li>

        <li className="cursor-pointer hover:text-[#d6c4a1]">
          Về chúng tôi
        </li>

        <li className="cursor-pointer hover:text-[#d6c4a1]">
          Liên hệ
        </li>
      </ul>


      {/* Search + Cart */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="flex items-center bg-[#5a4a3f] px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Tìm đồ thủ công..."
            className="bg-transparent outline-none text-sm w-40 placeholder-gray-300"
          />
          <Search size={18} />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-[#d6c4a1] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

      </div>

    </nav>
  );
}