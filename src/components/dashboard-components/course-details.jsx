import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PlayVideo from '../../assets/images/play-video.svg'
import Heading from '../global-components/heading';
import Text from '../global-components/text';
import Button from '../global-components/button';
import notepadicon from '../../assets/images/notepadicon.svg'
const CourseDetail = () => {
    const { courseId, subCourseId, videoId } = useParams();
    const navigate = useNavigate();

    const videos = [
        { id: '1', title: 'Basic math equation', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: '2', title: 'Advanced Concept', url: 'https://www.w3schools.com/html/movie.mp4' },
    ];

    const exercises = [
        { id: 1, question: 'What is 6G?', type: 'multiple choice' },
        { id: 2, question: 'Explain 6G use cases.', type: 'short answer' },
    ];

    const [activeTab, setActiveTab] = React.useState('videos');

    const handleVideoClick = (id) => {
        navigate(`/courses/${courseId}/${subCourseId}/video/${id}`);
    };
    const handleExercise = () => {
        navigate('/excercise-detail');
    };

    const selectedVideo = videos.find((v) => v.id === videoId);

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Course: {subCourseId}</h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-[#BBBBBB]">
                <button
                    className={`pe-4 py-2  ${activeTab === 'videos' ? 'border-b-4 border-[#F47D43]  text-black' : 'text-[#949494]'}`}
                    onClick={() => setActiveTab('videos')}
                >
                    Lessons
                </button>
                <button
                    className={`pe-4 py-2 ${activeTab === 'exercises' ? 'border-b-4 border-[#F47D43]  text-black' : 'text-[#949494]'}`}
                    onClick={() => setActiveTab('exercises')}
                >
                    Excercises
                </button>
            </div>

            {/* Videos Tab */}
            {activeTab === 'videos' && (
                <div className="space-y-6  ">
                    {/* Video List */}
                    <div className="">
                        {/* <h2 className="text-xl font-semibold mb-3">Video Lessons</h2> */}
                        <ul className="space-y-2">
                            {videos.map((video) => (
                                <div
                                    onClick={() => handleVideoClick(video.id)}
                                    className='flex items-center gap-2 cursor-pointer'>
                                    <img src={PlayVideo} alt='icon' />
                                    <li key={video.id}>
                                        <button
                                            className="font-semibold text-xl text-black "
                                        >
                                            {video.title}
                                        </button>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {selectedVideo && (
                        <div className="w-full">
                            {/* <h3 className="text-lg font-semibold mb-2">{selectedVideo.title}</h3> */}
                            <div className='flex items-ceter gap-3'>
                                <div className='max-w-[975px] w-full h-full'>
                                    <video controls className="w-full rounded-[20px]">
                                        <source src={selectedVideo.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <Heading
                                        text={selectedVideo.title}
                                        className='font-semibold text-[32px] mt-5'
                                    />
                                    <Text
                                        text='Description'
                                        className='border-b-4 border-[#F47D43] w-fit'
                                    />
                                    <Text
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                        className='mt-8 text-[#949494] !font-normal w-fit'
                                    />
                                </div>
                                <div>
                                    <div className='rounded-[20px] bg-white p-6'>
                                        <Heading
                                            text='Excercise'
                                            className='font-semibold text-[32px]'
                                        />
                                        <Text
                                            className='text-[#949494] text-xl'
                                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                                        />
                                        <Button
                                            className='font-semibold mt-6 !w-fit'
                                            text='Start Exercise'
                                        />
                                    </div>
                                    <div className='rounded-[20px] flex flex-col gap-20  bg-white p-6 mt-6'>
                                        <Heading
                                            text='Notes'
                                            className='font-semibold text-[32px]'
                                        />
                                        <div>
                                            <img className='mx-auto' src={notepadicon} alt='icon ' />
                                            <Text
                                                className='text-[#949494] text-center text-xl'
                                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                                            />
                                        </div>
                                        <input
                                            type='text'
                                            placeholder='Write Notes'
                                            className='text-xl text-[#949494] p-5 border rounded'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Exercises Tab */}
            {activeTab === 'exercises' && (
                <div className="space-y-4">
                    {exercises.map((ex) => (
                        <div
                            onClick={() => handleExercise(ex.id)} // fixed here!
                            key={ex.id}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img src={PlayVideo} alt="icon" />
                            <li className="list-none">
                                <button className="font-semibold text-xl text-black">
                                    {ex.question}
                                </button>
                            </li>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseDetail;
