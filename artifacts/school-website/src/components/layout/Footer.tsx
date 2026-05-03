import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-[8px] border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6 bg-white p-2 rounded-xl inline-flex">
              <img
                src="https://vgghss.com/wp-content/uploads/2020/10/vgghss_logo.png"
                alt="VGGHSS Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="pr-3 text-foreground">
                <div className="font-bold text-lg leading-none" style={{ fontFamily: 'var(--app-font-display)' }}>VGGHSS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Late.Vimalbai Gangadhar Gaikwad Secondary & Higher Secondary School.
              Run by Om Shivkrupa Shikshan Prasarak Mandal trust.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About School", href: "/about" },
                { label: "Academic Courses", href: "/courses" },
                { label: "Student Achievements", href: "/achievements" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Gaikwaad Jalgaon, Tq.Shevgaon, Dist.Ahmednagar, Maharashtra</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:9422659856" className="hover:text-white transition-colors">942-265-9856</a>
                  <a href="tel:9921544856" className="hover:text-white transition-colors">992-154-4856</a>
                  <a href="tel:9890560688" className="hover:text-white transition-colors">989-056-0688</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:vggcollege@gmail.com" className="hover:text-white transition-colors">
                  vggcollege@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Our Trust</h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold text-primary mb-2">Om Shivkrupa Shikshan Prasarak Mandal</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dedicated to empowering rural youth through quality education and fostering holistic community development.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VGGHSS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
