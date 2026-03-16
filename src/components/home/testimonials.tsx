"use client";
import { useScrollReveal } from '@/hook/useScrollReveal';

export default function Testimonials() {
  // Sử dụng hook dùng chung để khởi tạo ScrollReveal
  useScrollReveal('.reveal-testi', {
    distance: '50px',
    duration: 1000,
    interval: 200,
    origin: 'bottom'
  });

  const reviews = [
    { name: "Minh Anh", job: "Kiến trúc sư", text: "Mình cực kỳ ấn tượng với lọ gốm mua tại ArtisanHome...", img: "anna" },
    { name: "Hoàng Nam", job: "Designer", text: "Sản phẩm rất mộc mạc và sang trọng. Website giao diện đẹp...", img: "hoang" },
    { name: "Thanh Lê", job: "Văn phòng", text: "Túi da thêu tay ở đây cực kỳ đẹp, đường chỉ chắc chắn...", img: "le" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-testi">
          <h2 className="text-4xl font-bold mb-4 font-serif">Chia Sẻ Từ Khách Hàng</h2>
          <p className="text-stone-500 italic">Niềm vui của khách hàng là động lực lớn nhất</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="reveal-testi bg-white p-10 rounded-3xl shadow-sm border border-stone-200 flex flex-col gap-6 relative group hover:shadow-xl transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#8c7851] rounded-full flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="text-stone-600 leading-relaxed italic">"{rev.text}"</p>
              <div className="flex items-center gap-4 border-t pt-6 border-stone-100">
                <img src={`https://i.pravatar.cc/150?u=${rev.img}`} className="w-12 h-12 rounded-full border-2 border-[#8c7851]" alt="User" />
                <div>
                  <p className="font-bold text-sm">{rev.name}</p>
                  <p className="text-xs text-stone-400">{rev.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}