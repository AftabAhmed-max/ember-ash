"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Share2, Link2, Globe } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
  };

  const inputClass = "w-full bg-transparent border border-[#3A3530] text-[#F5EED8] text-sm px-4 py-3.5 focus:outline-none focus:border-[#B8964A] transition-colors duration-300 placeholder:text-[#3A3530]";
  const labelClass = "block text-[10px] tracking-[0.35em] text-[#6B6358] uppercase mb-2";

  return (
    <>
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=2000&q=90" alt="Contact" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/40 to-[#0E0E0E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-3">Get in Touch</p>
            <h1 className="text-6xl md:text-8xl text-[#F5EED8]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Contact
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* INFO */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-10">
                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-5">Visit Us</p>
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-[#C8552A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-[#D4C9A8] leading-relaxed">12 Cinder Lane<br />Bandra West<br />Mumbai, Maharashtra 400050</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-5">Reach Us</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone size={14} className="text-[#C8552A] shrink-0" />
                      <a href="tel:+912261234567" className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors">+91 22 6123 4567</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={14} className="text-[#C8552A] shrink-0" />
                      <a href="mailto:dine@emberash.in" className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors">dine@emberash.in</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={14} className="text-[#C8552A] shrink-0" />
                      <a href="mailto:events@emberash.in" className="text-sm text-[#D4C9A8] hover:text-[#F5EED8] transition-colors">events@emberash.in</a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-5">
                    <Clock size={12} className="inline mr-2" />
                    Hours
                  </p>
                  <div className="space-y-3">
                    {[
                      { day: "Tue – Thu", time: "6:00 – 10:30 PM" },
                      { day: "Fri – Sat", time: "5:30 – 11:30 PM" },
                      { day: "Sunday", time: "6:00 – 10:00 PM" },
                      { day: "Monday", time: "Closed" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-[#6B6358]">{h.day}</span>
                        <span className={h.time === "Closed" ? "text-[#6B6358] italic" : "text-[#D4C9A8]"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { Icon: Share2, label: "@emberandash" },
                      { Icon: Link2, label: "Ember & Ash" },
                      
                    ].map(({ Icon, label }, i) => (
                      <a key={i} href="#" className="w-10 h-10 border border-[#3A3530] flex items-center justify-center text-[#6B6358] hover:border-[#C8552A] hover:text-[#C8552A] transition-all duration-300" title={label}>
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                {status === "success" ? (
                  <div className="border border-[#3A3530]/50 p-16 text-center">
                    <div className="text-5xl text-[#D4AF6A] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</div>
                    <h3 className="text-3xl text-[#F5EED8] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                      Message Received
                    </h3>
                    <p className="text-sm text-[#6B6358] leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="border border-[#3A3530]/50 p-8 md:p-10 space-y-6">
                    <div>
                      <h3 className="text-2xl text-[#F5EED8] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>Send a Message</h3>
                      <p className="text-xs text-[#6B6358]">For reservations, please use the dedicated reservations page.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                        <option value="">Select a topic</option>
                        <option value="events">Private Events & Buyouts</option>
                        <option value="press">Press & Media</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="careers">Careers</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="How can we help?" className={`${inputClass} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-[#C8552A] text-white text-[11px] tracking-[0.35em] uppercase hover:bg-[#E06B3A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH MAP */}
      <section className="h-80 relative border-t border-[#3A3530]/40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9!2d72.8347!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sBandra+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
