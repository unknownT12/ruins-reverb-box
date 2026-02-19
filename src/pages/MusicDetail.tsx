import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { releases } from "@/data/mockData";
import { DetailHero } from "@/components/DetailHero";
import { PageTransition } from "@/components/PageTransition";

const MusicDetail = () => {
  const { slug } = useParams();
  const release = releases.find((r) => r.slug === slug);
  const related = releases.filter((r) => r.slug !== slug).slice(0, 3);

  if (!release) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <p className="text-foreground">Release not found.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <DetailHero
        image={release.image}
        title={release.title}
        subtitle={`${release.type} · ${release.date}`}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          to="/music"
          className="inline-flex items-center gap-2 text-dim hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Music</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-soft text-lg leading-relaxed mb-8">
                {release.description}
              </p>

              {/* Streaming */}
              <div className="mb-10">
                <h3 className="label-tracking text-dim mb-5">Listen</h3>
                <div className="space-y-2">
                  {release.platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card-hover flex items-center justify-between p-4 group"
                    >
                      <span className="text-foreground font-medium text-sm">
                        {p.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-dim group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Merch */}
              {release.merch.length > 0 && (
                <div>
                  <h3 className="label-tracking text-dim mb-5">Purchase</h3>
                  <div className="space-y-2">
                    {release.merch.map((m) => (
                      <div
                        key={m.name}
                        className="glass-card flex items-center justify-between p-4"
                      >
                        <span className="text-foreground font-medium text-sm">
                          {m.name}
                        </span>
                        <span className="text-soft font-semibold text-sm">
                          {m.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h3 className="label-tracking text-dim mb-8">More Releases</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Link to={`/music/${r.slug}`} className="group block">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="label-tracking text-dim text-[10px] mb-1">
                      {r.type} · {r.year}
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

export default MusicDetail;
