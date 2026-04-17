"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import algo_logo2 from "../public/algonix-logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-800 pt-16 pb-8">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src={algo_logo2}
                  alt="Algonix Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">Algonix</span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-xs">
              A humble but forward-looking tech outsourcing startup helping
              businesses build innovative digital solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/algonix-technologies" },
                { icon: <Github className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Custom Software Development",
                "Mobile App Development",
                "Web Development",
                "AI & Machine Learning",
                "Database Solutions",
                "Analytics & Reporting",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
                // { name: "Blog", path: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-slate-400 mb-4">
              Stay updated with our latest news and insights.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md px-3 text-white"
                  aria-label="Subscribe"
                >
                  <ArrowUp className="h-4 w-4 rotate-45" />
                </button>
              </div>
              <p className="text-xs text-slate-500">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Algonix Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" },
              { name: "Cookie Policy", href: "/cookie-policy" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
