import Footer from "@/components/footer";
import StudentWrapper from "@/components/student-wrapper";
import CoursesPage from "@/components/student/home/courses-component";

export default function AllCourses() {
    return (
        <StudentWrapper>
            <div>
                <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">Explore EduNique Courses</div>
                    <div className="flex gap-4 text-lg items-center">
                        <div>Home</div>
                        <div className="h-1 w-1 bg-[#d9d9d9] rounded-full"/>
                        <div className="text-yellow-400">Explore EdUnique Courses</div>
                    </div>
                </div>

                <CoursesPage masked className="pb-40"/>

                <Footer/>
            </div>
        </StudentWrapper>
    );
};
