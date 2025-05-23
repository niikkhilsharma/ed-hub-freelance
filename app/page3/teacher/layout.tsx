"use client";

import Navbar from "@/components/page3-navbar";
import Footer2 from "@/components/footer2";
import { MainNav } from "@/components/page3/main-nav";

export default function page3Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MainNav />

      {children}
      <Footer2 />
    </>
  );
}
