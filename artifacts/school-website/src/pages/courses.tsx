import { motion } from "framer-motion";
import { Microscope, Paintbrush, TrendingUp, BookOpen, Calculator, Globe, FlaskConical, Leaf, Users, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const secondary = {
  label: "Secondary (Std IX & X)",
  color: "primary",
  description: "Comprehensive SSC board preparation with both Marathi and Semi-English medium instruction.",
  subjects: [
    "Marathi (First Language)",
    "English (Second Language)",
    "Hindi (Third Language)",
    "Mathematics",
    "Science & Technology",
    "Social Science",
    "Information Technology",
  ],
};

const higherSecondary = [
  {
    name: "Science Stream",
    icon: Microscope,
    code: "HSC Science",
    description: "Designed for students aspiring to engineering, medicine, and research careers.",
    subjects: ["Physics", "Chemistry", "Biology / Mathematics", "English", "Environmental Education"],
    highlight: "Lab-based practical sessions and competitive exam coaching (NEET, JEE preparation support)",
  },
  {
    name: "Arts Stream",
    icon: Paintbrush,
    code: "HSC Arts",
    description: "Rich in humanities, social sciences, and languages — ideal for law, civil services, and teaching.",
    subjects: ["History", "Geography", "Political Science", "Marathi", "English", "Sociology"],
    highlight: "Strong base for MPSC/UPSC preparation and humanities-based careers",
  },
  {
    name: "Commerce Stream",
    icon: TrendingUp,
    code: "HSC Commerce",
    description: "Ideal for future business leaders, accountants, and entrepreneurs.",
    subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics & Statistics", "English"],
    highlight: "Practical accounting training and entrepreneurship-focused curriculum",
  },
];

const features = [
  { icon: BookOpen, title: "Experienced Faculty", desc: "Dedicated teachers with 10+ years of classroom experience" },
  { icon: Calculator, title: "Regular Assessments", desc: "Weekly tests and mock board exams to track progress" },
  { icon: Globe, title: "Medium of Instruction", desc: "Marathi and Semi-English medium options available" },
  { icon: FlaskConical, title: "Laboratory Access", desc: "Well-equipped Science and Computer labs" },
  { icon: Leaf, title: "Co-curricular Activities", desc: "Sports, arts, and cultural activities alongside academics" },
  { icon: Users, title: "Remedial Classes", desc: "Extra support for students who need additional help" },
];

export default function Courses() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Academic Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Courses & Streams
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From secondary school fundamentals to higher secondary specialization — we offer a complete
              academic pathway that prepares students for university, careers, and life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Secondary School */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Classes IX & X</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--app-font-display)" }}>
              Secondary School (SSC)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{secondary.description}</p>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" /> Subjects Covered
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {secondary.subjects.map((sub) => (
                  <div key={sub} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{sub}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-3">
                <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Marathi Medium</Badge>
                <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Semi-English Medium</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Maharashtra SSC Board</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Higher Secondary */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4">Classes XI & XII</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              Higher Secondary (HSC) Streams
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose from three specialized streams — each designed to open specific career pathways and higher education opportunities.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {higherSecondary.map((stream, i) => (
              <motion.div
                key={stream.name}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
              >
                <div className="p-6 border-b border-border bg-primary/5">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <stream.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="mb-3 text-xs bg-primary/10 text-primary border-primary/20">{stream.code}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--app-font-display)" }}>{stream.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stream.description}</p>
                </div>
                <div className="p-6 flex-1">
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Core Subjects</h4>
                  <ul className="space-y-2 mb-6">
                    {stream.subjects.map((sub) => (
                      <li key={sub} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium leading-relaxed">{stream.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4">Academic Support</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              What Makes Our Teaching Different
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
