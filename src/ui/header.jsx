import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Input from '../components/global-components/input'
import Profile_Avatar from '../assets/images/profile-avatar.svg'
import { HiOutlineMenu } from 'react-icons/hi'

function Header({ onChange, setShowSidebar }) {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const dropdownRef = useRef(null)

  const handleSelect = (option) => {
    setSelected(option)
    onChange?.(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const options = [
    { label: 'English', value: 'English' },
    { label: 'German', value: 'German' }
  ]

  return (
    <div className="bg-transparent px-4 py-3 md:px-[54px] md:py-4 shadow sticky top-0 z-[99999]">
      <div className="flex justify-between items-center gap-4 ">
        {/* 📱 Burger Menu */}
        <div className="md:hidden">
          <button onClick={() => setShowSidebar(true)}>
            <HiOutlineMenu className="text-3xl text-gray-700" />
          </button>
        </div>

        {/* 👨‍💻 Desktop Search */}
        <div className="hidden md:block w-full">
          <Input
            placeholder="Search your courses"
            icon=""
            className="border !border-[#949494] ps-10 bg-white py-3 rounded-full w-full placeholder:text-[#949494]"
          />
        </div>

        {/* 👤 Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Dropdown */}
          <div className="relative min-w-[100px] border-r pr-" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <span>{selected ? selected.label : 'Language'}</span>
              <svg
                className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <ul className="absolute mt-2 w-full bg-white border rounded shadow z-50">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-3">
            <img src={Profile_Avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              {user?.email || 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
