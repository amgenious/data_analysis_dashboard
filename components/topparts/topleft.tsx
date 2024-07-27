import React from 'react'
import { Coins, ExpandIcon, ShoppingCart, Wallet} from "lucide-react";

const TopLeft = () => {
  return (
    <div className='bg-blue-950 h-fit w-full md:h-3/4 md:w-3/4 p-2 text-white'>
        <div className='flex flex-col md:flex-row w-full h-full gap-6 mt-3'>
            <div className='flex gap-2 md:pl-7'>
            <ShoppingCart className='w-14 h-14'/>
            <div>
                <p className='font-semibold text-xl'>Superstore Sales Analysis Dashboard</p>
                <p className='font-normal text-sm'>Report as of 2017</p>
            </div>
            </div>
            <div>
                <p>Select Region</p>
                <div className='flex gap-2'>
                <div className='bg-blue-300 text-black text-center w-20'>
                    <p className='text-blue-950 font-semibold'>Central</p>
                </div>
                <div className='bg-blue-300 text-black text-center w-20'>
                    <p className='text-blue-950 font-semibold'>East</p>
                </div>
                <div className='bg-blue-300 text-black text-center w-20'>
                    <p className='text-blue-950 font-semibold'>South</p>
                </div>
                <div className='bg-blue-300 text-black text-center w-20'>
                    <p className='text-blue-950 font-semibold'>West</p>
                </div>
                </div>
            </div>
        </div>
        <div className='absolute hidden md:flex gap-5 top-32 pl-7'>
            <div className='bg-white rounded-2xl shadow-md text-center w-60 p-2'>
                <p className='text-blue-950 text-xs font-bold'>Total <span className='text-blue-600'>Sales</span></p>
                <div className='flex justify-center items-center mt-2 gap-2'>
                    <Coins className='text-blue-600 w-12 h-12' />
                    <p className='text-blue-950 font-bold text-xl'>$2,292,669</p>
                </div>
            </div>
            <div className='bg-white rounded-2xl shadow-md text-center w-60 p-2'>
                <p className='text-blue-950 text-xs font-bold'>Total Profit <span className='text-blue-600'>Generated</span></p>
                <div className='flex justify-center items-center mt-2 gap-2'>
                    <Wallet className='text-blue-600 w-12 h-12' />
                    <p className='text-blue-950 font-bold text-xl'>$286,397</p>
                </div>
            </div>
            <div className='bg-white rounded-2xl shadow-md text-center w-60 p-2'>
                <p className='text-blue-950 text-xs font-bold'>Total Quantity <span className='text-blue-600'>Sold</span></p>
                <div className='flex justify-center items-center mt-2 gap-2'>
                    <ExpandIcon className='text-blue-600 w-12 h-12' />
                    <p className='text-blue-950 font-bold text-xl'>37,873</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopLeft

