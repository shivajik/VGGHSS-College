import { motion, type Variants } from "framer-motion";
import { Trophy, Medal, Star, Award, Users, Zap, GraduationCap, Music } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const academicToppers = [
  { name: "Priya Gaikwad", year: "2024", score: "94.80%", stream: "Science", rank: "District 1st" },
  { name: "Rahul Shinde", year: "2024", score: "92.60%", stream: "Commerce", rank: "District 2nd" },
  { name: "Sunita Jadhav", year: "2023", score: "96.00%", stream: "Arts", rank: "District 1st" },
  { name: "Amit Pawar", year: "2023", score: "91.40%", stream: "Science", rank: "School Topper" },
  { name: "Kaveri Kulkarni", year: "2022", score: "93.20%", stream: "Commerce", rank: "District 3rd" },
  { name: "Rohan Deshpande", year: "2022", score: "90.80%", stream: "Arts", rank: "School Topper" },
];

const sportsAchievements = [
  { title: "District Kabaddi Champions", year: "2024", level: "District", icon: Trophy },
  { title: "State Athletics (100m) — Silver", year: "2023", level: "State", icon: Medal },
  { title: "District Cricket Tournament — Winners", year: "2023", level: "District", icon: Trophy },
  { title: "Divisional Kho-Kho — 3rd Place", year: "2022", level: "Division", icon: Medal },
  { title: "District Volleyball — 2nd Place", year: "2022", level: "District", icon: Medal },
  { title: "Taluka Football Champions", year: "2024", level: "Taluka", icon: Trophy },
];

const culturalAchievements = [
  { title: "Best School — District Cultural Festival", year: "2024", icon: Star },
  { title: "1st Prize — One-Act Play, Ahmednagar", year: "2023", icon: Music },
  { title: "Best Choir — Divisional Competition", year: "2023", icon: Music },
  { title: "Drawing & Painting — District Gold", year: "2024", icon: Star },
];

const boardStats = [
  { value: "100%", label: "Pass Rate 2024", icon: GraduationCap },
  { value: "42%", label: "Distinction Students", icon: Award },
  { value: "78%", label: "Merit / Above", icon: Star },
  { value: "6", label: "District Toppers (5 yrs)", icon: Trophy },
];

export default function Achievements() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Pride</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Achievements & Honours
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our students don't just study — they excel, compete, and win. Here is a record of the excellence
              that VGGHSS has consistently produced across academics, sports, and culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {boardStats.map((stat, i) => (
              <motion.div key={stat.label} className="flex flex-col items-center text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--app-font-display)" }}>{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Toppers */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4"><GraduationCap className="h-3 w-3 mr-1" /> Academic Excellence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Board Exam Toppers</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicToppers.map((topper, i) => (
              <motion.div key={topper.name + topper.year} className="bg-white rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {topper.name[0]}
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">{topper.rank}</Badge>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{topper.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{topper.stream} Stream — {topper.year}</p>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--app-font-display)" }}>{topper.score}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4"><Trophy className="h-3 w-3 mr-1" /> Sports</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Sports Achievements</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sportsAchievements.map((item, i) => (
              <motion.div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{item.level}</Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30"><Users className="h-3 w-3 mr-1" /> Culture</Badge>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--app-font-display)" }}>Cultural Honours</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {culturalAchievements.map((item, i) => (
              <motion.div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <span className="text-sm text-gray-400">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-20 pt-16 border-t border-white/10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--app-font-display)" }}>
              The Best is Yet to Come
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every year, our students raise the bar. With your child at VGGHSS, they join a culture of
              aspiration — where excellence is expected, celebrated, and passed forward.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
