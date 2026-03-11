"use client"

import { useState } from "react"

export default function ProductReviews() {

  const [filter, setFilter] = useState("all")

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Đánh giá sản phẩm
      </h2>

      <div className="flex gap-3 mb-6">

        <button
          onClick={() => setFilter("all")}
          className="border px-4 py-2 rounded"
        >
          Tất cả
        </button>

        <button
          onClick={() => setFilter("5")}
          className="border px-4 py-2 rounded"
        >
          5 sao
        </button>

      </div>

      <p>Filter hiện tại: {filter}</p>

    </div>
  )
}