"use client";

import Image from "next/image";
import  { useState } from "react";

const options = [
  {
    id: 1,
    title: "Explore EdUnique Courses",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/select1.png",
  },
  {
    id: 2,
    title: "Become a Future School",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/select2.png",
  },
  {
    id: 3,
    title: "Membership Plans",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/select3.png",
  },
  {
    id: 4,
    title: "Subscribe @199",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/select4.png",
  },
];

export default function SelectType() {
  const [selected, setSelected] = useState<number | null>(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div
        className=" relative px-14 py-12 rounded-3xl max-w-screen-md w-full shadow-xl"
        style={{
          backgroundImage: 'url("/pattern.png")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gray-200 rounded-3xl z-10 opacity-80  backdrop-blur-sm "></div>
        <div className=" z-10 relative space-y-4">
          {options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`flex items-center justify-between bg-white rounded-full px-4 py-4 space-y-2 cursor-pointer shadow-sm transition-all ${
                selected === opt.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 p-1">
                  <Image
                    src={opt.image}
                    alt={opt.title}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                <h3 className="font-semibold text-sm text-black">
  {opt.title.includes("@") ? (
    <>
      {opt.title.split("@")[0]}
      <span className="text-pink-600">@{opt.title.split("@")[1]}</span>
    </>
  ) : (
    opt.title
  )}
</h3>
                  <p className="text-xs text-gray-500">{opt.description}</p>
                </div>
              </div>
              {selected === opt.id && (
                <Image
                  src={"/selecttick.png"}
                  alt={opt.title}
                  width={40}
                  height={40}
                  className="rounded-full  "
                />
              )}
            </div>
          ))}

          <div className="flex justify-center">
            <button className="mt-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
