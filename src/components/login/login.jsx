import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import MainLogo from '../../assets/images/main_logo.svg'
import background from '../../assets/images/Login Page.png'
import Input from '../global-components/input'
import Button from '../global-components/button'
import Heading from '../global-components/heading'
import Text from '../global-components/text'
import Heroicon from '../../assets/images/loginIcon.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await loginUser(credentials)
      const { token, user } = response

      login(token, user)

      const from = location.state?.from || "/"
      navigate(from, { replace: true })
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
      className='px-6 md:px-20 pb-6 pt-6 md:pt-[70px]'
    >
      <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-[1440px] mx-auto">

        <div className='hidden lg:block space-y-6'>
          <div>
            <Heading
              className='italic text-white leading-tight'
              weight={700}
              size={60}
              text='Learn smarter,'
            />
            <Heading
              className='italic text-white leading-tight'
              weight={700}
              size={60}
              text='not harder.'
            />
          </div>

          <div className='space-y-4'>
            <Text
              className='text-white leading-7'
              size={20}
              text="Bright Minds offers personalized digital tutoring to help every student perform to their best potential in Luxembourg's educational system"
            />
            <Text
              className='text-white leading-7'
              size={20}
              text='No two students learn in the same way. We use cognitive science to understand how each of our students learns best...'
            />
          </div>

          <div className='mt-8'>
            <img
              src={Heroicon}
              alt='Educational illustration'
              className='max-w-full h-auto'
            />
          </div>
        </div>

        <div className='p-8 md:p-[50px] rounded-[30px] bg-white shadow-2xl flex flex-col items-center gap-8 md:gap-[80px] h-full min-h-[600px]'>
          <img
            className='max-w-[465px] h-[72px] w-full object-contain'
            src={MainLogo}
            alt='Bright Minds Logo'
          />

          <form
            onSubmit={handleSubmit}
            className='flex gap-6 flex-col w-full'
            noValidate
          >
            <div className='text-center space-y-4'>
              <Heading
                size={48}
                weight={700}
                className='text-gray-900'
                text='Welcome Back'
              />

              <div className='flex justify-center items-center gap-1 flex-wrap'>
                <Text
                  className='text-[#404040]'
                  size={20}
                  text="Don't have an account?"
                />
                <Link
                  className='text-lg md:text-xl text-[#F47D43] hover:underline transition-all duration-200 font-medium'
                  to='/signup'
                >
                  Sign up
                </Link>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div className='w-full space-y-2'>
              <Input
                type='email'
                placeholder='Enter your email address'
                label='Email Address'
                autoComplete='email'
                disabled={false}
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className='w-full space-y-2'>
              <Input
                type='password'
                placeholder='Enter your password'
                label='Password'
                autoComplete='current-password'
                disabled={false}
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <div className='flex justify-end'>
              <Link
                className='text-[#F47D43] text-sm md:text-lg hover:underline transition-all duration-200 font-medium'
                to='/forgot-password'
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              text='Login'
              className='mt-6 md:mt-12 disabled:opacity-50 disabled:cursor-not-allowed'
              type='submit'
              disabled={!credentials.email || !credentials.password}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

const loginUser = async (credentials) => {
  return new Promise((resolve, reject) => {
    if (credentials.email && credentials.password) {
      resolve({
        token: 'dummy-token',
        user: { id: 1, email: credentials.email }
      })
    } else {
      reject(new Error('Invalid credentials'))
    }
  })
}