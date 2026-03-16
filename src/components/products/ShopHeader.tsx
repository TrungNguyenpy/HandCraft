"use client"

export default function ShopHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
        <a href="#">Trang chủ</a>
        <span>›</span>
        <a href="#">Trang trí</a>
        <span>›</span>
        <span className="text-stone-800 font-bold">Vintage Collections</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold mb-4 font-serif">
            Nghệ Thuật Handmade
          </h1>

          <p className="text-stone-500 max-w-xl leading-relaxed">
            Bộ sưu tập độc bản từ gốm sứ mộc mạc đến các mô hình điện tử sáng
            tạo, mang linh hồn của nghệ nhân vào không gian sống của bạn.
          </p>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-stone-100">
          <span className="text-xs font-bold text-stone-400 uppercase pl-3">
            Sắp xếp:
          </span>

          <select className="outline-none bg-transparent text-sm font-semibold pr-4 cursor-pointer">
            <option>Mới nhất</option>
            <option>Giá: Thấp đến Cao</option>
            <option>Giá: Cao đến Thấp</option>
            <option>Phổ biến nhất</option>
          </select>
        </div>
      </div>
    </div>
  )
}