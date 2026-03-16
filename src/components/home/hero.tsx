"use client";

// Xóa import { useEffect } và ScrollReveal nếu bạn dùng hook riêng
import { useScrollReveal } from '@/hook/useScrollReveal';

export default function Hero() {
  // Sử dụng hook bạn đã tạo để tránh lỗi "window is not defined"
  useScrollReveal('.reveal-hero', {
    distance: '0px',
    duration: 1500,
    opacity: 0,
    scale: 0.95,
  });

  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1459411552884-841db9b3cc2a')" }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Class reveal-hero được hook của bạn xử lý */}
        <div className="max-w-2xl text-white space-y-6 reveal-hero">
          <h3 className="text-[#8c7851] font-bold tracking-[0.4em] uppercase text-sm">Nghệ thuật từ bàn tay Việt</h3>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif">Gói trọn tâm tình <br />vào từng nét vẽ</h1>
          <p className="text-lg text-stone-200 font-light leading-relaxed max-w-lg">Khám phá những tác phẩm độc bản được chế tác tỉ mỉ bởi các nghệ nhân tâm huyết, mang hơi ấm mộc mạc vào ngôi nhà của bạn.</p>
          
          <div className="pt-6 flex flex-wrap gap-4">
            <a href="#shop" className="bg-[#8c7851] text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1">Mua ngay</a>
            <a href="#story" className="bg-white/10 backdrop-blur-sm border border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#3d332d] transition-all">Câu chuyện của chúng tôi</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Cuộn xuống</span>
        <i className="fa-solid fa-chevron-down text-xs"></i>
      </div>
    </section>
  );
}