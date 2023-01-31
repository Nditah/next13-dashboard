import type { NextPage } from 'next'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { salesData } from 'data'


const CustomerPage: NextPage = () => {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>

        <div className='flex justify-between p-4'>
          <h2>Customers</h2>
          <h2>Welcome Back, Sammie</h2>
        </div>

        <div className='p-4'>
          <div className='bg-white overflow-y-auto w-full m-auto p-4 border rounded-lg '>
            <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 items-center justify-between my-3 p-2 cursor-pointer'>
              <span>Name</span>
              <span className='sm:text-left text-right'>Email</span>
              <span className='md:grid hidden'>Last Order</span>
              <span className='sm:grid hidden'>Method</span>
            </div>
            <ul>
              {salesData.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 rounded-lg items-center justify-between my-3 p-2 cursor-pointer'>
                  <div className='flex items-center'>
                    <div className='bg-purple-100 p-3 rounded-lg'>
                      <BsPersonFill className='text-purple-800' />
                    </div>
                    <p className='pl-4'>{order.name}</p>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>{order.name.split(' ')[0].toLowerCase()}@gmail.com</p>
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

export default CustomerPage
