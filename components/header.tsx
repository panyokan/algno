"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import  A_logo  from "../public/image.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    // { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-end gap-0">
          <motion.div
            initial={{ opacity: 1, scale: 1.3, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: [1.5, 1.4, 1.5, 1.4, 1.5],
              rotate: [0, 5, -5, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: 3,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 15, -15, 15, 0],
              transition: { duration: 0.5, repeat: 1 },
            }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            className="relative w-10 h-10"
          >
            <Image
              src={A_logo}
              alt="Algonix Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.span
            className="font-bold text-xl tracking-tight pl-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            lgonix Technologies
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={item.path}
                className={cn(
                  "text-slate-300 hover:text-white transition-colors relative group",
                  pathname === item.path && "text-white font-medium"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300",
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                ></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-800 via-cyan-800 to-slate-800 hover:from-purple-900 hover:via-cyan-900 hover:to-slate-900 text-white border-0">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-slate-300 hover:text-white transition-colors py-2",
                  pathname === item.path && "text-white font-medium"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 mt-2 w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
