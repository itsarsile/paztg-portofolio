import { Montserrat} from '@next/font/google';
import { Michroma } from "@next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
})


const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma'
})




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.variable} ${michroma.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
