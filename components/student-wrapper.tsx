"use client";

import StudentNavbar from "./student-navbar";

export default function StudentWrapper({
  children,
}: {
  children: React.ReactNode;
  blue?: boolean;
}) {
  return (
    <div>
      <StudentNavbar />
      {children}
    </div>
  );
}
