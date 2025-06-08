import React, { useState } from "react";
import { Camera } from "lucide-react";
import cameraIcon from '../assets/images/selectfile.svg'
import SendIcon from '../assets/images/sendmessage.svg'

export default function StudentDashboard() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex  flex-wrap lg:flex-nowrap h-screen relative">
      {/* Sidebar */}
      <div className="hidden max-w-64 md:flex flex-col border sticky top-20 flex-1 bg-white p-4 border-r rounded-l-2xl ">
        <h2 className="text-xl font-semibold mb-4">Student History</h2>
        <div className="space-y-2">
          <div className=" text-sm text-[#949494]">Today</div>
          <button className="w-full text-left px-2 py-1 rounded bg-orange-100 text-orange-700">
            Algebra Problem
          </button>
          <div className=" text-sm text-[#949494] mt-4 ">Yesterday</div>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            Algebra Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            Math Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            German Query
          </button>
          <div className=" text-sm text-[#949494] mt-4 ">Yesterday</div>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            Algebra Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            Math Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 text-[#1E1E1E]">
            German Query
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 p-4 md:p-10 rounded-r-2xl overflow-auto h-screen bg-white border">
        {!image ? (
          <div className="flex flex-col items-center justify-between h-full text-center space-y-4">
            <div className="flex flex-col items-center justify-center mt-3 md:mt-20 w-full gap-4">
              <h2 className="text-[32px] text-wrap leading-8 font-bold text-gray-800">
                Welcome back learner.
              </h2>
              <p className="mt-1 text-[#949494]">Give me image of the problem bothering you</p>

              <div className="border-2 border-dashed border-orange-300 bg-white p-[30px] rounded-xl w-full max-w-xl">
                <Camera className="mx-auto text-orange-400 w-10 h-10 mb-4" />
                <p className="text-gray-500 mb-2">
                  Drag an image here or{" "}
                  <label className=" underline cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    upload file
                  </label>
                </p>
                <div className="flex items-center gap-2 max-w-[239px] mx-auto">
                  <div className="border border-[#949494] w-full"></div>
                  <p className="">or</p>
                  <div className="border border-[#949494] w-full"></div>
                </div>
                <button className="mt-2 font-bold bg-orange-500 text-white px-4 py-2 rounded shadow">
                  Capture with camera
                </button>
              </div>
            </div>
            <div className="w-full relative">
              <input className="rounded-full border w-full ps-12 py-4" type="text" placeholder="Ask Anythin" />
              <div className="absolute top-[13px] left-4">
                <img src={cameraIcon} alt='cameraicon' />
              </div>
              <div className="absolute top-[10px] right-4">
                <img src={SendIcon} alt='cameraicon' />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex justify-end w-full">
              <img
                src={image}
                alt="Uploaded"
                className="w-[200px] rounded shadow"
              />
            </div>

            <div className="bg-white p-4 rounded shadow max-w-xl text-sm whitespace-pre-wrap">
              <p>
                We are given the equation:
                {"\n"}3x + 7 = 22
                {"\n"}Step 1: Subtract 7 from both sides
                {"\n"}3x + 7 - 7 = 22 - 7
                {"\n"}3x = 15
                {"\n"}Step 2: Divide both sides by 3
                {"\n"}3x / 3 = 15 / 3
                {"\n"}x = 5 ✅
                {"\n"}Final Answer: x = 5 ✅
                {"\n"}Let’s verify it:
                {"\n"}Plug x = 5 into the original equation:
                {"\n"}3(5) + 7 = 15 + 7 = 22 ✅
                {"\n"}The left-hand side equals the right-hand side, so our solution is correct.
              </p>
            </div>

          </div>
        )}

      </div>


    </div>
  );
}
