import React from 'react'
import TopLeft from './topparts/topleft'
import TopMiddle from './topparts/topmiddle'
import TopRight from './topparts/topright'

const TopParts = () => {
  return (
    <div className='w-full h-fit md:h-[15rem] bg-slate-100 flex flex-col md:flex-row gap-4 p-3'>
       <TopLeft />
        <TopMiddle />
        <TopRight />
    </div>
  )
}

export default TopParts