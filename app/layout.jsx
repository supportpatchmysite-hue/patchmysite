import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'PatchMySite — Digital Web Support, No Phone Calls',
  description: 'Fixed-price WordPress, Drupal & web support. Submit your issue, pay your tier, we fix it — all async, all digital, no calls.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
