export const projectDefinitions = [
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
        },
        {
          src: '/projects/All Foam Firewatch.jpeg',
          type: 'image',
          alt: 'Firefly Sentry drone prototype image'
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
  ];