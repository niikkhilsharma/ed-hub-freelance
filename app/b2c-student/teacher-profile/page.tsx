import React from "react"
import GoBack from "@/components/principal/goback";
import Profile from "@/components/b2c-student/profile";

const teacherprofile = ()=>{
    return(
        <>
        <GoBack GoBackHeading="Teacher Profile"/>
        <Profile/>

        
        </>
    )

}

export default teacherprofile;