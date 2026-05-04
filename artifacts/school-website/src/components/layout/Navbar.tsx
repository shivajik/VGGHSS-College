import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/staff", label: "Staff" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-white border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-full p-1 shadow-sm border border-gray-100 transition-transform group-hover:scale-105">
              <img
                src="https://vgghss.com/wp-content/uploads/2020/10/vgghss_logo.png"
                alt="VGGHSS Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground" style={{ fontFamily: 'var(--app-font-display)' }}>
                VGGHSS
              </span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">
                Gaikwaad Jalgaon
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="ml-4 pl-4 border-l border-border flex items-center gap-4">
              <a href="tel:9422659856" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">942-265-9856</span>
              </a>
              <Button asChild className="rounded-full shadow-sm shadow-primary/20">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <a href="tel:9422659856" className="flex items-center gap-3 px-4 py-3 text-foreground font-medium rounded-xl hover:bg-muted">
              <Phone className="h-5 w-5 text-primary" />
              942-265-9856
            </a>
            <Button className="w-full rounded-xl py-6 text-lg">Apply Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
