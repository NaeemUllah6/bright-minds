import React from 'react'

function Button({ text, className, onclick }) {
  return (
    <button onClick={onclick} className={`py-3 md:py-5 px-6  text-white rounded-lg bg-[#F47D43] ${className ? className : ''}`}>
      {text}
    </button>
  )
}

export default Button