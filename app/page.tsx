import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'app/components/header/page'
import TopCards from 'app/components/top-cards/page'
import BarChart from 'app/components/bar-chart/page'
import RecentOrders from 'app/components/recent-orders/page'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next13 App</title>
      </Head>

      <main className="bg-gray-100 min-h-screen">
       <Header />
       <TopCards />
       <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-4'>
        <BarChart />
        <RecentOrders />
       </div>
      </main>
    </>
  )
}

export default HomePage
