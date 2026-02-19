import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { tourDates } from "@/data/mockData";
import { PageTransition } from "@/components/PageTransition";

const TourPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <p className="label-tracking text-dim mb-3">On the Road</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Tour
            </h1>
          </motion.div>

          <div className="space-y-3">
            {tourDates.map((date, index) => (
              <motion.div
                key={date.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link
                  to={`/tour/${date.slug}`}
                  className={`glass-card-hover flex flex-col md:flex-row md:items-center md:justify-between p-6 group ${
                    date.status === "sold-out" ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <p className="text-3xl font-bold text-foreground leading-none">
                      {date.day}
                    </p>
                    <p className="label-tracking text-dim mt-1">
                      {date.month} {date.year}
                    </p>
                  </div>

                  <div className="flex-grow mb-4 md:mb-0">
                    <p className="label-tracking text-dim mb-2">
                      {date.city}
                    </p>
                    <p className="text-xl font-semibold text-foreground mb-1">
                      {date.name}
                    </p>
                    <p className="text-soft text-sm">{date.venue}</p>
                  </div>

                  <div className="flex-shrink-0">
                    {date.status === "available" && (
                      <span className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full">
                        Tickets
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                    {date.status === "sold-out" && (
                      <span className="status-sold-out px-5 py-2.5 rounded-full font-semibold text-sm inline-block">
                        Sold Out
                      </span>
                    )}
                    {date.status === "presale" && (
                      <span className="status-presale px-5 py-2.5 rounded-full font-semibold text-sm inline-block">
                        Presale
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TourPage;
