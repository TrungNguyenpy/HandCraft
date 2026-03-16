"use client";
import { useScrollReveal } from '@/hook/useScrollReveal';

export default function Categories() {
  // Gọi hook: Chỉ định selector và config
  useScrollReveal('.reveal-cat', {
    distance: '50px',
    duration: 1000,
    interval: 200,
    origin: 'bottom'
  });

  const cats = [
    { title: "Gốm Sứ Mộc", sub: "Khám phá 120+ mẫu", img: "https://images.unsplash.com/photo-1578749553348-fd03fe2182c8" },
    { title: "Mây Tre Đan", sub: "Nghệ thuật đan lát", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa" },
    { title: "Đồ Da Thật", sub: "Chất riêng bền bỉ", img: "https://images.unsplash.com/photo-1590736961958-51fdc630168d" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16 space-y-4 reveal-cat">
        <h2 className="text-4xl font-bold font-serif">Danh Mục Tuyển Chọn</h2>
        <div className="w-20 h-1 bg-[#8c7851] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cats.map((item, index) => (
          <a key={index} href="#" className="reveal-cat group relative overflow-hidden rounded-2xl h-[450px] shadow-xl shadow-stone-200/50">
            <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-10 transform group-hover:translate-y-[-10px] transition-transform">
              <h3 className="text-white text-3xl font-bold font-serif mb-2">{item.title}</h3>
              <p className="text-stone-300 text-sm font-medium uppercase tracking-widest flex items-center">
                {item.sub} <i className="fa-solid fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}