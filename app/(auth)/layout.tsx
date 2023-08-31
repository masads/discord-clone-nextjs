export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full flex justify-center items-center" >{children}</body>
    </html>
  )
}
