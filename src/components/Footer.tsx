import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const navLinks = [
  { label: "Music", path: "/music" },
  { label: "Merch", path: "/merch" },
  { label: "Videos", path: "/videos" },
  { label: "Tour", path: "/tour" },
  { label: "Info", path: "/info" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Facebook, label: "Facebook", url: "#" },
  { icon: Youtube, label: "YouTube", url: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--glass-border))]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-lg font-bold text-foreground tracking-[0.25em] uppercase"
            >
              Aura Sable
            </Link>
            <p className="text-dim text-sm mt-3 leading-relaxed max-w-xs">
              Exploring vulnerability and strength through neo-soul since 2017.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="label-tracking text-dim mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-soft text-sm hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="label-tracking text-dim mb-4">Connect</h4>
            <a
              href="mailto:management@aurasable.com"
              className="flex items-center gap-2 text-soft text-sm hover:text-foreground transition-colors mb-4"
            >
              <Mail className="w-4 h-4" />
              management@aurasable.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass-card-hover flex items-center justify-center"
                >
                  <s.icon className="w-4 h-4 text-soft" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--glass-border))] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dim text-xs">
            © {new Date().getFullYear()} Aura Sable. All rights reserved.
          </p>
          <p className="text-dim text-xs">
            Houston, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
