import React, { useState, useRef, useEffect } from 'react';
import Input from '../components/global-components/input';
import { FaUserEdit } from 'react-icons/fa';
import Card from '../components/global-components/card';
import Heading from '../components/global-components/heading';
import editIcon from '../assets/images/editicon.svg';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const initialData = {
        firstName: 'Developer Zone 360',
        familyName: 'DeveloperZone360',
        email: 'developerzone360@gmail.com',
        password: '12345678',
    };

    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    const [profileImage, setProfileImage] = useState(
        'https://cdn-icons-png.flaticon.com/512/706/706830.png'
    );
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    // 🧠 Detect changes in formData
    useEffect(() => {
        const hasAnyChange = Object.keys(initialData).some(
            (key) => formData[key] !== initialData[key]
        );
        setHasChanges(hasAnyChange);
    }, [formData]);

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.familyName.trim()) newErrors.familyName = 'Family name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.password || formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setShowModal(true);
                setIsSubmitting(false);
                setHasChanges(false);
            }, 2000); // Simulate API delay
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const cards_data1 = [
        { role: 'Overall Score', Status: '1.00' },
        { role: 'Visual', Status: '1.67' },
        { role: 'Auditory', Status: '0.00' },
        { role: 'Read', Status: '0.00' },
        { role: 'Kinesthetic', Status: '0.00' },
        { role: 'Difficulty', Status: '0.00' },
    ];

    const Inputs = [
        {
            label: 'First Name',
            name: 'firstName',
            placeholder: 'Enter first name',
            type: 'text',
        },
        {
            label: 'Family Name',
            name: 'familyName',
            placeholder: 'Enter family name',
            type: 'text',
        },
        {
            label: 'Email Address',
            name: 'email',
            placeholder: 'Enter email',
            type: 'email',
        },
        {
            label: 'Password',
            name: 'password',
            placeholder: 'Enter password',
            type: 'password',
        },
    ];

    return (
        <>
            <div className="bg-white p-8 rounded-xl w-full">
                <h2 className="text-xl font-bold mb-6 text-center">User Profile</h2>

                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-[100px] h-[100px] mb-2">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-orange-300 object-cover"
                        />
                        <div
                            className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full cursor-pointer"
                            onClick={handleIconClick}
                        >
                            <FaUserEdit className="text-white" />
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <p className="text-gray-600 text-sm">Change profile pic</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Inputs.map((item, index) => (
                        <div key={index} className="relative">
                            <Input
                                label={item.label}
                                name={item.name}
                                placeholder={item.placeholder}
                                type={item.type}
                                value={formData[item.name]}
                                onChange={handleChange}
                                required
                                error={errors[item.name]}
                            />
                            <div className="absolute right-1 bottom-1">
                                <img src={editIcon} alt="icon" />
                            </div>
                            {errors[item.name] && (
                                <p className="text-red-500 text-sm mt-1">{errors[item.name]}</p>
                            )}
                        </div>
                    ))}

                    {/* Buttons */}
                    <div className="col-span-2 flex justify-center gap-4 mt-4">
                        <button
                            type="submit"
                            disabled={!hasChanges || isSubmitting}
                            className={`px-12 py-3 font-semibold rounded-md transition ${hasChanges && !isSubmitting
                                ? 'bg-orange-500 text-white hover:bg-orange-600'
                                : 'bg-orange-300 text-white cursor-not-allowed'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2 justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Saving...
                                </span>
                            ) : (
                                'Save'
                            )}
                        </button>

                        <button
                            type="button"
                            className="border border-orange-300 text-orange-500 px-12 bg-[#F47D4333] py-3 rounded-md hover:bg-orange-50 transition font-semibold"
                            onClick={() => {
                                setFormData(initialData);
                                setErrors({});
                                setHasChanges(false);
                                navigate('/dashboard');
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                {/* ✅ Success Modal */}
                {showModal && (
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.28)',
                            zIndex: '999999',
                        }}
                        className="fixed inset-0 flex justify-center items-center z-50"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-green-600 mb-2">
                                Profile Updated Successfully!
                            </h3>
                            <p className="text-gray-700 mb-4">Your changes have been saved.</p>
                            <button
                                onClick={closeModal}
                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 📊 User Score Section */}
            <Heading text="User Score" size="30" className="mt-6 !font-semibold" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[20px] gap-4">
                {cards_data1.map((item, index) => (
                    <Card
                        key={index}
                        id={index}
                        cardicon={false}
                        role={item.role}
                        student_sattus={item.Status}
                        iconurl={item.icon}
                    />
                ))}
            </div>
        </>
    );
};

export default UserProfile;
