"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const team = [
  {
    name: "Chef Aryan Kapoor",
    role: "Founder & Executive Chef",
    bio: "Trained at Le Cordon Bleu London and staged at Noma and El Celler de Can Roca, Aryan returned to India with a singular vision: to celebrate fire as a culinary medium. He founded Ember & Ash in 2019 after 12 years building his reputation across three continents.",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
  },
  {
    name: "Meera Iyer",
    role: "Pastry Chef",
    bio: "A graduate of the Culinary Institute of America and former pastry chef at three-Michelin-starred The Fat Duck, Meera brings European precision to her South Asian-influenced desserts. Her miso crème brûlée has become the restaurant's most photographed creation.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
  {
    name: "Rohan Mehta",
    role: "Sommelier & Head of Beverage",
    bio: "A Diploma WSET holder and former cellar master at The Leela, Rohan curates a 600-label list that spans natural wines from Georgia to aged Burgundies. His cocktail programme won 'Best Bar Programme' at the Mumbai Hospitality Awards 2023.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
];

const milestones = [
  { year: "2019", event: "Ember & Ash opens in Bandra West with 36 covers" },
  { year: "2020", event: "Named one of Asia's 50 Best Restaurants to Watch" },
  { year: "2021", event: "Wins National Restaurant Award for Best Fine Dining" },
  { year: "2022", event: "Private dining suite added, capacity expanded to 60" },
  { year: "2023", event: "Michelin-recommended, cocktail bar programme launched" },
  { year: "2024", event: "Ranked #12 on India's 50 Best Restaurants list" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2000&q=90" alt="About" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/30 to-[#0E0E0E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-3">Our Story</p>
            <h1 className="text-6xl md:text-8xl text-[#F5EED8]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              About <em className="text-[#D4AF6A] italic">Us</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-5">The Origin</p>
              <h2 className="text-4xl md:text-5xl text-[#F5EED8] mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                Born from a fire,<br /><em className="text-[#D4AF6A] italic">built with purpose</em>
              </h2>
              <div className="space-y-5 text-sm text-[#6B6358] leading-relaxed">
                <p>
                  Ember & Ash was conceived on a rainy October evening in 2018, when Chef Aryan Kapoor sat around a wood fire with his grandmother in Rajasthan, watching her slow-roast spices over a dung-coal sigri. In that moment, he understood what he had been missing in the Michelin-starred kitchens of Europe: the soul that only fire can put into food.
                </p>
                <p>
                  He returned to Mumbai with a single intention — to build a restaurant that honours fire not as a tool, but as an ingredient. Every cooking method at Ember & Ash involves direct or indirect heat from wood, coal, or charcoal. The Josper grill, the wood-fired hearth, and the custom ember roasters are the true signatures of the kitchen.
                </p>
                <p>
                  What began as 36 covers in a narrow Bandra shopfront has grown into one of India&apos;s most recognised fine dining destinations. The philosophy has never changed: seasonal ingredients, honest fire, and the belief that a great meal is ultimately a great conversation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=900&q=90"
                alt="Open fire kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-[#C8552A]/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 border border-[#B8964A]/15 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 lg:px-12 bg-[#161616]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="The Journey" title="Our" titleItalic="milestones" />
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3A3530]" />
            <div className="space-y-10 pl-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-1 w-3 h-3 border-2 border-[#C8552A] bg-[#161616] rounded-full" />
                  <div className="text-[10px] tracking-[0.4em] text-[#B8964A] uppercase mb-1">{m.year}</div>
                  <p className="text-[#D4C9A8] text-sm leading-relaxed">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="The People" title="Meet the" titleItalic="team" subtitle="The people who turn raw ingredients and honest fire into something worth remembering." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-transparent" />
                </div>
                <h3 className="text-2xl text-[#F5EED8] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>{member.name}</h3>
                <p className="text-[10px] tracking-[0.3em] text-[#B8964A] uppercase mb-4">{member.role}</p>
                <p className="text-sm text-[#6B6358] leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="py-20 px-6 lg:px-12 bg-[#161616] border-t border-[#3A3530]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "2019", label: "Established" },
              { stat: "60", label: "Covers" },
              { stat: "600+", label: "Wine Labels" },
              { stat: "12", label: "Awards Won" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="text-5xl md:text-6xl text-[#D4AF6A] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>{item.stat}</div>
                <div className="text-[10px] tracking-[0.35em] text-[#6B6358] uppercase">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
