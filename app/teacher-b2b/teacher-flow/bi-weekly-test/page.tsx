import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BiWeekly from "@/components/teacher-b2b/bi-weekly-test";

export default function Assesment() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
    }
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={headerUser} />

      <BiWeekly />

      <Footer />
    </div>
  );
}
