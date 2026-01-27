import type { Content } from '@/types/content';

const content: Content = {
  headline: 'Software Engineer',
  address: 'Chisinau,\nRepublic of Moldova',
  email: 'marcel@osoian.com',
  github: {
    url: 'https://github.com/OsoianMarcel?tab=repositories',
    label: 'github.com/OsoianMarcel'
  },
  skills: [
    {
      name: 'BackEnd',
      progress: 100,
      items: [
        'Node.js, TypeScript, Golang',
        'Nest.js, Express, Socket.IO, Sequelize',
        'MySQL, Postgres, MongoDB, Redis, RabbitMQ, AWS S3'
      ]
    },
    {
      name: 'FrontEnd',
      progress: 70,
      items: [
        'React, Next.js, Vue.js',
        'HTML, CSS, TypeScript',
        'Technical SEO, Frontend optimization'
      ]
    },
    {
      name: 'DevOps',
      progress: 90,
      items: [
        'Kubernetes, ArgoCD, Docker, Helm',
        'Grafana, Prometheus, Loki',
        'DigitalOcean, Bitbucket Pipelines',
        'Ubuntu Server, Nginx'
      ]
    },
    {
      name: 'Blockchain',
      progress: 80,
      items: [
        'Ethereum Blockchain',
        'Web3, Ethers, BigNumber',
        'Solidity, Truffle',
        'MetaMask, Geth, OpenEthereum'
      ]
    }
  ],
  languages: [
    {
      name: 'Romanian',
      level: 'Native'
    },
    {
      name: 'Russian',
      level: 'Advanced'
    },
    {
      name: 'English',
      level: 'Upper-Intermediate'
    },
    {
      name: 'Spanish',
      level: 'Beginner'
    }
  ],
  description:
    'Software Engineer with over 10 years of experience building web systems and APIs. Strong background in Node.js, TypeScript, and cloud-native development using Kubernetes. Built and maintained distributed microservices, integrated third-party APIs, and designed scalable backend systems. 4 years of hands-on experience with Ethereum blockchain, smart contracts, and Web3 tools. Comfortable working across the stack and handling infrastructure when needed.',
  employmentHistory: [
    {
      position: 'Independent Study & Engineering Sabbatical',
      company: 'Self-Directed',
      periodFrom: 'Jun 2025',
      periodTo: 'Dec 2025',
      responsibilities: [
        'Took a planned career sabbatical focused on professional development and technical upskilling.',
        'Completed an in-depth study of Golang, including language internals, idiomatic patterns, concurrency models, and clean architecture principles.',
        'Studied and applied concepts from key technical literature: Effective Go, Concurrency in Go, Clean Architecture, and The Little Go Book.',
        'Designed and implemented multiple Go-based pet projects following Clean Architecture, with emphasis on maintainability, testability, and idiomatic code.',
        'Gained hands-on experience with Go concurrency patterns (goroutines, channels, worker pools, context propagation).',
        'Built and operated a home bare-metal infrastructure using Proxmox and a self-managed Kubernetes cluster.',
        'Deepened practical knowledge of container orchestration, networking, storage, and cluster operations in a real-world environment.'
      ],
      skills: [
        'Golang',
        'Clean Architecture',
        'Concurrency',
        'Kubernetes',
        'Docker',
        'Proxmox',
        'Linux',
        'Distributed Systems',
        'System Design',
        'Self-Directed Learning'
      ]
    },
    {
      position: 'Tech Lead',
      company: 'TravelBusinessClass',
      periodFrom: 'Feb 2023',
      periodTo: 'May 2025',
      responsibilities: [
        'Led the architecture and development of a high-performance flight search engine with sub-7s response times.',
        'Built horizontally scalable microservices architecture on Kubernetes, ready for high traffic loads.',
        'Introduced and led the migration to Kubernetes, replacing a monolithic system.',
        'Implemented CI/CD with ArgoCD and integrated telemetry stack (Prometheus, Loki, Grafana, Jaeger).',
        'Integrated Sabre API and other flight data providers to support parallel search and booking.',
        'Developed and documented RESTful APIs using Swagger.',
        'Managed a team of 4 developers, including mentoring and workflow organization.',
        'Conducted technical interviews for backend and DevOps roles.',
        'Collaborated with external support teams to resolve integration issues.',
        'Wrote clear technical specifications and task breakdowns for development.'
      ],
      skills: [
        'Node.js',
        'TypeScript',
        'Nest.js',
        'MongoDB',
        'Postgres',
        'Redis',
        'Kubernetes',
        'Helm',
        'Sabre API',
        'Swagger',
        'Team Leadership',
        'Prometheus',
        'Loki',
        'Grafana',
        'Jaeger',
        'ArgoCD',
        'Technical Interviewing'
      ]
    },
    {
      position: 'Full-stack Web Engineer',
      company: 'DMEX.app',
      periodFrom: 'Mar 2018',
      periodTo: 'July 2023',
      responsibilities: [
        'Architected and developed the back end of three Ethereum-based decentralized applications:\n- ethermium.com - decentralized spot exchange\n- dmex.app - decentralized margin trading platform\n- criptoleu.com - national cryptocurrency and payment system.',
        'Designed and implemented APIs, including full documentation.',
        'Built a custom order matching engine and integrated smart contracts into the back end.',
        'Managed server infrastructure: web servers, databases, Ethereum nodes.',
        'Implemented horizontal scaling, optimized Node.js performance, and integrated Prometheus + Grafana monitoring.',
        'Contributed to front-end development using Vue.js and Vuex.'
      ],
      skills: [
        'JavaScript',
        'Node.js',
        'Express',
        'Socket.IO',
        'Sequelize',
        'Solidity',
        'Web3',
        'Geth',
        'OpenEthereum',
        'Vue.js',
        'Metamask',
        'MySQL',
        'Postgres',
        'Redis',
        'RabbitMQ',
        'Consul',
        'Minio',
        'Nginx',
        'Apache2',
        'DevOps',
        'Docker',
        'Letsencrypt',
        'Prometheus',
        'Grafana'
      ]
    },
    {
      position: 'Co-Owner & Full-stack Web Engineer',
      company: 'Devify.net',
      periodFrom: 'Jun 2016',
      periodTo: 'Mar 2018',
      responsibilities: [
        'Managed company operations including hiring, project planning, and client delivery.',
        'Developed the front-end and back office for BtcXChange.ro, implementing new features and UI improvements.',
        'Continued development and server maintenance of Avigo.md.',
        'Acted as Tech Lead on multiple client projects, overseeing architecture and team development.'
      ],
      skills: [
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript',
        'DevOps',
        'Docker',
        'YouTrack'
      ]
    },
    {
      position: 'Full-stack Web Engineer',
      company: 'Avigo.md',
      periodFrom: 'Oct 2014',
      periodTo: 'Jun 2016',
      responsibilities: [
        'Served as the lead software engineer, responsible for building the initial version of Avigo.md.',
        'Developed a complete flight search engine, booking flow, and integrated payment system.',
        'Built a full-featured back office for sales tracking, reporting, and management.',
        'Created a custom library to parse booking outputs from various flight systems, streamlining the ticketing process and improving operational efficiency.'
      ],
      skills: [
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Symfony',
        'Doctrine',
        'DevOps',
        'SEO'
      ]
    },
    {
      position: 'Full-stack Developer & Hardware Engineer',
      company: 'Myvic Inc',
      periodFrom: 'Jul 2013',
      periodTo: 'Oct 2014',
      responsibilities: [
        'Developed a wholesale e-commerce platform using ExtJS (SPA), including custom features tailored to individual clients.',
        'Built and programmed a hardware device to monitor industrial machine activity.',
        'Contributed to the development of a cross-platform mobile app for real-time machine status visualization and reporting.'
      ],
      skills: [
        'JavaScript',
        'PHP',
        'MySQL',
        'Python',
        'Websocket',
        'ExtJS & Touch',
        'DevOps',
        'Raspberry PI'
      ]
    }
  ],
  educationHistory: [
    {
      position: 'Civil Law',
      company: 'Technical University of Moldova',
      periodFrom: '2009',
      periodTo: '2013',
      responsibilities: [
        'Although I pursued a degree in law, my passion for technology started at a young age. I began learning programming early on and continued developing my skills throughout university. After graduation, I decided to follow my true passion and transition into a career in software engineering.'
      ]
    }
  ]
};

export default content;
