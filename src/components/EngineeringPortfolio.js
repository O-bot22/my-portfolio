'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronRight, Cpu, Waves, Plane, Users, Zap, Rocket, PocketKnife} from 'lucide-react';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/next"
import { robotCollage } from './robotCollageData';


export default function EngineeringPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlides, setActiveSlides] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isCollageOpen, setIsCollageOpen] = useState(false);
  const copyTimerRef = useRef(null);

  const SLIDESHOW_INVERVAL = 5000; // in ms

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Lunar Rover',
      category: 'UAV Systems',
      startDate: '2024-08',
      endDate: 'Present',
      paragraphs: ['As division lead, I led a team of 40 engineering students to build an autonomous rover conformant to Space Dynamics Labratory (SDL) and NASA CubeSat specifications. The rover and payload lander vehicle flew in the WPI High Power Rocketry Club\'s supersonic 5" rocket up to 19,000 ft at the 2026 ESRA International Rocket Engineering Competition alongside 142 other teams from 13 countries. As a team mentor, I will assist new members and senior executives alike in the development of a rover capable of true 3D mapping and intelligent obstacle avoidance.', 'I oversaw Preliminary and Critical Design Reviews of all hardware and software. I weekly met with the executive board, the club officers, and payload sub-team leads to track progress and deadlines in tehcnical and interpersonal issues.', 'The payload deflated its parachute upon landing, self-righted the rover, released a latch mechanism, and then deployed the rover vehicle. Onboard footage from an OpenMV RT1062 captured the launch and landing sequence. A radio module capable of transmitting live video and receiving override remote control commands over 433MHz was tested up to 1 mile in a city, but not used at the launch. Data was collected on a separate test vehicle from a ToF (Time of Flight) camera, 2D scanning LiDAR, and a Nicla Vision module for analysis and training in the coming year (2026-2027).', 'All hardware was student reasearched and developed, either as 3D prints, CNC\'ed aluminum, or externally machined SLM titanium. Motors designed for use in combat robots (similar to BattleBots) were selected for the drivetrain for their high torque and environmental toughness. For structural components, 3D printed parts used PETG-CF to withstand the 20.8G\'s experienced during launch, and crucially, heat resistance to internal rocket temperatures up to a recorded 157°F'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: [
        {
          src: '/projects/IREC full team.jpg',
          type: 'image',
          alt: 'Full team photo from the IREC rover project'
        },
        {
          src: '/projects/Rover CAD.png',
          type: 'image',
          alt: 'CAD rendering of rover'
        },
        {
          src: '/projects/Rover Deployed.png',
          type: 'image',
          alt: 'Payload exiting lander and driving around'
        },
        {
          src: '/projects/Rover hotel floor.jpeg',
          type: 'image',
          alt: 'Payload self-righted'
        },
        {
          src: '/projects/Rover sand test.jpeg',
          type: 'image',
          alt: 'Payload driving in sand'
        }
      ]
    },
    {
      id: 2,
      title: 'ARENA Robotics',
      category: 'Product Development',
      startDate: '2025-03',
      endDate: '2026-01',
      paragraphs: ["Worked with the largest combat robotic league in the U.S. over three physical prototypes to develop a live datalogging system for use in livestreams. The project started out of a shared desire among two of my peer engineers to spread STEM education by growing the combat robotics sport.", "Was awarded a $1,500 stipend for completition of the UConn Propelus NSF I-Corps program. In those rewarding seven weeks, my team and I interviewed 21 potential customers. End results were a functional leading-edge transmitter capable of +-200G force sensing, -20°F to +200°F temperature sensor, and smoothed quaternion orientation tracking. Paired with a custom portable reciever with an LED display, the alpha prototype was functional, but ultimately found not to be economically viable without external support.", "Bridged tech development and user experience to deploy live combat robotics monitoring systems. Partnered with a team of engineers to build custom sensor-integrated PCBs for the nation's top combat robotics organization. Successfully navigated three design iterations driven by intensive customer discovery, learning firsthand how to deploy resilient technology under extreme, unpredictable field conditions"],
      tech: [],
      media: [
        {
          src: '/projects/ARENA Board.png',
          type: 'image',
          alt: 'ARENA Robotics datalogging system board'
        },
        {
          src: '/projects/AI datalogging at combat robotics.png',
          type: 'image',
          alt: 'ARENA Robotics datalogging system in action at a combat robotics event'
        },
        {
          src: '/projects/datalogging dashboard.png',
          type: 'image',
          alt: 'ARENA Robotics datalogging dashboard'
        },
        {
          src: '/projects/ARENA team.jpeg',
          type: 'image',
          alt: 'ARENA Robotics team photo'
        }
      ]
    },
    {
      id: 3,
      title: 'Vacuum Tweezers',
      category: 'Robotics',
      startDate: '2026-1',
      endDate: 'Present',
      paragraphs: ['Cofounded a direct to consumer robotics startup to develop a vacuum tweezer system for use in electronics assembly. The system is designed to be a low-cost, high-precision alternative to traditional pick-and-place machines, with the goal of making electronics assembly more accessible to hobbyists and small businesses.', 'Led the design and development of the vacuum tweezer system, including the mechanical design, control system, and user manual. Conducted extensive testing and iteration to ensure the system met performance and reliability requirements. Sourced 25 parts across 7 suppliers, including custom machined components, to build the first functional prototype. Implemented safety features to prevent damage to delicate components during operation.', 'Generated a 30 step instruction guide with CAD renderings and photographs to assist users in assembling and operating the vacuum tweezer system. The guide includes detailed instructions for each step, as well as troubleshooting tips and safety precautions.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: [
        {
          src: '/projects/ToolFull transparent bg.png',
          type: 'image',
          alt: 'Vacuum tweezers project full tool image'
        },
        {
          src: '/projects/No Background Closeup Pic.png',
          type: 'image',
          alt: 'Vacuum tweezers project close-up image'
        },
        {
          src: '/projects/Cover off picture.png',
          type: 'image',
          alt: 'Vacuum tweezers project cover off image'
        }
      ]
    },
    {
      id: 4,
      title: 'Firefly Sentry',
      category: 'Robotics',
      startDate: '2021-08',
      endDate: '2024-05',
      paragraphs: ['Overview of your robotics or automation project, emphasizing innovation, technical depth, and real-world applications.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: [
        {
          src: '/projects/Firefly Sentry System.png',
          type: 'image',
          alt: 'Firefly Sentry project image'
        },
        {
          src: '/projects/Firefly Sentry Bot.png',
          type: 'image',
          alt: 'Firefly Sentry project image'
        }
      ]
    },
    {
      id: 5,
      title: 'FRC Team',
      category: 'Robotics',
      startDate: '202',
      endDate: '202',
      paragraphs: ['Overview of your robotics or automation project, emphasizing innovation, technical depth, and real-world applications.'],
      tech: ['Technology 1', 'Technology 2', 'Technology 3'],
      media: []
    },
    // {
    //   id: 6,
    //   title: 'Time Tracker',
    //   category: 'Robotics',
    //   startDate: '202',
    //   endDate: '202',
    //   paragraphs: ['Sensor integration, determining most important feactures for a product launch'],
    //   tech: ['Technology 1', 'Technology 2', 'Technology 3'],
    //   media: null,
    //   mediaType: null
    // },
    // {
    //   id: 7,
    //   title: 'Among Us Replica',
    //   category: 'Robotics',
    //   startDate: '202',
    //   endDate: '202',
    //   paragraphs: ['Variety of environments, independent learner'],
    //   tech: ['Technology 1', 'Technology 2', 'Technology 3'],
    //   media: null,
    //   mediaType: null
    // },
  ], []);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlides((prevSlides) => {
        const nextSlides = { ...prevSlides };
        projects.forEach((project) => {
          if (Array.isArray(project.media) && project.media.length > 0) {
            const currentIndex = prevSlides[project.id] ?? 0;
            nextSlides[project.id] = (currentIndex + 1) % project.media.length;
          }
        });
        return nextSlides;
      });
    }, SLIDESHOW_INVERVAL);

    return () => clearInterval(intervalId);
  }, [projects]);

  const changeSlide = (projectId, delta) => {
    setActiveSlides((prevSlides) => {
      const project = projects.find((project) => project.id === projectId);
      if (!project?.media?.length) {
        return prevSlides;
      }
      const currentIndex = prevSlides[projectId] ?? 0;
      return {
        ...prevSlides,
        [projectId]: (currentIndex + delta + project.media.length) % project.media.length,
      };
    });
  };

  const copyEmail = async (email) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };


  useEffect(() => {
    return () => clearTimeout(copyTimerRef.current);
  }, []);

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
              <div className="flex items-center gap-2 border border-blue-400/30 px-4 py-2 rounded-full bg-blue-400/5">
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
                    <div className="aspect-video w-full flex items-center justify-center bg-slate-950 relative">
                      {Array.isArray(project.media) && project.media.length > 0 ? (
                        (() => {
                          const activeIndex = activeSlides[project.id] ?? 0;
                          const activeMedia = project.media[activeIndex];
                          return activeMedia?.type === 'video' ? (
                            <video 
                              src={activeMedia.src} 
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
                              src={activeMedia.src} 
                              alt={activeMedia.alt ?? project.title}
                              className="w-full h-full object-contain" 
                            />
                          );
                        })()
                      ) : null}

                      {Array.isArray(project.media) && project.media.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => changeSlide(project.id, -1)}
                            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-800/80 p-2 text-slate-100 hover:bg-slate-700/90 transition"
                            aria-label="Previous slide"
                          >
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </button>
                          <button
                            type="button"
                            onClick={() => changeSlide(project.id, 1)}
                            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-800/80 p-2 text-slate-100 hover:bg-slate-700/90 transition"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                            <span className="bg-slate-950/90 px-3 py-1 rounded-full border border-slate-700/80">
                              {`Slide ${(activeSlides[project.id] ?? 0) + 1} / ${project.media.length}`}
                            </span>
                            <div className="flex gap-2">
                              {project.media.map((_, dotIndex) => (
                                <span
                                  key={dotIndex}
                                  className={`h-2 w-2 rounded-full ${dotIndex === (activeSlides[project.id] ?? 0) ? 'bg-blue-400' : 'bg-slate-600/80'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </>
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

      {/* Robot Collage Section */}
      {/* <section id="robot-collage" className="relative py-16 px-6 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_25%),rgba(15,23,42,0.96)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Robot Collage
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              A quick visual showcase of robots, prototypes, and build highlights that are worth seeing even without a full write-up.
            </p>
            <button
              type="button"
              aria-expanded={isCollageOpen}
              onClick={() => setIsCollageOpen(!isCollageOpen)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/80 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800/90"
            >
              {isCollageOpen ? 'Hide collage' : 'Show collage'}
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-500 ease-out ${isCollageOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
              {robotCollage.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/80 shadow-black/20 hover:border-blue-400/50 transition-all">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

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
                <a href="/hobbies/Owen Skiing Switzerland.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Owen Skiing Switzerland.jpeg" alt="Outdoors 1" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/Owen and Dad sailing.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Owen and Dad sailing.jpeg" alt="Outdoors 2" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/Owen Fishing On Boat.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Owen Fishing On Boat.jpeg" alt="Outdoors 3" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/Owen Geroge Kunaal Skiing.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Owen Geroge Kunaal Skiing.jpeg" alt="Outdoors 4" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/Owen on beach with sandwich.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Owen on beach with sandwich.jpeg" alt="Outdoors 5" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
                <a href="/hobbies/Costa Rica Volcano Family.jpeg" target="_blank" rel="noreferrer">
                  <img src="/hobbies/Costa Rica Volcano Family.jpeg" alt="Outdoors 6" className="w-full h-24 object-cover rounded-md border border-slate-700" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Music Tastes</h3>
              <p className="text-gray-400 mb-4">I love classic rock, grunge, and house music, learning about each in middle school, high school, and college repsectively (lol). Avant garde music also attracts me like Jimi Hendrix, The Velvet Underground, and hyperpop. I love concerts so shoot me a text if you've got something on the horizon.</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">Classic Rock</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-400/20">Hyperpop</span>
                <span className="px-3 py-1 bg-green-700/30 text-green-200 text-sm rounded-full border border-green-600">Acoustic Folk</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-400/20">Margaritaville</span>
                <span className="px-3 py-1 bg-yellow-700/30 text-yellow-200 text-sm rounded-full border border-yellow-600">Recession Pop</span>
                <span className="px-3 py-1 bg-pink-700/30 text-pink-200 text-sm rounded-full border border-pink-600">House</span>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>Favorite artists: Red Hot Chili Peppers, Billy Joel, Fred again.., The 502's</p>
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
            <button
              type="button"
              aria-label="Copy email address to clipboard"
              onClick={() => copyEmail('owenrmiller@gmail.com')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all transform ${copiedEmail ? 'bg-emerald-500/90 text-slate-950' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105'}`}
            >
              {copiedEmail ? 'Copied to clipboard!' : 'owenrmiller@gmail.com'}
            </button>
            <a
              href="https://www.linkedin.com/in/owen-miller-68a47a201/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-400/10 transition-all"
            >
              LinkedIn
            </a>
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

      {/* Vercel Analytics */}
      <Analytics/>
    </div>
  );
}