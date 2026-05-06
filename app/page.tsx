"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { ChevronDown, Flame, Leaf, Wine, Star } from "lucide-react";

const signatures = [
  {
    name: "Ember-Roasted Lamb Rack",
    desc: "48-hour marinated lamb, coal-kissed crust, smoked garlic purée, wild herb jus",
    price: "₹3,800",
    tag: "Chef's Signature",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    name: "Dry-Aged Wagyu Striploin",
    desc: "45-day dry-aged A5 Wagyu, bone marrow butter, ash-roasted shallots, truffle reduction",
    price: "₹5,200",
    tag: "House Favourite",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  },
  {
    name: "Charred Lobster Bisque",
    desc: "Grilled Atlantic lobster, saffron-coconut velouté, crispy basil oil, caviar pearls",
    price: "₹2,600",
    tag: "Season Special",
    img: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80",
  },
];

const pillars = [
  {
    icon: Flame,
    title: "Open Fire Kitchen",
    desc: "Every dish begins with flame. Our wood-fired hearth, Josper grill, and coal roasters define our culinary language.",
  },
  {
    icon: Leaf,
    title: "Seasonal & Local",
    desc: "We source from farms within 150km of our kitchen. The menu changes with the seasons, never against them.",
  },
  {
    icon: Wine,
    title: "Curated Cellar",
    desc: "600 labels across old and new world. Our sommelier curates pairings as carefully as our chefs build plates.",
  },
];

const testimonials = [
  {
    quote: "A transcendent experience. The lamb was the finest thing I have eaten in years. Every detail deliberate, every flavour earned.",
    author: "Ravi Mehta",
    role: "Food Critic, The Hindu",
  },
  {
    quote: "Ember & Ash understands that fine dining is theatre. The room, the fire, the smoke — it works on every sense simultaneously.",
    author: "Aanya Shah",
    role: "Bon Appétit India",
  },
  {
    quote: "The tasting menu is a journey through fire itself. Course by course you understand what heat can do to ingredients.",
    author: "James Whitmore",
    role: "Michelin Guide",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=90"
            alt="Ember and Ash dining room"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/60 via-[#0E0E0E]/40 to-[#0E0E0E]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-12 h-px bg-[#B8964A] opacity-50" />
            <span className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase">Mumbai, India</span>
            <span className="w-12 h-px bg-[#B8964A] opacity-50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tight text-[#F5EED8] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Ember<br />
            <em className="text-[#C8552A] italic">&</em><br />
            Ash
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-[#D4C9A8] tracking-[0.2em] uppercase mb-12"
          >
            Where Fire Meets Flavour
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/reservations" className="px-10 py-4 bg-[#C8552A] text-white text-[11px] tracking-[0.3em] uppercase font-body hover:bg-[#E06B3A] transition-colors duration-300">
              Reserve a Table
            </Link>
            <Link href="/menu" className="px-10 py-4 border border-[#F5EED8]/30 text-[#F5EED8] text-[11px] tracking-[0.3em] uppercase font-body hover:border-[#D4AF6A] hover:text-[#D4AF6A] transition-all duration-300">
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.4em] text-[#6B6358] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} className="text-[#6B6358]" />
          </motion.div>
        </motion.div>
      </section>

      {/* TICKER */}
      <section className="bg-[#161616] border-y border-[#3A3530]/40 py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-[10px] tracking-[0.4em] text-[#3A3530] uppercase">
              <span>Open Fire Kitchen</span>
              <span className="text-[#C8552A]">✦</span>
              <span>Seasonal Tasting Menu</span>
              <span className="text-[#C8552A]">✦</span>
              <span>Aged Spirits Cellar</span>
              <span className="text-[#C8552A]">✦</span>
              <span>Private Dining</span>
              <span className="text-[#C8552A]">✦</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* PILLARS */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Philosophy"
          title="Cooking with"
          titleItalic="intention"
          subtitle="Every element on every plate traces back to a single belief: that fire is the oldest and most honest way to cook."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-[#3A3530]/50 p-10 hover:border-[#C8552A]/40 transition-all duration-500 group"
            >
              <div className="w-12 h-12 border border-[#C8552A]/30 flex items-center justify-center mb-6 group-hover:border-[#C8552A] transition-all duration-300">
                <p.icon size={20} className="text-[#C8552A]" />
              </div>
              <h3 className="text-2xl text-[#F5EED8] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                {p.title}
              </h3>
              <p className="text-sm text-[#6B6358] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-28 px-6 lg:px-12 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="From the Kitchen"
            title="Signature"
            titleItalic="dishes"
            subtitle="Dishes that define who we are — built over years, refined every season."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatures.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-5">
                  <Image src={dish.img} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.3em] uppercase bg-[#C8552A] text-white px-3 py-1.5">{dish.tag}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl text-[#D4AF6A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{dish.price}</span>
                  </div>
                </div>
                <h3 className="text-xl text-[#F5EED8] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>{dish.name}</h3>
                <p className="text-sm text-[#6B6358] leading-relaxed">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/menu" className="inline-block px-10 py-4 border border-[#B8964A]/40 text-[#B8964A] text-[11px] tracking-[0.3em] uppercase hover:bg-[#B8964A]/10 transition-all duration-300">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative h-[500px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=2000&q=90" alt="Dining room" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0E0E0E]/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl text-[#F5EED8] max-w-3xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            <em>"Cooking is an act of love,<br />fire is its language."</em>
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-[11px] tracking-[0.4em] text-[#B8964A] uppercase"
          >
            — Chef Aryan Kapoor, Founder
          </motion.p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 lg:px-12 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Reviews" title="What they" titleItalic="say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border-l-2 border-[#C8552A]/30 pl-7 py-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={10} fill="#B8964A" className="text-[#B8964A]" />)}
                </div>
                <p className="text-xl text-[#D4C9A8] leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm text-[#F5EED8] font-medium">{t.author}</div>
                  <div className="text-[11px] tracking-wider text-[#6B6358] uppercase mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#161616] border-t border-[#3A3530]/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-5">Join Us</p>
            <h2 className="text-5xl md:text-7xl text-[#F5EED8] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              An evening worth<br />
              <em className="text-[#D4AF6A] italic">remembering</em>
            </h2>
            <p className="text-[#6B6358] text-sm mb-10 max-w-md mx-auto leading-relaxed">
              Tables fill quickly. We recommend booking at least one week in advance. Private dining available for groups of 8 or more.
            </p>
            <Link href="/reservations" className="inline-block px-14 py-4 bg-[#C8552A] text-white text-[11px] tracking-[0.35em] uppercase hover:bg-[#E06B3A] transition-colors duration-300">
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
