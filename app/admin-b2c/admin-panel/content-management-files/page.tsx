import ContentManagementFiles from "@/components/b2c-admin/content-management-files";

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