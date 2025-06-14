import { ArrowRight } from 'lucide-react'
import Heading from '../global-components/heading'
import React from 'react'

function Card({ iconurl, cardicon, role, student_sattus, cardNumber, Button }) {
  return (
    <div className='p-[16px] rounded-lg bg-white'>
      <div className="flex flex-wrap gap-4 items-center justify-between w-full">
        <div className='flex gap-3 items-center'>
          {cardicon && <img className='w-[78px] h-[78px]' src={iconurl} alt='icon' />}
          {cardNumber && <p
            className='h-[74px] w-[74px] rounded-full font-semibold text-[32px] bg-[#F47D4333] text-[#F47D43] flex items-center justify-center'>
            {cardNumber}
          </p>}
          <div className='flex-col'>
            <p className='text-xl text-nowrap'>
              {role}
            </p>
            <Heading
              size='30'
              className='font-semibold'
              text={student_sattus}
            />
          </div>
        </div>
        {Button && <button className='flex items-center gap-2 cursor-pointer text[#949494]'>Continue <ArrowRight className='text-[#F47D43]' /></button>}
      </div>
    </div>
  )
}

export default Card