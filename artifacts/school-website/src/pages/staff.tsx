import { motion, type Variants } from "framer-motion";
import { Users, IndianRupee, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const payScale = [
  { sr: 1, post: "Mukhyadhyapak (Principal)", postMr: "मुख्याध्यापक", basic: "₹38,600 – ₹1,22,800" },
  { sr: 2, post: "Sahshikshak (Asst. Teacher)", postMr: "सहशिक्षक", basic: "₹35,400 – ₹1,12,400" },
  { sr: 3, post: "Ka. Lipik (Jr. Clerk)", postMr: "क. लिपिक", basic: "₹25,508 – ₹81,100" },
  { sr: 4, post: "Prayogshala Parichar (Lab Attendant)", postMr: "प्रयोगशाळा परिचर", basic: "₹19,900 – ₹63,200" },
  { sr: 5, post: "Shipai (Peon)", postMr: "शिपाई", basic: "₹16,600 – ₹52,400" },
];

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
              Staff & Pay Structure
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              The teaching and non-teaching staff of Late. Vimalbai Gangadhar Gaikwad Secondary &amp;
              Higher Secondary School are appointed and remunerated as per the pay scales sanctioned by
              the Government of Maharashtra. Below is the official structure of posts and basic pay.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-primary/5 border-l-4 border-primary rounded-2xl p-6 mb-10">
              <p className="text-foreground/90 leading-relaxed">
                <strong>शिक्षक व शिक्षकेतर वर्ग यांचे शासनाने मान्य केलेल्या वेतनश्रेणी नुसार वेतन होते.</strong>
                <br />
                <span className="text-muted-foreground text-sm">
                  Teaching and non-teaching staff are paid as per the pay scales approved by the Government.
                </span>
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-6 border-b border-border bg-muted/30 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>
                  Sanctioned Posts & Basic Pay
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-muted-foreground">
                    <tr>
                      <th className="text-left p-4 font-medium w-16">अनु. क्र.<br /><span className="text-xs">Sr. No.</span></th>
                      <th className="text-left p-4 font-medium">पद / Post</th>
                      <th className="text-left p-4 font-medium">बेसिक पे / Basic Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payScale.map((row) => (
                      <tr key={row.sr} className="border-t border-border hover:bg-muted/20">
                        <td className="p-4 font-bold text-primary">{row.sr}</td>
                        <td className="p-4">
                          <div className="font-semibold text-foreground">{row.post}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{row.postMr}</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 font-mono font-semibold text-foreground">
                            <IndianRupee className="h-3.5 w-3.5" />
                            {row.basic.replace("₹", "")}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              All appointments are made as per the rules of the School Education Department, Government of Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
