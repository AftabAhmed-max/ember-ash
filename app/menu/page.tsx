"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

type Category = "starters" | "mains" | "desserts" | "drinks";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  img?: string;
  dietary?: string[];
}

const menu: Record<Category, MenuItem[]> = {
  starters: [
    { name: "Smoked Burrata", desc: "Cold-smoked for 4 hours over applewood, heirloom tomato, basil oil, sea salt flakes", price: "₹1,200", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", dietary: ["V"] },
    { name: "Seared Scallop", desc: "Hokkaido scallop, cauliflower cream, pancetta crisp, truffle shavings, micro herb", price: "₹1,800", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80" },
    { name: "Wagyu Beef Tartare", desc: "Hand-chopped A4 Wagyu, quail egg yolk, fermented mustard, caper emulsion, toasted brioche", price: "₹1,600", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
    { name: "Charred Octopus", desc: "Josper-grilled baby octopus, smoked paprika oil, preserved lemon, harissa, chickpea purée", price: "₹1,500", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80" },
    { name: "Wild Mushroom Velouté", desc: "Foraged forest mushrooms, truffle foam, chives, crispy shallots, aged sherry", price: "₹980", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", dietary: ["V", "VG"] },
    { name: "Duck Liver Parfait", desc: "Silky duck liver, port wine gelée, brioche toast, cornichons, Maldon salt", price: "₹1,400", img: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80" },
  ],
  mains: [
    { name: "Ember-Roasted Lamb Rack", desc: "48-hour marinated Rajasthani lamb, coal-kissed crust, smoked garlic purée, wild herb jus, pomme purée", price: "₹3,800", tag: "Signature", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
    { name: "45-Day Dry-Aged Wagyu", desc: "A5 Wagyu striploin, bone marrow butter, ash-roasted shallots, truffle reduction, seasonal vegetables", price: "₹5,200", tag: "Premium", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
    { name: "Charred Lobster", desc: "Whole Atlantic lobster, saffron butter baste, coconut velouté, tarragon, grilled sourdough", price: "₹4,200", img: "https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80" },
    { name: "Wood-Roasted Duck Breast", desc: "Aged duck breast, cherry jus, duck-fat roasted potato, braised endive, pomegranate", price: "₹3,200", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
    { name: "Black Truffle Risotto", desc: "Carnaroli rice, black truffle shavings, 36-month aged Parmigiano, burnt butter, chive oil", price: "₹2,800", dietary: ["V"], img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
    { name: "Coal-Roasted Sea Bass", desc: "Line-caught sea bass, miso glaze, dashi broth, bok choy, sesame, pickled ginger, crispy rice", price: "₹3,400", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
  ],
  desserts: [
    { name: "Dark Chocolate Délice", desc: "72% Valrhona ganache, espresso soil, gold dust, salted caramel ice cream, praline", price: "₹980", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", dietary: ["V"] },
    { name: "Basque Cheesecake", desc: "La Viña-style burnt cheesecake, Alphonso mango coulis, vanilla cream, feuilletine", price: "₹880", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80", dietary: ["V"] },
    { name: "Miso Crème Brûlée", desc: "White miso custard, shiso sugar crust, yuzu curd, sesame tuile, candied ginger", price: "₹860", dietary: ["V"], img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80" },
    { name: "Tarte Tatin", desc: "Caramelised Granny Smith apple, puff pastry, Calvados cream, cinnamon ice cream", price: "₹820", dietary: ["V"], img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" },
    { name: "Cheese Selection", desc: "Five artisanal cheeses, honeycomb, walnut bread, quince paste, seasonal fruits", price: "₹1,400", img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80" },
  ],
  drinks: [
    { name: "Aged Negroni", desc: "12-week barrel-aged Campari, Tanqueray Ten, Martini Rosso, orange bitters, single block ice", price: "₹1,200", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80" },
    { name: "Smoked Sour", desc: "Mezcal, yuzu, egg white, activated charcoal, smoked salt rim, dehydrated citrus", price: "₹1,100", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80" },
    { name: "Ember Old Fashioned", desc: "Peat-smoked Hibiki 17, demerara, Angostura, charred orange, smoked rosemary", price: "₹1,400", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80" },
    { name: "Sommelier Wine Pairing", desc: "5-course wine pairing curated by our sommelier to complement the tasting menu", price: "₹4,800", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
    { name: "Zero-Proof Garden", desc: "Cucumber, elderflower, basil, lime, tonic, edible flowers — a full cocktail experience, no alcohol", price: "₹680", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
    { name: "Japanese Whisky Flight", desc: "Hibiki Harmony, Nikka Coffey Malt, Suntory Toki — 15ml pours, tasting notes provided", price: "₹2,200", img: "https://images.unsplash.com/photo-1527281400683-1aefee2a0b6c?w=600&q=80" },
  ],
};

const categories: { id: Category; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Mains" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("starters");

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=2000&q=90"
          alt="Menu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/50 to-[#0E0E0E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-3">The Menu</p>
            <h1 className="text-6xl md:text-8xl text-[#F5EED8]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Our <em className="text-[#D4AF6A] italic">Kitchen</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 lg:px-12 max-w-3xl mx-auto text-center">
        <p className="text-lg text-[#D4C9A8] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Our menu is a living document. It changes as seasons shift, as farmers harvest, and as our chefs 
          discover new ways to coax flavour from fire. Below is our current offering.
        </p>
        <p className="mt-4 text-xs text-[#6B6358] tracking-wider">
          V — Vegetarian &nbsp;·&nbsp; VG — Vegan &nbsp;·&nbsp; All prices include taxes
        </p>
      </section>

      {/* CATEGORY TABS */}
      <section className="sticky top-20 z-30 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#3A3530]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-8 py-5 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap transition-colors duration-300 ${
                  active === cat.id ? "text-[#D4AF6A]" : "text-[#6B6358] hover:text-[#D4C9A8]"
                }`}
              >
                {cat.label}
                {active === cat.id && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-px bg-[#B8964A]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU ITEMS */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menu[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group border border-[#3A3530]/50 hover:border-[#C8552A]/30 transition-all duration-500 overflow-hidden"
              >
                {item.img && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 to-transparent" />
                    {item.tag && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] tracking-[0.25em] uppercase bg-[#C8552A] text-white px-2.5 py-1">{item.tag}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl text-[#F5EED8] leading-snug flex-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                      {item.name}
                    </h3>
                    <span className="text-[#D4AF6A] text-lg shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.price}</span>
                  </div>
                  <p className="text-xs text-[#6B6358] leading-relaxed">{item.desc}</p>
                  {item.dietary && (
                    <div className="flex gap-2 mt-3">
                      {item.dietary.map((d) => (
                        <span key={d} className="text-[9px] tracking-wider border border-[#3A3530] text-[#6B6358] px-2 py-0.5">{d}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* TASTING NOTE */}
      <section className="py-20 px-6 lg:px-12 bg-[#161616] border-t border-[#3A3530]/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-6">Chef&apos;s Table</p>
          <h2 className="text-4xl md:text-5xl text-[#F5EED8] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            The 7-Course Tasting Menu
          </h2>
          <p className="text-[#6B6358] text-sm leading-relaxed mb-8">
            Available Tuesday through Sunday. A curated journey through the season&apos;s finest, 
            designed by Chef Aryan Kapoor. Wine pairing available at an additional ₹4,800.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl text-[#D4AF6A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>₹8,500</div>
              <div className="text-[10px] tracking-wider text-[#6B6358] uppercase mt-1">Per Person</div>
            </div>
            <div className="w-px h-10 bg-[#3A3530]" />
            <div className="text-center">
              <div className="text-3xl text-[#D4AF6A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>7</div>
              <div className="text-[10px] tracking-wider text-[#6B6358] uppercase mt-1">Courses</div>
            </div>
            <div className="w-px h-10 bg-[#3A3530]" />
            <div className="text-center">
              <div className="text-3xl text-[#D4AF6A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3h</div>
              <div className="text-[10px] tracking-wider text-[#6B6358] uppercase mt-1">Experience</div>
            </div>
          </div>
          <Link href="/reservations" className="inline-block px-10 py-4 bg-[#C8552A] text-white text-[11px] tracking-[0.3em] uppercase hover:bg-[#E06B3A] transition-colors duration-300">
            Book Tasting Menu
          </Link>
        </div>
      </section>
    </>
  );
}
