import Link from 'next/link'
import React from 'react'

const SignupPage = () => {
  return (
    <>
    <div className='flex gap-5 w-full text-center items-center justify-between'>
        <div className='w-[100px]'></div>
        <div className='h-full text-3xl mt-10'>SignupPage</div>
        <Link href='/'>
            <button className='bg-blue-300 text-black border-rose-600 rounded-lg p-4 mt-4 mr-4'>Go Back</button>
        </Link>
    </div>
    </>

  )
}

export default SignupPage