import React from 'react'
import Heading from '../components/global-components/heading'
import Text from '../components/global-components/text'
import Img1 from '../assets/images/about1.png'
import Img2 from '../assets/images/aboutmiddle.png'
import Img3 from '../assets/images/about2.png'
import Card from '../components/global-components/card'
import Icon1 from '../assets/images/icon1.svg'
import Icon2 from '../assets/images/icon2.svg'
import Icon3 from '../assets/images/icon3.svg'
import WomenPic from '../assets/images/womenabout.png'
function About() {
    const aboutcard = [
        { icon: Icon1, text: 'No two brains are alike,no two students learn in the same way' },
        { icon: Icon2, text: 'We use cognitive science to understand how each student learns' },
        { icon: Icon3, text: 'We personalize the learning journey while developing the whole individual' },
    ]
    return (
        <div>
            <div className='pt-10 md:pt-[70px] px-6 md:px-24 pb-4 bg-[#F47D43] rounded-[20px] '>
                <div className='max-w-[814px] w-full flex flex-col items-center gap-1 mx-auto'>
                    <Heading
                        text='About Us'
                        size={30}
                        weight={600}
                        className='text-white'
                    />
                    <Text
                        className='text-center !text-[22px] text-white'
                        weight={400}
                        text='We are a unique community of professors in 
                        the Luxembourg school system, dedicated to improve
                         the test scores of each learner while also building
                          self-confidence and developing the whole individual.'
                    />
                </div>
                <div className='grid items-end grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center mt-[33px] gap-[34px]'>
                    <img src={Img1} alt="image1" />
                    <img src={Img2} alt="image2" />
                    <img src={Img3} alt="image3" />
                </div>
            </div>
            <div className='py-10 md:py-[100px]'>
                <Heading
                    text='The Bright Minds way'
                    size={30}
                    weight={600}
                    className='text-center mb-3'
                />
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center'>
                    {aboutcard.map((items, index) => (
                        <Card
                            key={index}
                            cardicon={true}
                            iconurl={items.icon}
                            carddes={true}
                            cardDes={items.text}
                        >
                        </Card>
                    ))}
                </div>
            </div>
            <div className=''>
                <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
                    <div className='max-w-[619px]'>
                        <img src={WomenPic} alt="" />
                    </div>
                    <div className='max-w-[773px]'>
                        <Heading
                            text='Personalized Online Tutoringy'
                            size={30}
                            weight={600}
                            className='mb-3'
                        />
                        <Text
                            text='We make an initial assessment of a student’s skills and learning preferences in order to develop a goal-based, metric-guided learning plan just for them. The Bright Minds system composes and schedules learning sessions accordingly, monitors progress throughout the journey and adjust programs dynamically.'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About