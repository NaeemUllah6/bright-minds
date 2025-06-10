import React, { useState } from 'react';
import Input from '../components/global-components/input'; // Adjust path based on your folder structure
import { FaUserEdit } from 'react-icons/fa';
import Card from '../components/global-components/card';
import Heading from '../components/global-components/heading';

const UserProfile = () => {
    const [formData, setFormData] = useState({
        firstName: 'Developer Zone 360',
        familyName: 'DeveloperZone360',
        email: 'developerzone360@gmail.com',
        password: '12345678',
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setShowModal(true);
        }
    };

    const closeModal = () => setShowModal(false);

    const cards_data1 = [
        { role: 'Overall Score', Status: '1.00', },
        { role: 'Visual', Status: '1.67', },
        { role: 'Auditory', Status: '0.00', },
        { role: 'Read', Status: '0.00', },
        { role: 'Kinesthetic', Status: '0.00', },
        { role: 'Difficulty', Status: '0.00', },
    ]

    return (
        <>
            <div className="bg-white p-8 rounded-xl  w-full">
                <h2 className="text-xl font-bold mb-6 text-center">User Profile</h2>

                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-[100px] h-[100px] mb-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-orange-300"
                        />
                        <div className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full cursor-pointer">
                            <FaUserEdit className="text-white" />
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">Change profile pic</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div> <Input
                        label="First name"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        error={errors.firstName}
                    />
                    </div>
                    <div> <Input
                        label="Family name"
                        name="familyName"
                        placeholder="Enter family name"
                        value={formData.familyName}
                        onChange={handleChange}
                        required
                        error={errors.familyName}
                    />
                    </div>
                    <div> <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        error={errors.email}
                    />
                    </div>
                    <div> <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        error={errors.password}
                    />
                    </div>

                    <div className="col-span-2 flex justify-center gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="border border-orange-300 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-50 transition"
                            onClick={() =>
                                setFormData({
                                    firstName: '',
                                    familyName: '',
                                    email: '',
                                    password: '',
                                })
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </form>



                {/* Modal */}
                {showModal && (
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.28)',
                            zIndex: '999999'

                        }}
                        className="fixed inset-0  flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-green-600 mb-2">Profile Updated Successfully!</h3>
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
            <Heading
                text='User Score'
                size='30'
                className='mt-6 !font-semibold'
            />
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
        </>
    );
};

export default UserProfile;
