import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExercisePage = () => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [feedback, setFeedback] = useState('');

    const correctAnswer = "B";

    const handleSubmitAnswer = () => {

        if (userAnswer.trim().toUpperCase() === correctAnswer) {
            setIsCorrect(true);
            setFeedback("Your answer is correct (B) 🎉");
        } else {
            setIsCorrect(false);
            setFeedback("Oops! That's not the right answer 💔");
        }

    };

    return (
        <div className="!min-h-screen bg-[#E4F6FB] ">

            <div className="text-sm text-gray-500 mb-4">
                <span className="cursor-pointer"><Link to='/'>&larr;</Link></span> Cources &gt; 6G &gt; Math &gt; Exercise 1
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold mb-4">
                Linear Equation – Solve for x
            </h2>

            <div className="bg-white p-6 rounded-xl">
                <h3 className="text-[22px] font-semibold mb-4">3x - 7 = 2x + 5</h3>

                <ul className="space-y-3 text-[16px]">
                    <li>A) x = 12</li>
                    <li>B) x = -12</li>
                    <li>C) x = 5</li>
                    <li>D) x = -5</li>
                </ul>
                {isCorrect !== null && (
                    <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {feedback}
                        {isCorrect && (
                            <div className="mt-2 text-sm text-gray-600">
                                <p>Here's why:</p>
                                <ol className="list-decimal ml-6">
                                    <li>3x - 7 = 2x + 5</li>
                                    <li>3x - 2x = 5 + 7</li>
                                    <li>x = 12</li>
                                </ol>
                            </div>
                        )}
                    </div>
                )}
                <div className="mt-6 flex items-center border border-[#949494] rounded-full px-4 py-2 s">

                    <input
                        type="text"
                        placeholder="Your answer here"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="flex-1 bg-transparent outline-none px-2 py-3"
                    />
                    <button onClick={handleSubmitAnswer} className="text-[#F47D43]">
                        <Send size={20} />
                    </button>
                </div>


            </div>

            <div className="mt-6 flex justify-between">
                <button className="flex items-center gap-1 text-[#F47D43] bg-[#F47D4333]     border border-[#F47D43] px-4 py-3 rounded-md hover:bg-[#f47d4320] transition">
                    <ArrowLeft size={16} /> Previous Exercise
                </button>
                <button className="flex items-center gap-1 bg-[#F47D43] text-white px-4 py-3 rounded-md hover:bg-[#d96d3c] transition">
                    Next Exercise <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default ExercisePage;
