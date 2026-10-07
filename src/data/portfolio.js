export const profile = {
  name: 'Jason G. Monsalve',
  photo: `${import.meta.env.BASE_URL}profile-photo.jpg`,
  title: 'Cloud Technical Support (Tier 1) · Microsoft 365 · Entra ID',
  introduction:
    'Technically skilled and adaptable cloud support professional with hands-on experience supporting MSP-hosted virtual machines, DaaS, and SaaS environments. Experienced in troubleshooting, user provisioning, and Microsoft 365 and Entra ID administration, with a focus on fast, accurate resolutions and customer satisfaction.',
  about:
    'I provide front-line support for MSP-hosted virtual desktop environments, and SaaS applications. My experience includes troubleshooting remote access, user accounts, Microsoft 365, Exchange Online, Entra ID MFA, and application issues. I have resolved more than 1,000 support tickets while meeting service expectations and maintaining a 100% customer satisfaction rating.',
  focusAreas: ['Cloud & Virtual Desktop Support', 'Microsoft 365 & Entra ID', 'User & Application Support'],
  contact: [
    { label: 'Email', value: 'jaysonmonsalve04@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/jason-g-monsalve' },
    { label: 'Phone', value: '+63 998 246 7963\n+63 968 232 2168' },
  ],
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    skills: ['Windows Server 2012 R2–2022', 'Remote Desktop', 'Virtual Machines', 'ControlUp'],
  },
  {
    title: 'Identity & User Management',
    skills: ['Active Directory', 'Microsoft 365 Admin Center', 'Partner Center', 'Microsoft Entra ID', 'Exchange Online'],
  },
  {
    title: 'Technical Support Tools',
    skills: ['Zendesk', 'RingCentral', 'Zoom Contact Center', 'RDC Manager', 'GoToAssist (FastSupport)', 'Snagit'],
  },
  {
    title: 'Collaboration & Productivity',
    skills: ['Microsoft Teams', 'Outlook', 'Jira', 'Confluence'],
  },
  {
    title: 'Virtualization & Lab Experience',
    skills: ['Oracle VirtualBox', 'Windows Server', 'Active Directory Domain Services', 'Group Policy (GPO)'],
  },
  {
    title: 'Foundational Programming',
    skills: ['HTML', 'CSS', 'Java', 'C++', 'VB.NET'],
  },
]

export const experience = [
  {
    role: 'Cloud Technical Support (Tier 1)',
    organization: 'Buwelo Exactstar · Technical Account',
    dates: 'October 2024 – June 2026',
    description: 'Provided front-line technical support for legal technology products, MSP-hosted virtual desktop environments, and SaaS products.',
    highlights: [
      'Configured and troubleshot RDP connectivity, Active Directory accounts, Microsoft 365 access, Exchange delegation, shared mailboxes and email forwarding, Entra ID MFA, and user permissions.',
      'Installed, configured, and troubleshot Microsoft Office, Adobe products, and legal and accounting software in hosted VM environments.',
      'Resolved 1,000+ tickets over 18 months, averaging 5–10 tickets daily while exceeding KPI expectations and maintaining 100% customer satisfaction.',
      'Coordinated escalations with Tier 2 and Tier 3 teams while maintaining SLA compliance.',
    ],
  },
  {
    role: 'Administrative Support / OJT Trainee',
    organization: 'Castillejos Municipal Police Station',
    dates: '2023 · 30 days',
    description: 'Supported National Police Clearance applicants and assisted with administrative office work.',
    highlights: [
      'Assisted applicants with National Police Clearance processing and release and explained related requirements and procedures.',
      'Helped with administrative documentation, records handling, and other confidential office tasks.',
    ],
  },
]

export const education = [
  {
    qualification: 'Bachelor of Science in Computer Science',
    institution: 'President Ramon Magsaysay State University',
    dates: 'Graduated 2024',
    distinction: 'Academic Distinction',
  },
  {
    qualification: 'Information and Communication Technology (Technical-Vocational Livelihood Track)',
    institution: 'Subic National High School',
    dates: 'Graduated 2019',
    distinction: 'With Honors · Senior High School (K–12)',
  },
]

export const projects = [
  {
    title: 'Windows Server & Active Directory Lab',
    category: 'Virtualization & Lab Experience',
    description:
      'Hands-on lab experience with Oracle VirtualBox, Windows Server, Active Directory Domain Services, and Group Policy (GPO).',
    technologies: ['Oracle VirtualBox', 'Windows Server', 'Active Directory Domain Services', 'Group Policy'],
  },
]