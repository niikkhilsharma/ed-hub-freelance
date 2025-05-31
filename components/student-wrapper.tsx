"use client";

import StudentNavbar from "./student-navbar";

export default function StudentWrapper({
  children,
  blue,
}: {
  children: React.ReactNode;
  blue?: boolean;
}) {
  return (
    <div>
      <StudentNavbar blue={!!blue} />
      {children}
    </div>
  );
}
