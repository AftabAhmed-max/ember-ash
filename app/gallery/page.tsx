"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90", alt: "The dining room", category: "Ambiance", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=90", alt: "Ember-roasted lamb", category: "Food" },
  { src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=90", alt: "Evening service", category: "Ambiance" },
  { src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=90", alt: "Wagyu striploin", category: "Food" },
  { src: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=90", alt: "Charred lobster", category: "Food" },
  { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=90", alt: "Private dining room", category: "Ambiance", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=90", alt: "Duck breast", category: "Food" },
  { src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=90", alt: "Aged Negroni", category: "Drinks" },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=90", alt: "Wine service", category: "Drinks" },
  { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=90", alt: "Dark chocolate delice", category: "Desserts" },
  { src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=90", alt: "Sea bass", category: "Food" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=90", alt: "Kitchen at work", category: "Kitchen", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=90", alt: "Basque cheesecake", category: "Desserts" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=90", alt: "Old fashioned", category: "Drinks" },
  { src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=90", alt: "Black truffle risotto", category: "Food" },
];

const filterOptions = ["All", "Food", "Ambiance", "Drinks", "Desserts", "Kitchen"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  useEffect(() => {
    if (!lightboxImg) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxImg]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=2000&q=90" alt="Gallery hero" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/40 to-[#0E0E0E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.5em] text-[#B8964A] uppercase mb-3">Visual Story</p>
            <h1 className="text-6xl md:text-8xl text-[#F5EED8]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              The <em className="text-[#D4AF6A] italic">Gallery</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 px-6 lg:px-12 border-b border-[#3A3530]/40">
        <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] tracking-[0.3em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                filter === f
                  ? "border-[#B8964A] text-[#B8964A] bg-[#B8964A]/8"
                  : "border-[#3A3530] text-[#6B6358] hover:border-[#6B6358] hover:text-[#D4C9A8]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[250px]"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                role="button"
                tabIndex={0}
                aria-label={`View ${img.alt}`}
                onClick={() => setLightboxImg({ src: img.src, alt: img.alt })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxImg({ src: img.src, alt: img.alt });
                  }
                }}
                className={`relative overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#B8964A] ${img.span || ""}`}
              >
                <Image
                  src={img.src} alt={img.alt} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#0E0E0E]/0 group-hover:bg-[#0E0E0E]/50 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={24} className="text-[#F5EED8] mb-2" />
                  <span className="text-[10px] tracking-[0.3em] text-[#D4C9A8] uppercase">{img.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-[#D4C9A8]">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0E0E0E]/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 text-[#F5EED8] hover:text-[#C8552A] transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightboxImg.src} alt={lightboxImg.alt} fill className="object-contain" sizes="90vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
