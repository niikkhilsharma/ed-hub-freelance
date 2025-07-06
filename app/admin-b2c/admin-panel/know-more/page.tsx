import GoBack from '@/components/principal/goback';
import React from 'react'
import Image from "next/image";
const knowMore =()=>{
    return(
        <>
        <GoBack GoBackHeading="Course Name" />

        <div className="bg-white m-6 rounded-2xl p-1">
            <div className="flex">
                <div className="w-160 p-4">
                 <div className="bg-[#99DEFF] p-2 text-bold mb-2 rounded-xl">Student Designation</div>
                 <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem non quam laboriosam inventore consequatur earum, porro dolores commodi maxime temporibus velit eligendi aliquid dolor consectetur sapiente ducimus quasi perferendis!</p>
                 <div className="bg-[FF99B7] p-2 text-bold mb-2 rounded-xl">Overview</div>
                   <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum alias, est ex enim dolor mollitia quaerat excepturi porro cupiditate? Alias sunt, provident iure laudantium suscipit modi quisquam veniam ab minima.</p>
                   <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, nam! Dolorum voluptates deleniti rem impedit modi culpa fugiat fuga. Numquam nesciunt aspernatur itaque dolore quibusdam sed sapiente vero consequuntur corrupti.</p>
                   <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a saepe consequuntur. Accusantium sunt, pariatur qui omnis optio repellat eveniet cum quo odio aperiam nemo, dolores harum eaque eligendi adipisci?</p>
                 <div className="bg-[#8DD9B3] p-2 text-bold mb-2 rounded-xl">Characteristics</div>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non quas, sunt vel facilis quo officia placeat minus at distinctio quibusdam corrupti hic pariatur dolor doloremque dolorum cum sed id?</p>
                 <ul className="list-disc ml-8 mb-4">
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                    <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                 </ul>
                 <div className="bg-[#FFCC00] p-2 text-bold mb-2 rounded-xl">Benefits</div>
                   <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                   <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                  <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                  <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                  <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                  <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>
                  <p>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</p>

                 </div>
                 <div className="mt-4 ml-4">
                 <div className ="w-150 h-150 rounded-xl relative overflow-hidden p-1">
                   <Image src="/admin/know-more1.jpeg" alt="know-more1" fill className="object-cover"/>
                 </div>
                  <div className="bg-gray-100 mt-4 gap-5 text-center p-8 rounded-lg">
                  <h1 className='text-semibold font-20 mb-3'>15,000</h1>
                  <p className="mb-3"> 3 Sessions</p>
                  <p>90 Mins</p>
                 </div>
               </div>
            </div>
            

            
            <h1 className="mb-4 ml-4 text-semibold">Banner Title</h1>
           <div className ="w-320 h-150 rounded-xl relative overflow-hidden p-1 ml-2">
                <Image src="/admin/know-more2.jpeg" alt="know-more1" fill className="object-cover"/>
         </div>
             <div className="flex">
             <div className ="w-70 h-100 rounded-xl relative overflow-hidden p-1 mt-4 ml-6">
                <Image src="/admin/know-more1.jpeg" alt="know-more1" fill className="object-cover"/>
             </div>
             <div className ="w-70 h-100 rounded-xl relative overflow-hidden p-1 mt-4 ml-6">
                <Image src="/admin/know-more1.jpeg" alt="know-more1" fill className="object-cover"/>
             </div>
             <div className ="w-70 h-100 rounded-xl relative overflow-hidden p-1 mt-4 ml-6">
                <Image src="/admin/know-more1.jpeg" alt="know-more1" fill className="object-cover"/>
             </div>
             <div className ="w-70 h-100 rounded-xl relative overflow-hidden p-1 mt-4 ml-6">
                <Image src="/admin/know-more1.jpeg" alt="know-more1" fill className="object-cover"/>
             </div>

        </div>
        
        
       
           
        </div>
        
        </>
    )
}
export default knowMore;