import './globals.css'

export const metadata = {
  title: 'Eve Hayes | Program Manager & Operations Leader',
  description: 'Personal portfolio of Eve Hayes. Program Manager, Operations Leader, and certified Waterfall & Agile practitioner based in Cape Town, South Africa.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#faf8f5] text-[#222320] antialiased selection:bg-[#3f5a2a]/20 selection:text-[#222320]">
        {children}
      </body>
    </html>
  )
}
