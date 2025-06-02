"use client";
import Image from "next/image";

import mainLogo from "@/public/mianLogo2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { JSX } from "react";

export default function FooterNew() {
  const SocialIcon = ({
    type,
    className,
  }: {
    type: string;
    className?: string;
  }) => {
    const icons: Record<string, JSX.Element> = {
      facebook: <FaFacebookF className={className} />,
      instagram: <FaInstagram className={className} />,
      twitter: <FaTwitter className={className} />,
      tiktok: <FaTiktok className={className} />,
      youtube: <FaYoutube className={className} />,
    };

    return icons[type] || null;
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const linkHover = {
    hover: {
      x: 5,
      color: "#fff",
      transition: { duration: 0.2 },
    },
  };
  const socialIconHover = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-screen relative flex flex-col bg-[#3466ff] items-center justify-between bg-cover bg-center bg-no-repeat"
    >
      <div className="z-40 min-h-65 w-full pb-4 absolute top-0 translate-y-[-100%] flex justify-center text-white">
        <div className="min-h-24 max-w-[80vw] bg-[#f9346d] w-full p-4 rounded-2xl flex px-16 items-center justify-between overflow-hidden shadow-xl relative">
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-center bg-repeat z-0"
            style={{
              backgroundImage: 'url("/background6.png")',
              backgroundSize: "cover",
              filter: "brightness(1.2) opacity(.5) blur(0.1px)",
              opacity: 0.3,
            }}
          />
          <div className="absolute inset-0 bg-black/15 z-1"/>

          {/* Central content */}
          <div className="absolute inset-0 z-10 flex flex-col mx-auto py-4 items-center justify-center w-full">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold mb-2 text-center"
            >
              Subscribe to our newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center mb-6 md:mb-12"
            >
              Lorem ipsum is simply dummy text of the printing.
            </motion.p>

            {/* Email input and button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex w-full max-w-md rounded-full p-1 overflow-hidden bg-white shadow-lg"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow py-3 px-6 text-gray-800 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFCC00] font-bold text-white rounded-full py-3 px-8 transition-all duration-300 hover:bg-[#262623] cursor-pointer"
              >
                Send
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="text-white pt-4 w-full px-6 md:px-28">
        <div className="container mx-auto py-8">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
          >
            {/* Logo and Description Column */}
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-[40px] w-fit object-contain mb-4"
              >
                <Image
                  src={mainLogo}
                  alt="EduNique Logo"
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="text-sm mb-6 text-white/90 pr-24"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy a
                type specimen book.
              </motion.p>
            </motion.div>

            {/* Company Column */}
            <motion.div
              variants={fadeInUp}
              className="ml-0 md:ml-8 md:col-span-1"
            >
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-medium mb-4 relative pl-0"
              >
                <span className="relative">Company</span>
              </motion.h3>
              <motion.ul variants={staggerChildren} className="space-y-3">
                {["About us", "Blogs", "Instructor List"].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    <motion.a
                      href="#"
                      initial="initial"
                      whileHover="hover"
                      variants={linkHover}
                      className="hover:underline flex items-center group transition-all duration-300 text-sm text-white/90"
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Support Column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-medium mb-4 relative pl-0"
              >
                <span className="relative">Support</span>
              </motion.h3>
              <motion.ul variants={staggerChildren} className="space-y-3">
                {["FAQ", "Privacy", "Terms and Condition"].map(
                  (item, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      <motion.a
                        href="#"
                        initial="initial"
                        whileHover="hover"
                        variants={linkHover}
                        className="hover:underline flex items-center group transition-all duration-300 text-sm text-white/90"
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-medium mb-4 relative pl-0"
              >
                <span className="relative">Contact info</span>
              </motion.h3>
              <motion.div
                variants={staggerChildren}
                className="space-y-2 text-sm"
              >
                <motion.p variants={fadeInUp}>
                  <motion.span
                    whileHover={{ color: "#f9326f" }}
                    className="text-white hover:underline cursor-pointer"
                  >
                    +91 0000000000
                  </motion.span>
                </motion.p>
                <motion.p variants={fadeInUp}>
                  <motion.span
                    whileHover={{ color: "#f9326f" }}
                    className="text-white hover:underline cursor-pointer"
                  >
                    example@gm.com
                  </motion.span>
                </motion.p>
                <motion.p variants={fadeInUp} className="text-white/90">
                  Sector 4, New Delhi
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>

      <div className="w-full px-[10vw] space-y-2 flex flex-col">
        <motion.div variants={staggerChildren} className="flex mt-2 space-x-3 self-end">
          {/* Social Media Icons */}
          {[
            {
              bg: "bg-white",
              icon: "facebook",
              color: "text-blue-600",
            },
            {
              bg: "bg-gradient-to-r from-purple-500 to-pink-500",
              icon: "instagram",
              color: "text-white",
            },
            {
              bg: "bg-[#00AFF0]",
              icon: "twitter",
              color: "text-white",
            },
            {
              bg: "bg-black",
              icon: "tiktok",
              color: "text-white",
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              initial="initial"
              whileHover="hover"
              variants={socialIconHover}
              className={`bg-white rounded-lg p-2 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
            >              <SocialIcon
                type={social.icon}
                className={`w-6 h-6 text-blue-500`}
              />
            </motion.a>
          ))}
        </motion.div>
        {/* Copyright Bar */}
        <motion.div variants={fadeInUp} className=" w-full text-white">
          <div className="container mx-auto px-4 border-blue-400 border-t py-2 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-white"
            >
              © EDUNIQUE All Right Reserved, 2022-2025
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
