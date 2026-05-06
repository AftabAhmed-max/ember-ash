"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#3A3530]/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl tracking-[0.12em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              <span className="text-[#F5EED8] group-hover:text-[#D4AF6A] transition-colors duration-300">Ember</span>
              <span className="text-[#C8552A]"> & </span>
              <span className="text-[#F5EED8] group-hover:text-[#D4AF6A] transition-colors duration-300">Ash</span>
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#6B6358] uppercase mt-0.5">Fine Dining</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.25em] uppercase font-body transition-colors duration-300 hover-underline ${
                  pathname === link.href
                    ? "text-[#D4AF6A]"
                    : "text-[#D4C9A8] hover:text-[#F5EED8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="ml-4 px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase font-body border border-[#C8552A] text-[#C8552A] hover:bg-[#C8552A] hover:text-white transition-all duration-300"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#F5EED8] p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0E0E0E]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className={`text-4xl tracking-widest uppercase ${
                    pathname === link.href ? "text-[#D4AF6A]" : "text-[#F5EED8]"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] tracking-[0.4em] text-[#6B6358] uppercase"
            >
              Where Fire Meets Flavour
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
