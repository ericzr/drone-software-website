import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, LayoutGrid, Zap, ShieldCheck, X } from 'lucide-react';
import React from 'react';
import { productsData } from '../data/products';

// 首页视频映射（与 Products.tsx 保持一致）
const VIDEO_MAP: Record<string, string> = {
  'platform-1': '/drone-software-website/mockup-video-1771917872902.mp4',
  'platform-drone-os': '/drone-software-website/drone-os-demo.mp4',
  'platform-2': '/drone-software-website/mockup-video-1771918733097.mp4',
  'platform-3': '/drone-software-website/同城配送.mp4',
};

export function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const otherProducts = productsData.filter(p => p.id !== id);
  const [showVideo, setShowVideo] = React.useState(false);
  const demoVideo = id ? VIDEO_MAP[id] : undefined;

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E5C05C]/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C69A3C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#E5C05C] transition-colors mb-12 group font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          返回首页
        </Link>

        {/* 模块一：简介区 Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-[#E5C05C] text-sm font-bold tracking-widest uppercase">{product.subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              {product.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="flex gap-4">
              {product.ctaButtons.map((btn, i) => {
                // Drone OS 的「申请演示」按钮跳转到演示平台
                const isDroneOsDemo = product.id === 'platform-drone-os' && i === 0;
                if (isDroneOsDemo) {
                  return (
                    <a
                      key={i}
                      href="https://ericzr.github.io/drone-os-demo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-xl bg-[#E5C05C] text-[#0A0A0A] font-bold text-lg hover:bg-[#FFDF8A] transition-all duration-300 shadow-[0_0_20px_rgba(229,192,92,0.3)] inline-block"
                    >
                      {btn}
                    </a>
                  );
                }
                return (
                  <button
                    key={i}
                    className={i === 0
                      ? "px-8 py-4 rounded-xl bg-[#E5C05C] text-[#0A0A0A] font-bold text-lg hover:bg-[#FFDF8A] transition-all duration-300 shadow-[0_0_20px_rgba(229,192,92,0.3)]"
                      : "px-8 py-4 rounded-xl bg-white/5 text-white font-medium text-lg hover:bg-white/10 border border-white/10 transition-all duration-300"
                    }
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* 视频/图片区域 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {demoVideo ? (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="w-full h-full flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C05C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] rounded-3xl"
                  aria-label={`点击放大预览 ${product.title} 演示视频`}
                >
                  <video
                    src={demoVideo}
                    className="w-full h-full object-contain bg-black pointer-events-none"
                    autoPlay muted loop playsInline aria-hidden
                  />
                </button>
              ) : (
                <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-80" />
              )}
            </div>
          </motion.div>
        </div>

        {/* 模块二：核心亮点三卡片 */}
        {product.highlights && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
          >
            {product.highlights.map((h, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-2xl bg-[#111111]/80 border border-white/5 backdrop-blur-xl hover:bg-[#1A1A1A] hover:border-[#E5C05C]/30 hover:shadow-[0_10px_30px_rgba(229,192,92,0.15)] transition-all cursor-pointer group"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#C69A3C] mb-3">
                  {h.label}
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 模块三：软件亮点说明 + 右侧规划面板 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">架构与优势</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              {product.longDescription}
            </p>
            
            <div className="space-y-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#E5C05C]/30 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#E5C05C]/10 flex items-center justify-center">
                      <LayoutGrid className="w-5 h-5 text-[#E5C05C]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧面板：产品专属规划 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 p-8 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{product.roadmap.title}</h3>
              <ul className="space-y-6">
                {product.roadmap.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#E5C05C]/10 text-[#E5C05C] text-sm font-bold whitespace-nowrap">
                        {item.phase}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 rounded-xl bg-[#E5C05C]/10 border border-[#E5C05C]/20">
                <p className="text-[#E5C05C] text-sm text-center font-medium">
                  {product.slogan}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Products Navigation */}
        <div className="border-t border-white/10 pt-20">
          <h3 className="text-2xl font-bold text-white mb-10">探索更多产品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((other) => (
              <Link 
                key={other.id} 
                to={`/product/${other.id}`}
                className="group block p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#E5C05C]/30 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C05C]/5 rounded-full blur-[50px] group-hover:bg-[#E5C05C]/10 transition-colors" />
                <div className="relative z-10">
                  <span className="text-[#E5C05C] text-xs font-bold tracking-widest uppercase mb-3 block">
                    {other.subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#E5C05C] transition-colors">
                    {other.title}
                  </h4>
                  <div className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors gap-2">
                    了解详情 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 沉浸式视频预览弹窗 */}
      {showVideo && demoVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} 演示视频预览`}
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
              key={demoVideo}
              src={demoVideo}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              autoPlay muted loop playsInline controls
            />
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C05C]"
              aria-label="关闭预览"
            >
              <X className="w-8 h-8" />
            </button>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
              {product.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
