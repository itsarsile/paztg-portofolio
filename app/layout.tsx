import { Montserrat} from '@next/font/google';
import { Michroma } from "@next/font/google"
import '../styles/globals.css';

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
      <footer className='text-white flex flex-col justify-center items-center p-5 gap-1'>
        <img src="./logo-dark.svg" className="w-12"/>
        <p className='font-michroma text-xs'>PaztG Design</p>
      </footer>
    </html>
  )
}
