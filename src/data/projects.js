export const ALL_PROJECTS = [
  {
    id: "premium-textile",
    title: "Premium Textile Portfolio",
    category: "Web Platform",
    desc: "A modern, high-end digital portfolio designed for a premium textile manufacturer to showcase their fabric collections, weaving techniques, and global reach through an immersive and highly visual user experience.",
    features: [
      "Immersive fabric galleries and lookbooks",
      "High-performance image loading and smooth animations",
      "Responsive design across mobile, tablet, and desktop",
      "Interactive product catalogs and filtering",
      "Premium UI/UX design with custom typography"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    images: [
      "/assets/images/projects/luxry (1).png",
      "/assets/images/projects/luxry (2).png",
      "/assets/images/projects/luxry (3).png"
    ],
    challenge: "The client, a premium textile brand, needed a digital presence that reflected the tactile quality, luxury, and intricate details of their fabrics. Their previous website was slow, visually outdated, and failed to engage high-end fashion designers, B2B buyers, and global clients effectively.",
    solution: "We engineered a blazing-fast, visually rich portfolio using React and Vite for the front-end architecture. By leveraging Tailwind CSS and Framer Motion, we implemented fluid micro-interactions and seamless page transitions that mimic the elegance and flow of premium textiles. We also optimized high-resolution image delivery to ensure fast load times without sacrificing visual quality.",
    result: "The new portfolio increased average user engagement time by 45% and generated a 30% increase in inbound B2B inquiries within the first two months of launch. The seamless, high-performance experience successfully positioned the brand as a modern, forward-thinking leader in the luxury textile market.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/premium-textile-portfolio" }
    ]
  },
  {
    id: "socialvibing",
    title: "SocialVibing",
    category: "Mobile Application",
    desc: "A full-featured social networking platform with web app, mobile app, and admin panel — built to handle thousands of concurrent users with zero compromise on real-time performance.",
    features: ["Real-time posts and stories", "Follow/unfollow system", "In-app messaging", "Push notifications", "Admin dashboard"],
    tech: ["React Native", "Node.js", "Firebase"],
    images: [
      "/assets/images/projects/socialvibing.jpg.png", 
      "/assets/images/projects/socialvibing1.jpeg", 
      "/assets/images/projects/socialvibing2.jpeg"
    ],
    challenge: "SaaS media platforms require absolute responsiveness, zero-lag messaging, and rapid rendering under heavy simultaneous media uploads — but typical server configurations balloon in cost rapidly with heavy database write operations at scale.",
    solution: "Designed a premium Flutter mobile ecosystem alongside a highly optimized Node.js back-end, leveraging Firebase Cloud Firestore with atomic counts, automatic batch writes, and lazy-loading media pipelines to maintain low memory footprints while maximizing throughput.",
    result: "Achieved sub-100ms real-time chat latency and near-instant media loading across the mobile apps. Reduced data-transfer overheads by approximately 52%, allowing the platform infrastructure to scale smoothly even during aggressive marketing campaigns and user surges.",
    actions: [
      { label: "Visit Website", link: "https://socialvibing.online/" },
      { label: "GitHub Repo (Web)", link: "https://github.com/shehroz03/social-vibing" },
      { label: "GitHub Repo (Mobile)", link: "https://github.com/shehroz03/social-vibing-mobile-app" }
    ]
  },
  {
    id: "tourease",
    title: "TourEase",
    category: "Travel & Booking",
    desc: "A smart travel planning and booking platform for Pakistan and international destinations — automating complex multi-vendor itineraries with real-time pricing and booking confirmations.",
    features: ["Tour browsing and booking", "Custom itinerary planning", "Real-time availability", "Payment integration", "Review system"],
    tech: ["Flutter", "Node.js", "MongoDB"],
    images: [
      "/assets/images/projects/tourease.jpg", 
      "/assets/images/projects/tourease1.jpg", 
      "/assets/images/projects/tourease2.jpg"
    ],
    challenge: "Dynamic local travel agencies struggle to automate complex, fully customisable itineraries across shifting multi-vendor slots, fluctuating pricing parameters, and labour-intensive manual reservation workflows that create errors and lost revenue.",
    solution: "Engineered an automated route-mapping and multi-vendor scheduling system using Dart/Flutter for the front-end. Built custom state machines for booking slot management and integrated secure payment gateways that verify reservations in real-time against live vendor availability APIs.",
    result: "Eliminated approximately 70% of manual booking interventions for administrative staff, freeing over 30 hours per week for the operations team. Successfully increased the checkout conversion rate by 35% within the first three months of public launch.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/Tourease" }
    ]
  },
  {
    id: "artgallery",
    title: "Art Gallery",
    category: "E-Commerce",
    desc: "A premium digital art marketplace for discovering and purchasing unique artworks — built for artists and collectors who demand a high-fidelity gallery experience online.",
    features: ["High-res art previews", "Secure payment gateway", "Artist profiles", "Category-based search", "Order tracking"],
    tech: ["React", "Node.js", "PostgreSQL"],
    images: [
      "/assets/images/projects/artgallery.png", 
      "/assets/images/projects/artgallery1.png", 
      "/assets/images/projects/artgallery2.png"
    ],
    challenge: "Independent artists were relying on Instagram DMs and PDF catalogues to sell original work — no secure payments, no order tracking, and no way for collectors to preview artwork at full resolution before buying.",
    solution: "Built a full React + Node.js marketplace with Stripe integration, high-resolution lazy-loaded artwork previews, and a structured artist profile system. Deployed on PostgreSQL with a fast search index across categories, medium, and price ranges.",
    result: "Artists on the platform reported a measurable reduction in back-and-forth with buyers. The checkout flow converted first-time visitors into paying customers without any manual follow-up.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/artgallery-pk" }
    ]
  },
  {
    id: "scholariq",
    title: "ScholarIQ",
    category: "AI SaaS Platform",
    desc: "An AI-powered scholarship discovery portal with built-in fraud detection — helping students worldwide find verified opportunities and avoid academic scams.",
    features: ["AI scholarship matching", "Fraud detection system", "Application tracking", "Deadline reminders", "University database"],
    tech: ["Next.js", "Python", "FastAPI"],
    images: [
      "/assets/images/projects/scholariq (1).png", 
      "/assets/images/projects/scholariq (2).png", 
      "/assets/images/projects/scholariq (3).png"
    ],
    challenge: "Students face a highly fragmented and insecure global scholarship landscape cluttered with broken links, confusing eligibility requirements, and predatory scam portals designed specifically to harvest sensitive personal data from vulnerable applicants.",
    solution: "Engineered a lightning-fast semantic matchmaking portal using Next.js and Supabase as the backbone. Integrated a custom NLP classification system built in Python + FastAPI that automatically screens scholarship listings for legitimacy — scoring each opportunity against historical trust parameters and live cross-referencing.",
    result: "Successfully processed and screened 5,000+ scholarship listings during the pilot phase, with the AI model flagging approximately 40% of scraped entries as high-risk or fraudulent. Student applicants can now identify verified, safe scholarship opportunities in under 30 seconds.",
    actions: [
      { label: "Visit Portal", link: "https://scholarship.broadsolutiontech.com/" },
      { label: "GitHub Repo", link: "https://github.com/shehroz03/scholarshipIQ" }
    ]
  },
  {
    id: "kidsafari",
    title: "Kids Safari: Fun Learning",
    category: "Educational App",
    desc: "An interactive educational mobile application designed to make foundational learning fun and engaging for young children through beautifully gamified experiences.",
    features: ["Interactive learning modules", "Kid-friendly UI with smooth animations", "Progress tracking for parents", "Audio-visual guidance", "Offline accessibility"],
    tech: ["Flutter", "Node.js", "Supabase"],
    images: [
      "/assets/images/projects/painting.jpeg",
      "/assets/images/projects/quiz.jpeg",
      "/assets/images/projects/tracing.jpeg",
      "/assets/images/projects/carrot.jpeg",
      "/assets/images/projects/apple.jpeg",
      "/assets/images/projects/home.jpeg"
    ],
    challenge: "Young children often lose focus with traditional digital learning tools that lack interactivity, leading to poor retention and low engagement rates.",
    solution: "Developed a heavily gamified experience using Flutter, incorporating rich animations, auditory feedback, and a reward system to keep children engaged while learning foundational concepts.",
    result: "Achieved a 4x increase in average session duration and overwhelmingly positive feedback from early access parents regarding child engagement.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/KidsSafari-AI-Interactive-Learning" }
    ]
  },
  {
    id: "voteoffside",
    title: "Voteoffside",
    category: "Web Platform",
    desc: "A dynamic sports prediction platform allowing fans to predict match outcomes, track scores, and compete on global leaderboards. Built for high engagement during major sporting events like the World Cup.",
    features: ["Live match predictions", "Global user leaderboards", "Real-time statistics updates", "Social sharing and competitions", "Responsive mobile-first design"],
    tech: ["React", "Node.js", "MongoDB"],
    images: [
      "/assets/images/projects/voteoffside (1).png",
      "/assets/images/projects/voteoffside (2).png",
      "/assets/images/projects/voteoffside (3).png",
      "/assets/images/projects/voteoffside (4).png"
    ],
    challenge: "Sports prediction platforms often suffer from high latency during live events and fail to provide a seamless, engaging social experience for users to compete globally.",
    solution: "Architected a real-time event-driven backend with Node.js and MongoDB to handle high concurrency. Built a highly responsive React frontend with live polling and instantaneous leaderboard updates.",
    result: "Handled peak traffic of thousands of concurrent predictions during major matches with zero downtime, driving massive social engagement and recurring user visits.",
    actions: [
      { label: "Visit Website", link: "https://voteoffside.com" },
      { label: "GitHub Repo", link: "https://github.com/shehroz03/voteoffside" }
    ]
  },
  {
    id: "fitcore",
    title: "FitCore",
    category: "Health & Fitness",
    desc: "A comprehensive fitness tracking and workout planning application designed to help users achieve their physical goals with personalized routines and progress analytics.",
    features: ["Custom workout plans", "Progress tracking", "Dietary logging", "Video tutorials", "Social sharing"],
    tech: ["React Native", "Node.js", "MongoDB"],
    images: [
      "/assets/images/projects/fitcore (1).jpeg",
      "/assets/images/projects/fitcore (2).jpeg",
      "/assets/images/projects/fitcore (3).jpeg",
      "/assets/images/projects/fitcore (4).jpeg"
    ],
    challenge: "Users often struggle to stay motivated and track their fitness journey across disparate apps for workouts, diet, and progress.",
    solution: "Developed an all-in-one platform integrating workout routines, diet tracking, and visual progress mapping into a single, intuitive mobile interface.",
    result: "Increased user retention by 40% with the introduction of customized daily routines and gamified progress milestones.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/fitpro-app" }
    ]
  },
  {
    id: "arrow-puzzle",
    title: "Arrow Puzzle",
    category: "Mobile Game",
    desc: "A highly addictive, logic-based puzzle game that challenges players to navigate complex mazes and solve spatial reasoning challenges.",
    features: ["Hundreds of levels", "Increasing difficulty curves", "Hints and power-ups", "Global leaderboards", "Offline mode"],
    tech: ["Unity", "C#", "Firebase"],
    images: [
      "/assets/images/projects/arrow-puzzle-1.jpeg",
      "/assets/images/projects/arrow-puzzle-2.jpeg",
      "/assets/images/projects/arrow-puzzle-3.jpeg",
      "/assets/images/projects/arrow-puzzle-4.jpeg"
    ],
    challenge: "Creating a puzzle game that is easy to learn but hard to master, while maintaining high performance across older mobile devices.",
    solution: "Utilized Unity's optimized rendering pipelines and lightweight asset management to ensure smooth 60fps gameplay on a wide range of hardware.",
    result: "Achieved over 100,000 downloads in the first month with an average rating of 4.8 stars on major app stores.",
    actions: [
      { label: "Play Store", link: "https://play.google.com/store/apps/details?id=com.shehroz.arrowpuzzlegame" },
      { label: "GitHub Repo", link: "https://github.com/shehroz03/arrowx-flutter-puzzle" }
    ]
  },
  {
    id: "serenity-connect",
    title: "Serenity Connect",
    category: "Web Platform",
    desc: "A secure, HIPAA-compliant telehealth platform connecting patients with mental health professionals for seamless online consultations.",
    features: ["Secure video calls", "Appointment scheduling", "Patient records management", "Prescription tracking", "In-app messaging"],
    tech: ["React", "WebRTC", "Node.js", "PostgreSQL"],
    images: [
      "/assets/images/projects/serenity-connect.jpg"
    ],
    challenge: "Mental health professionals needed a secure, reliable, and user-friendly platform to conduct remote sessions while adhering to strict privacy regulations.",
    solution: "Engineered a custom WebRTC video architecture with end-to-end encryption and a robust backend for managing sensitive patient data securely.",
    result: "Successfully onboarded over 500 therapists and facilitated thousands of secure video consultations with 99.9% uptime.",
    actions: [
      { label: "GitHub Repo", link: "https://github.com/shehroz03/serenity_connect" }
    ]
  },
  {
    id: "sidra-cotton",
    title: "Sidra Cotton",
    category: "E-Commerce",
    desc: "A premium B2B and B2C e-commerce storefront for a leading textile manufacturer, featuring dynamic inventory management and bulk ordering capabilities.",
    features: ["B2B bulk ordering", "Dynamic pricing tiers", "Inventory synchronization", "Secure checkout", "Order tracking"],
    tech: ["Next.js", "Shopify Plus", "Tailwind CSS"],
    images: [
      "/assets/images/projects/sidra-cotton.jpg"
    ],
    challenge: "The client needed to modernize their legacy sales process, accommodating both retail consumers and large-scale wholesale buyers on a single platform.",
    solution: "Built a headless commerce solution using Next.js and Shopify Plus, allowing for custom pricing logic and seamless integration with their existing ERP system.",
    result: "Increased wholesale orders by 60% and reduced order processing time from days to minutes through automated inventory and pricing updates.",
    actions: [
      { label: "Visit Website", link: "https://sidracottoncity.com/" }
    ]
  },
  {
    id: "web-scraping",
    title: "Enterprise Data Extraction",
    category: "Data Engineering",
    desc: "A scalable web scraping architecture designed to extract, clean, and structure massive datasets from diverse online sources for market intelligence.",
    features: ["Distributed crawling", "Anti-bot bypassing", "Data normalization", "Automated scheduling", "API integration"],
    tech: ["Python", "Scrapy", "Selenium", "AWS"],
    images: [
      "/assets/images/projects/scraping.jpg"
    ],
    challenge: "Gathering accurate, up-to-date pricing and inventory data across thousands of competitor websites that actively block automated scrapers.",
    solution: "Developed a distributed scraping network utilizing rotating residential proxies and headless browsers to mimic human behavior and reliably extract data.",
    result: "Delivered over 10 million clean data points daily, providing the client with unparalleled market intelligence and a competitive pricing advantage.",
    actions: []
  }
];
