import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Trophy, GraduationCap, Award, Star, Stethoscope, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

type Topper = { rank: number; name: string; marks?: number; percentage: number };
type Medical = { sr: number; name: string; college: string };
type Result = { stream: string; registered: number; appeared: number; distinction: number; gradeI: number; gradeII: number; pass: number; total: number; percent: string };

type YearData = {
  year: string;
  toppers?: Topper[];
  toppersTitle?: string;
  mbbs?: Medical[];
  bds?: Medical[];
  result?: Result;
};

const data: YearData[] = [
  {
    year: "2021-22",
    toppersTitle: "H.S.C. Result Feb/March 2022 — 90% & Above",
    toppers: [
      { rank: 1, name: "Kangne Rushikesh Vishnu", percentage: 95.5 },
      { rank: 2, name: "Kachole Aakanksha Sunil", percentage: 95.33 },
      { rank: 3, name: "Theng Madhura Sureshrao", percentage: 95.33 },
      { rank: 4, name: "Bewle Siddhi Asaram", percentage: 95.17 },
      { rank: 5, name: "Giri Gayatri Mahadev", percentage: 95.17 },
      { rank: 6, name: "Pawar Riya Sahebrao", percentage: 94.67 },
      { rank: 7, name: "Murkute Gayatri Shridhar", percentage: 94.5 },
      { rank: 8, name: "Ranveer Shivani Jeevan", percentage: 94.5 },
    ],
  },
  {
    year: "2020-21",
    toppersTitle: "H.S.C. Result Feb/March 2021 — 90% & Above",
    toppers: [
      { rank: 1, name: "Kabra Anaya Amit", marks: 585, percentage: 97.5 },
      { rank: 2, name: "Patil Vaishnavi Uday", marks: 584, percentage: 97.33 },
      { rank: 3, name: "Vare Aditi Ajay", marks: 580, percentage: 96.67 },
      { rank: 4, name: "Patil Vedika Uday", marks: 576, percentage: 96 },
      { rank: 5, name: "Gadhe Mrunal Arvind", marks: 576, percentage: 96 },
      { rank: 6, name: "Bhawsar Isha Satishkumar", marks: 575, percentage: 95.83 },
      { rank: 7, name: "Dolas Shruti Dnyaneshwar", marks: 574, percentage: 95.67 },
      { rank: 8, name: "Gondhalkar Aditi Nagnath", marks: 573, percentage: 95.5 },
      { rank: 9, name: "Doiphode Rutuja Arjun", marks: 573, percentage: 95.5 },
      { rank: 10, name: "Shewale Suyasha Kishor", marks: 573, percentage: 95.5 },
    ],
    mbbs: [
      { sr: 1, name: "Patil Kanushka Mahendra", college: "Vedanta Medical College, Palghar" },
      { sr: 2, name: "Karanjikar Kaivalya Shriniwas", college: "M.G.M. College, Aurangabad" },
      { sr: 3, name: "Kalbande Vishwjeet Ashokrao", college: "AIIMS College, Bhopal" },
      { sr: 4, name: "Ware Om Abhijit", college: "Kasibai Nawale Medical College, Pune" },
      { sr: 5, name: "Borade Sangram Asaram", college: "Dr. Vitthalrao Vikhe Foundation, Ahmednagar" },
      { sr: 6, name: "Raul Yashvardhansing Kuldeepsing", college: "Nayar Medical College, Mumbai" },
      { sr: 7, name: "Soni Anirudh Arvind", college: "Sayan Medical College, Mumbai" },
      { sr: 8, name: "Kabara Anaya Amit", college: "I.G. Medical College, Nanded" },
      { sr: 9, name: "Bhavsar Isha Satishkumar", college: "Government Medical College, Aurangabad" },
      { sr: 10, name: "Toradmal Rushikesh Ashok", college: "I.G. Medical College, Nanded" },
    ],
    bds: [
      { sr: 1, name: "Muchhal Rasleenkaur Hardevsing", college: "Dr. Vitthalrao Vikhe Foundation, Ahmednagar" },
      { sr: 2, name: "Shevale Suyasha Kishor", college: "Terana Medical College, Nashik" },
    ],
  },
  {
    year: "2019-20",
    toppersTitle: "H.S.C. Result Feb 2020 — 90% & Above",
    toppers: [
      { rank: 1, name: "Soni Manali Abhay", marks: 614, percentage: 94.46 },
      { rank: 2, name: "Bhande Prathamesh Rajeshkumar", marks: 608, percentage: 93.53 },
      { rank: 3, name: "Deshmukh Shruti Dagadusaheb", marks: 601, percentage: 92.46 },
      { rank: 4, name: "Dixit Aditya Rushikesh", marks: 596, percentage: 91.69 },
      { rank: 5, name: "Kaushik Surabhi Phanish", marks: 592, percentage: 91.07 },
      { rank: 6, name: "Nemivant Aditya Kedar", marks: 589, percentage: 90.61 },
    ],
    result: { stream: "Science", registered: 153, appeared: 153, distinction: 119, gradeI: 30, gradeII: 4, pass: 0, total: 153, percent: "100%" },
    mbbs: [
      { sr: 1, name: "Paul Suraj Bhaktraj", college: "S.M.B.T. Medical College, Nashik" },
      { sr: 2, name: "Daspute Nikita Dnyaneshwar", college: "B.K.L. Walvalkar Rural Medical College, Ratnagiri" },
      { sr: 3, name: "Soni Manali Abhay", college: "Cooper Medical Hospital, Mumbai" },
      { sr: 4, name: "Tanwade Shrushti Vikas", college: "L.Y. Tasgavkar Medical College, Karjat, Raigad" },
      { sr: 5, name: "Laturiya Aditya Shailesh", college: "Datta Meghe Medical College, Sawangi Wardha" },
      { sr: 6, name: "Waghmare Swapnil Vishnu", college: "Russian Medical University, Russia" },
      { sr: 7, name: "Wadekar Yashraj Ratnakar", college: "Mamta Medical College, Hyderabad" },
      { sr: 8, name: "Nemivant Aditya Kedar", college: "AIIMS Medical College, Hyderabad" },
      { sr: 9, name: "Dixit Aditya Rushikesh", college: "Shankarrao Chavan Medical College, Nanded" },
      { sr: 10, name: "Pitty Disha Satish", college: "I.G.M. Medical College, Nagpur" },
    ],
  },
  {
    year: "2018-19",
    toppersTitle: "H.S.C. Result Feb 2019 — 90% & Above",
    toppers: [
      { rank: 1, name: "Patwari Sakshi Dilip", marks: 605, percentage: 93.08 },
      { rank: 2, name: "Gattani Sara Ajay", marks: 605, percentage: 93.08 },
      { rank: 3, name: "Ware Sushant Subhash", marks: 601, percentage: 92.46 },
      { rank: 4, name: "Bajaj Ayush Ramesh", marks: 601, percentage: 92.46 },
      { rank: 5, name: "Kulkarni Kaustubh Sandip", marks: 600, percentage: 92.31 },
      { rank: 6, name: "Kakade Atharv Bharat", marks: 599, percentage: 92.15 },
      { rank: 7, name: "Dahiphale Vaishnavi Vijay", marks: 594, percentage: 91.38 },
      { rank: 8, name: "Jawalekar Rushita Rajesh", marks: 593, percentage: 91.23 },
      { rank: 9, name: "Deshmukh Rutuja Mohan", marks: 592, percentage: 91.08 },
      { rank: 10, name: "Adhane Ojas Vishnu", marks: 591, percentage: 90.92 },
    ],
    result: { stream: "Science", registered: 162, appeared: 162, distinction: 114, gradeI: 47, gradeII: 1, pass: 0, total: 162, percent: "100%" },
    mbbs: [
      { sr: 1, name: "Rajput Shrushti Suresh", college: "Government Medical College, Nanded" },
      { sr: 2, name: "Thorat Sukhshri Vilas", college: "Vasantrao Pawar Medical College, Aurangabad" },
      { sr: 3, name: "Chavan Shrutika Hemant", college: "Danylo Halytsky Lviv National Medical University, Ukraine" },
      { sr: 4, name: "Huse Bharat Pandurang", college: "Indira Gandhi Government Medical College, Nagpur" },
      { sr: 5, name: "Murmure Rushikesh Ramchandra", college: "Vaisham Medical College, Solapur" },
      { sr: 6, name: "Survase Pallavi Macchindra", college: "Pravara Medical College, Loni" },
      { sr: 7, name: "Kulkarni Kaustubh Sandip", college: "Sevagram Medical College, Wardha" },
      { sr: 8, name: "Adhane Ojas Vishnu", college: "Vaisham Medical College, Solapur" },
      { sr: 9, name: "Tupe Rahul Sadashiv", college: "B.J. Sasoon Medical College, Pune" },
      { sr: 10, name: "Akolkar Pranav Nitin", college: "M.G.M. Medical College, Aurangabad" },
    ],
    bds: [
      { sr: 1, name: "Kothalikar Shruti Sudhendra", college: "C.S.M.S.H. Medical College, Aurangabad" },
      { sr: 2, name: "Aghav Mansi Navnath", college: "C.S.M.S.H. Medical College, Aurangabad" },
    ],
  },
];

