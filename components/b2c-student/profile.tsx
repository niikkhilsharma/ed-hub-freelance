import Image from 'next/image';
import React from 'react'

type batches = {
Day:string,
Time:string,
Batch:string
};

const batch : batches[]=[
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
]
const Profile = () => {
    return (
        <>
        <div className="py-2 px-4">

            <div className="bg-white rounded-2xl px-4 py-2">
                <h3 className='text-blue-500'>My core teaching philosophy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
            olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

            </div>
             <div className="bg-white rounded-2xl px-4 py-2 mt-4">
                <h3 className='text-black-500'>Pedology</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
            olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

            </div>
            <div className="bg-white rounded-2xl px-4 py-4 mt-4">
                <h3>Browse and Enroll in available sessions</h3>
                {batch.map((batches,index)=>(
            <div  className="bg-gray-100 py-5 px-5 rounded-xl mt-4 inline-block" key={index}>
                <h3 className='text-black-600 mb-2'>Btach:{batches.Batch}</h3>
                <h4 className="px-4">Day:{batches.Day}</h4>
                <h4 className='px-4'>Time:{batches.Time}</h4>
              
            </div>
          ))}  

                </div>



        </div>
        </>
       
    )
}

export default Profile;