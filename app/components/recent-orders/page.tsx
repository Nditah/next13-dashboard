import { FaShoppingBag } from 'react-icons/fa'
import { salesData } from 'data'

const RecentOrders = () => {
  return (
    <>
       <div className='bg-white overflow-scroll w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
          <h2>Recent Orders</h2>
          <ul>
            { salesData.map((order, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex item-center cursor-pointer'>
                <div className='bg-purple-100 rounded-lg p-3'>
                  <FaShoppingBag className='text-purple-800' />
                </div>
                <div className='pl-4'>
                  <p className='text-gray-800 font-bold'>{order.total}</p>
                  <p className='text-gray-400 font-bold'>{order.name}</p>
                </div> 
                <div>
                  <p className='lg:flex md:hidden absolute right-6 text-sn'>{order.date}</p>
                </div> 
              </li>
            )) }
          </ul>
       </div>
    </>
  )
}

export default RecentOrders
