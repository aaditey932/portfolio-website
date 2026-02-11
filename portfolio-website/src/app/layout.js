import './globals.css'
import { Inter, Poppins, Nunito } from 'next/font/google'
import ScrollToTop from './components/ScrollToTop'

// Inter: clean UI sans, excellent at small sizes, light–regular weight, slightly wide spacing — fits navbar and dev-portfolio tone
const inter = Inter({ subsets: ['latin'] })

// Poppins: geometric sans-serif for hero headline (bold “AI & FULL STACK”)
const poppins = Poppins({ weight: ['600', '700'], subsets: ['latin'] })

// Nunito: geometric sans, Futura-like; used for “Hello! I’m Aaditey” (fallback when Futura No. 2 Std not loaded)
const nunito = Nunito({ weight: ['500', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'Aaditey Pillai',
  description: "Aadi's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${nunito.variable}`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
