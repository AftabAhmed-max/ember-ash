"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-16`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
        >
          <span className="w-8 h-px bg-[#B8964A] opacity-60" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#B8964A] font-body">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-[#B8964A] opacity-60" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`text-5xl md:text-6xl leading-tight mb-5 ${light ? "text-[#0E0E0E]" : "text-[#F5EED8]"}`}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
      >
        {title}
        {titleItalic && (
          <em className="text-[#D4AF6A] italic ml-3">{titleItalic}</em>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base max-w-xl ${center ? "mx-auto" : ""} leading-relaxed ${
            light ? "text-[#3A3530]" : "text-[#6B6358]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
