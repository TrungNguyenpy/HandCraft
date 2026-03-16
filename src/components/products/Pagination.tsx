export default function Pagination() {
  return (
    <div className="mt-20 flex justify-center items-center gap-4">

      <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-white transition">
        ‹
      </button>

      <span className="w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold">
        1
      </span>

      <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-white transition">
        2
      </button>

      <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-white transition">
        3
      </button>

      <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-white transition">
        ›
      </button>

    </div>
  )
}