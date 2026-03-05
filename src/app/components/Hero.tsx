import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  // 蜂窝网格：尖顶六边形，与背景完全一致
  // 背景网格：宽60px，高103.92px，交错排列（奇数行向右偏移30px）
  // SVG 视口：1920x1080，使用固定像素坐标与 CSS 背景对齐
  
  const toPath = (points: number[][]) =>
    points.map((p, i) => (i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`)).join(" ");

  // 尖顶六边形顶点计算函数
  // 六边形中心在 (baseX, baseY)，顶点按顺时针排列
  // 与 SVG pattern 完全对齐
  const hexVertices = (col: number, row: number) => {
    // 交错排列：奇数行向右偏移30px
    const xOffset = row % 2 === 1 ? 30 : 0;
    // 第一个六边形中心在 (30, 34.64)，因为六边形顶点在 y=0
    const baseX = 30 + 60 * col + xOffset;
    // 相邻行的中心垂直距离 = 51.96px（不是 103.92）
    const baseY = 34.64 + 51.96 * row;
    
    // 尖顶六边形的6个顶点（顺时针）：[顶, 右上, 右下, 底, 左下, 左上]
    // 从顶到底的高度 = 69.28px
    // 宽度 = 60px, 半宽 = 30px
    // 顶点到中心的垂直距离 = 34.64px
    return [
      [baseX, baseY - 34.64],        // 0: 顶
      [baseX + 30, baseY - 17.32],   // 1: 右上
      [baseX + 30, baseY + 17.32],   // 2: 右下
      [baseX, baseY + 34.64],        // 3: 底
      [baseX - 30, baseY + 17.32],   // 4: 左下
      [baseX - 30, baseY - 17.32],   // 5: 左上
    ];
  };

  // 辅助函数：找到从一个六边形到另一个六边形的边缘路径
  const findEdgePath = (fromCol: number, fromRow: number, toCol: number, toRow: number): number[][] => {
    const fromV = hexVertices(fromCol, fromRow);
    const toV = hexVertices(toCol, toRow);
    const path: number[][] = [];
    
    // 检查是否是水平相邻（同一行）
    if (fromRow === toRow && Math.abs(fromCol - toCol) === 1) {
      if (toCol > fromCol) {
        // 向右：右上是共享点
        path.push(fromV[1]); // 右上（共享）
      } else {
        // 向左：左上是共享点
        path.push(fromV[5]); // 左上（共享）
      }
      return path;
    }
    
    // 检查是否是对角相邻
    if (Math.abs(fromRow - toRow) === 1) {
      // 偶数行的六边形
      if (fromRow % 2 === 0) {
        // 右下邻居：(col, row+1)
        if (toCol === fromCol && toRow === fromRow + 1) {
          path.push(fromV[2]); // 右下
          path.push(fromV[3]); // 底（共享点）
          return path;
        }
        // 左下邻居：(col-1, row+1)
        if (toCol === fromCol - 1 && toRow === fromRow + 1) {
          path.push(fromV[4]); // 左下
          path.push(fromV[3]); // 底
          return path;
        }
      } else {
        // 奇数行的六边形
        // 右下邻居：(col+1, row+1)
        if (toCol === fromCol + 1 && toRow === fromRow + 1) {
          path.push(fromV[2]); // 右下
          path.push(fromV[3]); // 底
          return path;
        }
        // 左下邻居：(col, row+1)
        if (toCol === fromCol && toRow === fromRow + 1) {
          path.push(fromV[4]); // 左下
          path.push(fromV[3]); // 底
          return path;
        }
      }
    }
    
    // 如果不是直接相邻，返回空路径（需要手动处理）
    return path;
  };

  // 路径1：水平路径，严格沿同一行的六边形边缘
  const path1Points: number[][] = [];
  const row1 = 3;
  for (let col = 0; col <= 30; col++) {
    const v = hexVertices(col, row1);
    if (col === 0) {
      path1Points.push(v[5]); // 左上
      path1Points.push(v[0]); // 顶
      path1Points.push(v[1]); // 右上
    } else {
      // 从上一个六边形到当前，共享右上/左上
      path1Points.push(v[0]); // 顶
      path1Points.push(v[1]); // 右上
    }
  }
  const path1D = toPath(path1Points);

  // 路径2：对角线路径，从左上到右下，只向右和向右下移动，不折返
  const path2Points: number[][] = [];
  let col2 = 2;
  let row2 = 1;
  
  for (let step = 0; step <= 25; step++) {
    const v = hexVertices(col2, row2);
    
    if (step === 0) {
      path2Points.push(v[5]); // 起点：左上
      path2Points.push(v[0]); // 顶
    } else {
      // 只添加顶点，不重复添加共享点
      path2Points.push(v[0]); // 顶
    }
    
    // 决定下一步移动方向
    if (step % 3 === 2) {
      // 每3步向右下移动一次
      // 添加当前六边形的右下边
      path2Points.push(v[1]); // 右上
      path2Points.push(v[2]); // 右下
      
      // 计算下一个六边形位置（向右下）
      if (row2 % 2 === 0) {
        // 偶数行，右下邻居是 (col, row+1)
        row2++;
      } else {
        // 奇数行，右下邻居是 (col+1, row+1)
        col2++;
        row2++;
      }
    } else {
      // 向右移动
      path2Points.push(v[1]); // 右上
      col2++;
    }
  }
  const path2D = toPath(path2Points);

  // 路径3：水平路径，从右到左（反向）
  const path3Points: number[][] = [];
  const row3 = 7;
  for (let col = 25; col >= 0; col--) {
    const v = hexVertices(col, row3);
    if (col === 25) {
      path3Points.push(v[1]); // 起点：右上
      path3Points.push(v[0]); // 顶
      path3Points.push(v[5]); // 左上
    } else {
      // 从右向左移动
      path3Points.push(v[0]); // 顶
      path3Points.push(v[5]); // 左上
    }
  }
  const path3D = toPath(path3Points);

  const path4Points: number[][] = [];
  const row4 = 10;
  for (let col = 0; col <= 25; col++) {
    const v = hexVertices(col, row4);
    if (col === 0) {
      path4Points.push(v[5]);
      path4Points.push(v[0]);
      path4Points.push(v[1]);
    } else {
      path4Points.push(v[0]);
      path4Points.push(v[1]);
    }
  }
  const path4D = toPath(path4Points);

  // 新增：垂直路径 - 从下到上，反向移动
  const verticalPathPoints: number[][] = [];
  const verticalStartCol = 15;
  
  for (let row = 20; row >= 0; row--) {
    // 根据奇偶行调整列，保持视觉上的垂直对齐
    const col = row % 2 === 0 ? verticalStartCol : verticalStartCol - 1;
    const v = hexVertices(col, row);
    
    if (row === 20) {
      verticalPathPoints.push(v[3]); // 起点：底
    } else {
      // 只添加底点，通过共享的顶/底连接
      verticalPathPoints.push(v[3]); // 底
    }
    
    // 添加向上的边
    if (row > 0) {
      verticalPathPoints.push(v[4]); // 左下
      verticalPathPoints.push(v[0]); // 顶
    }
  }
  const verticalPathD = toPath(verticalPathPoints);

  // 新增：斜向路径 - 从右下到左上，反向移动
  const diagonalPathPoints: number[][] = [];
  let diagCol = 25;
  let diagRow = 12;
  
  for (let step = 0; step <= 22; step++) {
    const v = hexVertices(diagCol, diagRow);
    
    if (step === 0) {
      diagonalPathPoints.push(v[2]); // 起点：右下
      diagonalPathPoints.push(v[3]); // 底
    } else {
      diagonalPathPoints.push(v[3]); // 底
    }
    
    // 交替向左和向左上移动
    if (step % 2 === 0) {
      // 向左移动
      diagonalPathPoints.push(v[4]); // 左下
      diagCol--;
    } else {
      // 向左上移动
      diagonalPathPoints.push(v[4]); // 左下
      diagonalPathPoints.push(v[5]); // 左上
      
      if (diagRow % 2 === 0) {
        // 偶数行，左上邻居是 (col-1, row-1)
        diagCol--;
        diagRow--;
      } else {
        // 奇数行，左上邻居是 (col, row-1)
        diagRow--;
      }
    }
  }
  const diagonalPathD = toPath(diagonalPathPoints);

  // 发光球体路径：不同方向的移动
  // 发光球体1：从左到右
  const glowPath1Points: number[][] = [];
  const glowRow1 = 4;
  for (let col = -2; col <= 32; col++) {
    const v = hexVertices(col, glowRow1);
    if (col === -2) {
      glowPath1Points.push(v[5]);
      glowPath1Points.push(v[0]);
      glowPath1Points.push(v[1]);
    } else {
      glowPath1Points.push(v[0]);
      glowPath1Points.push(v[1]);
    }
  }
  const glowPath1D = toPath(glowPath1Points);

  // 发光球体2：从右到左
  const glowPath2Points: number[][] = [];
  const glowRow2 = 8;
  for (let col = 32; col >= -2; col--) {
    const v = hexVertices(col, glowRow2);
    if (col === 32) {
      glowPath2Points.push(v[1]);
      glowPath2Points.push(v[0]);
      glowPath2Points.push(v[5]);
    } else {
      glowPath2Points.push(v[0]);
      glowPath2Points.push(v[5]);
    }
  }
  const glowPath2D = toPath(glowPath2Points);

  // 发光球体3：从左到右
  const glowPath3Points: number[][] = [];
  const glowRow3 = 12;
  for (let col = -2; col <= 32; col++) {
    const v = hexVertices(col, glowRow3);
    if (col === -2) {
      glowPath3Points.push(v[5]);
      glowPath3Points.push(v[0]);
      glowPath3Points.push(v[1]);
    } else {
      glowPath3Points.push(v[0]);
      glowPath3Points.push(v[1]);
    }
  }
  const glowPath3D = toPath(glowPath3Points);

  // 发光球体4：从右到左
  const glowPath4Points: number[][] = [];
  const glowRow4 = 15;
  for (let col = 32; col >= -2; col--) {
    const v = hexVertices(col, glowRow4);
    if (col === 32) {
      glowPath4Points.push(v[1]);
      glowPath4Points.push(v[0]);
      glowPath4Points.push(v[5]);
    } else {
      glowPath4Points.push(v[0]);
      glowPath4Points.push(v[5]);
    }
  }
  const glowPath4D = toPath(glowPath4Points);

  return (
    <section
      id="vision"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* 统一的背景层：背景网格 + 动画效果 - 共享同一 SVG 坐标系 */}
      <div className="absolute inset-0 z-0">
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#050505] z-0" />

        {/* 统一的 SVG 画布：背景网格和动画层使用相同的固定坐标系 */}
        <svg
          className="absolute inset-0 w-full h-full z-10"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <defs>
            {/* 蜂窝网格 Pattern - 尖顶六边形，包含交错的两行 */}
            <pattern id="hexPattern" width="60" height="103.92" patternUnits="userSpaceOnUse">
              {/* 第一行（偶数行）：六边形顶点在 y=0 */}
              <path 
                d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" 
                fill="none" 
                stroke="#E5C05C" 
                strokeWidth="1" 
                strokeOpacity="0.3"
              />
              {/* 第二行（奇数行）：向右偏移30px，向下偏移51.96px */}
              <path 
                d="M60 51.96 L90 69.28 L90 103.92 L60 121.24 L30 103.92 L30 69.28 Z" 
                fill="none" 
                stroke="#E5C05C" 
                strokeWidth="1" 
                strokeOpacity="0.3"
              />
            </pattern>

            {/* 发光球体的模糊滤镜 */}
            <filter id="glowBlur1" x="-200%" y="-200%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="120" />
            </filter>
            <filter id="glowBlur2" x="-200%" y="-200%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="150" />
            </filter>
            <filter id="glowBlur3" x="-200%" y="-200%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="150" />
            </filter>
            <filter id="glowBlur4" x="-200%" y="-200%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="180" />
            </filter>
            
            {/* 动画线的渐变 */}
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5C05C" stopOpacity="0" />
              <stop offset="100%" stopColor="#E5C05C" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="trailGradientWhite" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* 背景蜂窝网格层 - 固定在 SVG 坐标系中 */}
          <g opacity="0.4">
            <rect width="1920" height="1080" fill="url(#hexPattern)" />
          </g>

          {/* 动画层 - 与背景网格共享坐标系 */}
          <g className="pointer-events-none">
            {/* 发光球体1：金色，波浪形路径（单程） */}
            <circle r="300" fill="#E5C05C" fillOpacity="0.15" filter="url(#glowBlur1)" style={{ mixBlendMode: 'screen' }}>
              <animateMotion dur="22s" repeatCount="indefinite" path={glowPath1D} />
            </circle>

            {/* 发光球体2：深金色，蛇形路径（单程） */}
            <circle r="350" fill="#C69A3C" fillOpacity="0.1" filter="url(#glowBlur2)" style={{ mixBlendMode: 'screen' }}>
              <animateMotion dur="28s" repeatCount="indefinite" path={glowPath2D} />
            </circle>

            {/* 发光球体3：浅金色，对角线路径（单程） */}
            <circle r="300" fill="#E5C05C" fillOpacity="0.05" filter="url(#glowBlur3)">
              <animateMotion dur="26s" repeatCount="indefinite" path={glowPath3D} />
            </circle>

            {/* 发光球体4：深金色，对角线路径（单程） */}
            <circle r="400" fill="#C69A3C" fillOpacity="0.05" filter="url(#glowBlur4)">
              <animateMotion dur="32s" repeatCount="indefinite" path={glowPath4D} />
            </circle>

            {/* 路径1：沿蜂窝一排水平飞行（单程） */}
            <motion.path
              d={path1D}
              fill="none"
              stroke="url(#trailGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
            />
            <circle r="2" fill="#E5C05C" filter="drop-shadow(0 0 3px #E5C05C)">
              <animateMotion dur="8s" repeatCount="indefinite" path={path1D} />
            </circle>

            {/* 路径2：沿蜂窝垂直移动（单程） */}
            <motion.path
              d={path2D}
              fill="none"
              stroke="url(#trailGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1, repeatDelay: 0 }}
            />
            <circle r="2" fill="#E5C05C" filter="drop-shadow(0 0 3px #E5C05C)">
              <animateMotion dur="10s" repeatCount="indefinite" begin="1s" path={path2D} />
            </circle>

            {/* 路径3：沿蜂窝斜向穿越（单程） */}
            <motion.path
              d={path3D}
              fill="none"
              stroke="url(#trailGradientWhite)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 0.5, repeatDelay: 0 }}
            />
            <circle r="2" fill="#FFFFFF" filter="drop-shadow(0 0 2px #FFFFFF)">
              <animateMotion dur="9s" repeatCount="indefinite" begin="0.5s" path={path3D} />
            </circle>

            {/* 路径4：沿蜂窝对角线（单程） */}
            <motion.path
              d={path4D}
              fill="none"
              stroke="#C69A3C"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 0.7, 0.7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 0 }}
            />
            <circle r="2" fill="#C69A3C" filter="drop-shadow(0 0 3px #C69A3C)">
              <animateMotion dur="7s" repeatCount="indefinite" begin="2s" path={path4D} />
            </circle>
          </g>
        </svg>

        {/* Vignette mask to fade out the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_80%)] z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="max-w-3xl pt-10">
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
                低空基建平台
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
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

            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              大航蜂（飞行之家）致力于为全国无人机网络提供坚实的软件地基。从空域管理到同城配送，我们以顶尖的技术力量，驱动未来飞行生态的每一次跃升。
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-[#E5C05C] text-[#0A0A0A] font-semibold text-base md:text-lg transition-all duration-300 flex items-center gap-2 shadow-[0_0_18px_rgba(229,192,92,0.35)] hover:shadow-[0_0_32px_rgba(229,192,92,0.55)] group"
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
                className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-white/5 text-white font-medium text-base md:text-lg transition-all border border-white/10 backdrop-blur-md hover:text-[#E5C05C]"
              >
                查看发展蓝图
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-24"
          >
            {[
              {
                icon: ShieldCheck,
                title: "人才与合规底座",
                desc: "构建全国最大的低空人才库。标准化CAAC培训体系，从题库到执照，从模拟到接单，重塑低空人力资源供应链。",
              },
              {
                icon: Zap,
                title: "政企数字化引擎",
                desc: "赋能全行业自动化运行。一体化 Drone OS 与城市级「一网统飞」平台，打破信息孤岛，实现海量无人机的高效调度与安全监管。",
              },
              {
                icon: Globe2,
                title: "分布式低空物流",
                desc: "开启 P2P 极速配送新纪元。革命性的「闪电飞」配送网络与智能阳台停机坪，打造覆盖全城的去中心化、低成本空中共享物流网。",
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
