import 'styles/globals.css'
import Sidebar from 'app/components/sidebar/page'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Sidebar>
          {children}
        </Sidebar> 
       </body>
    </html>
  )
}
