import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Header } from "@/components/Header";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect, useRef } from "react";

const mediaLinks = [
  { label: "Spotify", url: "#" },
  { label: "Apple Music", url: "#" },
  { label: "Bandcamp", url: "#" },
  { label: "SoundCloud", url: "#" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Youtube, label: "YouTube", url: "#" },
  { icon: Facebook, label: "Facebook", url: "#" },
];

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX / width - 0.5) * 2,
        y: (e.clientY / height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
      <Header />

      {/* Ken Burns hero image — slower, subtler */}
      <div className="absolute inset-0 ken-burns-slow">
        <img
          src={heroBg}
          alt="Aura Sable in golden hour light"
          className="w-full h-full object-cover object-center"
          style={{ filter: "saturate(0.7) contrast(1.05)" }}
        />
      </div>

      {/* Vignette + warm overlay */}
      <div className="absolute inset-0 hero-overlay-cinematic" />


      {/* Bottom content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-12 z-10"
      >
        {/* Bottom info clusters */}
        <div className="flex items-end justify-between gap-8">
          {/* Left: Media links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="hidden md:block"
            style={{
              transform: `translateY(${mousePos.y * -4}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <p className="text-dim text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Media</p>
            <div className="flex flex-col gap-1.5">
              {mediaLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-foreground/50 text-[11px] uppercase tracking-[0.1em] hover:text-foreground transition-colors flex items-center gap-1.5 group"
                >
                  {link.label}
                  <span className="w-0 group-hover:w-3 h-px bg-foreground/50 transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Center: Artist name + tagline */}
          <div className="flex-1 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mb-4"
            >
              <p className="text-dim text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-1">
                Neo-Soul / Alternative R&B
              </p>
              <p className="text-foreground/40 text-[10px] uppercase tracking-[0.2em]">
                Houston, Texas
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground uppercase hero-band-name"
              style={{
                letterSpacing: "0.08em",
                lineHeight: 0.85,
                transform: `translateY(${mousePos.y * -3}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              Aura
              <br />
              <span className="text-foreground/30">Sable</span>
            </motion.h1>
          </div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="hidden md:block"
            style={{
              transform: `translateY(${mousePos.y * -4}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <p className="text-dim text-[10px] uppercase tracking-[0.2em] font-semibold mb-3 text-right">Follow</p>
            <div className="flex flex-col gap-1.5 items-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-foreground/50 text-[11px] uppercase tracking-[0.1em] hover:text-foreground transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-foreground/50 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
