import Heading from '../global-components/heading'
import React from 'react'

function Card({ iconurl, cardicon, role, student_sattus }) {
  return (
    <div className='p-[16px] rounded-lg bg-white'>
      <div className="flex flex-wrap gap-4 items-center">
        {cardicon && <img className='w-[78px] h-[78px]' src={iconurl} alt='icon' />}
        <div className='flex-col'>
          <p className='text-xl'>
            {role}
          </p>
          <Heading
            className='text-[28px] font-semibold'
            text={student_sattus}
          />
        </div>
      </div>
    </div>
  )
}

export default Card