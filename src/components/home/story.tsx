"use client";
import { useScrollReveal } from '@/hook/useScrollReveal';

export default function Story() {
  // Gọi hook đã tạo để khởi tạo hiệu ứng
  useScrollReveal('.reveal-story', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom'
  });

  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Class .reveal-story được hook tự động bắt */}
          <div className="flex-1 relative reveal-story">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#8c7851]/10 rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1541944743827-e04bb645d993" className="relative z-10 rounded-2xl shadow-2xl" alt="Nghệ nhân" />
            <div className="absolute -bottom-10 -right-10 bg-[#8c7851] text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold italic">15+</p>
              <p className="text-xs uppercase tracking-widest">Năm kinh nghiệm</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-8 reveal-story">
            <h3 className="text-[#8c7851] font-bold uppercase tracking-widest text-sm">Câu chuyện thương hiệu</h3>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight font-serif">Từ làng nghề truyền thống đến hiện đại</h2>
            <p className="text-lg text-stone-500 font-light leading-relaxed italic">"Chúng tôi tin rằng mỗi món đồ thủ công đều mang trong mình linh hồn của đất."</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#8c7851] flex items-center justify-center text-[#8c7851]"><i className="fa-solid fa-leaf"></i></div>
                <span className="font-bold">Vật liệu tự nhiên 100%</span>
              </div>
            </div>

            <a href="#" className="inline-flex items-center gap-3 bg-[#3d332d] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all group">
              Khám phá quy trình <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}