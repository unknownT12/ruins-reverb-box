import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/mockData";
import { PageTransition } from "@/components/PageTransition";

const MerchPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <p className="label-tracking text-dim mb-3">Shop</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Merch
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link to={`/merch/${product.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/15 transition-colors duration-500" />
                  </motion.div>
                  <span className="inline-block glass-card text-dim text-[10px] font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:opacity-80 transition-opacity duration-300">
                    {product.title}
                  </h2>
                  <p className="text-dim text-sm leading-relaxed line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <p className="text-foreground font-semibold text-lg">
                    {product.price}
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

export default MerchPage;
