export const profile = {
  name: 'Ajay Kumar Y V',
  role: 'Full Stack Developer',
  email: 'ajaykumaryv.engineer@gmail.com',
  phone: '+91-8217386861',
  linkedin: 'https://linkedin.com/in/ajaytech',
  github: 'https://github.com/AJAY-KUMAR-YV'
}

export const metrics = [
  { value: 10, suffix: 'M+', label: 'wallet users served' },
  { value: 2, suffix: 'B+', label: 'transactions / year platform' },
  { value: 200, prefix: '<', suffix: 'ms', label: 'p95 API latency' },
  { value: 99.95, suffix: '%', label: 'uptime', decimals: 2 },
  { value: 40, suffix: '%', label: 'p95 latency cut via Redis + SQL tuning' }
]

export const scan = [
  ['Role', 'Senior Engineer, Full Stack @ Comviva'],
  ['Experience', '3+ years in FinTech and enterprise payments'],
  ['Frontend', 'React, Angular, TypeScript: reusable components, forms, dashboards'],
  ['Backend', 'Java, Spring Boot, microservices, Kafka, Redis'],
  ['Also ships', 'Node.js + PostgreSQL + Stripe (freelance)'],
  ['Education', 'B.Tech, KL University, CGPA 8.76 / 10']
]

export const pipeline = [
  {
    id: 'client',
    label: 'React / Angular',
    tag: 'Client',
    text: 'Reusable components, form validation, multilingual and responsive UIs for wallet portals: registration, KYC, transfers, bill pay, remittance.'
  },
  {
    id: 'api',
    label: 'Spring Boot APIs',
    tag: 'Services',
    text: 'P2P, B2B, Wallet-to-Bank and C2C payment APIs on Java microservices, holding under 200ms p95 at 99.95% uptime.'
  },
  {
    id: 'cache',
    label: 'Redis',
    tag: 'Cache',
    text: 'Caching layer that, together with query tuning, cut API p95 latency by 40% without touching availability.'
  },
  {
    id: 'db',
    label: 'Oracle / PostgreSQL',
    tag: 'Storage',
    text: 'Indexing and execution-plan analysis on high-volume transaction tables.'
  },
  {
    id: 'kafka',
    label: 'Kafka',
    tag: 'Events',
    text: 'Async event pipelines pushing real-time transaction and payment-status updates to mobile and web apps.'
  },
  {
    id: 'ext',
    label: 'Mule ESB',
    tag: 'Integrations',
    text: '5+ external financial APIs over REST and SOAP, hardened with contract testing and circuit breakers.'
  }
]

export const experience = [
  {
    title: 'Senior Engineer, Full Stack',
    org: 'Comviva',
    period: 'Dec 2025 – Present',
    stack: ['Java', 'Spring Boot', 'Oracle', 'Redis', 'React'],
    points: [
      'Built and supported P2P, B2B, Wallet-to-Bank and C2C payment APIs for a digital wallet serving 10M+ users at <200ms p95 and 99.95% uptime.',
      'Designed Java / Spring Boot microservices for high-volume financial transactions on a platform processing 2B+ transactions annually.',
      'Cut API p95 latency by 40% with Oracle / PostgreSQL index and execution-plan work plus Redis caching.',
      'Integrated 5+ external financial APIs (REST and SOAP) through Mule ESB with contract testing and circuit-breaker patterns.',
      'Developed Kafka event pipelines for real-time payment-status updates across mobile and web.',
      'Built React UI features for enterprise applications: reusable components, form validations and complex multi-step business workflows.',
      'Integrated frontend screens with REST services, handling loading, error and validation states for payment flows.',
      'Wired real-time payment-status updates from Kafka pipelines into mobile and web UIs.',
      'Worked across frontend, backend and API layers in production, so UI issues get traced to the root cause instead of patched on screen.'
    ]
  },
  {
    title: 'Engineer, Full Stack',
    org: 'Comviva',
    period: 'Dec 2023 – Dec 2025',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Angular', 'JavaScript'],
    points: [
      'Built backend services for MobiquityPay: user onboarding, onboarding screening, banner management, Favorites & Recents.',
      'Developed integrations for Agent Locator, Cash-In and Cash-Out with reliable external service communication.',
      'Built Angular and JavaScript interfaces for wallet features and connected them to the Spring Boot REST APIs behind them.'
    ]
  },
  {
    title: 'Trainee Engineer, Backend',
    org: 'Comviva Technologies',
    period: 'Jul 2023 – Nov 2023',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    points: [
      'Developed REST API integrations for mobile payment workflows, covering request/response handling and error handling.'
    ]
  },
  {
    title: 'Data Engineer Intern',
    org: 'Cognizant',
    period: 'Apr 2023 – Jul 2023',
    stack: ['SQL', 'AWS S3', 'Lambda', 'Glue', 'Athena'],
    points: [
      'Built a student analytics system on S3, Lambda, Glue and Athena, with automated ETL pipelines.',
      'Added scheduled data-integrity checks that caught inconsistencies and improved dataset reliability.'
    ]
  }
]

