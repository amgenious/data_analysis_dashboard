import React from 'react'

const TopMiddle = () => {
  return (
    <div className='h-full w-full md:w-[30rem] flex flex-col justify-end'>
        <div className=''>
           <p className='text-blue-600 text-lg'>
            <span className='text-blue-950 text-6xl'>12%</span> is the approximate Profit Percentage generated from all sales
            </p> 
        </div>
        <div className='mt-5'>
            <p className='text-blue-950 text-base italic font-medium'>Year With the Highest Profit Generated</p>
            <div className='mt-1 flex'>
            <div className='bg-blue-950 text-white text-center w-16'>
                    <p>2014</p>
                </div>
                <div className='bg-blue-800 text-white text-center w-20'>
                    <p>2015</p>
                </div>
                <div className='bg-blue-400 text-blue-950 text-center w-24'>
                    <p>2016</p>
                </div>
                <div className='bg-blue-300 text-black text-center w-32'>
                    <p>2017</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMiddle