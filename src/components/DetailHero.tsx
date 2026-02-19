import { motion } from "framer-motion";

interface DetailHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export function DetailHero({ image, title, subtitle }: DetailHeroProps) {
  return (
    <div className="detail-hero">
      <motion.img
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="max-w-7xl w-full mx-auto px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle && (
              <p className="label-tracking text-dim mb-3">{subtitle}</p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground hero-text-glow">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
