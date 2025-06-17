import React from "react";
import GoBack from "@/components/principal/goback";
import Course from "@/components/b2c-student/course";


const coursedetail = () =>{
    return(
        <>
        <GoBack GoBackHeading="Course Name" />
        <Course/>


        </>
    )
}

export default coursedetail;