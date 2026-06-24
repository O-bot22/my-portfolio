'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Cpu, Waves, Plane, Users, Zap, Rocket, PocketKnife} from 'lucide-react';
import Image from 'next/image';


export default function EngineeringPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TODO: format media as an array of objects so that multiple images can be shown as an automatically rotating slideshow
  const projects = [
    {
      id: 1,
      title: 'HPRC Rover',
      category: 'UAV Systems',
      startDate: '2024-08',
      endDate: 'Present',
      paragraphs: ['As division lead, I led a team of 40 engineering students to build an autonomous rover conformant to Space Dynamics Labratory (SDL) and NASA CubeSat specifications. The rover and payload lander vehicle flew in the WPI High Power Rocketry Club\'s supersonic 5" rocket up to 19,000 ft at the 2026 ESRA International Rocket Engineering Competition alongside 142 other teams from 13 countries. As a team mentor, I will assist new members and senior executives alike in the development of a rover capable of true 3D mapping and intelligent obstacle avoidance.', 'I oversaw Preliminary and Critical Design Reviews of all hardware and software. I weekly met with the executive board, the club officers, and payload sub-team leads to track progress and deadlines in tehcnical and interpersonal issues.', 'The payload deflated its parachute upon landing, self-righted the rover, released a latch mechanism, and then deployed the rover vehicle. Onboard footage from an OpenMV RT1062 captured the launch and landing sequence. A radio module capable of transmitting live video and receiving override remote control commands over 433MHz was tested up to 1 mile in a city, but not used at the launch. Data was collected on a separate test vehicle from a ToF (Time of Flight) camera, 2D scanning LiDAR, and a Nicla Vision module for analysis and training in the coming year (2026-2027).', 'All hardware was student reasearched and developed, either as 3D prints, CNC\'ed aluminum, or externally machined SLM titanium. Motors designed for use in combat robots (similar to BattleBots) were selected for the drivetrain for their high torque and environmental toughness. For structural components, 3D printed parts used PETG-CF to withstand the 20.8G\'s experienced during launch, and crucially, heat resistance to internal rocket temperatures up to a recorded 157DEGREEEE!!!!!!!!  F'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: '/projects/IREC full team.jpg',
      mediaType: 'image'
    },
    {
      id: 2,
      title: 'ARENA Robotics',
      category: 'Product Development',
      startDate: '2025-03',
      endDate: '2026-01',
      paragraphs: ["Worked with the largest combat robotic league in the U.S. over three physical prototypes to develop a live datalogging system for use in livestreams. The project started out of a shared desire among two of my peer engineers to spread STEM education by growing the combat robotics sport.", "Was awarded a $1,500 stipend for completition of the UConn Propelus NSF I-Corps program. In those rewarding seven weeks, my team and I interviewed 21 potential customers. End results were a functional leading-edge transmitter capable of +-200G force sensing, -20F to +200F temperature sensor, and smoothed quaternion orientation tracking. Paired with a custom portable reciever with an LED display, the alpha prototype was functional, but ultimately found not to be economically viable without external support.", "Bridged tech development and user experience to deploy live combat robotics monitoring systems. Partnered with a team of engineers to build custom sensor-integrated PCBs for the nation's top combat robotics organization. Successfully navigated three design iterations driven by intensive customer discovery, learning firsthand how to deploy resilient technology under extreme, unpredictable field conditions"],
      tech: [],
      media: "/projects/ARENA Board.png",
      mediaType: 'image'
    },
    {
      id: 3,
      title: 'Vacuum Tweezers',
      category: 'Robotics',
      startDate: '2026-1',
      endDate: 'Present',
      paragraphs: ['Overview of your robotics or automation project, emphasizing innovation, technical depth, and real-world applications.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: "/projects/ToolFull.jpg",
      mediaType: 'image'
    },
    {
      id: 4,
      title: 'Firewatch',
      category: 'Robotics',
      startDate: '2021-08',
      endDate: '2024-05',
      paragraphs: ['Overview of your robotics or automation project, emphasizing innovation, technical depth, and real-world applications.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: null,
      mediaType: null
    },
    {
      id: 5,
      title: 'FRC Team',
      category: 'Robotics',
      startDate: '202',
      endDate: '202',
      paragraphs: ['Overview of your robotics or automation project, emphasizing innovation, technical depth, and real-world applications.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: null,
      mediaType: null
    },
    {
      id: 6,
      title: 'Time Tracker',
      category: 'Robotics',
      startDate: '202',
      endDate: '202',
      paragraphs: ['Sensor integration, determining most important feactures for a product launch'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: null,
      mediaType: null
    },
    {
      id: 7,
      title: 'Among Us Replica',
      category: 'Robotics',
      startDate: '202',
      endDate: '202',
      paragraphs: ['Variety of environments, independent learner'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: null,
      mediaType: null
    },
  ];

  const courses = [
    { name: 'RBE3002', code: 'CODE 101', focus: 'Key Focus Area' },
    { name: 'RBE3001', code: 'CODE 201', focus: 'Key Focus Area' },
    { name: 'RBE2002', code: 'CODE 301', focus: 'Key Focus Area' },
    { name: 'Sof Eng', code: 'CODE 401', focus: 'Key Focus Area' },
    { name: 'Course Name 5', code: 'CODE 501', focus: 'Key Focus Area' },
    { name: 'Course Name 6', code: 'CODE 601', focus: 'Key Focus Area' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="fixed w-1 h-1 bg-blue-400 rounded-full opacity-30 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/headshot.jpg" // Path relative to the public folder
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Owen Miller
            </span>
          </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                className="p-2 rounded-md bg-slate-800/50 hover:bg-slate-800/60 transition"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex gap-6">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">Courses</a>
              <a href="#hobbies" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">Hobbies</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile menu (collapsible) */}
          <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0' } bg-slate-900/90 border-t border-blue-500/10`}>
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-100 hover:text-blue-400">About</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-100 hover:text-blue-400">Projects</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-100 hover:text-blue-400">Courses</a>
              <a href="#hobbies" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-100 hover:text-blue-400">Hobbies</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-100 hover:text-blue-400">Contact</a>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl text-center space-y-8 relative z-10">
          <div className="inline-block mb-4">
            <div className="flex gap-4 text-sm text-blue-400">
              <div className="flex items-center gap-2 border border-blue-400/30 px-4 py-2 rounded-full bg-blue-400/5">
                <PocketKnife className="w-4 h-4" />
                <span>National Defense</span>
              </div>
              <div className="flex items-center gap-2 border border-blue-400/30 px-4 py-2 rounded-full bg-blue-400/5">
                <Plane className="w-4 h-4" />
                <span>UAV Systems</span>
              </div>
              <div className="flex items-center gap-2 border border-cyan-400/30 px-4 py-2 rounded-full bg-cyan-400/5">
                <Rocket className="w-4 h-4" />
                <span>Aerospace Robotics</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Engineering Innovation
            </span>
            <br />
            <span className="text-gray-200">in Autonomous Systems</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about pushing the boundaries of autonomous vehicle technology, with expertise in UAVs and marine systems. Seeking challenging opportunities where leadership meets cutting-edge innovation.
          </p>

          <div className="flex gap-4 justify-center items-center pt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              View Projects
            </button>
            <a 
                href="/resume.pdf" 
                download="Miller, Owen - Resume 2025.pdf"
                className="px-8 py-3 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-400/10 transition-all inline-block"
                >
                Download Resume
            </a>
          </div>

          <div className="flex gap-8 justify-center pt-12 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Leadership Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">Innovation Driven</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-blue-400 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <Plane className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Autonomous UAVs</h3>
              <p className="text-gray-400">Deep interest in unmanned aerial vehicle systems, focusing on autonomous navigation, control systems, and real-world applications.</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <Waves className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Marine Systems</h3>
              <p className="text-gray-400">Specialized knowledge in semi-submersible platforms and autonomous marine vehicles with cutting-edge sensor integration.</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-gray-400">Proven track record in leading technical teams, driving innovation, and delivering results in challenging environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto items-start">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="space-y-12 items-start">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative items-start bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 items-start">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <div className="text-sm text-gray-400 mt-1">{project.startDate} — {project.endDate}</div>
                    {project.paragraphs.map((words, index) => (<p key={index} className="text-gray-400 leading-relaxed">{words}</p>))}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-gray-300 border border-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="items-start relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 group-hover:border-blue-500/30 transition-all max-w-[600px] mx-auto">
                    {/* Enforces a uniform aspect-video box for the grid layout */}
                    <div className="aspect-video w-full flex items-center justify-center bg-slate-950">
                      {project.media ? (
                        project.mediaType === 'video' ? (
                          <video 
                            src={project.media} 
                            controls 
                            preload="metadata"
                            playsInline
                            className="w-full h-full object-contain" 
                            suppressHydrationWarning
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img 
                            src={project.media} 
                            alt={project.title}
                            className="w-full h-full object-contain" 
                          />
                        )
                      ) : null}
                    </div>
                    
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                  </div>

                  {/* <div className="relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 group-hover:border-blue-500/30 transition-all">
                    <div className="aspect-video flex items-center justify-center max-width:600px">
                      {project.media ? (
                        project.mediaType === 'video' ? (
                          <video 
                            src={project.media} 
                            controls 
                            preload="metadata"
                            playsInline
                            className="w-full h-full object-cover"
                            suppressHydrationWarning
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img 
                            src={project.media} 
                            alt={project.title}
                            className="w-full height:auto object-cover"
                          />
                        )
                      ) : (
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <Cpu className="w-8 h-8 text-blue-400" />
                          </div>
                          <p className="text-sm text-gray-500">Insert Project Image/Video</p>
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Relevant Coursework
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="text-blue-400 text-sm font-mono mb-2">{course.code}</div>
                <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                <p className="text-gray-400 text-sm">{course.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="relative py-24 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hobbies & Interests</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Outdoors & Photography</h3>
              <p className="text-gray-400 mb-4">I enjoy exploring the outdoors and capturing moments on hikes, coastal trips, and weekend camping. Below is a small gallery of recent photos.</p>

              <div className="grid grid-cols-3 gap-2">
                <a href="/hobbies/outdoor1.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor1.jpg" alt="Outdoors 1" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/outdoor2.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor2.jpg" alt="Outdoors 2" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/outdoor3.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor3.jpg" alt="Outdoors 3" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/outdoor4.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor4.jpg" alt="Outdoors 4" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/outdoor5.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor5.jpg" alt="Outdoors 5" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/outdoor6.jpg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/outdoor6.jpg" alt="Outdoors 6" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Music Tastes</h3>
              <p className="text-gray-400 mb-4">My listening spans indie rock, electronic, jazz, and ambient music — I enjoy artists who blend strong melody with interesting production.</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">Indie Rock</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-400/20">Electronic</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-400/20">Jazz</span>
                <span className="px-3 py-1 bg-slate-700/30 text-gray-200 text-sm rounded-full border border-slate-600">Ambient</span>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>Favorite artists: Radiohead, Tycho, Kamasi Washington, Beach House.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready for the Next Challenge
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm actively seeking opportunities where I can contribute to innovative autonomous vehicle projects and take on leadership roles in challenging technical environments.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <button  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              <a href="mailto:owenrmiller@gmail.com">owenrmiller@gmail.com</a>
            </button>
            <button className="px-8 py-3 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-400/10 transition-all">
              LinkedIn
            </button>
            <button className="px-8 py-3 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-400/10 transition-all">
            +1 (203) 997-6128
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Owen Miller. Built for the challenge.</p>
        </div>
      </footer>
    </div>
  );
}