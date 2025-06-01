import Image from 'next/image';
import { FiInstagram } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';

const FooterLink = ({ label, href = "#" }: { label: string; href?: string }) => (
  <a
    href={href}
    className="text-white text-[16px] font-medium leading-relaxed hover:underline underline-offset-4 transition"
  >
    {label}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#3366FF] text-white font-sans pt-16 pb-6 print:hidden">
      <div className="max-w-9xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Text */}
          <div className="md:col-span-1">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={180}
              height={50}
              className="mb-6"
            />
            <p className="text-[18px] leading-8 text-white font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Company</h3>
            <ul className="space-y-4">
              <li><FooterLink label="About us" /></li>
              <li><FooterLink label="Blogs" /></li>
              <li><FooterLink label="Instructor List" /></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Support</h3>
            <ul className="space-y-4">
              <li><FooterLink label="FAQ" /></li>
              <li><FooterLink label="Privacy" /></li>
              <li><FooterLink label="Terms and Condition" /></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Contact info</h3>
            <ul className="space-y-3 text-white text-[18px] font-normal">
              <li>+91 0000000000</li>
              <li>example@gm.com</li>
              <li>Sector 4, New Delhi</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="relative mt-12 pt-5">
            {/* Icons container absolutely positioned at the top right */}
            <div className="absolute right-0 -top-8 flex items-center gap-3 pr-2">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#3366FF] hover:bg-blue-100 transition">
                <FiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#3366FF] hover:bg-blue-100 transition">
                <RxCross2 className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#3366FF] hover:bg-blue-100 transition">
                <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#3366FF] hover:bg-blue-100 transition">
                <FaFacebookF className="w-5 h-5" />
                </a>
            </div>

            {/* The line and text below */}
            <div className="border-t border-white pt-5">
                <p className="text-white text-[16px] text-center">
                Edunique All Rights Reserved 2025
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
