import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, MapPin, ShoppingBag, Play, Info } from "lucide-react";

const navLinks = [
  { label: "Intro", path: "/", icon: Music },
  { label: "Music", path: "/music", icon: Play },
  { label: "Tours", path: "/tour", icon: MapPin },
  { label: "Merch", path: "/merch", icon: ShoppingBag },
  { label: "Info", path: "/info", icon: Info },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHome && !scrolled ? "bg-transparent" : "nav-blur nav-solid"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
          {/* Pill navigation - centered */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-[hsl(var(--glass-border))] bg-[hsl(0_0%_0%/0.4)] backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? "bg-[hsl(var(--glass-hover))] text-foreground border border-[hsl(var(--glass-border))]"
                      : "text-dim hover:text-foreground hover:bg-[hsl(var(--glass-bg))]"
                  }`}
                >
                  {link.label}
                  <link.icon className="w-3 h-3 opacity-60" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground absolute right-6"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-3xl font-bold uppercase tracking-[0.2em] text-foreground hover:opacity-70 transition-opacity"
                >
                  <link.icon className="w-5 h-5 opacity-50" />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
