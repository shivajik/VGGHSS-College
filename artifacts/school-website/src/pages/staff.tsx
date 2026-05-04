import { motion, type Variants } from "framer-motion";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export default function Staff() {
  return (
    <div className="overflow-hidden pt-20">
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Users className="h-3 w-3 mr-1" /> Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Our Staff
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Meet the dedicated educators and support staff of Late. Vimalbai Gangadhar Gaikwad
              Secondary &amp; Higher Secondary School — the heart of every student's journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-3xl overflow-hidden border border-border bg-white shadow-sm">
              <img
                src="https://vgghss.com/wp-content/uploads/2023/09/Staff.jpg"
                alt="VGGHSS Staff Group Photograph"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              The dedicated faculty and staff of VGGHSS — Secondary Section.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}