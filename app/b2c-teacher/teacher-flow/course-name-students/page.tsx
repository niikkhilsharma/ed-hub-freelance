import BackButton from "@/components/common-components/BackButton";
import Header from "@/components/layout/Header";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import CourseStudent from "./CourseComponent";

const CourseName = () => {
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg", // UPDATE THIS PATH
    };
    return (
        <>
            <Header user={headerUser} />
            <BackButton Heading="Course Name" />
            <TeacherB2CWrapper>
                <CourseStudent />
            </ TeacherB2CWrapper>
        </>
    )
}

export default CourseName;