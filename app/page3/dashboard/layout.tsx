"use client";

import Navbar from "@/components/page3-navbar";
import Footer2 from "@/components/footer2";

export default function page3Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer2 />
    </div>
  );
}
