import React from 'react';
import {ReactTyped} from "react-typed";

export const Hero = () => {
  return (
    <div className='w-full max-w-[800px] h-[450px] text-center mx-auto flex flex-col mt-[100px] items-centre'>
       <p className='text-[#00df9a] font-bold p-1 text-4xl'>LOST SOMETHING SPECIAL?</p>
       
       <p className='font-bold text-7xl p-2'>We've Found It!</p> 
       <div className='flex justify-center' >
       <p className='text-3xl font-bold '>Find your </p>
       <ReactTyped className='text-3xl font-bold pl-2 text-[#94d2bd] ' strings={["keys,","wallet,","Mobile Phone,","earpods", "and more.."]}
                            typeSpeed={30}
                            backSpeed={50}
                            loop>
        </ReactTyped>
       </div>
      <p className='text-gray-500 font-bold text-2xl mx-auto mt-6'>Report your lost items and find what others have found.</p>
      <div className='flex justify-center'>
        <button className="bg-[#94d2bd] text-black font-semibold py-2 px-4 rounded-lg w-32 mt-5 hover:bg-[#00c88a] transition-all">
          Explore
        </button>
      </div>

    </div>
  )
}

export default Hero;