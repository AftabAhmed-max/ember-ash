"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Camera, Share2, Globe } from "lucide-react";

const hours = [
  { day: "Tuesday – Thursday", time: "6:00 pm – 10:30 pm" },
  { day: "Friday – Saturday", time: "5:30 pm – 11:30 pm" },
  { day: "Sunday", time: "6:00 pm – 10:00 pm" },
  { day: "Monday", time: "Closed" },
];

const socials = [
  { Icon: Camera, label: "Follow us on Instagram", href: "#" },
  { Icon: Share2, label: "Follow us on Twitter / X", href: "#" },
  { Icon: Globe, label: "Find us online", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#161616] border-t border-[#3A3530]/50">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-3xl tracking-widest uppercase mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                <span className="text-[#F5EED8]">Ember</span>
                <span className="text-[#C8552A]"> & </span>
                <span className="text-[#F5EED8]">Ash</span>
              </div>
              <div className="text-[9px] tracking-[0.4em] text-[#6B6358] uppercase">Fine Dining</div>
            </div>
            <p className="text-[#6B6358] text-sm leading-relaxed mb-6">
              An intimate fine dining experience rooted in open-fire cooking, aged spirits, and the ritual of gathering.
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#3A3530] flex items-center justify-center text-[#6B6358] hover:border-[#C8552A] hover:text-[#C8552A] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#B8964A] mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#B8964A] mb-6 flex items-center gap-2">
              <Clock size={12} /> Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day}>
                  <div className="text-[11px] tracking-wider text-[#6B6358] uppercase mb-0.5">{h.day}</div>
                  <div className={`text-sm ${h.time === "Closed" ? "text-[#6B6358] italic" : "text-[#D4C9A8]"}`}>
                    {h.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#B8964A] mb-6">Find Us</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C8552A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#D4C9A8]">
                  12 Cinder Lane, Bandra West<br />Mumbai, 400050
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C8552A] shrink-0" />
                <a href="tel:+912261234567" className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors">
                  +91 22 6123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#C8552A] shrink-0" />
                <a href="mailto:dine@emberash.in" className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors">
                  dine@emberash.in
                </a>
              </li>
            </ul>
            {/* Map embed */}
            <div className="aspect-video w-full overflow-hidden border border-[#3A3530]/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9!2d72.8347!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sBandra+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                title="Ember & Ash location map"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.5)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3A3530]/30 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#6B6358] tracking-wider">
            © {new Date().getFullYear()} Ember & Ash. All rights reserved.
          </p>
          <p className="text-[10px] text-[#3A3530] tracking-widest uppercase">
            Where Fire Meets Flavour
          </p>
        </div>
      </div>
    </footer>
  );
}
