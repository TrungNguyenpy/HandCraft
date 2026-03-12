import Image from "next/image"

export default function ProductSidebar() {
  return (
    <aside className="w-64 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-[#8c7851] mb-4">Danh Mục</h2>

      <ul className="space-y-3 border-b pb-4">
        <li className="flex justify-between text-gray-700 hover:text-[#8c7851] cursor-pointer">
          <span>Đồ gốm sứ</span>
          <span className="text-gray-400">(12)</span>
        </li>
        <li className="flex justify-between text-gray-700 hover:text-[#8c7851] cursor-pointer">
          <span>Trang sức bạc</span>
          <span className="text-gray-400">(8)</span>
        </li>
        <li className="flex justify-between font-semibold text-[#8c7851] cursor-pointer">
          <span>Đan lát & Dệt</span>
          <span className="text-gray-400">(24)</span>
        </li>
        <li className="flex justify-between text-gray-700 hover:text-[#8c7851] cursor-pointer">
          <span>Đồ gỗ trang trí</span>
          <span className="text-gray-400">(15)</span>
        </li>
        <li className="flex justify-between text-gray-700 hover:text-[#8c7851] cursor-pointer">
          <span>Nến thơm</span>
          <span className="text-gray-400">(10)</span>
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-[#8c7851] mt-6 mb-4">Khoảng Giá</h2>

      <div className="space-y-2 border-b pb-4 text-gray-700">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Dưới 500.000đ
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          500.000đ - 2.000.000đ
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Trên 2.000.000đ
        </label>
      </div>

      <h2 className="text-lg font-semibold text-[#8c7851] mt-6 mb-4">
        Sản phẩm nổi bật
      </h2>

      <div className="flex gap-3 items-center">
        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
          <Image
            src="/products/placeholder-1.svg"
            alt="Sản phẩm"
            width={60}
            height={60}
            className="object-cover rounded-md"
          />
        </div>

        <div>
          <p className="text-sm text-gray-800">Lọ hoa gốm mộc</p>
          <p className="text-sm text-[#8c7851] font-semibold">350.000đ</p>
        </div>
      </div>
    </aside>
  )
}

