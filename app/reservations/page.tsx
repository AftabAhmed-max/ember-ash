"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, Clock, Users, ChevronDown } from "lucide-react";

const timeSlots = [
  "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
];

const occasions = [
  "No special occasion",
  "Birthday",
  "Anniversary",
  "Business Dinner",
  "Proposal",
  "Date Night",
  "Family Celebration",
  "Other",
];

export default function ReservationsPage() {
  const [guests, setGuests] = useState(2);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    occasion: occasions[0],
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xpqblayv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guests }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-transparent border border-[#3A3530] text-[#F5EED8] text-sm px-4 py-3.5 focus:outline-none focus:border-[#B8964A] transition-colors duration-300 placeholder:text-[#3A3530]";
  const labelClass = "block text-[10px] tracking-[0.35em] text-[#6B6358] uppercase mb-2";

  return (
    <>
      {/* HERO */}
      <section className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=2000&q=90"
          alt="Reservations"
          fill priority className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/40 to-[#0E0E0E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-3">Book Your Evening</p>
            <h1 className="text-6xl md:text-8xl text-[#F5EED8]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Reservations
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* LEFT INFO */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-5">Before You Arrive</p>
                <h2 className="text-4xl text-[#F5EED8] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                  Plan your<br /><em className="text-[#D4AF6A] italic">visit</em>
                </h2>
                <p className="text-sm text-[#6B6358] leading-relaxed mb-8">
                  We recommend reserving at least one week ahead. Walk-ins are welcome subject to availability but we cannot guarantee seating during peak hours.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: CalendarDays, label: "Open Tuesday – Sunday", sub: "Closed Mondays" },
                    { icon: Clock, label: "Service from 5:30 PM", sub: "Last seating at 10:00 PM" },
                    { icon: Users, label: "Groups of 8+", sub: "Please contact us directly for private dining" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-[#C8552A]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={14} className="text-[#C8552A]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#D4C9A8]">{item.label}</div>
                        <div className="text-xs text-[#6B6358] mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-[#3A3530]/50 p-6">
                  <p className="text-[10px] tracking-[0.3em] text-[#B8964A] uppercase mb-3">Dress Code</p>
                  <p className="text-sm text-[#6B6358] leading-relaxed">
                    Smart casual to formal. We kindly ask guests to avoid sportswear, beachwear, and open-toed shoes for gentlemen.
                  </p>
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
                      Reservation Received
                    </h3>
                    <p className="text-sm text-[#6B6358] leading-relaxed max-w-sm mx-auto">
                      Thank you, {form.name}. We have received your request and will confirm your table via email within 2 hours.
                    </p>
                    <p className="text-xs text-[#3A3530] mt-6">A confirmation has been sent to {form.email}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="border border-[#3A3530]/50 p-8 md:p-10 space-y-6">
                    {/* Honeypot field — hidden from users, filled only by bots */}
                    <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" style={{ display: "none" }} />
                    <h3 className="text-2xl text-[#F5EED8] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                      Request a Table
                    </h3>
                    <p className="text-xs text-[#6B6358] mb-6">All fields required unless marked optional</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 ..." className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Date</label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className={inputClass}
                          style={{ colorScheme: "dark" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Preferred Time</label>
                        <div className="relative">
                          <select name="time" value={form.time} onChange={handleChange} required className={`${inputClass} appearance-none pr-8`}>
                            <option value="">Select time</option>
                            {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6358] pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Guests</label>
                        <div className="flex items-center border border-[#3A3530] h-[50px] focus-within:border-[#B8964A] transition-colors duration-300">
                          <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="px-4 text-[#6B6358] hover:text-[#F5EED8] transition-colors text-lg">−</button>
                          <span className="flex-1 text-center text-[#F5EED8] text-sm">{guests} {guests === 1 ? "guest" : "guests"}</span>
                          <button type="button" onClick={() => setGuests(Math.min(12, guests + 1))} className="px-4 text-[#6B6358] hover:text-[#F5EED8] transition-colors text-lg">+</button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Occasion <span className="text-[#3A3530]">(optional)</span></label>
                      <div className="relative">
                        <select name="occasion" value={form.occasion} onChange={handleChange} className={`${inputClass} appearance-none pr-8`}>
                          {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6358] pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Special Requests <span className="text-[#3A3530]">(optional)</span></label>
                      <textarea name="requests" value={form.requests} onChange={handleChange} rows={3} placeholder="Dietary requirements, allergies, special arrangements..." className={`${inputClass} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-[#C8552A] text-white text-[11px] tracking-[0.35em] uppercase hover:bg-[#E06B3A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending Request..." : "Confirm Reservation"}
                    </button>

                    {status === "error" && (
                      <p className="text-[11px] text-[#C8552A] text-center tracking-wider">
                        Something went wrong. Please call us directly or try again.
                      </p>
                    )}
                    <p className="text-[10px] text-[#3A3530] text-center">
                      We will confirm via email within 2 hours. For same-day bookings please call us directly.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
