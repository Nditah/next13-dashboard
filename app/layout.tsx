import 'styles/globals.css'
import Sidebar from 'app/components/sidebar/page'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className='flex'>
          <Sidebar />
          <main className='ml-20 w-full'>
            { children }
          </main>
        </div> 
       </body>
    </html>
  )
}
