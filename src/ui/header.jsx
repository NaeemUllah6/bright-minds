import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Input from '../components/global-components/input'
import Profile_Avatar from '../assets/images/profile-avatar.svg'
import { HiOutlineMenu } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import searchIcon from '../assets/images/searcicon.svg'
import { useNavigate } from 'react-router-dom'

function Header({ onChange, setShowSidebar }) {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [profileOpen, setProfileOpen] = useState(false)
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false)

  const languageRef = useRef(null)
  const desktopProfileRef = useRef(null)
  const mobileProfileRef = useRef(null)

  const handleSelect = (option) => {
    setSelected(option)
    onChange?.(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setIsOpen(false)
    }
    if (desktopProfileRef.current && !desktopProfileRef.current.contains(event.target)) {
      setProfileOpen(false)
    }
    if (mobileProfileRef.current && !mobileProfileRef.current.contains(event.target)) {
      setMobileProfileOpen(false)
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
    <div className="bg-[#E5F4F8] px-4 py-3 md:px-[54px] md:py-4 sticky top-0 z-[99999]">
      <div className="flex justify-between items-center gap-4">
        {/* 📱 Burger Menu */}
        <div className="md:hidden">
          <button onClick={() => setShowSidebar(true)}>
            <HiOutlineMenu className="text-3xl text-gray-700" />
          </button>
        </div>

        {/* 🔍 Search Bar */}
        <div className="block w-full relative">
          <Input
            placeholder="Search your courses"
            icon=""
            className="border !border-[#949494] ps-12 bg-white py-3 rounded-full w-full placeholder:text-[#949494]"
          />
          <div className="absolute top-[10px] left-3">
            <img src={searchIcon} alt="icon" />
          </div>
        </div>

        {/* 🌐 Language + Profile (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* 🌐 Language Dropdown */}
          <div className="relative min-w-[100px]" ref={languageRef}>
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <span>{selected ? selected.label : 'Language'}</span>
              <FiChevronDown className={`transform ${isOpen ? 'rotate-180' : ''}`} />
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

          {/* 👤 Profile Dropdown */}
          <div className="relative" ref={desktopProfileRef}>
            <div className="flex items-center gap-2">
              <div>
                <button
                  onClick={() => setProfileOpen(prev => !prev)}
                  className="flex items-center gap-2 w-10 h-10"
                >
                  <img src={Profile_Avatar} alt="Profile" className=" rounded-full object-cover" />
                  <FiChevronDown className={`transform transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-2">{user?.email || 'Loading...'}</p>
            </div>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow z-50 w-48 p-3">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        navigate('/user-profile')
                        setProfileOpen(false)
                      }}
                      className="w-full text-left text-sm text-gray-700 hover:text-indigo-600"
                    >
                      👤 User Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logout()
                        setProfileOpen(false)
                        navigate('/login')
                      }}
                      className="w-full text-left text-sm text-gray-700 hover:text-red-600"
                    >
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 👤 Profile (Mobile) */}
        <div className="md:hidden relative" ref={mobileProfileRef}>
          <button
            onClick={() => setMobileProfileOpen(prev => !prev)}
            className="flex items-center gap-2"
          >
            <img src={Profile_Avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            <FiChevronDown className={`transform transition-transform duration-300 ${mobileProfileOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileProfileOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow z-50 w-48 p-3">
              <p className="text-sm font-medium text-gray-800 mb-2">{user?.email || 'Loading...'}</p>
              <hr className="my-2" />
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate('/user-profile')
                      setMobileProfileOpen(false)
                    }}
                    className="w-full text-left text-sm text-gray-700 hover:text-indigo-600"
                  >
                    👤 User Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout()
                      setMobileProfileOpen(false)
                      navigate('/login')
                    }}
                    className="w-full text-left text-sm text-gray-700 hover:text-red-600"
                  >
                    🚪 Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
