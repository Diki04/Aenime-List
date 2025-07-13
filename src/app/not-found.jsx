"use client"


import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
const router = useRouter()

  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col'>
     <h3 className='text-color-accent text-4xl font-bold mb-1'>404</h3>
     <h3 className='text-color-accent text-4xl font-bold'>NOT FOUND</h3>
     <button onClick={ () => router.back()} className='text-color-primary hover:text-color-accent transition-all underline'>Kembali</button>
      </div>
    </div>
  )
}

export default Page
