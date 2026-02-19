import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { releases } from "@/data/mockData";
import { PageTransition } from "@/components/PageTransition";

const MusicPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <p className="label-tracking text-dim mb-3">Discography</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Music
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {releases.map((release, index) => (
              <motion.div
                key={release.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link to={`/music/${release.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative"
                  >
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/15 transition-colors duration-500" />
                  </motion.div>
                  <p className="label-tracking text-dim mb-2">
                    {release.type} · {release.year}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:opacity-80 transition-opacity duration-300">
                    {release.title}
                  </h2>
                  <p className="text-dim text-sm leading-relaxed line-clamp-2">
                    {release.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MusicPage;
