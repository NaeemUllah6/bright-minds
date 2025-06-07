import React, { useState } from "react";
import { Camera } from "lucide-react";

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
    <div className="flex h-screen bg-[#f5f7fa]">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r rounded-l-2xl ">
        <h2 className="text-lg font-semibold mb-4">Student History</h2>
        <div className="space-y-2">
          <div className="font-bold text-sm text-gray-700">Today</div>
          <button className="w-full text-left px-2 py-1 rounded bg-orange-100 text-orange-700">
            Algebra Problem
          </button>
          <div className="font-bold text-sm text-gray-700 mt-4">Yesterday</div>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200">
            Algebra Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200">
            Math Problem
          </button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200">
            German Query
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 p-10 rounded-r-2xl">
        {!image ? (
          <div className="flex flex-col items-center justify-between h-full text-center space-y-4">
            <div className="flex flex-col items-center justify-center mt-20 w-full gap-4">
              <h1 className="text-[32px] leading-0 font-bold text-gray-800">
                Welcome back learner.
              </h1>
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
            <input
              type="text"
              placeholder="Ask Anything"
              className="mt-10 max-w-md border px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        ) : (
          <div className="flex flex-col  gap-6">
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

        {/* Chat Input */}

      </div>
    </div>
  );
}
