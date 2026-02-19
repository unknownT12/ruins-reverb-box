import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { videos } from "@/data/mockData";
import { PageTransition } from "@/components/PageTransition";

const VideosPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <p className="label-tracking text-dim mb-3">Watch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Videos
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link to={`/videos/${video.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="aspect-video rounded-lg overflow-hidden relative mb-4"
                  >
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full glass-card border border-foreground/30 flex items-center justify-center group-hover:scale-110 group-hover:border-foreground/60 transition-all duration-300">
                        <Play className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </motion.div>
                  <p className="label-tracking text-dim mb-1.5">
                    {video.type}
                  </p>
                  <h2 className="text-lg font-semibold text-foreground group-hover:opacity-80 transition-opacity duration-300">
                    {video.title}
                  </h2>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default VideosPage;
