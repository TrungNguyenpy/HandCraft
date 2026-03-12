type ProductGalleryProps = {
  imageUrl: string
  name: string
}

export default function ProductGallery({ imageUrl, name }: ProductGalleryProps) {
  return (
    <div className="flex gap-4">
      <div className="hidden md:flex flex-col gap-3 w-20">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded-md border-2 border-[#8c7851]"
        />
      </div>

      <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-sm">
        <img src={imageUrl} alt={name} className="w-full" />
      </div>
    </div>
  )
}

