import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  // Grid constants for path calculation
  // dx = 30, dy = 17.32
  // Valid moves:
  // 1. Angled: dx=30, dy=17.32
  // 2. Vertical: dx=0, dy=34.64 (approx 2*17.32)

  return (
    <section
      id="vision"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Dynamic Animated Abstract Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#050505] z-0" />

        {/* Floating Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 150, -50, 0], y: [0, -100, 50, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E5C05C]/5 rounded-full blur-[150px] z-10 pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -200, 50, 0],
            y: [0, 150, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#C69A3C]/5 rounded-full blur-[180px] z-10 pointer-events-none"
        />

        {/* Honeycomb Grid Pattern - Double Layer for Perfect Interlocking */}
        <div
          className="absolute inset-0 z-10 opacity-[0.4]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='103.92' viewBox='0 0 60 103.92' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 17.32 L60 34.64 L60 69.28 L30 86.6 L0 69.28 L0 34.64 Z' fill='none' stroke='%23E5C05C' stroke-width='1' stroke-opacity='0.3'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg width='60' height='103.92' viewBox='0 0 60 103.92' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 17.32 L60 34.64 L60 69.28 L30 86.6 L0 69.28 L0 34.64 Z' fill='none' stroke='%23E5C05C' stroke-width='1' stroke-opacity='0.3'/%3E%3C/svg%3E")
            `,
            backgroundPosition: "0px 0px, 30px 51.96px",
            backgroundSize: "60px 103.92px",
          }}
        />

        {/* Drone Flight Paths - Strictly Aligned to Grid Coordinates */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <svg
            className="w-full h-full min-w-[1200px] min-h-[1200px]"
            viewBox="-600 -600 1200 1200"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient
                id="trailGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#E5C05C"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="#E5C05C"
                  stopOpacity="0.8"
                />
              </linearGradient>
              <linearGradient
                id="trailGradientWhite"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#FFFFFF"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="#FFFFFF"
                  stopOpacity="0.6"
                />
              </linearGradient>
            </defs>

            {/* Path 1: Horizontal Weaver (Top) */}
            {/* Steps of 30x, 17.32y */}
            <motion.path
              d="M-600 -363.72 L-570 -381.04 L-540 -363.72 L-540 -329.08 L-510 -311.76 L-480 -329.08 L-450 -311.76 L-420 -329.08 L-390 -311.76 L-360 -329.08 L-330 -311.76"
              fill="none"
              stroke="url(#trailGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              r="3"
              fill="#E5C05C"
              filter="drop-shadow(0 0 8px #E5C05C)"
            >
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M-600 -363.72 L-570 -381.04 L-540 -363.72 L-540 -329.08 L-510 -311.76 L-480 -329.08 L-450 -311.76 L-420 -329.08 L-390 -311.76 L-360 -329.08 L-330 -311.76"
              />
            </motion.circle>

            {/* Path 2: Vertical Patroller (Left) */}
            {/* Moves: Vert (34.64), Angled (30, 17.32) */}
            <motion.path
              d="M-300 -103.92 L-300 -69.28 L-270 -51.96 L-240 -69.28 L-240 -34.64 L-240 0 L-270 17.32 L-300 0 L-330 17.32 L-330 51.96"
              fill="none"
              stroke="url(#trailGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
            <motion.circle
              r="3"
              fill="#E5C05C"
              filter="drop-shadow(0 0 8px #E5C05C)"
            >
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                begin="1s"
                path="M-300 -103.92 L-300 -69.28 L-270 -51.96 L-240 -69.28 L-240 -34.64 L-240 0 L-270 17.32 L-300 0 L-330 17.32 L-330 51.96"
              />
            </motion.circle>

            {/* Path 3: Wide Zig-Zag (Right) */}
            <motion.path
              d="M300 259.8 L330 242.48 L360 259.8 L390 242.48 L390 207.84 L420 190.52 L450 207.84 L480 190.52 L480 155.88 L510 138.56"
              fill="none"
              stroke="#E5C05C"
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
            <motion.circle
              r="2"
              fill="#FFFFFF"
              filter="drop-shadow(0 0 5px #FFFFFF)"
            >
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                begin="0.5s"
                path="M300 259.8 L330 242.48 L360 259.8 L390 242.48 L390 207.84 L420 190.52 L450 207.84 L480 190.52 L480 155.88 L510 138.56"
              />
            </motion.circle>

            {/* Path 4: Central Drop (Gold) */}
            {/* Vertical drop with hex adjustments */}
            <motion.path
              d="M30 -519.6 L30 -484.96 L0 -467.64 L0 -433.0 L30 -415.68 L30 -381.04 L60 -363.72 L60 -329.08 L30 -311.76"
              fill="none"
              stroke="#C69A3C"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1], opacity: [1, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
            <motion.circle
              r="3"
              fill="#C69A3C"
              filter="drop-shadow(0 0 8px #C69A3C)"
            >
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                begin="2s"
                path="M30 -519.6 L30 -484.96 L0 -467.64 L0 -433.0 L30 -415.68 L30 -381.04 L60 -363.72 L60 -329.08 L30 -311.76"
              />
            </motion.circle>

            {/* Path 5: Rising Diagonal (White) */}
            <motion.path
              d="M-540 415.68 L-510 398.36 L-480 415.68 L-450 398.36 L-420 415.68 L-390 398.36 L-360 415.68 L-330 398.36"
              fill="none"
              stroke="url(#trailGradientWhite)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <motion.circle
              r="2"
              fill="#FFFFFF"
              filter="drop-shadow(0 0 5px #FFFFFF)"
            >
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin="1.5s"
                path="M-540 415.68 L-510 398.36 L-480 415.68 L-450 398.36 L-420 415.68 L-390 398.36 L-360 415.68 L-330 398.36"
              />
            </motion.circle>

            {/* Path 6: Complex Loop (Bottom Right) */}
            <motion.path
              d="M240 0 L270 17.32 L300 0 L330 17.32 L360 0 L390 17.32 L390 51.96 L360 69.28 L330 51.96"
              fill="none"
              stroke="#E5C05C"
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 3,
              }}
            />
            <motion.circle r="2" fill="#E5C05C">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                begin="3s"
                path="M240 0 L270 17.32 L300 0 L330 17.32 L360 0 L390 17.32 L390 51.96 L360 69.28 L330 51.96"
              />
            </motion.circle>
          </svg>
        </div>

        {/* Vignette mask to fade out the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_80%)] z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C05C]/10 border border-[#E5C05C]/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(229,192,92,0.1)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E5C05C] animate-pulse shadow-[0_0_10px_rgba(229,192,92,1)]" />
              <span className="text-[#E5C05C] text-sm font-bold tracking-widest uppercase">
                独角兽级基础设施
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              构建低空经济的 <br />
              <motion.span
                initial={{ backgroundPosition: "200% center" }}
                animate={{ backgroundPosition: "0% center" }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] via-[#FFDF8A] to-[#C69A3C] bg-[length:200%_auto]"
              >
                新一代基础设施
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              大黄蜂（飞行之家）致力于为全球无人机网络提供坚实的软件地基。从空域管理到同城配送，我们以顶尖的技术力量，驱动未来飞行生态的每一次跃升。
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-[#E5C05C] text-[#0A0A0A] font-bold text-lg transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(229,192,92,0.4)] hover:shadow-[0_0_40px_rgba(229,192,92,0.6)] group"
              >
                探索产品生态
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.a>
              <motion.a
                href="#roadmap"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(229,192,92,0.1)",
                  borderColor: "rgba(229,192,92,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 text-white font-medium text-lg transition-all border border-white/10 backdrop-blur-md hover:text-[#E5C05C]"
              >
                查看发展蓝图
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            {[
              {
                icon: ShieldCheck,
                title: "金融级安全",
                desc: "军工级系统架构保障飞行任务",
              },
              {
                icon: Zap,
                title: "高并发调度",
                desc: "毫秒响应百万架次并发调度",
              },
              {
                icon: Globe2,
                title: "全域数字化",
                desc: "打破信息孤岛实现一网统管",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.03 }}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-[#111111]/80 border border-white/5 backdrop-blur-xl transition-colors hover:bg-[#1A1A1A] hover:border-[#E5C05C]/30 hover:shadow-[0_10px_30px_rgba(229,192,92,0.15)] cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5C05C]/10 flex items-center justify-center group-hover:bg-[#E5C05C]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#E5C05C]" />
                </div>
                <h3 className="text-white font-semibold text-lg mt-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}