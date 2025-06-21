import React, { useState, useEffect } from 'react';
import mainlogowhite from '../../assets/images/mainlogowhite.svg';
import background from '../../assets/images/Login Page.png';
import Input from '../global-components/input';
import Button from '../global-components/button';
import Heading from '../global-components/heading';
import Text from '../global-components/text';
import Heroicon from '../../assets/images/loginIcon.svg';
import { Link } from 'react-router-dom';
import Modal from '../global-components/modal';
import axios from 'axios';

function Signup() {
  const [modalOpen, setModalOpen] = useState(false)
  const handleSubmit = () => {
    setModalOpen(true)
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
      className='px-6 md:px-20 pb-6 pt-6 md:pt-[70px]'
    >
      <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-6 items-end">
        <div className='hidden lg:flex flex-col justify-between h-full'>
          <img className='max-w-[465px] h-[72px] w-full' src={mainlogowhite} alt='icon' />
          <img src={Heroicon} alt='icon' />
        </div>

        <div className='p-[50px] rounded-[30px] bg-white flex flex-col items-center gap-4 md:gap-[125px] h-full'>
          <div className='flex gap-6 flex-col w-full relative'>

            <Heading size={48} weight={700} className='mx-auto' text='Get Started' />
            <div className='flex justify-center items-center gap-1'>
              <Text className='text-[#404040]' size='20' text='Already have an account?' />
              <Link className='text-sm md:text-xl text-[#F47D43]' to='login'>Login</Link>
            </div>

            <div className='w-full relative'>
              <Input
                id='fname'
                type='text'
                placeholder='John Doe'
                label='First Name'

              />

            </div>

            <div className='w-full relative'>
              <Input
                id='lname'
                type='text'
                placeholder='Doe Smith'
                label='Last Name'

              />

            </div>

            <div className='w-full relative'>
              <Input
                id='email'
                type='email'
                placeholder='developerzone360@gmail.com'
                label='Email Address'

              />

            </div>

            <div className='w-full relative'>
              <Input
                id='password'
                type='password'
                placeholder='**********'
                label='Password'
                icon='icon'

              />

            </div>

            <div className='relative w-full'>
              <div className='flex items-center gap-2'>
                <input id='acceptTerms' type="checkbox" />
                <label htmlFor='acceptTerms' className='text-[#1E1E1E] text-sm md:text-xl'>
                  Please accept our Terms and Conditions
                </label>
              </div>

            </div>

            <Button
              text='Signup'
              className='font-semibold mt-10 md:mt-12'
              onclick={handleSubmit}
            />
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal
          title='Success'
          text='You have successfully signed up!'
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Signup;
