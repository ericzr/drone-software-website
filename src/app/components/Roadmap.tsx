import React from 'react';
import { motion } from 'motion/react';

export function Roadmap() {
  const phases = [
    {
      year: "2024",
      title: "基础设施架构期",
      description: "完成核心空域调度引擎及底层通信协议的研发，实现单城10万架次无人机并发调度能力，初步构建『考题+接单』闭环验证体系。",
      status: "completed"
    },
    {
      year: "2025",
      title: "生态闭环与网格化",
      description: "全面推广『一网通飞』空域管理平台，打通全国50+主要城市低空数据网络。实现无人机同城配送平台的商业化落地与规模化试运营。",
      status: "current"
    },
    {
      year: "2026",
      title: "全场景商业化跃升",
      description: "低空经济软硬件生态深度融合，配送网络覆盖超200座城市，日均调度单量突破千万级。确立行业垄断级『基础设施』地位。",
      status: "upcoming"
    },
    {
      year: "2027+",
      title: "全球化低空网络",
      description: "依托成熟的标准化软件方案，向海外市场输出『中国低空方案』，构建全球互联的立体交通软件基座，正式跨入超级独角兽阵营。",
      status: "upcoming"
    }
  ];

  return (
    <section id="roadmap" className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E5C05C]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#E5C05C]/5 to-transparent pointer-events-none rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#E5C05C] font-semibold tracking-wider uppercase mb-4 block">Strategic Vision</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">战略发展规划</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              从底层架构到全球化生态，我们以清晰的战略路径，推动低空经济的爆发式增长。
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line with subtle glow */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E5C05C]/30 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {phases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 50 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
              >
                {/* Node marker with pulse effect */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 translate-y-[32px] md:translate-y-0 z-20 flex items-center justify-center">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-[#111111] border-2 border-[#E5C05C] shadow-[0_0_15px_rgba(229,192,92,1)]"
                    whileHover={{ scale: 1.5 }}
                  />
                  {phase.status === 'current' && (
                    <motion.div 
                      animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-8 h-8 rounded-full bg-[#E5C05C]/30 z-[-1]"
                    />
                  )}
                </div>
                
                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-16">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-8 md:p-10 rounded-2xl border ${
                      phase.status === 'current' 
                        ? 'border-[#E5C05C]/50 bg-gradient-to-br from-[#E5C05C]/10 to-transparent shadow-[0_10px_40px_rgba(229,192,92,0.15)]' 
                        : 'border-white/5 bg-[#1A1A1A]/50 hover:bg-[#222]'
                    } backdrop-blur-md relative group hover:border-[#E5C05C]/50 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(229,192,92,0.2)] cursor-pointer`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-4xl font-black tracking-tight ${phase.status === 'current' ? 'text-[#E5C05C]' : 'text-gray-600 group-hover:text-gray-400'} transition-colors`}>
                        {phase.year}
                      </span>
                      {phase.status === 'current' && (
                        <span className="px-3 py-1 rounded-full bg-[#E5C05C] text-[#0A0A0A] text-xs font-bold shadow-[0_0_10px_rgba(229,192,92,0.5)]">
                          CURRENT
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E5C05C] transition-colors">{phase.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                      {phase.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
