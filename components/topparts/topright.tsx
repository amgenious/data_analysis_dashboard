import { Database, Filter, SortDesc, Table } from 'lucide-react'
import React from 'react'

const TopRight = () => {
  return (
    <div className='h-full w-full md:w-1/3 flex gap-2'>
        <div className='w-2/3 bg-blue-950 p-2 flex gap-1'>
            <div className='w-1/2'>
                <div className='flex justify-between mb-3'>
                    <p className='text-white'>Year</p>
                    <div className='flex gap-1 text-white'>
                        <SortDesc />
                        <Filter />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>2014</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>2015</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>2016</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>2017</div>
                </div>
            </div>
            <div className='w-1/2'>
            <div className='flex justify-between mb-3'>
                <p className='text-white'>Srip Mode</p>
                    <div className='flex gap-1 text-white'>
                        <SortDesc />
                        <Filter />
                    </div>
            </div>
            <div className='flex flex-col gap-1'>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>First Class</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>Same Day</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>Second Class</div>
                    <div className='bg-blue-300 pl-2 rounded-sm font-medium'>Standard Class</div>
                </div>
            </div>
            
        </div>
        <div className='w-1/3 h-full bg-blue-950 text-white p-2'>
            <p className='text-sm italic'>Click on the icons below to the access the database and pivot tables</p>
            <div className='flex gap-2 mt-1 h-1/2'>
            <Database className='w-24 h-24'/>
            <Table className='w-24 h-24'/>
            </div>
        </div>
    </div>
  )
}

export default TopRight