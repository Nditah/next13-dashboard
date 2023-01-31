import Link from "next/link"
import { RxSketchLogo, RxDashboard, RxPerson,   } from 'react-icons/rx'
import { BiLogOutCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'


const Sidebar = () => {

  return (
    <>
      
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className="flex flex-col items-center">
                <Link href={`/`} >
                    <div className="bg-purple-800 text-white p-3 rounded-lg inline-block" >
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
                <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
                <Link href={`/`} >
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block" >
                        <RxDashboard size={20} />
                    </div>
                </Link>
                <Link href={`/customer`} >
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block" >
                        <RxPerson size={20} />
                    </div>
                </Link>
                <Link href={`/orders`} >
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block" >
                        <HiOutlineShoppingBag size={20} />
                    </div>
                </Link>
                <Link href={`/settings`} >
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block" >
                        <FiSettings size={20} />
                    </div>
                </Link>
                <div>
                    <span className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block" >
                        <BiLogOutCircle size={20} />
                    </span>
                </div>
                
            </div>
        </div>

    </>
  )
}

export default Sidebar
