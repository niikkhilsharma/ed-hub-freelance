"use client";

import Navbar from "./page3-navbar";


export default function page3Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  );
}
