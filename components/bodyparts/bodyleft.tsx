import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'

const BodyLeft = () => {
  return (
    <div className='hidden md:flex gap-2 w-1/3 h-full'>
        <div className='w-[40%] h-full flex flex-col justify-between gap-5 pl-1'>
            <div className=' h-[25%] w-full bg-blue-300 rounded-md p-3 shadow-lg'>
                <p className='text-center text-blue-950 font-semibold text-lg'>Total Transactions</p>
                <p className='italic text-center text-sm'>count across all records</p>
                <div className='flex gap-2 justify-center mt-5'>
                    <p className='text-blue-950 font-semibold text-5xl'>9,994</p>
                </div>
            </div>
            <div className=' h-[25%] w-full bg-blue-950 p-3 rounded-md shadow-lg'>
            <p className='text-center text-white font-semibold text-lg'>Total Discount</p>
                <p className='italic text-center text-white text-sm'>given across all sales</p>
                <div className='flex gap-2 justify-center mt-5'>
                    <p className='text-white font-semibold text-5xl'>$1,561</p>
                </div>
            </div>
            <div className=' h-[50%] w-full bg-blue-500 p-3 rounded-md shadow-lg'>
            <p className='text-center text-blue-950 font-semibold text-lg'>Quantity of Products</p>
            <p className='italic text-center text-blue-950 text-sm'>sold per segment</p>
            <div className='flex flex-col gap-8 justify-between mt-5'>
                <div className='flex justify-between border-b-2 border-blue-950'>
                    <p className='text-blue-950 font-semibold text-xl'>Consumer</p>
                    <p className='text-blue-950 font-semibold text-xl'>19,561</p>
                </div>
                <div className='flex justify-between border-b-2 border-blue-950'>
                    <p className='text-blue-950 font-semibold text-xl'>Corporate</p>
                    <p className='text-blue-950 font-semibold text-xl'>11,608</p>
                </div>
                <div className='flex justify-between border-b-2 border-blue-950'>
                    <p className='text-blue-950 font-semibold text-xl'>Home Office</p>
                    <p className='text-blue-950 font-semibold text-xl'>6,744</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-blue-950 font-semibold text-xl'>Others</p>
                    <p className='text-blue-950 font-semibold text-xl'>5,504</p>
                </div>
                </div>
            </div>
        </div>
        <div className='w-[60%] h-full bg-white rounded-lg shadow-xl p-2'>
            <p className='text-blue-950 font-semibold text-lg'>Top 10 States by <span className='text-blue-400'>Sales</span></p>
            <div className='flex flex-col mt-5 gap-10'>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-950 text-lg'>California</p>
                    </div>
                    <div className='bg-blue-400 w-1/2 pl-1'>
                        <p className='text-blue-950 font-semibold'>$457,688</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-950 text-lg'>New York</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$308,425</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Texas</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$170,188</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Washington</p>
                    </div>
                    <div className=' w-1/2 pl-1'>
                        <p>$138,123</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Pennsylvania</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$116,512</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Florida</p>
                    </div>
                    <div className=' w-1/2 pl-1'>
                        <p>$88,448</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Illinois</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$80,166</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Ohio</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$78,258</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Michigan</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$76,270</p>
                    </div>
                </div>
                <div className='flex pl-2'>
                    <div className='flex gap-2 w-1/2'>
                            <div className='bg-blue-400 w-7 h-7'></div>
                            <p className='text-blue-900 text-lg'>Virginia</p>
                    </div>
                    <div className='w-1/2 pl-1'>
                        <p>$70,637</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodyLeft