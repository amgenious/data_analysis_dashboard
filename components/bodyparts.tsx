import React from 'react'
import BodyLeft from './bodyparts/bodyleft'
import BodyRight from './bodyparts/bodyright'

const BodyParts = () => {
  return (
    <div className='w-full h-[75%] flex gap-4'>
        <BodyLeft />
        <BodyRight />

    </div>
  )
}

export default BodyParts