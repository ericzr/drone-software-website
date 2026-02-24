import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Play, LayoutGrid, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { productsData } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  
  // Get other products for "Related Products" section
  const otherProducts = productsData.filter(p => p.id !== id);

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

        {/* Hero Section */}
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
              <button className="px-8 py-4 rounded-xl bg-[#E5C05C] text-[#0A0A0A] font-bold text-lg hover:bg-[#FFDF8A] transition-all duration-300 shadow-[0_0_20px_rgba(229,192,92,0.3)]">
                申请演示
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 text-white font-medium text-lg hover:bg-white/10 border border-white/10 transition-all duration-300">
                查看开发文档
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                 <motion.div 
                   whileHover={{ scale: 1.1, backgroundColor: "rgba(229,192,92,0.4)" }}
                   className="w-20 h-20 rounded-full bg-[#E5C05C]/20 flex items-center justify-center backdrop-blur-md border border-[#E5C05C]/40 mb-5 cursor-pointer shadow-[0_0_30px_rgba(229,192,92,0.3)]"
                 >
                    <Play className="w-8 h-8 text-[#E5C05C] ml-1 fill-current" />
                 </motion.div>
                 <span className="text-white/90 text-sm tracking-widest uppercase font-bold bg-black/60 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20">
                   Interactive GIF Demo
                 </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
        >
          {product.stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#C69A3C] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Deep Dive Content */}
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

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 p-8 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">核心技术指标</h3>
              <ul className="space-y-6">
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#E5C05C]" /> 系统可用性</span>
                  <span className="text-white font-semibold">99.999%</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 flex items-center gap-2"><Zap className="w-4 h-4 text-[#E5C05C]" /> 接口响应延迟</span>
                  <span className="text-white font-semibold">&lt; 10ms</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 flex items-center gap-2"><LayoutGrid className="w-4 h-4 text-[#E5C05C]" /> 部署方式</span>
                  <span className="text-white font-semibold">公有云 / 私有化</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 rounded-xl bg-[#E5C05C]/10 border border-[#E5C05C]/20">
                <p className="text-[#E5C05C] text-sm text-center font-medium">
                  该平台已获得多项国家级低空经济基础设施技术认证
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
    </div>
  );
}
