export const ALL_PROJECTS = [
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
      { label: "Visit Website", link: "https://socialvibing.online/" }
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
      { label: "Visit Website", link: "#" }
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
      { label: "Visit Gallery", link: "#" }
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
      "/assets/images/projects/scholariq1.png", 
      "/assets/images/projects/scholariq (1).png"
    ],
    challenge: "Students face a highly fragmented and insecure global scholarship landscape cluttered with broken links, confusing eligibility requirements, and predatory scam portals designed specifically to harvest sensitive personal data from vulnerable applicants.",
    solution: "Engineered a lightning-fast semantic matchmaking portal using Next.js and Supabase as the backbone. Integrated a custom NLP classification system built in Python + FastAPI that automatically screens scholarship listings for legitimacy — scoring each opportunity against historical trust parameters and live cross-referencing.",
    result: "Successfully processed and screened 5,000+ scholarship listings during the pilot phase, with the AI model flagging approximately 40% of scraped entries as high-risk or fraudulent. Student applicants can now identify verified, safe scholarship opportunities in under 30 seconds.",
    actions: [
      { label: "Visit Portal", link: "#" }
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
      { label: "Join Testing", link: "#" }
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
      { label: "Visit Website", link: "#" }
    ]
  }
];
