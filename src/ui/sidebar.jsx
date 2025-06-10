import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import DashboardIcon from '../assets/images/dashboard-icon.svg'
import Black from '../assets/images/blacklogo.svg'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

function Sidebar({ showSidebar, setShowSidebar }) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const sidebarItems = [
    { label: 'Dashboard', icon: DashboardIcon, path: '/' },
    { label: 'Courses', icon: DashboardIcon, path: '/courses' },
    { label: 'AI Answers', icon: DashboardIcon, path: '/ai-screen' }
  ]

  const renderNavLinks = () => (
    <nav className='mt-12 flex flex-col gap-6'>
      <p className='text-[#949494] text-xl'>Overview</p>
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setShowSidebar(false)}
          className={`flex items-center gap-3 rounded-lg px-4 py-2 transition-all duration-200  ${location.pathname === item.path
            ? 'bg-orange-100 text-orange-600'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          <img className='h-6 w-6' src={item.icon} alt={`${item.label} icon`} />
          <span className='text-base font-medium md:text-lg'>{item.label}</span>
        </Link>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 z-40 h-screen w-full max-w-[280px] bg-white shadow-lg px-[25px] py-[40px]">
        <img className='w-full object-contain' src={Black} alt='main logo' />
        {renderNavLinks()}
        <div className='mt-auto pt-12 flex flex-col gap-6 items-center'>
          <Link className='text-base font-medium'>About</Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 text-red-600 hover:text-red-800 transition-colors duration-200 hover:bg-red-50 rounded-lg w-full"
          >
            <img className='h-6 w-6' src={DashboardIcon} alt='logout icon' />
            <span className='text-base font-medium md:text-lg'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${showSidebar
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setShowSidebar(false)}
        />

        {/* Mobile Sidebar Content */}
        <div
          className={`absolute left-0 top-0 h-full bg-white p-6 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl
            w-[85%] xs:w-[70%] sm:w-[60%]
            ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-4">
            <img className='w-[180px]' src={Black} alt='main logo' />
            <button
              onClick={() => setShowSidebar(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <IoClose className="text-3xl text-gray-700" />
            </button>
          </div>

          {renderNavLinks()}

          <div className="mt-auto pt-10">

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2 text-red-600 hover:text-red-800 transition-colors duration-200 hover:bg-red-50 rounded-lg w-full"
            >
              <img className='h-6 w-6' src={DashboardIcon} alt='logout icon' />
              <span className='text-base font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar