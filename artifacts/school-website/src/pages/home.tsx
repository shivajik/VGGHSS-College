import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import {
  GraduationCap, Trophy, Users, BookOpen, Star, ArrowRight,
  Calendar, Award, Microscope, Palette, Dumbbell, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const stats = [
  { icon: GraduationCap, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "1200+", label: "Students Enrolled" },
  { icon: Trophy, value: "150+", label: "Awards Won" },
  { icon: BookOpen, value: "12", label: "Courses Offered" },
];

const highlights = [
  { icon: Microscope, title: "Science Stream", desc: "Biology, Physics, Chemistry with modern lab facilities" },
  { icon: BookOpen, title: "Arts & Humanities", desc: "History, Geography, Marathi, English and more" },
  { icon: Palette, title: "Commerce Stream", desc: "Accountancy, Economics, Business Studies" },
  { icon: Dumbbell, title: "Sports & Culture", desc: "District-level sports champions, cultural excellence" },
];

const events = [
  { date: "Jun 15", title: "Annual Sports Day", type: "Sports" },
  { date: "Jul 02", title: "Science Exhibition", type: "Academic" },
  { date: "Aug 10", title: "Independence Day Celebration", type: "Cultural" },
  { date: "Sep 05", title: "Teachers' Day & Felicitation", type: "Special" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-[#212934] via-[#1a2d1e] to-[#2d4a2a]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm font-medium px-4 py-1.5">
                Om Shivkrupa Shikshan Prasarak Mandal, Aurangabad
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--app-font-display)" }}
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              Shaping Futures,{" "}
              <span className="text-primary">Nurturing</span>{" "}
              Excellence
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              Late.Vimalbai Gangadhar Gaikwad Secondary & Higher Secondary School —
              empowering students in Gaikwaad Jalgaon with quality education, strong values,
              and a passion for achievement since our founding.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
              <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/30">
                <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
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

      {/* Welcome */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">Welcome to VGGHSS</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
                A School Built on Community & Commitment
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nestled in Gaikwaad Jalgaon, our school has been a beacon of educational opportunity
                for students across Ahmednagar district. We blend academic rigor with personal growth,
                producing students who excel in boards, sports, and life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our dedicated staff, modern infrastructure, and nurturing environment create the ideal
                foundation for every student to discover their potential and achieve their dreams.
              </p>
              <Button asChild className="rounded-full px-6">
                <Link href="/about">Read Our Story <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4">Events</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              Upcoming Events & Activities
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                className="group bg-white rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary font-bold text-sm mb-4 flex-col">
                  <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                  <span className="text-lg leading-none">{event.date.split(" ")[1]}</span>
                </div>
                <Badge variant="secondary" className="mb-3 text-xs">{event.type}</Badge>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#4a9e5c] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Star className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--app-font-display)" }}>
              Begin Your Journey With Us
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Join hundreds of students who chose VGGHSS for their secondary and higher secondary education.
              Admissions are open — take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-4xl font-bold mb-2" style={{ fontFamily: "var(--app-font-display)" }}>
                Proud of Our Achievers
              </h2>
              <p className="text-gray-400">Board toppers, sports champions, and cultural stars — see what our students achieve.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="flex items-center gap-6">
                {[{ icon: Award, val: "District Toppers" }, { icon: Trophy, val: "State Champions" }, { icon: GraduationCap, val: "100% Pass Rate" }].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{item.val}</span>
                  </div>
                ))}
                <Button asChild className="ml-4 rounded-full px-6" variant="secondary">
                  <Link href="/achievements">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
