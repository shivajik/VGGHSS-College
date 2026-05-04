import { motion, type Variants } from "framer-motion";
import { Camera, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const categories = ["All", "Campus", "Events", "Activities"];

const galleryItems = [
  { id: 1, title: "School Campus View", category: "Campus", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-2.jpeg", desc: "Our school campus in Gaikwaad Jalgaon" },
  { id: 2, title: "School Building", category: "Campus", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-4.jpeg", desc: "Main school building" },
  { id: 3, title: "Campus Grounds", category: "Campus", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-5.jpeg", desc: "Open grounds for students" },
  { id: 4, title: "School Activity", category: "Activities", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-6.jpeg", desc: "Students participating in school activity" },
  { id: 5, title: "Student Gathering", category: "Events", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-9.jpeg", desc: "Annual student gathering" },
  { id: 6, title: "School Function", category: "Events", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-10.jpeg", desc: "School function moments" },
  { id: 7, title: "Academic Block", category: "Campus", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-1.jpeg", desc: "Academic building view" },
  { id: 8, title: "Cultural Event", category: "Events", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-8.jpeg", desc: "Cultural event at school" },
  { id: 9, title: "School Activities", category: "Activities", src: "https://vgghss.com/wp-content/uploads/2022/11/Vgg1-7.jpeg", desc: "Student activities" },
  { id: 10, title: "Om Shivkrupa Trust", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-1.jpeg", desc: "Trust event" },
  { id: 11, title: "Trust Programme", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-11.jpeg", desc: "Trust programme highlights" },
  { id: 12, title: "Felicitation", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-15.jpeg", desc: "Felicitation moments" },
  { id: 13, title: "Annual Function", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-16.jpeg", desc: "Annual function" },
  { id: 14, title: "Community Programme", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-20.jpeg", desc: "Community engagement" },
  { id: 15, title: "School Programme", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-22.jpeg", desc: "School programme" },
  { id: 16, title: "Cultural Day", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-24.jpeg", desc: "Cultural day" },
  { id: 17, title: "Award Ceremony", category: "Events", src: "https://vgghss.com/wp-content/uploads/2020/10/om_shivkrupa-25.jpeg", desc: "Award ceremony" },
  { id: 18, title: "School Memories", category: "Activities", src: "https://vgghss.com/wp-content/uploads/2020/10/11.jpg", desc: "Treasured school memories" },
  { id: 19, title: "Campus Life", category: "Activities", src: "https://vgghss.com/wp-content/uploads/2020/10/22.jpg", desc: "Daily campus life" },
  { id: 20, title: "Group Photo", category: "Activities", src: "https://vgghss.com/wp-content/uploads/2020/10/33.jpeg", desc: "Group photograph" },
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
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-muted"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.05}
                onClick={() => setLightbox(item)}
              >
                <img src={item.src} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
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
            <div className="h-72 relative bg-muted">
              <img src={lightbox.src} alt={lightbox.title} className="absolute inset-0 w-full h-full object-cover" />
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
