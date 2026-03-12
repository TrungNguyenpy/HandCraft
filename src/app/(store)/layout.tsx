import SiteFooter from "@/components/layout/SiteFooter"
import SiteHeader from "@/components/layout/SiteHeader"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#f4f1ea] min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

