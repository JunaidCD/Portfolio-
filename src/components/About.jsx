import React from 'react'
import { Code, Palette, Zap, Heart } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Loving what I do and continuously learning'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm Junaid
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience 
                  creating digital solutions that make a difference. My journey in tech 
                  started with curiosity and has evolved into a deep love for crafting 
                  exceptional user experiences.
                </p>
                <p>
                  I specialize in modern web technologies including React, Node.js, and 
                  cloud platforms. I believe in writing clean, maintainable code and 
                  creating applications that are not just functional, but delightful to use.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-slate-400">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 floating-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
