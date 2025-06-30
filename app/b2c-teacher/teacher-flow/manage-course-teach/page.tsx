import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GoBack from "@/components/principal/goback";
import TeachingForm from "@/components/teacher-b2c/manage-course-teach";

const ManageTeachCourse = () => {
    const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png",
  }; 
    return (
        <>
            <Header user={headerUser}/>
            <GoBack GoBackHeading="Manage Your Course" />
            <TeachingForm />
            <Footer />
        </>
    )
}

export default ManageTeachCourse;