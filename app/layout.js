import './globals.css'

export const metadata = {
  title: 'Pricing Page',
  description: 'Website Development Pricing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
