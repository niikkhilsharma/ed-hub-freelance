"use client";

import StudentNavbar from "./student-navbar";
import StudentNavbarNew from "./student-navbar-new";

export default function StudentWrapper({
  children,
  student = false,
}: {
  children: React.ReactNode;
  student?: boolean;
}) {
  return (
    <div>
      {student ? <StudentNavbarNew /> : <StudentNavbar />}
      {children}
    </div>
  );
}
