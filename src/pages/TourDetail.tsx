import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, DoorOpen } from "lucide-react";
import { tourDates } from "@/data/mockData";
import { PageTransition } from "@/components/PageTransition";

const TourDetail = () => {
  const { slug } = useParams();
  const event = tourDates.find((t) => t.slug === slug);
  const upcoming = tourDates.filter((t) => t.slug !== slug && t.status !== "sold-out").slice(0, 3);

  if (!event) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <p className="text-foreground">Event not found.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/tour"
            className="inline-flex items-center gap-2 text-dim hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Tour</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-7xl md:text-8xl font-bold text-foreground leading-none mb-2">
              {event.day}
            </p>
            <p className="label-tracking text-dim mb-10">
              {event.month} {event.year}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              {event.name}
            </h1>
            <p className="text-soft text-xl mb-2">{event.venue}</p>
            <p className="text-dim mb-10">{event.city}</p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-dim text-sm">
                <DoorOpen className="w-4 h-4" />
                <span>Doors: {event.doors}</span>
              </div>
              <div className="flex items-center gap-2 text-dim text-sm">
                <Clock className="w-4 h-4" />
                <span>Show: {event.show}</span>
              </div>
            </div>

            <p className="text-soft leading-relaxed text-lg mb-10">
              {event.description}
            </p>

            {event.tickets.length > 0 && (
              <div className="mb-10">
                <h3 className="label-tracking text-dim mb-5">Tickets</h3>
                <div className="space-y-2">
                  {event.tickets.map((t) => (
                    <div
                      key={t.type}
                      className="glass-card-hover flex items-center justify-between p-4 group cursor-pointer"
                    >
                      <span className="text-foreground font-medium text-sm">
                        {t.type}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-soft font-semibold text-sm">
                          {t.price}
                        </span>
                        <ExternalLink className="w-4 h-4 text-dim group-hover:text-foreground transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.status === "sold-out" && (
              <div className="status-sold-out inline-block px-6 py-3 rounded-full font-semibold">
                This show is sold out
              </div>
            )}
          </motion.div>

          {/* Upcoming shows */}
          {upcoming.length > 0 && (
            <div className="mt-24">
              <h3 className="label-tracking text-dim mb-8">More Shows</h3>
              <div className="space-y-2">
                {upcoming.map((d, i) => (
                  <motion.div
                    key={d.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <Link
                      to={`/tour/${d.slug}`}
                      className="glass-card-hover flex items-center justify-between p-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-foreground w-8">
                          {d.day}
                        </span>
                        <span className="label-tracking text-dim text-[10px]">
                          {d.month}
                        </span>
                        <span className="text-foreground text-sm font-medium">
                          {d.name}
                        </span>
                      </div>
                      <span className="text-dim text-sm hidden md:block">
                        {d.city}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default TourDetail;
