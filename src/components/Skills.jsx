import React, { useState, useEffect } from 'react'
import { Code, Zap, Palette, Database, Globe, Wrench, Sparkles, Star, Cpu, Shield } from 'lucide-react'

const Skills = ({ setCurrentPage }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const skillCategories = [
    {
      title: 'Blockchain & Web3',
      icon: Shield,
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'shadow-purple-500/50',
      skills: ['Foundry', 'Cairo', 'Solidity', 'Ethereum', 'Ethers.js', 'Web3.js']
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/50',
      skills: ['Rust', 'JavaScript', 'Python', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/50',
      skills: ['Node.js', 'Express.js', 'React.js', 'OpenCV', 'TensorFlow']
    },
    {
      title: 'Dev Tools & Platforms',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      glowColor: 'shadow-orange-500/50',
      skills: ['Git', 'GitHub Copilot', 'Cursor', 'VS Code', 'Docker', 'Vercel', 'Render', 'Netlify']
    },
    {
      title: 'UI/Styling',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      glowColor: 'shadow-pink-500/50',
      skills: ['Tailwind CSS', 'Shadcn/UI']
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - Same as Home Page */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black animate-slide-up relative z-10">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
              My Skills
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Sparkles className="w-8 h-8 text-accent-400 animate-spin" />
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              Technologies & Tools I Master
            </p>
            <Star className="w-8 h-8 text-primary-400 animate-pulse" />
          </div>
          
          {/* Decorative Line */}
          <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative perspective-1000 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* 3D Card Container */}
              <div className={`relative transform-gpu transition-all duration-700 hover:rotateY-12 hover:rotateX-6 hover:scale-105 hover:-translate-y-8 ${category.glowColor} hover:shadow-2xl`}>
                {/* Main Card */}
                <div className="relative glass rounded-3xl border border-white/20 overflow-hidden backdrop-blur-xl">
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                  
                  {/* Floating Orbs */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${category.color} rounded-full opacity-20 blur-xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${category.color} rounded-full opacity-15 blur-lg group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8">
                    {/* Enhanced Header */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="relative">
                        <div className={`p-5 bg-gradient-to-br ${category.color} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <category.icon className="w-8 h-8 text-white drop-shadow-lg" />
                          {/* Icon Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                        </div>
                        {/* Floating Ring */}
                        <div className={`absolute inset-0 border-2 border-dashed opacity-30 rounded-2xl group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000`} style={{borderColor: category.color.includes('purple') ? '#a855f7' : category.color.includes('blue') ? '#3b82f6' : category.color.includes('green') ? '#10b981' : category.color.includes('orange') ? '#f97316' : '#ec4899'}}></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <div className={`mt-2 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                    </div>

                    {/* Enhanced Skills Grid */}
                    <div className="grid grid-cols-1 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className="group/skill relative overflow-hidden"
                          style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          {/* Skill Pill */}
                          <div className={`relative px-5 py-4 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:translate-x-3 hover:-translate-y-1 cursor-pointer`}>
                            {/* Animated Background */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* Skill Content */}
                            <div className="relative flex items-center justify-between">
                              <span className="text-slate-200 font-semibold group-hover/skill:text-white transition-colors duration-300 drop-shadow-sm">
                                {skill}
                              </span>
                              
                              {/* Animated Indicator */}
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-150 group-hover/skill:rotate-180 transition-all duration-500`}></div>
                                <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-40 group-hover/skill:opacity-80 group-hover/skill:scale-125 transition-all duration-300`} style={{animationDelay: '0.1s'}}></div>
                                <div className={`w-1 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-20 group-hover/skill:opacity-60 group-hover/skill:scale-150 transition-all duration-400`} style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                            
                            {/* Skill Progress Bar */}
                            <div className="mt-2 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r ${category.color} transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-700 origin-left`}></div>
                            </div>
                            
                            {/* Floating Particles */}
                            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full animate-float`}
                                  style={{
                                    left: `${20 + i * 30}%`,
                                    top: `${20 + i * 20}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '2s'
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{
                    background: `linear-gradient(45deg, transparent 30%, ${category.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : category.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : category.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' : category.color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : 'rgba(236, 72, 153, 0.3)'} 50%, transparent 70%)`,
                    filter: 'blur(1px)'
                  }}></div>

                  {/* Holographic Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    transform: 'translateX(-100%)',
                    animation: hoveredCategory === index ? 'shimmer 2s ease-in-out infinite' : 'none'
                  }}></div>
                </div>

                {/* 3D Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 blur-xl rounded-3xl transform translate-y-4 translate-x-2 -z-10 group-hover:translate-y-8 group-hover:translate-x-4 group-hover:opacity-40 transition-all duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '25+', label: 'Technologies', icon: Code, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
            { number: '5+', label: 'Categories', icon: Database, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
            { number: '2+', label: 'Years Learning', icon: Zap, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10' },
            { number: '∞', label: 'Passion', icon: Sparkles, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative perspective-1000 animate-slide-up"
              style={{ animationDelay: `${1 + index * 0.15}s` }}
            >
              {/* 3D Card Container */}
              <div className="relative transform-gpu transition-all duration-700 hover:rotateY-12 hover:scale-110 hover:-translate-y-6">
                {/* Main Stat Card */}
                <div className={`relative glass p-8 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-xl ${stat.bgColor} hover:border-white/40 transition-all duration-500`}>
                  {/* Animated Background Orbs */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${stat.color} rounded-full opacity-20 blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                    <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full opacity-15 blur-xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Enhanced Icon */}
                    <div className="relative mx-auto mb-6 w-20 h-20">
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}></div>
                      <div className={`relative w-full h-full bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                      {/* Floating Ring */}
                      <div className={`absolute inset-0 border-2 border-dashed opacity-40 rounded-2xl group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000`} style={{borderColor: stat.color.includes('blue') ? '#3b82f6' : stat.color.includes('purple') ? '#a855f7' : stat.color.includes('orange') ? '#f97316' : '#10b981'}}></div>
                    </div>

                    {/* Enhanced Number */}
                    <div className="relative mb-4">
                      <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      {/* Number Glow */}
                      <div className={`absolute inset-0 text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300`}>
                        {stat.number}
                      </div>
                    </div>

                    {/* Enhanced Label */}
                    <div className="text-slate-300 font-semibold text-lg group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                      {stat.label}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                    </div>
                  </div>

                  {/* Holographic Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 2s ease-in-out infinite'
                  }}></div>
                </div>

                {/* 3D Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-xl rounded-3xl transform translate-y-4 translate-x-2 -z-10 group-hover:translate-y-8 group-hover:translate-x-4 group-hover:opacity-40 transition-all duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative">
          <div className="group relative perspective-1000 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            {/* 3D CTA Container */}
            <div className="relative transform-gpu transition-all duration-700 hover:rotateY-6 hover:scale-105 hover:-translate-y-4">
              {/* Main CTA Card */}
              <div className="relative glass p-12 rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl max-w-5xl mx-auto">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-10 blur-3xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full opacity-10 blur-2xl group-hover:scale-125 group-hover:opacity-15 transition-all duration-1000"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl group-hover:scale-110 transition-all duration-700"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-float"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Enhanced Title */}
                  <div className="relative mb-8">
                    <h3 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      Ready to Build Something Amazing?
                    </h3>
                    {/* Title Glow */}
                    <div className="absolute inset-0 text-4xl md:text-6xl font-black text-primary-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Ready to Build Something Amazing?
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <div className="relative mb-10">
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto group-hover:text-slate-200 transition-colors duration-300">
                      Let's collaborate and create <span className="font-semibold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">innovative blockchain solutions</span> together!
                    </p>
                    {/* Decorative Line */}
                    <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  {/* Enhanced Button */}
                  <div className="relative">
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="group/btn relative px-12 py-6 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.5rem] font-bold text-white text-xl shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                    >
                      {/* Button Glow Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Button Content */}
                      <span className="relative flex items-center justify-center space-x-3">
                        <Globe className="w-7 h-7 group-hover/btn:rotate-180 group-hover/btn:scale-125 transition-all duration-700" />
                        <span>Let's Connect</span>
                        <Sparkles className="w-6 h-6 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-500" />
                      </span>

                      {/* Button Shimmer */}
                      <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover/btn:opacity-60 transition-opacity duration-700" style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                        transform: 'translateX(-100%)',
                        animation: 'shimmer 2s ease-in-out infinite'
                      }}></div>
                    </button>

                    {/* Button Ring Effect */}
                    <div className="absolute inset-0 border-2 border-dashed border-primary-400/30 rounded-[1.5rem] opacity-0 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000 pointer-events-none"></div>
                  </div>
                </div>

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)',
                  filter: 'blur(2px)'
                }}></div>

                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
              </div>

              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-2xl rounded-[2rem] transform translate-y-6 translate-x-3 -z-10 group-hover:translate-y-10 group-hover:translate-x-6 group-hover:opacity-60 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
