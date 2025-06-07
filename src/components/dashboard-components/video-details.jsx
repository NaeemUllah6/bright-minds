import React from 'react';
import { useParams, Link } from 'react-router-dom';

const videos = [
    { id: '1', title: 'Introduction to Topic', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '2', title: 'Advanced Concept', url: 'https://www.w3schools.com/html/movie.mp4' },
];

const VideoDetail = () => {
    const { courseId, subCourseId, videoId } = useParams();
    const video = videos.find((v) => v.id === videoId);

    return (
        <div className="bg-[#e9f5f9] min-h-screen p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-600 mb-4">
                <Link to="/courses">Courses</Link> &gt;{' '}
                <Link to={`/courses/${courseId}`}>{courseId}</Link> &gt;{' '}
                <Link to={`/courses/${courseId}/${subCourseId}`}>{subCourseId}</Link> &gt;{' '}
                <span className="text-black font-semibold">{video?.title}</span>
            </nav>

            {/* Video Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Content */}
                <div className="w-full lg:w-2/3 space-y-4">
                    <div className="bg-white rounded-lg shadow p-4">
                        <video controls className="w-full rounded-lg">
                            <source src={video?.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Basic Math Equation</h2>
                        <button className="text-blue-600 underline mt-2">Description</button>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-1/3 space-y-4">
                    {/* Exercise */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Exercise</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <button className="bg-[#F47D43] text-white px-4 py-2 rounded hover:bg-orange-600">
                            Start Exercise
                        </button>
                    </div>

                    {/* Notes */}
                    <div className="bg-white p-4 rounded-lg shadow space-y-2">
                        <h3 className="text-xl font-semibold">Notes</h3>
                        <img src="https://img.icons8.com/ios/100/notepad.png" className="w-10" alt="Notes icon" />
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <textarea
                            placeholder="Write notes"
                            className="w-full mt-2 p-2 border rounded resize-none"
                            rows={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
