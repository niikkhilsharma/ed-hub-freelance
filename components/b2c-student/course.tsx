import React from 'react'

const Course = () => {
    return (
        <div className="py-2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] bg-white p-4 gap-4 rounded-2xl">
                <div className="bg-blue-100 p-8 rounded-2xl"></div>
                <div className="bg-red-100 p-8 rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-[1fr_4fr] bg-white rounded-2xl p-4 gap-4 my-4">
                <div className="bg-yellow-200 p-8 rounded-2xl"></div>
                <div className="bg-green-200 p-8 rounded-2xl"></div>
            </div>
        </div>
    )
}

export default Course;