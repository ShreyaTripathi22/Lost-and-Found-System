import React, { useState }  from 'react'
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav=()=>{
      setNav(!nav);
   };

  return (
    <div className = 'flex justify-between w-full items-center mx-auto h-12 px-10 py-12 '>
      <h1 className='text-6xl w-full font-bold'>FoundIt</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 text-2xl  cursor-pointer hover:text-blue-600'>Home</li>
          <li className='p-4 text-2xl cursor-pointer hover:text-blue-600'>
          <Link to="/lost">Lost</Link>
            </li>
          <li className='p-4 text-2xl cursor-pointer hover:text-blue-600'>
            <Link to="/found">Found</Link>
          </li>
          <li className='p-4 text-2xl  cursor-pointer hover:text-blue-600'>Contact</li>
          <li className='p-4 text-2xl  cursor-pointer hover:text-blue-600'>SignIn</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mx-auto px-10'>
          {!nav? <LuMenu size={25}/>:<IoMdClose size={25} />}
        </div>
        <div className={nav?'fixed top-10 right-0 p-12 my-12 bg-gray-800 h-full w-[40%] ease-in-out duration-500':'fixed right-[-100%] ease-in-out duration-500 '}>
        <ul className='uppercase p-4 '>
          <li className='p-4  cursor-pointer hover:text-blue-600'>Home</li>
          <li className='p-4 text-2xl cursor-pointer hover:text-blue-600'>
                <Link to="/lost">Lost</Link>
          </li>
          <li className='p-4 text-2xl cursor-pointer hover:text-blue-600'>
              <Link to="/found">Found</Link>
          </li>
          <li className='p-4  cursor-pointer hover:text-blue-600'>Contact</li>
          <li className='p-4  cursor-pointer hover:text-blue-600'>SignIn</li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar;