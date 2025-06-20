import React from "react";
import { Play } from "lucide-react";
import { FaRegCirclePlay} from "react-icons/fa6"
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";


 export default function ChatPop  ()  {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-xl rounded-2xl  flex-grow p-3 space-y-3 overflow-y-auto custom-scrollbar sm:p-4  sm:space-y-4 bg-gradient-to-r from-orange-100/50 via-pink-100  to-blue-200  py-6 px-8 shadow-xl relative">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <div >
           <Image src="/page3/student_b2b/AI Button.svg" alt="Ask me bot" width={231} height={46} className="w-10" />
          </div>
          <h2 className="text-black font-semibold">Ask me anything !</h2>
         
        </div>

        {/* Chat bubbles */}
        <div className="space-y-4 py-4">
          {/* User message */}
          <div className="text-right">
             <p className="text-sm text-white font-bold mt-1">Shlok</p>
            <div className="inline-block bg-white px-4 py-2  max-w-sm rounded-2xl shadow text-gray-900">
                
              Hey Aura, can you tell me what photosynthesis is? I heard plants make their food, but how?
            </div>
           
          </div>

          {/* Aura response */}
          <div>
              <p className="text-sm font-bold  text-white mt-1">Aura</p>
            <div className="bg-white px-4 py-3 rounded-2xl shadow max-w-sm text-gray-800">
                
              <p>Great question! 🌱 Photosynthesis is how plants use sunlight, water, and air (carbon dioxide) to make their food. It's like a magic recipe using sunlight!</p>
              <p className="mt-2">Want to see it in action? Here's a fun video that explains it:</p>
              <button className="mt-3 flex items-center space-x-2 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                <FaRegCirclePlay />
                <span>Photosynthesis</span>
              </button>
            </div>
          
          </div>

          {/* User response */}
          <div className="text-right">
             <p className="text-sm  font-bold text-white mt-1">Shlok</p>
            <div className="inline-block bg-white px-4 py-2  max-w-sm rounded-2xl shadow text-gray-900">
              Wow, that's cool! Thanks! I’ll watch the video now.
            </div>
           
          </div>
        </div>

        {/* Input */}
        <div className="mt-6 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Ask Aura !"
            className="flex-1 outline-none bg-transparent text-sm text-gray-800"
          />
          <button className=" text-pink-400">
            <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </button>
        </div>

        {/* Close icon */}
        <button className="absolute top-4 right-4 bg-gray-200 rounded-full p-3 text-black-500 hover:text-black">
         < RxCross1 />
        </button>
      </div>
    </div>
  );
};


