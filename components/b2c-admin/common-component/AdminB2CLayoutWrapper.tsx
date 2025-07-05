// app/principal/PrincipalLayoutWrapper.tsx
"use client";

// import { usePathname } from "next/navigation";
import Navbar from "@/components/b2c-admin/Navbar"
import Footer from '@/components/layout/Footer'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AdminB2CLayoutWrapper = ({ children }: Props) => {
    // const pathname = usePathname();

    // Check if it's the specific route
    // const hideLayout = pathname.startsWith("/principal/registration");
    const headerUser = {
        name: "Educator Name",
        role: "Teacher",
        avatarSrc: "/principal/profile-image.jpg",
    };
    return (
        <>
           <Navbar user={headerUser} activeState='dashboard'/>
            <div className="bg-gray-100">{children}</div>
            <Footer />
        </>
    );
};

export default AdminB2CLayoutWrapper;
