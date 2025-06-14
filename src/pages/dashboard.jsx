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
import VideoCard from '../components/dashboard-components/video-card';
import Video1 from '../assets/images/video.webm'
export default function App() {

  const cards_data = [
    { role: 'Role', Status: 'student', icon: Card1 },
    { role: 'Shift', Status: 'Morning', icon: Card2 },
    { role: 'Account Status', Status: 'Verified', icon: Card3 },
  ]

  const cards_data2 = [
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },
    { role: 'Math', Status: '3x-7 = 2x+5', cardNumber: '01' },

  ]

  const cards_data1 = [
    { video: Video1, description: 'Basic Algebra math equation' },
    { video: Video1, description: 'Basic Algebra math equation' },
    { video: Video1, description: 'Basic Algebra math equation' },

  ]
  return (
    <>

      <div className="min-h-screen font-sans text-gray-800">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 relative">
          <div className='w-full max-w-[975px]'>
            <div className='flex flex-wrap md:flex-nowrap gap-20 items-center gap rounded-[30px] px-6 py-9 bg-[#F47D43]'>
              <div className='flex flex-col'>
                <p className='font-normal text-xl text-white'>
                  Our online course
                </p>
                <Heading
                  text='Sarpen your skills with our professional online souces'
                  size={40}
                  className='font-semibold text-white'

                />
                <Button className='text-black'>
                  Enroll Now
                  <ArrowRight />
                </Button>
              </div>
              <img className='hidden md:block' src={dashboardstars} alt="icon" />
            </div>
            <div className='flex flex-wrap mt-[20px] gap-4'>
              {cards_data.map((item, index) => (
                <div id={index}
                  className=' w-full md:max-w-[250px]'
                >
                  <Card
                    cardicon={true}
                    role={item.role}
                    student_sattus={item.Status}
                    iconurl={item.icon}
                  />
                </div>
              ))}
            </div>
            <div className='mt-10'>
              <Heading
                text='User Recent Courses'
                size='30'
                className='!font-semibold'
              />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[20px] gap-4'>
              {cards_data1.map((item, index) => (
                // <Card id={index}
                //   cardicon={false}
                //   role={item.role}
                //   student_sattus={item.Status}
                //   iconurl={item.icon}
                // />
                <VideoCard
                  key={index}
                  video={item.video}
                  description={item.description}
                />
              ))}
            </div>
            <div className='mt-10'>
              <Heading
                text='User Recent Excercises'
                size='30'
                className='!font-semibold'
              />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-[20px] gap-4'>
              {cards_data2.map((item, index) => (
                <Card id={index}
                  cardNumber={item.cardNumber}
                  Button={true}
                  role={item.role}
                  student_sattus={item.Status}
                  iconurl={item.icon}
                />
              ))}
            </div>
          </div>
          <div className='rounded-[30px] p-6 bg-white top-28 sticky h-fit'>
            <Heading
              text='Statics'
              className='!font-bold !text-4xl'
            />
            <div className='flex flex-col items-center  max-w-full md:max-w-[422px] bg-white'>
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
              <div className='mt-10 mb-8 hidden md:block'>
                <BarGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
