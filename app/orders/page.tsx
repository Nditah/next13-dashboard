import type { NextPage } from 'next'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { salesData } from 'data'


const OrdersPage: NextPage = () => {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>

        <div className='flex justify-between p-4'>
          <h2>Orders</h2>
          <h2>Welcome Back, Sammie</h2>
        </div>

        <div className='p-4'>
          <div className='bg-white overflow-y-auto w-full m-auto p-4 border rounded-lg '>
            <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 items-center justify-between my-3 p-2 cursor-pointer'>
              <span>Order</span>
              <span className='sm:text-left text-right'>Status</span>
              <span className='md:grid hidden'>Last Order</span>
              <span className='sm:grid hidden'>Method</span>
            </div>
            <ul>
              {salesData.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 rounded-lg items-center justify-between my-3 p-2 cursor-pointer'>
                  <div className='flex items-center'>
                    <div className='bg-purple-100 p-3 rounded-lg'>
                      <FaShoppingBag className='text-purple-800' />
                    </div>
                    <div className='pl-4'>
                      <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                      <p className='text-gray-800 text-sm'>{order.name.split(' ')[0]}</p>
                    </div>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>
                    <span className={
                      order.status == 'Pending' ? 'bg-green-200 p-2 rounded-lg' : order.status == 'Success' ? 'bg-blue-200 p-2 rounded-lg' : 'bg-yellow-200 p-2 rounded-lg'
                    }>
                    {order.status}
                    </span>
                  </p>
                  <p className='hidden md:flex'>{order.date}</p>
                  <div className='sm:flex hidden justify-between items-center'>
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default OrdersPage