export default function Achievements() {
  const [active, setActive] = useState(0);
  const current = data[active];

  return (
    <div className="overflow-hidden pt-20">
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Pride</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Academic Achievements
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Year after year, our students have earned distinction in board examinations and secured
              admissions in premier MBBS and BDS medical colleges across India. Browse the year-wise
              record of excellence below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year tabs */}
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 py-4">
            {data.map((y, i) => (
              <button
                key={y.year}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-muted text-foreground/70 hover:bg-muted/70"
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                Academic Achievements {y.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          {/* HSC result summary */}
          {current.result && (
            <motion.div key={current.year + "-result"} initial="hidden" animate="visible" variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--app-font-display)" }}>
                <GraduationCap className="inline h-7 w-7 text-primary mr-2" />
                Board Result Summary
              </h2>
              <p className="text-muted-foreground mb-6">Late Vimalbai Gangadhar Gaikwad Sec. & H.Sec. School, Gaikwad Jalgaon</p>
              <div className="bg-white rounded-2xl border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10 text-foreground">
                    <tr>
                      <th className="p-3 text-left">Stream</th>
                      <th className="p-3">Registered</th>
                      <th className="p-3">Appeared</th>
                      <th className="p-3">Distinction</th>
                      <th className="p-3">Grade I</th>
                      <th className="p-3">Grade II</th>
                      <th className="p-3">Pass</th>
                      <th className="p-3">Total Pass</th>
                      <th className="p-3 text-primary">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border text-center">
                      <td className="p-3 font-semibold text-left">{current.result.stream}</td>
                      <td className="p-3">{current.result.registered}</td>
                      <td className="p-3">{current.result.appeared}</td>
                      <td className="p-3">{current.result.distinction}</td>
                      <td className="p-3">{current.result.gradeI}</td>
                      <td className="p-3">{current.result.gradeII}</td>
                      <td className="p-3">{current.result.pass}</td>
                      <td className="p-3 font-semibold">{current.result.total}</td>
                      <td className="p-3 font-bold text-primary">{current.result.percent}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Toppers */}
          {current.toppers && (
            <motion.div key={current.year + "-toppers"} initial="hidden" animate="visible" variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2" style={{ fontFamily: "var(--app-font-display)" }}>
                <Star className="h-7 w-7 text-primary" />
                {current.toppersTitle}
              </h2>
              <p className="text-muted-foreground mb-6">Students scoring 90% and above in the H.S.C. board examination.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {current.toppers.map((t) => (
                  <div key={t.rank + t.name} className="bg-white rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {t.rank}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--app-font-display)" }}>
                          {t.percentage}%
                        </div>
                        {t.marks && <div className="text-xs text-muted-foreground">{t.marks} marks</div>}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm leading-snug">{t.name}</h3>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* MBBS */}
          {current.mbbs && (
            <motion.div key={current.year + "-mbbs"} initial="hidden" animate="visible" variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2" style={{ fontFamily: "var(--app-font-display)" }}>
                <Stethoscope className="h-7 w-7 text-primary" />
                M.B.B.S. Admissions {current.year}
              </h2>
              <p className="text-muted-foreground mb-6">Students who secured M.B.B.S. seats at top medical colleges.</p>
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-muted-foreground">
                    <tr>
                      <th className="p-3 text-left w-16">Sr.</th>
                      <th className="p-3 text-left">Student Name</th>
                      <th className="p-3 text-left">College</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.mbbs.map((m) => (
                      <tr key={m.sr} className="border-t border-border hover:bg-muted/20">
                        <td className="p-3 font-bold text-primary">{m.sr}</td>
                        <td className="p-3 font-semibold text-foreground">{m.name}</td>
                        <td className="p-3 text-muted-foreground">{m.college}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* BDS */}
          {current.bds && (
            <motion.div key={current.year + "-bds"} initial="hidden" animate="visible" variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2" style={{ fontFamily: "var(--app-font-display)" }}>
                <Award className="h-7 w-7 text-primary" />
                B.D.S. Admissions {current.year}
              </h2>
              <div className="bg-white rounded-2xl border border-border overflow-hidden mt-6">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-muted-foreground">
                    <tr>
                      <th className="p-3 text-left w-16">Sr.</th>
                      <th className="p-3 text-left">Student Name</th>
                      <th className="p-3 text-left">College</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.bds.map((m) => (
                      <tr key={m.sr} className="border-t border-border hover:bg-muted/20">
                        <td className="p-3 font-bold text-primary">{m.sr}</td>
                        <td className="p-3 font-semibold text-foreground">{m.name}</td>
                        <td className="p-3 text-muted-foreground">{m.college}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Sports highlight */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--app-font-display)" }}>
            Sports Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our athletes have consistently represented the school at taluka, district and divisional level
            tournaments — bringing home medals and recognition every academic year.
          </p>
        </div>
      </section>
    </div>
  );
}
