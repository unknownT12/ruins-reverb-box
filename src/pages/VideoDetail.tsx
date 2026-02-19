import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { videos } from "@/data/mockData";
import { DetailHero } from "@/components/DetailHero";
import { PageTransition } from "@/components/PageTransition";

const VideoDetail = () => {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);
  const related = videos.filter((v) => v.slug !== slug).slice(0, 3);

  if (!video) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <p className="text-foreground">Video not found.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <DetailHero
        image={video.image}
        title={video.title}
        subtitle={video.type}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/videos"
          className="inline-flex items-center gap-2 text-dim hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Videos</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Video placeholder */}
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary mb-10 relative flex items-center justify-center">
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-background/50" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full glass-card border border-foreground/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-dim text-xs">Video player placeholder</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-dim text-sm mb-6">
            <span>{video.duration}</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-dim))]" />
            <span>{video.date}</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-dim))]" />
            <span>Directed by {video.director}</span>
          </div>

          <p className="text-soft leading-relaxed text-lg">
            {video.description}
          </p>
        </motion.div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h3 className="label-tracking text-dim mb-8">More Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Link to={`/videos/${r.slug}`} className="group block">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3 relative">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/20" />
                    </div>
                    <p className="label-tracking text-dim text-[10px] mb-1">
                      {r.type}
                    </p>
                    <p className="text-foreground font-semibold text-sm group-hover:opacity-80 transition-opacity">
                      {r.title}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default VideoDetail;
