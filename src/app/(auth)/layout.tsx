export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center p-6">
      {children}
    </div>
  )
}

