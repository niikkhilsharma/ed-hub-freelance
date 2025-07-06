import ContentManagementFiles from "@/components/b2c-admin/content-management-files";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div>
        <ContentManagementFiles />
    </div>
}