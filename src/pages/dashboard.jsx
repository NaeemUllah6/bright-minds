import React from 'react';
import dashboardstars from '../assets/images/dashboard-stars.png'
import Heading from '../components/global-components/heading';
import Button from '../components/global-components/button';
import { ArrowRight } from 'lucide-react';
import Paragraph from '../components/global-components/text';
import Card from '../components/global-components/card';
import Card1 from '../assets/images/card1.svg'
import Card2 from '../assets/images/card2.svg'
import Card3 from '../assets/images/card3.svg'
import { RadialProgress } from '../components/dashboard-components/chart'
import Avatar from '../assets/images/profile-avatar.svg'
import BarGraph from '../components/dashboard-components/bar-graph'
export default function App() {

  const cards_data = [
    { role: 'Role', Status: 'student', icon: Card1 },
    { role: 'Shift', Status: 'Morning', icon: Card2 },
    { role: 'Account Status', Status: 'Verified', icon: Card3 },
  ]

  const cards_data1 = [
    { role: 'Overall Score', Status: '1.00', },
    { role: 'Visual', Status: '1.67', },
    { role: 'Auditory', Status: '0.00', },
    { role: 'Read', Status: '0.00', },
    { role: 'Kinesthetic', Status: '0.00', },
    { role: 'Difficulty', Status: '0.00', },
  ]

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <div className="flex flex-wrap xl:flex-nowrap gap-10">
        <div className='w-full max-w-[975px]'>
          <div className='flex flex-wrap md:flex-nowrap gap-20 items-center gap rounded-[30px] px-6 py-9 bg-[#F47D43]'>
            <div className='flex flex-col'>
              <p className='font-normal text-xl text-white'>
                Our online course
              </p>
              <Heading
                text='Sarpen your skills with our professional online souces'
                size={48}
                className='font-semibold text-white'

              />
              <Button className='text-black'>
                Enroll Now
                <ArrowRight />
              </Button>
            </div>
            <img className='hidden md:block' src={dashboardstars} alt="icon" />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[20px] gap-4'>
            {cards_data.map((item, index) => (
              <Card id={index}
                cardicon={true}
                role={item.role}
                student_sattus={item.Status}
                iconurl={item.icon}
              />
            ))}
          </div>
          <div className='mt-10'>
            <Heading
              text='User Score'
              className='!font-semibold text-[32px]'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[20px] gap-4'>
            {cards_data1.map((item, index) => (
              <Card id={index}
                cardicon={false}
                role={item.role}
                student_sattus={item.Status}
                iconurl={item.icon}
              />
            ))}
          </div>
        </div>
        <div className=' p-6 flex flex-col items-center rounded-[30px] max-w-full md:max-w-[422px] bg-white'>
          <Heading
            text='Statics'
            className='!font-bold !text-4xl'
          />
          <div className='!z-30'>
            <RadialProgress
              percentage={33}
              imageSrc={Avatar}
            />
          </div>
          <Heading
            text='Good Morning Developer 😎'
            weight={700}
            className='!text-2xl text-center mt-5'
          />
          <Paragraph
            text='Continue your learning, you have almost achieved your target'
            className='text-center mt-2'
          />
          <div className='mt-10 mb-8'>
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
