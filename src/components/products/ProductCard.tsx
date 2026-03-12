import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  id: number
  name: string
  price: number
  image_url: string
}

export default function ProductCard({
  id,
  name,
  price,
  image_url,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <Link href={`/products/${id}`}>
        <Image
          src={image_url}
          alt={name}
          width={400}
          height={300}
          className="w-full h-60 object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>

        <p className="text-[#8c7851] font-bold mt-2">{price}</p>

        <button className="mt-4 w-full bg-[#3d332d] text-white py-2 rounded-lg hover:bg-[#2c241f]">
          Thêm vào giỏ
        </button>
      </div>
    </div>
  )
}

