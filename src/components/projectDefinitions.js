export const projectDefinitions = [
    {
      id: 1,
      title: 'Lunar Rover',
      category: 'UAV Systems',
      startDate: '2024-08',
      endDate: 'Present',
      paragraphs: ['As division lead, I led a team of 40 engineering students to build an autonomous rover conformant to Space Dynamics Labratory (SDL) and NASA CubeSat specifications. The rover and payload lander vehicle flew in the WPI High Power Rocketry Club\'s supersonic 5" rocket up to 19,000 ft at the 2026 ESRA International Rocket Engineering Competition alongside 142 other teams from 13 countries. As a team mentor, I will assist new members and senior executives alike in the development of a rover capable of true 3D mapping and intelligent obstacle avoidance.', 'I oversaw Preliminary and Critical Design Reviews of all hardware and software. I weekly met with the executive board, the club officers, and payload sub-team leads to track progress and deadlines in tehcnical and interpersonal issues.', 'The payload deflated its parachute upon landing, self-righted the rover, released a latch mechanism, and then deployed the rover vehicle. Onboard footage from an OpenMV RT1062 captured the launch and landing sequence. A radio module capable of transmitting live video and receiving override remote control commands over 433MHz was tested up to 1 mile in a city, but not used at the launch. Data was collected on a separate test vehicle from a ToF (Time of Flight) camera, 2D scanning LiDAR, and a Nicla Vision module for analysis and training in the coming year (2026-2027).', 'All hardware was student reasearched and developed, either as 3D prints, CNC\'ed aluminum, or externally machined SLM titanium. Motors designed for use in combat robots (similar to BattleBots) were selected for the drivetrain for their high torque and environmental toughness. For structural components, 3D printed parts used PETG-CF to withstand the 20.8G\'s experienced during launch, and crucially, heat resistance to internal rocket temperatures up to a recorded 157°F'],
      tech: [],
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
      title: 'Vacuum Tweezers',
      category: 'Robotics',
      startDate: '2026-1',
      endDate: 'Present',
      paragraphs: ['Cofounded a direct to consumer robotics startup (ARENA Robotics LLC) to develop a vacuum tweezer system for use in electronics assembly. The system is designed to be a low-cost, high-precision alternative to traditional pick-and-place machines, with the goal of making electronics assembly more accessible to hobbyists and small businesses.', 'Led the design and development of the vacuum tweezer system, including the mechanical design, control system, and user manual. Conducted extensive testing and iteration to ensure the system met performance and reliability requirements. Sourced 25 parts across 7 suppliers, including custom machined components, to build the first functional prototype. Implemented safety features to prevent damage to delicate components during operation.', 'Generated a 30 step instruction guide with CAD renderings and photographs to assist users in assembling and operating the vacuum tweezer system. The guide includes detailed instructions for each step, as well as troubleshooting tips and safety precautions.'],
      tech: [],
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
      id: 3,
      title: 'Mapping Energy Poverty',
      category: 'Humanitarian Engineering',
      startDate: '2026-01',
      endDate: '2026-05',
      paragraphs: ['For fifteen weeks in early 2026, I worked with a team of four other WPI students to map energy poverty in rural Spain. Our main deliverable was a website with an interactive map used to present our findings. The project was sponsored by the WPI Global Projects Program and was conducted in collaboration with the Escuela Superior de Ingeniería at the Universidad de Cadíz. I worked with local community leaders, government officials, department scholars, and residents to collect data on energy usage, access to electricity, and the impact of energy poverty on daily life. The project involved conducting surveys and street interviews with residents in rural communities, as well as analyzing data from government reports and academic studies.', 'The project resulted in a comprehensive report that identified key areas of energy poverty in rural Spain and provided recommendations for improving access to electricity and reducing energy costs. The report was presented to local government officials and community leaders. The project also resulted in a website with an interactive map that allows users to explore the data and findings from the project. The website was designed to be user-friendly and accessible to a wide audience, including policymakers, researchers, and the general public.', 'As the technical lead for the website, I expanded my knowledge of web development and data visualization. I learned how to use leaflet, agentic code development, and interdisciplinary collaboration methods.'],
      tech: [],
      media: [
        {
          src: '/projects/Spain IQP Team.jpeg',
          type: 'image',
          alt: 'IQP Team'
        },
        {
          src: '/projects/Spain Classroom.png',
          type: 'image',
          alt: 'IQP group presenting to a local highschool'
        },
        {
          src: '/projects/Spain Community Leader Talk.png',
          type: 'image',
          alt: 'IQP group meeting with government social workers'
        },
        {
          src: '/projects/Spain Interview.png',
          type: 'image',
          alt: 'IQP group meeting with a local energy consultant'
        }
      ]
    },
    {
      id: 4,
      title: 'Combat Datalogger',
      category: 'Product Development',
      startDate: '2025-03',
      endDate: '2026-01',
      paragraphs: ["Worked with the largest combat robotic league in the U.S. over three physical prototypes to develop a live datalogging system for use in livestreams. The project started out of a shared desire among two of my peer engineers to spread STEM education by growing the combat robotics sport. The datalogger was developed under ARENA Robotics LLC before the company pivoted to the vacuum tweezers.", "Was awarded a $1,500 stipend for completition of the UConn Propelus NSF I-Corps program. In those rewarding seven weeks, my team and I interviewed 21 potential customers. End results were a functional leading-edge transmitter capable of +-200G force sensing, -20°F to +200°F temperature sensor, and smoothed quaternion orientation tracking. Paired with a custom portable reciever with an LED display, the alpha prototype was functional, but ultimately found not to be economically viable without external support.", "Bridged tech development and user experience to deploy live combat robotics monitoring systems. Partnered with a team of engineers to build custom sensor-integrated PCBs for the nation's top combat robotics organization. Successfully navigated three design iterations driven by intensive customer discovery, learning firsthand how to deploy resilient technology under extreme, unpredictable field conditions"],
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
          src: '/projects/Datalogging dashboard.png',
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
      id: 5,
      title: 'Firefly Sentry',
      category: 'Robotics',
      startDate: '2021-08',
      endDate: '2024-05',
      paragraphs: ['Long running research project to apply robotics to wildfire detection and supression. Starting as an independent study class in high school, continuing through the 2023 WPI Ignite Innovation pitch challenge where the project was awarded $1,000 in seed funding.', 'The project went through four aircraft prototypes where I learned about CNC machining, 3D printing, and composite layup. The final prototype in 2023 was flight-capable, but determined to be too aerodynamically ineffecient to carry the necessary sensors and fire suppression equipment. Managing a two year project as a high school student with a budget of $400 taught me how to prioritize tasks, keep myself inspired and on track, and break down objectives into minimum possible requirements.','At WPI, my peer, Logan Trexler, and I worked with Curtis Carlson (retired CEO of Stanford Research Institute International), canadian drone company Stinton Aerial Services (regularly works with canadian wildfire management), Doctors James Urban and Albert Simeoni of the WPI Fire Protection Engineering department, and Dr. Carlo Pinciroli of the WPI Robotics Engineering department. Logan and I conducted a literature review of wildfire detection and suppression methods, and developed a new approach to wildland urban interface (WUI) fire detection and suppression using a redundant swarm network of tethered drones and ROVs. Presented on the need, benefit, advantages, and comeptitors to the approach. Within the nine week Ignite Innovation program, we examined a case study of the 2016 Fort McMurray wildfire in Alberta, Canada where 4,000 homes were rendered uninhabitable. We connected with the US wildfire fighting community, in talks with retired head of Cal Fire and local Massachusettss wildfire fighter Monica Nouveau.', 'Although wildfire supression costs totaled $3.5 billion in 2022, the project was put on hold due to its complex logistics and high initial costs. The project is currently in a dormant state, but I am still extremely interested in pursuing it in the future. To me, the project represents applying robotics to one of the most demanding envrionements on earth for the benefit of society.'],
      tech: [],
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
          src: '/projects/Firefly Sentry Stats.png',
          type: 'image',
          alt: 'Firefly Sentry project image'
        },
        {
          src: '/projects/fire drone sketch.png',
          type: 'image',
          alt: 'Firefly Sentry project concept image'
        },
        {
          src: '/projects/All Foam Firewatch.jpeg',
          type: 'image',
          alt: 'Firefly Sentry drone prototype image'
        }
      ]
    },
    {
      id: 6,
      title: 'FRC Team',
      category: 'Robotics',
      startDate: '2022-03',
      endDate: '2023-05',
      paragraphs: ['As the founder of FRC team 9216, I formed and led a team of 20 high school students to design, build, and program a robot for the FIRST Robotics Competition (FRC). The team competed in the 2023 Waterbury Regional Competition, and the Hartford District Competition, where we won the Rookie of the Year award. I mentored students in mechanical design, electrical systems, and programming, and helped them develop skills in teamwork, problem-solving, and project management.', 'As one of my most rewarding roles, I made strong friendships with great engineers. I loved the level of owenship each team member was able to hold over the project. Since we had little advisor oversight or assistance from other teams, we found it incredibly exciting that every problem we were solving was novel to us.', 'In addition to competing in FRC, we built robotic displays for a local church. The displays were used to demonstrate the capabilities of robotics and inspire young students to pursue STEM education.', 'My favorite aspect of working on the FRC team was how many hats I got to wear. From having zoom calls with the superintendent of the district to holding team elections to reflashing the main controller at 3am, I covered tasks in every discipline. Experiencing this variety firsthand inspired me to pursue robotics, where I could capitalize on my love for the integration of diverse engineering components'],
      tech: ['Team 9216'],
      media: [
        {
          src: '/projects/FRC Robot Team Picture.JPEG',
          type: 'image',
          alt: 'FRC Team photo at Waterbury regional competition'
        },
        {
          src: '/projects/FRC Team Award.jpeg',
          type: 'image',
          alt: 'FRC Team award photo with Rookie of the Year award'
        },
        {
          src: '/projects/FRC Robot Cafeteria.jpeg',
          type: 'image',
          alt: 'FRC robot demo during a lunch period'
        },
        {
          src: '/projects/FRC Robot 3am.jpeg',
          type: 'image',
          alt: 'FRC robot being tested'
        }
      ]
    },
  ];