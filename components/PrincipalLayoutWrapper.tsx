// app/principal/PrincipalLayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const PrincipalLayoutWrapper = ({ children }: Props) => {
    const pathname = usePathname();

    // Check if it's the specific route
    const hideLayout = pathname.startsWith("/principal/registration");
    const headerUser = {
        name: "Educator Name",
        role: "Teacher",
        avatarSrc: "/principal/profile-image.jpg",
    };
    return (
        <>
             {!hideLayout && <Header user={headerUser} />}
            <div className="bg-gray-100">{children}</div>
            {!hideLayout && <Footer />}
        </>
    );
};

export default PrincipalLayoutWrapper;
