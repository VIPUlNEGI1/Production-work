export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
