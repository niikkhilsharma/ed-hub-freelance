import Activity from "@/components/b2c-admin/activity";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GoBack from "@/components/principal/goback";

export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div>
        <Header user={headerUser} />
        <GoBack GoBackHeading="Teacher Login Activity" />
        <Activity />
        <Footer />

    </div>
}