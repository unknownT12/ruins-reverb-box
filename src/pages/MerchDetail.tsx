import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { products } from "@/data/mockData";
import { DetailHero } from "@/components/DetailHero";
import { PageTransition } from "@/components/PageTransition";

const MerchDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <p className="text-foreground">Product not found.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <DetailHero
        image={product.image}
        title={product.title}
        subtitle={product.category}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          to="/merch"
          className="inline-flex items-center gap-2 text-dim hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Merch</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl font-bold text-foreground mb-8">
                {product.price}
              </p>

              <div className="mb-10">
                <h3 className="label-tracking text-dim mb-5">Purchase</h3>
                <div className="space-y-2">
                  {product.purchaseLinks.map((l) => (
                    <a
                      key={l.name}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card-hover flex items-center justify-between p-4 group"
                    >
                      <span className="text-foreground font-medium text-sm">
                        {l.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-soft font-semibold text-sm">
                          {l.price}
                        </span>
                        <ExternalLink className="w-4 h-4 text-dim group-hover:text-foreground transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="label-tracking text-dim mb-5">Details</h3>
                <p className="text-dim text-sm leading-relaxed">
                  {product.info}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h3 className="label-tracking text-dim mb-8">More Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Link to={`/merch/${r.slug}`} className="group block">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-foreground font-semibold text-sm group-hover:opacity-80 transition-opacity">
                      {r.title}
                    </p>
                    <p className="text-dim text-sm mt-1">{r.price}</p>
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

export default MerchDetail;
