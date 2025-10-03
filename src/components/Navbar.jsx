import React, { useState, useEffect } from 'react'
import { Home, Code, Briefcase, Menu, X, Trophy, MessageCircle } from 'lucide-react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About me', page: 'home', icon: Home },
    { name: 'My Skills', page: 'skills', icon: Code },
    { name: 'My Projects', page: 'projects', icon: Briefcase },
    { name: 'Achievements', page: 'achievements', icon: Trophy },
    { name: 'Contact Me', page: 'contact', icon: MessageCircle },
  ]

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-3xl md:text-4xl font-black gradient-text hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            >
              My Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentPage === item.page 
                      ? 'text-white bg-white/10' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </span>
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform transition-transform duration-300 ${
                    currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass glass-hover p-2 rounded-md text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  currentPage === item.page 
                    ? 'text-white bg-white/10' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
