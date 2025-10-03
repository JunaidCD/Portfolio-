import React from 'react'
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      location: 'New York, NY',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects including e-commerce platforms, management systems, and mobile applications.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 35%',
        'Improved code review process'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'React Native']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'San Francisco, CA',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Focused on creating responsive and interactive user interfaces for various startup projects. Collaborated closely with designers and backend developers.',
      achievements: [
        'Improved user engagement by 50%',
        'Implemented modern design systems',
        'Optimized loading times by 45%'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      location: 'Remote',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey building websites and learning modern web development practices. Gained experience in both frontend and backend technologies.',
      achievements: [
        'Completed 20+ website projects',
        'Learned modern development stack',
        'Received excellent performance reviews'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2017 - 2021',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated with honors.',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Club',
        'Winner of Annual Hackathon 2020'
      ]
    }
  ]

  const TimelineItem = ({ item, index, isEducation = false }) => (
    <div 
      className="relative pl-8 pb-12 last:pb-0"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-slate-950 animate-glow"></div>

      {/* Content */}
      <div className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 floating-card ml-6">
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {isEducation ? item.degree : item.title}
            </h3>
            <div className="flex items-center space-x-4 text-slate-400 mb-2">
              <span className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>{isEducation ? item.institution : item.company}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="flex items-center space-x-1 text-slate-300 font-medium mb-1">
              <Calendar className="w-4 h-4" />
              <span>{item.period}</span>
            </span>
            {!isEducation && (
              <span className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30">
                {item.type}
              </span>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-4">
          {item.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center space-x-1">
            <Award className="w-4 h-4" />
            <span>Key Achievements</span>
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="text-slate-400 text-sm flex items-start space-x-2">
                <span className="text-accent-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        {item.technologies && (
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-primary-400" />
            <span>Professional Experience</span>
          </h3>
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} item={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <Award className="w-6 h-6 text-accent-400" />
            <span>Education</span>
          </h3>
          <div className="space-y-0">
            {education.map((edu, index) => (
              <TimelineItem key={edu.id} item={edu} index={index} isEducation />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
