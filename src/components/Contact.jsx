import React, { useState } from 'react'
import { Mail, Phone, Send, Github, Linkedin, X, Sparkles, Star, MessageCircle, User, AtSign } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const { name, email, subject, message } = formData
    
    if (!name.trim()) {
      alert('Please enter your name')
      return false
    }
    
    if (!email.trim()) {
      alert('Please enter your email')
      return false
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address')
      return false
    }
    
    if (!subject.trim()) {
      alert('Please enter a subject')
      return false
    }
    
    if (!message.trim()) {
      alert('Please enter your message')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields are filled
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('')
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please set up your EmailJS credentials.')
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'junaidmollah17@gmail.com' // Your email where you want to receive messages
      }
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully! I\'ll get back to you soon.')
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      alert('Failed to send message. Please try again or contact me directly at junaidmollah17@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'junaidmollah17@gmail.com',
      link: '#',
      color: 'from-red-500 to-pink-600',
      glowColor: 'shadow-red-500/50'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7679911680',
      link: '#',
      color: 'from-green-500 to-emerald-600',
      glowColor: 'shadow-green-500/50'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/JunaidCD',
      color: 'from-gray-600 to-slate-700',
      glowColor: 'shadow-gray-600/50',
      hoverColor: 'hover:shadow-gray-500/50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/junaid-mollah-a59150319',
      color: 'from-blue-500 to-blue-600',
      glowColor: 'shadow-blue-500/50',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    {
      icon: X,
      name: 'X',
      url: 'https://x.com/JunaidMollah5',
      color: 'from-slate-800 to-black',
      glowColor: 'shadow-slate-700/50',
      hoverColor: 'hover:shadow-white/30'
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
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
                Contact Me
              </span>
            </h2>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
              Contact Me
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <MessageCircle className="w-8 h-8 text-accent-400 animate-bounce" />
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              Let's Build Something Amazing Together
            </p>
            <Star className="w-8 h-8 text-primary-400 animate-pulse" />
          </div>
          
          {/* Decorative Line */}
          <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-black mb-4 text-center">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                    Let's Start a Conversation
                  </span>
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <MessageCircle className="w-6 h-6 text-cyan-400 animate-bounce" />
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="relative glass rounded-2xl border border-white/10 backdrop-blur-xl p-6 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-purple-500/5 rounded-2xl"></div>
                <p className="relative text-lg text-slate-200 leading-relaxed font-medium">
                  🚀 <span className="text-accent-400 font-bold">Ready to innovate?</span> I'm passionate about collaborating on <span className="text-primary-400 font-semibold">cutting-edge blockchain projects</span> and <span className="text-emerald-400 font-semibold">revolutionary web solutions</span>. 
                  <br /><br />
                  💡 Whether you're looking to <span className="text-cyan-400 font-semibold">build the next big dApp</span>, need a <span className="text-purple-400 font-semibold">full-stack development partner</span>, or simply want to discuss about technology - I'm here for it!
                  <br /><br />
                  ✨ <span className="text-yellow-400 font-bold">Let's create something extraordinary together!</span>
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group relative perspective-1000 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`relative transform-gpu transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${info.glowColor} hover:shadow-2xl`}>
                    <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl p-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                      
                      <div className="relative z-10 flex items-center space-x-6">
                        <div className="relative">
                          <div className={`p-4 bg-gradient-to-br ${info.color} rounded-[1.5rem] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <info.icon className="w-8 h-8 text-white drop-shadow-lg" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-[1.5rem] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg mb-2">
                            {info.title}
                          </h4>
                          <p className="text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                            {info.value}
                          </p>
                          <div className={`h-1 bg-gradient-to-r ${info.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Connect With Me
                  </span>
                </h4>
                <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    className="group relative perspective-1000 animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`relative transform-gpu transition-all duration-700 hover:scale-125 hover:-translate-y-4 ${social.glowColor} ${social.hoverColor} hover:shadow-2xl`}>
                      <div className="relative glass rounded-[2rem] border-2 border-white/30 overflow-hidden backdrop-blur-xl p-8 group-hover:border-white/60">
                        {/* Enhanced Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-10 group-hover:opacity-25 transition-opacity duration-700`}></div>
                        
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                          background: `linear-gradient(45deg, transparent 30%, ${social.name === 'GitHub' ? 'rgba(107, 114, 128, 0.3)' : social.name === 'LinkedIn' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.3)'} 50%, transparent 70%)`,
                          filter: 'blur(1px)'
                        }}></div>
                        
                        <div className="relative z-10 text-center">
                          <div className={`inline-flex p-5 bg-gradient-to-br ${social.color} rounded-[1.5rem] shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-4`}>
                            <social.icon className="w-8 h-8 text-white drop-shadow-lg" />
                          </div>
                          <p className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
                            {social.name}
                          </p>
                          
                          {/* Decorative Line */}
                          <div className={`mt-3 mx-auto w-8 h-1 bg-gradient-to-r ${social.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="group relative perspective-1000 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative transform-gpu transition-all duration-700 hover:rotateY-3 hover:scale-105 hover:-translate-y-4">
              <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl p-10">
                {/* Form Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-10 blur-3xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full opacity-10 blur-2xl group-hover:scale-125 group-hover:opacity-15 transition-all duration-1000"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group/input">
                        <label htmlFor="name" className="flex items-center text-lg font-semibold text-slate-300 mb-3">
                          <User className="w-5 h-5 mr-2 text-primary-400" />
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate-800/50 border-2 border-white/20 rounded-[1rem] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 group-hover/input:border-white/40 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="group/input">
                        <label htmlFor="email" className="flex items-center text-lg font-semibold text-slate-300 mb-3">
                          <AtSign className="w-5 h-5 mr-2 text-accent-400" />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate-800/50 border-2 border-white/20 rounded-[1rem] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 group-hover/input:border-white/40 transition-all duration-300"
                          placeholder="yourname@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="subject" className="flex items-center text-lg font-semibold text-slate-300 mb-3">
                        <Star className="w-5 h-5 mr-2 text-purple-400" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-800/50 border-2 border-white/20 rounded-[1rem] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 group-hover/input:border-white/40 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="group/input">
                      <label htmlFor="message" className="flex items-center text-lg font-semibold text-slate-300 mb-3">
                        <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-slate-800/50 border-2 border-white/20 rounded-[1rem] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 group-hover/input:border-white/40 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, ask a question, or just say hello! I'd love to hear from you."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn relative w-full px-12 py-6 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.5rem] font-bold text-white text-xl shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Button Glow Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      <span className="relative flex items-center justify-center space-x-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-7 h-7 group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-700" />
                            <span>Send Message</span>
                            <Sparkles className="w-6 h-6 group-hover/btn:rotate-180 group-hover/btn:scale-110 transition-all duration-500" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>

                {/* Form Border Glow */}
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

export default Contact
