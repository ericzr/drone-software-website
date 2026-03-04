import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Play, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { productsData } from '../data/products';

type ProductItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: Array<{ name: string; desc: string }>;
  image: string;
  reversed: boolean;
  demoVideo?: string;
};

export function Products() {
  const [previewProduct, setPreviewProduct] = React.useState<ProductItem | null>(null);
  
  // 从 productsData 构建产品列表，添加演示视频
  const products: ProductItem[] = productsData.map((product, index) => ({
    id: product.id,
    title: product.title,
    subtitle: product.subtitle,
    description: product.description,
    features: product.features,
    image: product.image,
    reversed: index % 2 === 1,
    demoVideo: index === 0 ? '/drone-software-website/mockup-video-1771917872902.mp4' :
              index === 1 ? '/drone-software-website/drone-os-demo.mp4' :
              index === 2 ? '/drone-software-website/mockup-video-1771918733097.mp4' :
              index === 3 ? '/drone-software-website/同城配送.mp4' : undefined
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewProduct(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="products" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#E5C05C]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-[#C69A3C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="text-[#E5C05C] text-sm font-bold tracking-widest uppercase">Core Ecosystem</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">核心产品矩阵</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              三大核心平台联动，构建从人才培育、空域协同到商业应用的全链路软件闭环。
            </p>
          </motion.div>
        </div>

        <div className="space-y-40">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${product.reversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image/GIF Area */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group bg-[#111111] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {/* Decorative corner accents与渐变只在无视频时显示，避免切割视频中的手机画面 */}
                  {(!('demoVideo' in product && product.demoVideo)) && (
                    <>
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#E5C05C]/50 rounded-tl-3xl z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#E5C05C]/50 rounded-br-3xl z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#E5C05C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    </>
                  )}

                  {('demoVideo' in product && product.demoVideo) ? (
                    <button
                      type="button"
                      onClick={() => setPreviewProduct(product)}
                      className="w-full h-full flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C05C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] rounded-3xl"
                      aria-label={`点击放大预览 ${product.title} 演示视频`}
                    >
                      <video
                        src={product.demoVideo}
                        poster={product.image}
                        className="w-full h-full object-contain bg-black pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden
                      />
                    </button>
                  ) : (
                    <>
                      <motion.img 
                        src={product.image} 
                        alt={product.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-black/20">
                        <motion.div 
                          whileHover={{ scale: 1.15, backgroundColor: "rgba(229,192,92,0.4)" }}
                          whileTap={{ scale: 0.9 }}
                          className="w-20 h-20 rounded-full bg-[#E5C05C]/20 flex items-center justify-center backdrop-blur-md border border-[#E5C05C]/40 mb-5 cursor-pointer shadow-[0_0_30px_rgba(229,192,92,0.3)] transition-all"
                        >
                          <Play className="w-8 h-8 text-[#E5C05C] ml-1 fill-current" />
                        </motion.div>
                        <span className="text-white/90 text-sm tracking-widest uppercase font-bold bg-black/60 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                          Software Demo
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Content Area */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h4 className="text-[#E5C05C] font-semibold text-sm md:text-base tracking-widest mb-3 uppercase flex items-center gap-2">
                    <span className="w-8 h-1 bg-[#E5C05C] rounded-full" />
                    {product.subtitle}
                  </h4>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{product.title}</h3>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {product.description}
                </p>

                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {product.features.map((feature, i) => (
                    <motion.li key={i} variants={itemVariants} className="flex items-center gap-4 group cursor-default">
                      <div className="w-8 h-8 rounded-full bg-[#E5C05C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5C05C]/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-[#E5C05C]" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-lg">{feature.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <Link to={`/product/${product.id}`}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-8 py-4 rounded-xl border-2 border-[#E5C05C]/30 text-[#E5C05C] font-bold text-lg hover:bg-[#E5C05C] hover:text-[#0A0A0A] hover:border-[#E5C05C] transition-all duration-300 shadow-[0_0_20px_rgba(229,192,92,0.1)] hover:shadow-[0_0_30px_rgba(229,192,92,0.4)] flex items-center gap-2 group"
                  >
                    深入了解
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 沉浸式视频预览弹窗 */}
      <AnimatePresence>
        {previewProduct?.demoVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setPreviewProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${previewProduct.title} 演示视频预览`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={previewProduct.demoVideo}
                src={previewProduct.demoVideo}
                poster={previewProduct.image}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <button
                type="button"
                onClick={() => setPreviewProduct(null)}
                className="absolute -top-12 right-0 p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C05C]"
                aria-label="关闭预览"
              >
                <X className="w-8 h-8" />
              </button>
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
                {previewProduct.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
