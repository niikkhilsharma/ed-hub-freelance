import Footer from "../layout/Footer";
import Header from "../layout/Header";
import B2CTeacherWrapper from "./b2c-teacher-wrapper";

const Student = () => {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE THIS PATH
    }
    return (
        <>
            <Header user={headerUser} />
            <B2CTeacherWrapper>
                <div className="">Hola</div>
            </ B2CTeacherWrapper>
            <Footer />
        </>
    )
}

export default Student;