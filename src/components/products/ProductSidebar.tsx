export default function ProductSidebar() {
  return (
    <aside className="w-full lg:w-64 space-y-10">

      {/* CATEGORY */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">
          Danh mục
        </h3>

        <ul className="space-y-4 text-stone-600 font-medium">

          <li className="flex justify-between items-center hover:text-[#8c7851] cursor-pointer transition">
            <span>Đồ gốm sứ</span>
            <span className="text-[10px] bg-stone-100 px-2 py-1 rounded-full">24</span>
          </li>

          <li className="flex justify-between items-center hover:text-[#8c7851] cursor-pointer transition">
            <span>Mô hình & Kit</span>
            <span className="text-[10px] bg-stone-100 px-2 py-1 rounded-full">18</span>
          </li>

          <li className="flex justify-between items-center hover:text-[#8c7851] cursor-pointer transition">
            <span>Đồ điện tử Vintage</span>
            <span className="text-[10px] bg-stone-100 px-2 py-1 rounded-full">12</span>
          </li>

          <li className="flex justify-between items-center text-[#8c7851]">
            <span>Đồ trang trí gỗ</span>
            <span className="text-[10px] bg-[#8c7851] text-white px-2 py-1 rounded-full">
              31
            </span>
          </li>

          <li className="flex justify-between items-center hover:text-[#8c7851] cursor-pointer transition">
            <span>Nến & Tinh dầu</span>
            <span className="text-[10px] bg-stone-100 px-2 py-1 rounded-full">15</span>
          </li>

        </ul>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">
          Khoảng giá
        </h3>

        <div className="space-y-4 text-sm">

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-[#8c7851]" />
            Dưới 500.000đ
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-[#8c7851]" defaultChecked />
            500.000đ - 2.000.000đ
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-[#8c7851]" />
            Trên 2.000.000đ
          </label>

        </div>
      </div>


    </aside>
  )
}