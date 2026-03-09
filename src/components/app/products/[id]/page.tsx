import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductReviews from "../productReviews/ProductReviews"
import { getProduct } from "@/lib/products"

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProductDetail({ params }: Props) {

  const { id } = await params
  const product = await getProduct(id)
  return (
    <div className="text-[#4a3f35] bg-[#f4f1ea]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <a className="hover:text-[#8c7851]">Cửa hàng</a>
          <span className="mx-2">/</span>
          <a className="hover:text-[#8c7851]">Danh mục</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">
            {product.name}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-3/5 space-y-4">

            <div className="flex gap-4">

              {/* thumbnails */}
              <div className="hidden md:flex flex-col gap-3 w-20">
                <img
                  src={product.image_url}
                  className="w-20 h-20 object-cover rounded-md border-2 border-[#8c7851]"
                />
              </div>

              {/* main image */}
              <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={product.image_url}
                  className="w-full"
                />
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">

              <h3 className="text-xl font-bold mb-4 border-b pb-2">
                Mô tả sản phẩm
              </h3>

              <div className="text-sm text-gray-600 space-y-3">

                <p>
                  {product.description}
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Chất liệu: Handmade</li>
                  <li>Xuất xứ: Việt Nam</li>
                  <li>Danh mục: Thủ công mỹ nghệ</li>
                </ul>

              </div>

            </div>

            <ProductReviews />

          </div>

          {/* RIGHT PRODUCT INFO */}
          <div className="w-full lg:w-2/5 space-y-6">

            <div>

              <p className="text-red-600 text-sm font-bold">
                🔥 Chỉ còn {product.stock} sản phẩm!
              </p>

              <h1 className="text-3xl font-bold mt-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                ⭐⭐⭐⭐⭐
                <span className="text-sm text-gray-500">
                  Đánh giá sản phẩm
                </span>
              </div>

              <div className="flex items-center gap-3 mt-4">

                <span className="text-3xl font-bold text-[#8c7851]">
                  {product.price.toLocaleString()}đ
                </span>

              </div>

            </div>

            {/* OPTIONS */}
            <div>

              <label className="font-bold block mb-2">
                Kiểu dáng
              </label>

              <select className="w-full border rounded-lg p-3">

                <option>Cặp đôi</option>
                <option>Gia đình</option>
                <option>Cá nhân</option>

              </select>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="font-bold block mb-2">
                Tùy chỉnh thông điệp
              </label>

              <textarea
                className="w-full border rounded-lg p-3 h-24"
                placeholder="Nhập nội dung..."
              />

            </div>

            {/* BUTTON */}
            <div className="space-y-3">

              <button className="w-full bg-[#3d332d] text-white py-4 rounded-full font-bold">
                Thêm vào giỏ hàng
              </button>

              <button className="w-full border-2 border-[#3d332d] py-4 rounded-full font-bold">
                Mua ngay
              </button>

            </div>

            {/* SHIPPING */}
            <div className="bg-white p-5 rounded-xl border text-sm space-y-3">

              <div>
                <p className="font-bold">🚚 Giao hàng miễn phí</p>
                <p className="text-gray-500">
                  Dự kiến: 3 - 5 ngày
                </p>
              </div>

              <div>
                <p className="font-bold">🛡 Bảo vệ người mua</p>
                <p className="text-gray-500">
                  Hoàn tiền nếu sản phẩm không đúng mô tả
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  )
}