import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import coursecard from '../assets/images/courses-screen-card.png';

const Heading = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);

const coursesData = [
  {
    id: '6g',
    title: '6G',
    desc: 'Learn about 6G technologies.',
    tags: ['Math', 'German'],
    icon: coursecard,
    subcourses: [
      {
        id: 'fundamentals',
        title: '6G Fundamentals',
        desc: 'Basic concepts and introduction to 6G technology',
        tags: ['Basics', 'Theory'],
        icon: coursecard,
      },
      {
        id: 'advanced-topics',
        title: '6G Advanced Topics',
        desc: 'Deep dive into advanced 6G implementations',
        tags: ['Advanced', 'Implementation'],
        icon: coursecard,
      },
    ],
  },
  {
    id: '5g',
    title: '5G',
    desc: 'Explore 5G networks and use cases.',
    tags: ['Science', 'Network'],
    icon: coursecard,
    subcourses: [
      {
        id: 'network',
        title: '5G Network',
        desc: 'Understanding 5G network',
        tags: ['Basics'],
        icon: coursecard,
      },
      {
        id: 'applications',
        title: '5G Applications',
        desc: 'Real-world applications and use cases',
        tags: ['Apps', 'Use Cases'],
        icon: coursecard,
      },
    ],
  },
];

const Breadcrumb = ({ items, onNavigate }) => (
  <nav className="flex items-center space-x-2 text-sm mb-4">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
        <button
          onClick={() => onNavigate(index)}
          className={`${index === items.length - 1 ? 'text-[#F47D43] font-medium' : 'text-gray-600 hover:text-[#F47D43]'}`}
        >
          {item}
        </button>
      </React.Fragment>
    ))}
  </nav>
);

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    if (selectedCourse) {
      const courseId = selectedCourse.id;
      const subCourseId = course.id;
      navigate(`/course/${courseId}/${subCourseId}`);
    } else {
      setSelectedCourse(course);
    }
  };

  const handleBreadcrumbNavigate = (index) => {
    if (index === 0) {
      navigate('/');
    } else if (index === 1) {
      setSelectedCourse(null);
    }
  };

  const currentData = selectedCourse ? selectedCourse.subcourses : coursesData;
  const breadcrumbItems = selectedCourse
    ? ['Home', 'Courses', selectedCourse.title]
    : ['Home', 'Courses'];

  return (
    <div className="">
      <Breadcrumb items={breadcrumbItems} onNavigate={handleBreadcrumbNavigate} />
      <Heading text="Courses" className="font-semibold text-[32px]" />
      <div className="flex flex-wrap md:flex-nowrap gap-6 mt-4">
        {currentData.map((course, index) => (
          <div
            key={index}
            className="p-[20px] bg-white rounded-xl flex flex-wrap md:flex-nowrap items-start gap-4 max-w-[518px] cursor-pointer"
            onClick={() => handleCourseClick(course)}
          >
            <img className='w-full' src={course.icon} alt="icon" />
            <div>
              <Heading text={course.title} className="text-[24px] font-semibold" />
              <p className="text-md text-[#949494]">{course.desc}</p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {course.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-[5px] bg-[#F47D4333] text-[#F47D43] rounded-full"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
