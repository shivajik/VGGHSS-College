import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "School Address",
    lines: ["Gaikwaad Jalgaon,", "Tq.Shevgaon, Dist.Ahmednagar,", "Maharashtra, India"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["942-265-9856", "992-154-4856", "989-056-0688", "758-802-3219"],
    links: ["tel:9422659856", "tel:9921544856", "tel:9890560688", "tel:7588023219"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["vggcollege@gmail.com"],
    links: ["mailto:vggcollege@gmail.com"],
  },
  {
    icon: Clock,
    title: "School Hours",
    lines: ["Monday – Saturday", "7:00 AM – 5:00 PM", "Closed on Sundays & Public Holidays"],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  function onSubmit(data: ContactForm) {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#212934] to-[#1a2d1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary -translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30"><MessageSquare className="h-3 w-3 mr-1" /> Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--app-font-display)" }}>
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions about admissions, courses, or school life? We are here to help. Reach out
              through any of the channels below and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--app-font-display)" }}>
                  School Contact Details
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us, call us, or write to us — we welcome your enquiries at any time during school hours.
                </p>
              </motion.div>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  className="flex gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-sm">{info.title}</div>
                    {info.lines.map((line, li) => (
                      info.links ? (
                        <a key={li} href={info.links[li]} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          {line}
                        </a>
                      ) : (
                        <span key={li} className="block text-sm text-muted-foreground">{line}</span>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3 bg-muted/30 rounded-2xl border border-border p-8"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--app-font-display)" }}>Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" data-testid="input-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" data-testid="input-phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Admission Enquiry" data-testid="input-subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message here..."
                            className="min-h-32 resize-none"
                            data-testid="input-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-full py-6 text-base" data-testid="button-submit">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center" style={{ fontFamily: "var(--app-font-display)" }}>Find Us</h2>
            <div className="rounded-2xl overflow-hidden border border-border bg-white h-72 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground mb-1">Gaikwaad Jalgaon, Tq.Shevgaon</p>
                <p className="text-sm">Dist.Ahmednagar, Maharashtra</p>
                <a
                  href="https://maps.google.com/?q=Gaikwaad+Jalgaon,Shevgaon,Ahmednagar,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-primary hover:underline text-sm font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
