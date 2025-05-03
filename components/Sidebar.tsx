"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaCode,
  FaCogs,
  FaBlog,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFacebook,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Projects", path: "/projects", icon: <FaCode /> },
  { name: "Skills", path: "/skills", icon: <FaCogs /> },
  { name: "Blog", path: "/blog", icon: <FaBlog /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const socialLinks = [
  { href: "https://github.com/TahmidTausif", icon: <FaGithub size={20} /> },
  { href: "https://www.linkedin.com/in/tahmidul-islam3", icon: <FaLinkedin size={20} /> },
  { href: "https://www.facebook.com/tahmid.tausif.3", icon: <FaFacebook size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Set initial state & update on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); // Set on load
    window.addEventListener("resize", handleResize); // Listen to resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      {/* Mobile Toggle Button
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-full text-white"
      >
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </button> */}

      {/* Mobile overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`h-screen bg-[#0a0a0a] text-gray-200 py-6 p-4 flex flex-col justify-between fixed top-0 left-0 z-50 transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"} md:relative`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between mb-10">
            {!isCollapsed && (
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/tahmid_logo.png"
                  alt="Logo"
                  width={100}
                  height={80}
                  className="rounded-full"
                />
              </Link>
            )}
            {/* Desktop Toggle Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-white text-xl ml-4  md:block"
            >
              {isCollapsed ? <FaBars /> : <FaTimes />}
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors
                ${pathname === link.path ? "bg-gray-800" : ""}`}
              >
                <span className="text-lg">{link.icon}</span>
                {!isCollapsed && <span>{link.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <div
          className={`flex ${isCollapsed ? "flex-col items-center" : "justify-start ml-4"} gap-4 mb-4`}
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
