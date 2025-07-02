import React from 'react'

const AdminCourse=()=>{
    return(
        <>
        <div className="bg-[#eeeeee] py-6 sm:py-8 lg:py-10 min-h-screen ">
            <div className="bg-white rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            <h2 className='text-[#FF3366] p-2'>Select Memebership Plan</h2>
    <form className="max-w-sm mx-auto">
  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose membership Plan</label>
  <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
  </select>
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Validity</label>
  <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

  </select>
  <label  className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Number Of Sessions</label>
  
</form>

            </div>
        </div>
        
        </>
    )

}

export default AdminCourse;