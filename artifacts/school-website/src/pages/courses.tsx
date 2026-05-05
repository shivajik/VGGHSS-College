import { motion, type Variants } from "framer-motion";
import { Microscope, Paintbrush, BookOpen, FileText, ListChecks, GraduationCap, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const secondaryDocs = [
  "Previous school transfer certificate",
  "Aadhaar card xerox",
  "Bank passbook",
  "Passport size photo",
];

const arts = [
  "English",
  "Marathi / Hindi / Pali",
  "Politics",
  "History",
  "Co-operation Science",
  "Defence Studies",
  "Sociology",
  "Vocal Light Music",
  "History & Development of Indian Music",
];

const science = [
  "English",
  "Marathi / Pali",
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics / Geography / Psychology",
  "Crop Science",
];

const eligibility = [
  "S.S.C. passed from Maharashtra State Board of Secondary and Higher Secondary Education from any Division.",
  "Students passing S.S.C. from other states must obtain an Eligibility Certificate from Pune Divisional Board and submit the Migration Certificate within time.",
  "Students seeking admission to XI Science should have secured a minimum of 50% marks (Open) and 45% marks (Reserved category).",
  "Admissions are granted as per Government rules based on merit and reservation.",
];

const documents = [
  "School Leaving Certificate",
  "S.S.C. Marks Memo",
  "Eligibility Certificate (if applicable)",
  "Caste Certificate (if applicable)",
  "Four passport-size photographs with the application form",
  "Aadhaar Card Xerox",
];

const deptEmails = [
  "physics@vgghss.com",
  "chemistry@vgghss.com",
  "biology@vgghss.com",
  "maths@vgghss.com",
];

export default function Courses() {
  return (
    <div className="overflow-hidden pt-20">
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Academic Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Courses
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Course details and admission requirements for Secondary (Std VIII–X) State Board and
              Higher Secondary (Std XI &amp; XII) Arts and Science streams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Secondary 8-10 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Std VIII, IX & X</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--app-font-display)" }}>
              Course Details — State Board (8, 9, 10)
            </h2>
            <p className="text-muted-foreground mb-8">Maharashtra State Board curriculum with experienced faculty and lab access.</p>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-foreground mb-5 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Eligibility for Admission
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {secondaryDocs.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HSC streams */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-3">Std XI & XII</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
              Higher Secondary Streams
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div className="bg-white rounded-2xl border border-border overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="p-6 border-b border-border bg-primary/5 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Badge className="mb-1 bg-primary/10 text-primary border-primary/20 text-xs">HSC Arts</Badge>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Std XI & XII Arts</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Course Subjects</h4>
                <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
                  {arts.map((s) => <li key={s}>{s}</li>)}
                </ol>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl border border-border overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="p-6 border-b border-border bg-primary/5 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Badge className="mb-1 bg-primary/10 text-primary border-primary/20 text-xs">HSC Science</Badge>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Std XI & XII Science</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Course Subjects</h4>
                <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
                  {science.map((s) => <li key={s}>{s}</li>)}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl grid lg:grid-cols-2 gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-3"><GraduationCap className="h-3 w-3 mr-1" /> Junior College</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--app-font-display)" }}>
              Eligibility for Admission to Junior College
            </h3>
            <ol className="space-y-4">
              {eligibility.map((e, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">{i + 1}</span>
                  {e}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <Badge className="mb-3"><ListChecks className="h-3 w-3 mr-1" /> Documents</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--app-font-display)" }}>
              Required Documents
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Submit the following in original along with three photocopies of each:
            </p>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground/80 bg-muted/30 rounded-xl p-3 border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div className="bg-white rounded-2xl border border-border p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge className="mb-3"><BookOpen className="h-3 w-3 mr-1" /> Contact</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--app-font-display)" }}>
              Late.Vimalbai Gangadhar Gaikwad Secondary &amp; Higher Secondary School
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              College Index Code — J.12.12.011 &nbsp;|&nbsp; U-DISE No.: 27261101403
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-foreground/80">At. Gaikwad Jalgaon, Tq. Shevgaon, Dist. Ahmednagar — 414504</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a href="mailto:vggcollege@gmail.com" className="text-foreground/80 hover:text-primary">vggcollege@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-foreground/80">9422659856 / 9921544856</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Department-wise Email IDs</h4>
              <div className="flex flex-wrap gap-2">
                {deptEmails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
