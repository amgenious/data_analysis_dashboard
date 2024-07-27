import React from 'react'
import GraphDis from './bodyright/graph'

const BodyRight = () => {
  return (
    <div className='w-full h-[100%] md:w-2/3 flex flex-col gap-2'>
       <div className='flex flex-col h-fit md:flex-row w-full md:h-1/2 gap-2'>
        <div className='w-full md:w-1/2 h-full bg-white shadow-md rounded-md p-3 pl-5'>
        <p className='text-blue-950 text-2xl font-bold'>Segment Sales</p>
        <p className='italic text-blue-400'>Contribution</p>
        <div className='mt-5 flex flex-col gap-5 w-full justify-between'>
            <div className='flex items-center w-full gap-6'>
                <p>Consumer</p>
                <div className='w-3/4 bg-blue-400 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-blue-950 font-bold'>$1,109,569</p>
                </div>
            </div>
            <div className='flex items-center w-full gap-6'>
                <p>Corporate</p>
                <div className='w-2/4 bg-blue-400 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-blue-950 font-bold'>$819,369</p>
                </div>
            </div>
            <div className='flex items-center w-full gap-2'>
                <p>Home Office</p>
                <div className='w-1/4 bg-blue-400 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-blue-950 font-bold'>$219,460</p>
                </div>
            </div>
            <div className='flex items-center w-full gap-[3.35rem]'>
                <p>Others</p>
                <div className='w-[15%] bg-blue-400 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-blue-950 font-bold'>$19,376</p>
                </div>
            </div>
        </div>
        </div>
        <div className='w-full md:w-1/2 h-full bg-white shadow-md rounded-md p-3 pl-3'>
        <div className='flex justify-between'>
            <div>
            <p className='text-blue-950 text-2xl font-bold'>MoM % Change in Profit</p>
            <p className='italic text-blue-400'>Comparing 2014 - 2017</p>
            </div>
            <div className='flex gap-1'>
                <div className='flex items-center gap-1'>
                    <div className='w-10 h-[0.15rem] bg-orange-400'></div>
                    <p className='text-blue-950'>2014</p>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-10 h-[0.15rem] bg-purple-400'></div>
                    <p className='text-blue-950'>2015</p>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-10 h-[0.15rem] bg-violet-400'></div>
                    <p className='text-blue-950'>2016</p>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-10 h-[0.15rem] bg-green-400'></div>
                    <p className='text-blue-950'>2017</p>
                </div>
            </div>
        </div>
       <div className='w-full'>
            <GraphDis />
       </div>    
        </div>
       </div>
       <div className='flex flex-col md:flex-row  w-full h-fit md:h-1/2 gap-2'>
       <div className='w-full md:w-1/2 h-full bg-white shadow-md rounded-md p-3 pl-5'>
       <p className='text-blue-950 text-2xl font-bold'>Percentage Contribution of</p>
       <p className='italic text-blue-400'>Segment of Profit</p>
       <div className='mt-5 w-full flex flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-col w-1/2'>
                <div className='flex w-full gap-2 justify-start items-center'>
                    <div className='w-3 h-3 bg-blue-950'></div>
                    <p>Consumer</p>
                    <p className='pl-10'>%21.06</p>
                </div>
                <div className='flex w-full gap-2 justify-start items-center'>
                    <div className='w-3 h-3 bg-blue-500'></div>
                    <p>Corporate</p>
                    <p className='pl-10'>%32.12</p>
                </div>
                <div className='flex w-full gap-2 justify-start items-center'>
                    <div className='w-3 h-3 bg-blue-300'></div>
                    <p>Home Office</p>
                    <p className='pl-6'>%16.83</p>
                </div>
            </div>
            <div className='flex w-1/2'>
            <div className="flex justify-center items-center">
      <svg width="200" height="200" viewBox="0 0 36 36" className="w-52 h-52">
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#3D5ABE"
          strokeWidth="3"
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#172554"
          strokeWidth="3"
          strokeDasharray="40 60" 
          strokeDashoffset="25"   
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#93c5fd" 
          strokeWidth="3"
          strokeDasharray="20 80" 
          strokeDashoffset="45"   
        />
      </svg>
    </div>
            </div>
       </div>
       </div>
        <div className='w-full md:w-1/2 h-full bg-white shadow-md rounded-md p-3 pl-5'>
        <div className='flex justify-between'>
            <div>
            <p className='text-blue-950 text-2xl font-bold'>Product Category by</p>
            <p className='italic text-blue-400'>Sales and Profit</p>
            </div>
            <div className='flex gap-1'>
                <div className='flex gap-2'>
                    <div className='w-5 h-5 bg-blue-950'></div>
                    <p className='text-blue-950'>Sales</p>
                </div>
                <div className='flex gap-2'>
                    <div className='w-5 h-5 bg-blue-400'></div>
                    <p className='text-blue-950'>Profit</p>
                </div>
            </div>
        </div>
        <div className='mt-5 flex flex-col gap-5 w-full justify-between'>
            <div className='flex items-center w-full gap-6'>
                <p className='text-blue-950 font-semibold'>Technology</p>
                <div className='flex flex-col w-full'>
                <div className='w-3/4 bg-blue-950 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-white font-bold'>$809,569</p>
                </div>
                <div className='w-full flex gap-2 items-center'>
                <div className='bg-blue-400 w-[30%] h-10'></div><p className='text-blue-950'>$154,255</p> 
                </div>
                </div>
            </div>
            <div className='flex items-center w-full gap-2'>
                <p className='text-blue-950 font-semibold'>Different Supplier</p>
                <div className='flex flex-col w-full'>
                <div className='w-2/4 bg-blue-950 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-white font-bold'>$209,569</p>
                </div>
                <div className='w-full flex gap-2 items-center'>
                <div className='bg-blue-400 w-[20%] h-10'></div><p className='text-blue-950'>$122,247</p> 
                </div>
                </div>
            </div>
            <div className='flex items-center w-full gap-[3.6rem]'>
                <p className='text-blue-950 font-semibold'>Fortune</p>
                <div className='flex flex-col w-full'>
                <div className='w-[65%] bg-blue-950 h-10 flex items-center justify-end'>
                    <p className='pr-3 text-white font-bold'>$517,810</p>
                </div>
                <div className='w-full flex gap-2 items-center'>
                <div className='bg-blue-400 w-[10%] h-10'></div><p className='text-blue-950'>$2,406</p> 
                </div>
                </div>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default BodyRight