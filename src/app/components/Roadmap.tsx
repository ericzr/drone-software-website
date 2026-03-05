import React from 'react';
import { motion } from 'motion/react';

export function Roadmap() {
  const phases = [
    {
      year: "2026 H1",
      title: "人才蓄水与行业标准确立",
      description: "将大航蜂题库+接单软件打造为低空行业储备人才入口，启动「百城计划」。与全国优秀航校机构合作，将 CAAC 培训考证服务标准化，开启全国统一招生。在市场混沌时期树立行业标杆，建立全国最大的 CAAC 持证从业者服务平台。",
      status: "current"
    },
    {
      year: "2026 H2",
      title: "B端 SaaS 矩阵落地与商业闭环",
      description: "「大航蜂 Drone OS」企业版。将平台沉淀的庞大飞手资源转化为 B 端企业的生产力，为林业、电力、测绘等行业提供「设备+人员+任务」的一站式全流程数字化管理 SaaS。实现从「人力外包」向「标准服务输出」的盈利模式跃升。",
      status: "upcoming"
    },
    {
      year: "2027 H1",
      title: "G端监管赋能与城市空域入网",
      description: "「一网统飞管理系统」，进军智慧城市基础设施建设。在核心试点城市配合政府与空管委，打通动态空域申请、防碰撞预警与实时航迹追踪。从「企业工具」升级为「城市低空大脑」，彻底确立行业不可替代的生态占位。",
      status: "upcoming"
    },
    {
      year: "2027 H2",
      title: "重构基础设施与开启分布式物流",
      description: "基于已建成的海量飞手库、成熟的 OS 调度系统及合规的空域监管网络，全面启动「闪电飞」低空配送项目。发布消费级「智能阳台停机坪」，利用去中心化网络（P2P）彻底打通末端交付最后一米，实现同城万物 15 分钟极速达，完成低空经济全生态大闭环。",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-[#E5C05C] text-sm font-bold tracking-widest uppercase">Strategic Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">战略发展规划</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              从底层软件基础设施到行业应用生态，我们希望通过软件应用端作为润滑剂推动低空行业爆发增长。
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
                          当前阶段
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
