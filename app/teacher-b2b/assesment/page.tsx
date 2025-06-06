import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AssesmentPage from "@/components/new-teacher-b2b/assesment-page";

export default function Assesment() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
	}
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={headerUser} />

	  <AssesmentPage />

      <Footer />
    </div>
  );
}
