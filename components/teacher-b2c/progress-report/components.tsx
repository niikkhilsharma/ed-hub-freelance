"use client";

const attitudeData = [
  {
    label: "1. Respect",
    options: {
      emerging: ["rarely respectful", "sometimes respectful"],
      developing: ["generally respectful"],
      established: ["consistently respectful"],
    },
  },
  {
    label: "2. Cooperation",
    options: {
      emerging: ["Rarely cooperative", "Sometimes cooperative"],
      developing: ["generally cooperative"],
      established: ["consistently cooperative"],
    },
  },
  {
    label: "3. Demonstrates an interest in learning",
    options: {
      emerging: [
        "rarely shows interest in learning",
        "sometimes shows interest in learning",
      ],
      developing: ["generally shows interest in learning"],
      established: ["consistently shows interest in learning"],
    },
  },
  {
    label: "4. Motivation",
    options: {
      emerging: ["Attends due to consequences for non schoolattendance"],
      developing: ["extrinsic; at school for the marks"],
      established: ["intrinsic; learning for learning sake"],
    },
  },
  {
    label: "5. Persistence and resiliently",
    options: {
      emerging: [
        "rarely perseveres when faced with a challenge",
        "sometimes perseveres when faced with a challenge",
      ],
      developing: ["generally perseveres when faced with a challenge"],
      established: ["consistently perseveres when faced with a challenge"],
    },
  },
];

export default function AttitudeGrid() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
<div className="max-w-6xl mx-auto my-4 bg-white rounded-2xl p-2 shadow space-y-6">
        <div className="flex justify-center space-x-4">
          {["Student Engagement", "Attitude", "Academics", "Exams"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded-2xl text-xl font-medium ${
                tab === "Attitude"
                  ? "bg-[#FF3366] text-white"
                  : " text-[#6B7280]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow space-y-6">
        {/* Navigation Tabs */}
        

        {/* Title */}
        <h2 className="text-xl font-semibold text-white">Attitude</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left  text-md text-black bg-[#FF99B7]">
                <th className="p-4">Attitude</th>
                <th className="p-4">Emerging</th>
                <th className="p-4">Developing</th>
                <th className="p-4">Established</th>
              </tr>
            </thead>
            <tbody>
              {attitudeData.map((row, idx) => (
                <tr
                  key={idx}
                  className="text-sm border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4 font-medium text-gray-700 w-1/4">
                    {row.label}
                  </td>

                  {/* Emerging */}
                  <td className="p-4 space-y-2">
                    {row.options.emerging.map((option, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`attitude-${idx}`}
                          className="accent-pink-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </td>

                  {/* Developing */}
                  <td className="p-4 space-y-2">
                    {row.options.developing.map((option, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`attitude-${idx}`}
                          className="accent-pink-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </td>

                  {/* Established */}
                  <td className="p-4 space-y-2">
                    {row.options.established.map((option, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`attitude-${idx}`}
                          className="accent-pink-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button className="bg-[#3366ff] text-white px-6 sm:px-8 py-2 rounded-full  transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