export const projects = [
  {
    name: 'MobiquityPay',
    kind: 'Product · Comviva',
    blurb: 'Digital payments platform handling high-volume financial transactions.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Oracle', 'Redis', 'Kafka', 'Angular', 'React'],
    points: [
      'P2P, B2B and Wallet-to-Bank payment workflows on Spring Boot microservices.',
      'Kafka-based async processing for transaction and payment-status updates.',
      'Oracle, PostgreSQL and Redis tuned for high-volume throughput.',
      'Angular and React front ends consuming those services, with live payment-status updates on mobile and web.'
    ],
    featured: true
  },
  {
    name: 'OpenCredits',
    kind: 'Freelance · 2026',
    blurb: 'EdTech LMS with a lending arm: payments, loans and a credit decision engine.',
    stack: ['Node.js', 'PostgreSQL', 'React', 'AWS S3', 'CloudFront', 'Stripe'],
    points: [
      'Rule-based credit eligibility engine producing real-time lending decisions. Fixed critical logic bugs to reach 100% score accuracy and unblock the first commercial lending partner go-live.',
      'Stripe for loan disbursement and EMI repayments: checkout sessions, subscription billing, webhook signature verification, refunds, full audit logging.',
      'Responsive React (JavaScript) storefront: course catalog, cart, checkout and enrollment flows.',
      'Student and affiliate dashboards built from reusable components, with Context API-based authentication.',
      'Service-layer architecture between the UI and REST APIs. Fixed UI bugs and missing icons, and corrected payment configuration to make checkout more reliable.'
    ]
  },
  {
    name: 'Dahabshil Consumer Portal',
    kind: 'Client project',
    blurb: 'Customer-facing wallet portal for a financial services client.',
    stack: ['Angular', 'TypeScript', 'REST APIs', 'Java', 'Spring Boot', 'PostgreSQL'],
    points: [
      'Registration, KYC, transfers, bill payments, recharge and international remittance flows.',
      'Responsive, multilingual Angular and TypeScript UI that stays consistent across devices.',
      'Frontend integrated with REST APIs and backend services for secure, reliable financial transactions.',
      'Worked with cross-functional teams on integration issues and production releases.'
    ]
  }
]

export const skills = [
  ['Languages', ['Java', 'JavaScript', 'TypeScript', 'SQL']],
  ['Frontend', ['React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design']],
  ['Backend', ['Spring Boot', 'Spring MVC', 'Hibernate / JPA', 'Node.js', 'REST APIs', 'Microservices']],
  ['Data', ['Oracle', 'PostgreSQL', 'MongoDB', 'Redis']],
  ['Messaging', ['Kafka', 'RabbitMQ']],
  ['Cloud', ['AWS S3', 'EC2', 'Lambda', 'Glue', 'SNS', 'SQS', 'IAM']],
  ['Security', ['OAuth 2.0', 'Spring Security', 'JWT', 'Vault', 'Encryption', 'Tokenization']],
  ['Tooling', ['Git', 'Jenkins', 'CI/CD', 'Maven', 'Postman', 'Swagger', 'IntelliJ']]
]
