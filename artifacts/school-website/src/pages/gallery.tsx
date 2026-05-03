import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const categories = ["All", "Campus", "Sports", "Events", "Cultural", "Academic"];

const galleryItems = [
  {
    id: 1,
    title: "School Main Building",
    category: "Campus",
    bg: "from-emerald-400 to-green-600",
    desc: "Our heritage school building in Gaikwaad Jalgaon",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    category: "Sports",
    bg: "from-lime-400 to-emerald-600",
    desc: "Students competing in track and field events",
  },
  {
    id: 3,
    title: "Science Lab",
    category: "Academic",
    bg: "from-teal-400 to-cyan-600",
    desc: "Students conducting experiments in our science lab",
  },
  {
    id: 4,
    title: "Cultural Evening",
    category: "Cultural",
    bg: "from-green-400 to-teal-600",
    desc: "Annual cultural festival performances",
  },
  {
    id: 5,
    title: "Kabaddi Championship",
    category: "Sports",
    bg: "from-emerald-500 to-green-700",
    desc: "District Kabaddi championship winners 2024",
  },
  {
    id: 6,
    title: "Independence Day",
    category: "Events",
    bg: "from-lime-500 to-emerald-700",
    desc: "Republic Day flag hoisting ceremony",
  },
  {
    id: 7,
    title: "Computer Lab",
    category: "Academic",
    bg: "from-teal-500 to-green-700",
    desc: "Students learning digital skills in our computer lab",
  },
  {
    id: 8,
    title: "Annual Prize Distribution",
    category: "Events",
    bg: "from-green-500 to-lime-700",
    desc: "Celebrating our achievers at the annual prize ceremony",
  },
  {
    id: 9,
    title: "School Garden",
    category: "Campus",
    bg: "from-emerald-400 to-lime-600",
    desc: "Our green campus and botanical garden",
  },
  {
    id: 10,
    title: "Drama Performance",
    category: "Cultural",
    bg: "from-teal-400 to-emerald-600",
    desc: "Award-winning one-act play performance",
  },
  {
    id: 11,
    title: "Cricket Team",
    category: "Sports",
    bg: "from-lime-400 to-green-600",
    desc: "District cricket tournament champions",
  },
  {
    id: 12,
    title: "Classroom Learning",
    category: "Academic",
    bg: "from-green-400 to-teal-600",
    desc: "Engaged learning in our classrooms",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30"><Camera className="h-3 w-3 mr-1" /> Photo Gallery</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Life at VGGHSS
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A glimpse into our vibrant school community — from classrooms and labs, to sports fields and
              cultural stages. See the spirit of VGGHSS in every frame.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.05}
                onClick={() => setLightbox(item)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-80`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Camera className="h-12 w-12 text-white/60" />
                  <span className="text-white/80 text-sm mt-2 font-medium">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-white font-bold mb-1">{item.title}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-black/40 text-white border-0 text-xs backdrop-blur-sm">{item.category}</Badge>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">No items in this category.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-64 bg-gradient-to-br ${lightbox.bg} relative`}>
              <Camera className="absolute inset-0 m-auto h-20 w-20 text-white/40" />
              <button
                className="absolute top-4 right-4 h-8 w-8 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6">
              <Badge className="mb-3">{lightbox.category}</Badge>
              <h3 className="text-xl font-bold text-foreground mb-2">{lightbox.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{lightbox.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
