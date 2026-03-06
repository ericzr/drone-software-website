import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '@/assets/f1b9da011dbec66046095dae21ffc1c35f40a927.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Intro */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logoImage} alt="大航蜂" className="h-16 w-auto rounded-xl shadow-md" />
            <p className="text-gray-400 leading-relaxed max-w-md">
              深圳云界空域科技有限公司致力于成为全球领先的无人机软件基础设施提供商。我们以深厚的技术积淀，构建低空经济的新底座，让每一次飞行更安全、更高效、更智能。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">快速链接</h4>
            <ul className="space-y-4">
              {['关于我们', '新闻动态', '开发者中心', '加入我们'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#E5C05C] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">联系合作</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#E5C05C] flex-shrink-0 mt-0.5" />
                <span>中国·深圳</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#E5C05C] flex-shrink-0" />
                <span>400-888-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#E5C05C] flex-shrink-0" />
                <span>ericzrz@163.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} 深圳云界空域科技有限公司. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-[#E5C05C] text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-gray-600 hover:text-[#E5C05C] text-sm transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
