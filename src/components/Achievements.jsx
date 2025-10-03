import React from 'react'
import { Trophy, Award, Users, BookOpen, Code, Mic, Star, ExternalLink, Sparkles } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: '2× Winner – Inter-College Business Idea Competitions',
      description: 'Secured first place in multiple inter-college business idea competitions, demonstrating entrepreneurial skills and innovative thinking.',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      glowColor: 'shadow-yellow-500/50',
      category: 'Competition'
    },
    {
      title: '6× Hackathon Participant – Web3, prototyping projects',
      description: 'Actively participated in 6 hackathons focusing on Web3 technologies and rapid prototyping, building innovative blockchain solutions.',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      glowColor: 'shadow-blue-500/50',
      category: 'Development'
    },
    {
      title: '2× Debate Competitor – Public speaking events',
      description: 'Competed in debate competitions, showcasing strong communication skills and ability to articulate complex technical concepts.',
      icon: Mic,
      color: 'from-purple-500 to-violet-600',
      glowColor: 'shadow-purple-500/50',
      category: 'Communication'
    },
    {
      title: 'NSPE Member (2025–2027)',
      description: 'Active member of the National Society of Professional Engineers, committed to professional development and engineering excellence.',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      glowColor: 'shadow-emerald-500/50',
      category: 'Professional'
    },
    {
      title: 'PDH Course Completed – Reserve Studies & Community Associations (Feb 2025)',
      description: 'Successfully completed Professional Development Hours course in Reserve Studies & Community Associations, enhancing project management skills.',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      glowColor: 'shadow-orange-500/50',
      category: 'Education'
    },
    {
      title: 'Coding Fest Participant – Smart Coder 2.23 & 2.24 (intra-college events)',
      description: 'Participated in intra-college coding festivals, demonstrating programming proficiency and competitive coding skills.',
      icon: Star,
      color: 'from-pink-500 to-rose-600',
      glowColor: 'shadow-pink-500/50',
      category: 'Programming'
    },
    {
      title: 'GDG BPPIMT Core Marketing Member (2025–2026)',
      description: 'Serving as a core marketing member of Google Developer Groups at BPPIMT, promoting tech events and community engagement.',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'shadow-cyan-500/50',
      category: 'Leadership'
    }
  ]

  return (
    <section id="achievements" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - Same as Other Pages */}
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
                Achievements
              </span>
            </h2>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
              Achievements
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Trophy className="w-8 h-8 text-accent-400 animate-bounce" />
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              & Certifications
            </p>
            <Award className="w-8 h-8 text-primary-400 animate-pulse" />
          </div>
          
          {/* Decorative Line */}
          <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Achievements Heading */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h3 className="text-5xl md:text-7xl font-black animate-slide-up relative z-10">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
                My Achievements
              </span>
            </h3>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-indigo-500/30 blur-sm animate-pulse">
              My Achievements
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full animate-pulse"></div>
            <Star className="w-6 h-6 text-purple-400 animate-spin" />
            <p className="text-xl text-slate-300 font-semibold">
              Excellence in Innovation & Leadership
            </p>
            <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          {/* Enhanced Decorative Elements */}
          <div className="mt-8 relative">
            <div className="mx-auto w-48 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-white/50 to-transparent rounded-full blur-sm animate-shimmer"></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group relative perspective-1000 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 3D Achievement Card Container */}
              <div className={`relative transform-gpu transition-all duration-700 hover:rotateY-3 hover:scale-105 hover:-translate-y-4 ${achievement.glowColor} hover:shadow-2xl`}>
                {/* Main Achievement Card */}
                <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl">
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                  
                  {/* Floating Orbs */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${achievement.color} rounded-full opacity-20 blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                    <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full opacity-15 blur-xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8">
                    {/* Achievement Header */}
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="relative">
                        <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-[1.5rem] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <achievement.icon className="w-8 h-8 text-white drop-shadow-lg" />
                          {/* Icon Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-[1.5rem] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg mb-3">
                          {achievement.title}
                        </h4>
                        <div className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                    </div>

                    {/* Achievement Description */}
                    <div className="mb-4">
                      <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Border Glow */}
                  <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{
                    background: `linear-gradient(45deg, transparent 30%, ${achievement.color.includes('yellow') ? 'rgba(245, 158, 11, 0.3)' : achievement.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : achievement.color.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : achievement.color.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : achievement.color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : achievement.color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(6, 182, 212, 0.3)'} 50%, transparent 70%)`,
                    filter: 'blur(1px)'
                  }}></div>

                  {/* Holographic Effect */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 2s ease-in-out infinite'
                  }}></div>
                </div>

                {/* 3D Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20 blur-2xl rounded-[2rem] transform translate-y-4 translate-x-2 -z-10 group-hover:translate-y-6 group-hover:translate-x-4 group-hover:opacity-40 transition-all duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Access All Button */}
        <div className="text-center">
          <div className="group relative perspective-1000 animate-slide-up inline-block" style={{ animationDelay: '1.5s' }}>
            {/* 3D Button Container */}
            <div className="relative transform-gpu transition-all duration-700 hover:rotateY-6 hover:scale-105 hover:-translate-y-4">
              {/* Main Button Card */}
              <div className="relative glass p-8 rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl max-w-2xl mx-auto">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-10 blur-3xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full opacity-10 blur-2xl group-hover:scale-125 group-hover:opacity-15 transition-all duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h4 className="text-3xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                    Want to See More?
                  </h4>
                  <p className="text-xl text-slate-300 mb-6 group-hover:text-slate-200 transition-colors duration-300">
                    Access all certificates, awards, and detailed documentation
                  </p>
                  
                  {/* Active Button */}
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI?usp=drive_link', '_blank')}
                    className="group/btn relative px-12 py-6 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.5rem] font-bold text-white text-xl shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                  >
                    {/* Button Glow Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Button Content */}
                    <span className="relative flex items-center justify-center space-x-3">
                      <ExternalLink className="w-7 h-7 group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-700" />
                      <span>Access All Documents</span>
                      <Sparkles className="w-6 h-6 group-hover/btn:rotate-180 group-hover/btn:scale-110 transition-all duration-500" />
                    </span>
                  </button>
                </div>

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)',
                  filter: 'blur(2px)'
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

export default Achievements
