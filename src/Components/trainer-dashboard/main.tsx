import { TrainerForm } from '@/Components/trainer-dashboard/form'
import React from 'react'

const main = () => {
  return (
    <div className='flex relative justify-center h-screen w-full'>
      <div className='w-full absolute h-2/5 z-0 bg-[#0E3750]'></div>
      <div className='flex-col absolute top-[10%] w-4/5 '>
        <div className='text-white max-sm:text-xs py-2 font-bold text-xl'>Submit your details to get verified</div>
        
      
        <div className="flex  w-full  rounded bg-white ring-1 ring-gray-200 z-10 py-10 px-10 gap-4  ">
          <div className='px-2 w-full '>
            <h1 className="font-bold text-2xl pb-2">Become Instructors</h1>
            <TrainerForm />
          </div>
        </div>
        </div>
    </div>
  )
}

export default main