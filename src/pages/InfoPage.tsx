import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import bandPhoto from "@/assets/band-photo.jpg";
import { PageTransition } from "@/components/PageTransition";

const InfoPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div>
              <p className="label-tracking text-dim mb-3">About</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Info
              </h1>
            </div>

            <div className="space-y-5">
              <p className="text-soft leading-relaxed text-lg">
                Aura Sable emerged from Houston's vibrant music scene in 2017,
                weaving neo-soul warmth with alternative R&B textures. Raised on
                a diet of Erykah Badu, Sade, and Solange, she channels
                vulnerability and quiet power into every note—creating music
                that feels like golden hour in sound form.
              </p>
              <p className="text-soft leading-relaxed text-lg">
                Her sound—characterized by lush harmonies, analog warmth, and
                introspective lyricism—has earned critical acclaim and a devoted
                following. With two studio albums, an EP, and a growing catalog
                of visual art, Aura Sable continues to explore the intersection
                of identity, ancestry, and radiance.
              </p>
            </div>

            {/* Collaborators */}
            <div>
              <h3 className="label-tracking text-dim mb-5">Collaborators</h3>
              <div className="space-y-3">
                {[
                  { name: "Aura Sable", role: "Vocals, Keys, Creative Direction" },
                  { name: "Marcus Tate", role: "Production, Synths" },
                  { name: "Nia Okafor", role: "Bass, Backing Vocals" },
                  { name: "Elijah Roots", role: "Drums, Percussion" },
                ].map((m) => (
                  <div key={m.name} className="flex items-baseline gap-3">
                    <p className="text-foreground font-medium">{m.name}</p>
                    <span className="text-dim text-sm">—</span>
                    <p className="text-dim text-sm">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="label-tracking text-dim mb-2">Contact</h3>
              <a
                href="mailto:management@aurasable.com"
                className="flex items-center gap-3 text-foreground hover:opacity-70 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">management@aurasable.com</span>
              </a>
              <a
                href="mailto:press@aurasable.com"
                className="flex items-center gap-3 text-foreground hover:opacity-70 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">press@aurasable.com</span>
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="label-tracking text-dim mb-5">Follow</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-11 h-11 rounded-full glass-card-hover flex items-center justify-center"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4 text-soft" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-28"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={bandPhoto}
                alt="Aura Sable portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default InfoPage;
