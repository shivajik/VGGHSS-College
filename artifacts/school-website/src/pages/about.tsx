import { motion, type Variants } from "framer-motion";
import { BookOpen, Heart, Target, Users, Star, Award, ShieldCheck, Camera, Trees, FlameKindling, FlaskConical, Volleyball, Apple, Sparkles, Microscope, UserCheck, MessageCircle, ShieldAlert, Activity, Globe2, BarChart3, Wifi, Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const secondaryFeatures = [
  { icon: Trees, title: "Lush Green Campus", desc: "A naturally rich environment for oxygen, mental balance, and inner strength — the entire campus is wrapped in greenery." },
  { icon: Camera, title: "CCTV Surveillance", desc: "The campus is monitored by CCTV cameras to ensure that no untoward incident takes place." },
  { icon: FlameKindling, title: "Fire Safety", desc: "A functional fire-fighting system is installed in the school building, which is open and easy to evacuate." },
  { icon: UserCheck, title: "Trained Faculty", desc: "Highly qualified, trained teachers conduct every class — knowledge transfer is our central duty." },
  { icon: FlaskConical, title: "Labs & Library", desc: "Well-equipped science laboratories, library, computer lab and projector room support all-round development." },
  { icon: Volleyball, title: "Sports Ground", desc: "A spacious playground supports athletes aiming for state and national-level competitions." },
  { icon: Apple, title: "Mid-day Meal", desc: "Government-approved nutritious meals served daily — teachers manage it as their own responsibility." },
  { icon: Sparkles, title: "Scholarship Support", desc: "Merit, Suvarnamahotsavi, Savitribai Phule, NMMS and EBC scholarships disbursed via Government DBT." },
  { icon: Microscope, title: "INSPIRE Award", desc: "Students are encouraged to participate in INSPIRE Award to nurture their scientific and research mindset." },
  { icon: MessageCircle, title: "PTA & SMC", desc: "Active School Management Committee and Parent–Teacher Association meet regularly to address concerns." },
  { icon: ShieldAlert, title: "Vishakha Committee", desc: "A Women's Grievance Redressal (Vishakha) Committee ensures a safe, confident environment for girls and female staff." },
  { icon: Activity, title: "Yoga & Health Camps", desc: "Regular yoga camps and student health check-up camps are organised throughout the year." },
  { icon: Globe2, title: "Govt. Schemes", desc: "All Government schemes related to school students are communicated and implemented for beneficiaries." },
  { icon: BarChart3, title: "90%+ Results", desc: "Average school result from 2020 to 2023 has been above 90%, with a goal to push it higher every year." },
  { icon: Wifi, title: "Digital Records", desc: "Funds, grants and operations are tracked through computerised systems linked with Government portals." },
  { icon: Scale, title: "Transparent & Compliant", desc: "Run as per the Secondary Schools Code and directives of the Education Officer and Block Officials." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "We push every student to exceed their own expectations through structured learning and dedicated teaching." },
  { icon: Heart, title: "Community Rooted", desc: "Born in rural Maharashtra, we are committed to uplifting families and communities through education." },
  { icon: Target, title: "Goal Oriented", desc: "From board exams to competitive entrance tests, we prepare students for every next step." },
  { icon: Users, title: "Inclusive Environment", desc: "We welcome students of all backgrounds and create an environment where everyone can thrive." },
  { icon: Star, title: "Holistic Growth", desc: "Sports, arts, culture — we nurture the whole person, not just the student." },
  { icon: ShieldCheck, title: "Safe & Supportive", desc: "A caring staff and disciplined culture ensure every student feels safe and valued." },
];

const milestones = [
  { year: "1996", title: "School Founded", desc: "Om Shivkrupa Shikshan Prasarak Mandal established VGGHSS to serve rural Ahmednagar." },
  { year: "2002", title: "Higher Secondary Added", desc: "Classes 11 and 12 introduced across Science, Arts, and Commerce streams." },
  { year: "2008", title: "Sports Facilities Built", desc: "A dedicated sports ground opened, enabling athletics, kabaddi, and cricket training." },
  { year: "2014", title: "First District Topper", desc: "A VGGHSS student ranked first across Ahmednagar district in SSC board exams." },
  { year: "2020", title: "Digital Initiatives", desc: "Online learning infrastructure introduced to ensure continuity through all circumstances." },
  { year: "2024", title: "100% Pass Rate", desc: "All students who appeared for board exams in 2024 passed with distinction or merit." },
];

export default function About() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Our Story, Our Mission
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              For over two decades, Late.Vimalbai Gangadhar Gaikwad Secondary & Higher Secondary School
              has stood as a pillar of education in rural Maharashtra — creating opportunities where they
              were once scarce, and nurturing futures that were once uncertain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
                Our Founding Trust
              </h2>
              <div className="p-6 rounded-2xl border-l-4 border-primary bg-primary/5 mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Om Shivkrupa Shikshan Prasarak Mandal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A non-governing organization registered under the Maharashtra Society Registration Act 21 of 1860
                  (Registration No. Maha/54/1996 dt. 1/02/1996) and Mumbai Public Trust Act 29 of 1950
                  (Registration No. F-3437 AUR dt. 2/08/1996). The trust operates in Maharashtra with a mission
                  to bring education to the marginalized communities of rural India.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The school was established to provide quality secondary and higher secondary education to the
                students of Gaikwaad Jalgaon and surrounding villages. From its very beginning, VGGHSS has
                operated with the belief that geography and socioeconomic status should never be barriers to
                a bright future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, the school stands as a testament to what community-driven education can achieve —
                board toppers, state-level sports athletes, and civic leaders have all walked these halls.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--app-font-display)" }}>Principal's Message</h3>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">School Principal</div>
                    <div className="text-sm text-muted-foreground">Late.Vimalbai Gangadhar Gaikwad HSS</div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary pl-4">
                  "Every child who enters our gates carries a dream. Our sacred duty is to fan that flame,
                  provide the tools, and stand beside them through every challenge. Education at VGGHSS is not
                  a transaction — it is a transformation. We are proud of every student who has made this school
                  their launchpad to a better life."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <Badge className="mb-4">Our Purpose</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              Vision & Mission
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div className="bg-white rounded-2xl p-8 border border-border text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--app-font-display)" }}>Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted educational institution in rural Ahmednagar, producing well-rounded
                graduates who serve society with knowledge, integrity, and compassion.
              </p>
            </motion.div>
            <motion.div className="bg-white rounded-2xl p-8 border border-border text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--app-font-display)" }}>Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality secondary and higher secondary education to all students,
                fostering intellectual curiosity, physical wellbeing, and strong moral character.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4">What We Stand For</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div key={val.title} className="bg-muted/30 rounded-2xl p-6 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              Our Trustees
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { img: "https://vgghss.com/wp-content/uploads/2020/10/A_G_Gaikwad.jpg", name: "Mr. Ashokraoji Gangadhar Gaikwad", role: "President", qual: "B.Sc., D.L.L.&W., L.L.B., M.B.A." },
              { img: "https://vgghss.com/wp-content/uploads/2020/10/N_G_Gaikwad_Sir.jpg", name: "Prof. Nandkishore Gangadhar Gaikwad", role: "Secretary", qual: "M.Sc., M.Ed." },
            ].map((p, i) => (
              <motion.div key={p.name} className="bg-white rounded-2xl border border-border overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <img src={p.img} alt={p.name} className="w-full h-72 object-cover object-top" loading="lazy" />
                <div className="p-6 text-center">
                  <Badge className="mb-2">{p.role}</Badge>
                  <h3 className="font-bold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.qual}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Executive Committee</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="text-left p-4 font-medium">Member</th>
                    <th className="text-left p-4 font-medium">Qualification</th>
                    <th className="text-left p-4 font-medium">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Mr. Ashokraoji G. Gaikwad", "B.Sc., D.L.L.&W., L.L.B., M.B.A.", "President"],
                    ["Mr. Nitinrao K. Naiknaware", "M.Sc., B.Ed.", "Vice President"],
                    ["Mr. Nandkishor G. Gaikwad", "M.Sc., M.Ed.", "Secretary"],
                    ["Mrs. Alka N. Gaikwad", "M.A., B.P.Ed.", "Treasurer"],
                    ["Mrs. Mrunalini A. Gaikwad", "M.A.", "Member"],
                    ["Mrs. Sangita R. Gaikwad", "M.A.", "Member"],
                    ["Mr. Shivajirao T. Dhage", "—", "Member"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{row[0]}</td>
                      <td className="p-4 text-muted-foreground">{row[1]}</td>
                      <td className="p-4 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section — Objectives, Standards & Goals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Secondary Section</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--app-font-display)" }}>
              Objectives, Standards & Goals
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Late.Vimalbai Gangadhar Gaikwad Secondary &amp; Higher Secondary School was founded with the
              sacred objective of imparting knowledge to the children of Gaikwad Jalgaon — a village still
              not connected by State Transport buses. The school exists so that no child of this region is
              left behind in education. Building generations of educated, confident citizens is our single
              mission.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryFeatures.map((f, i) => (
              <motion.div key={f.title} className="bg-muted/30 rounded-2xl p-5 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.05}>
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--app-font-display)" }}>Key Milestones</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year} className="flex gap-6 items-start" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-sm text-center">
                  {m.year}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
                  <h3 className="font-bold text-white mb-1">{m.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
