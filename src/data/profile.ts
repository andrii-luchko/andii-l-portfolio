export const profile = {
  name: 'Andrii L.',
  role: 'Flutter Mobile Developer',
  tagline: 'Cross-platform iOS & Android apps, from MVP to store release.',
  yearsExperience: 5,
  email: 'a.luchko.dev@gmail.com',
  github: 'https://github.com/andrii-luchko',
  // TODO: add if available
  linkedin: '',
  cvUrl: '/Andrii-L-Flutter-Developer.pdf',
  location: 'Ukraine · Remote',
  summary: [
    'Flutter Developer with 5 years of commercial experience building cross-platform mobile applications with Flutter and Dart. I have built and shipped production apps for iOS and Android from MVP through App Store and Google Play release.',
    'My work centres on Clean Architecture, BLoC, Firebase, REST APIs, GoRouter, Dio, RevenueCat, push notifications, authentication and offline-first features, with a strong background in application architecture, performance optimisation, scalable codebases and third-party integrations.',
    'I am experienced in subscription-based applications, AI-powered features, authentication flows, real-time communication and Firebase-driven mobile solutions, and comfortable working independently with full ownership of the mobile development lifecycle.',
  ],
} as const;

export const competencies = [
  {
    label: 'Architecture',
    items: [
      'Scalable Mobile Architecture',
      'Clean Architecture',
      'SOLID Principles',
    ],
  },
  {
    label: 'Mobile Development',
    items: [
      'Cross-platform Development',
      'Performance Optimization',
      'Offline-first Applications',
      'Responsive UI',
    ],
  },
  {
    label: 'Backend Integration',
    items: [
      'REST API Integration',
      'Firebase Ecosystem',
      'Authentication & Authorization',
      'Third-party API & SDK Integration',
    ],
  },
  {
    label: 'Mobile Platform',
    items: [
      'App Store & Google Play Publishing',
      'Push Notifications',
      'Deep Linking',
      'In-App Purchases',
    ],
  },
  {
    label: 'Leadership',
    items: [
      'Full Mobile Development Lifecycle',
      'Project Ownership',
      'Technical Leadership',
    ],
  },
] as const;

export const skillGroups = [
  {
    label: 'Core',
    items: ['Flutter', 'Dart', 'iOS', 'Android', 'Web', 'PWA'],
  },
  {
    label: 'Architecture & State',
    items: [
      'Clean Architecture',
      'SOLID',
      'BLoC',
      'GetIt',
      'Injectable',
      'Freezed',
      'GoRouter',
    ],
  },
  {
    label: 'Networking',
    items: [
      'REST APIs',
      'Dio',
      'Retrofit',
      'WebSockets (Socket.IO)',
      'SSE',
      'gRPC',
      'Protocol Buffers',
    ],
  },
  {
    label: 'Backend & Services',
    items: [
      'Firebase',
      'Supabase',
      'Auth0',
      'Cloud Functions',
      'Firestore',
      'Remote Config',
    ],
  },
  {
    label: 'Monetization & Growth',
    items: ['RevenueCat', 'In-App Purchases', 'Google Mobile Ads', 'Analytics'],
  },
  {
    label: 'Notifications & Security',
    items: [
      'FCM',
      'OneSignal',
      'Flutter Local Notifications',
      'Biometrics',
      'Flutter Secure Storage',
    ],
  },
  {
    label: 'Quality & Release',
    items: [
      'Sentry',
      'Crashlytics',
      'Performance Optimization',
      'App Store Connect',
      'Google Play Console',
    ],
  },
  {
    label: 'Workflow',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Scrum',
      'Kanban',
      'Jira',
      'Trello',
      'ClickUp',
    ],
  },
] as const;

export type Project = {
  name: string;
  role: string;
  summary: string;
  tech: string[];
  highlights: string[];
  result: string;
  appStore?: string;
  googlePlay?: string;
  website?: string;
  status?: string;
  accent: string;
};

// Store + marketing links taken from the hyperlinks embedded in the CV PDF.
// App Store URLs are left country-less so Apple geo-redirects each visitor.
export const projects: Project[] = [
  {
    name: 'Yollly',
    role: 'Flutter Developer / Project Lead',
    summary:
      'An AI-powered culinary companion and meal-planning app. Intelligent AI-driven recipe search, automated weekly meal planners and collaborative shopping lists let users discover, plan and prepare healthy meals.',
    tech: [
      'Flutter',
      'Dart',
      'BLoC',
      'Auth0',
      'Firebase',
      'RevenueCat',
      'Deepgram STT',
      'Dio',
      'Retrofit',
      'GoRouter',
      'SSE',
      'Flutter Animate',
    ],
    highlights: [
      'Architected and built the entire cross-platform app from scratch as the sole developer, with a scalable codebase and fully responsive tablet support.',
      'Implemented secure authentication and verification with Auth0, supporting Google and Apple Sign-In with server-polling verification.',
      'Built an AI culinary module with real-time camera UI processing, image compression and voice input via Deepgram speech-to-text.',
      'Created an advanced recipe engine with filtering, macro-nutrient calculations, portion scaling, comments and creator profiles.',
      'Delivered a meal planner and collaborative shopping list with invitations, item cross-referencing and auto-generated ingredient lists.',
      'Integrated FCM, local notifications, SSE and deep linking, plus app-version gating through Firebase Remote Config.',
    ],
    result:
      'Managed the full mobile lifecycle from architecture to App Store and Google Play release, delivering a high-performance experience for phones and tablets and ensuring Apple compliance via an autonomous on-device content moderation system.',
    appStore: 'https://apps.apple.com/app/id6760356103',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.yollly.app.android',
    website: 'https://yollly.com/',
    accent: '#8ec63f',
  },
  {
    name: 'MakeMebirthday',
    role: 'Flutter Developer',
    summary:
      'A personal finance and goal-setting app that encourages financial discipline through positive reinforcement, pairing expense tracking with a micro-goal system so users can treat themselves on reaching milestones.',
    tech: [
      'Flutter',
      'Dart',
      'BLoC',
      'Firebase Auth',
      'Firestore',
      'Cloud Functions',
      'FCM',
      'RevenueCat',
      'GoRouter',
    ],
    highlights: [
      'Built a cross-platform financial tracker with a responsive UI for daily budgets and savings goals.',
      'Implemented secure auth (Google, Apple, email/password) and a 5-step KYC onboarding flow.',
      'Created a Goal Engine that turns financial targets into the daily savings needed to reach them.',
      'Delivered a dashboard with real-time balance calculation, goal progress visualisation and transaction history.',
      'Architected a timezone-aware notification system on Cloud Functions with scheduled triggers, targeting user segments without database overload.',
      'Integrated RevenueCat subscription tiers with a paywall and 3-day free trial.',
    ],
    result:
      'Deployed to both major stores under strict guideline compliance, with a globally scalable timezone-aware notification architecture and strong engagement from the micro-goal methodology.',
    appStore: 'https://apps.apple.com/app/make-me-birthday/id6747773776',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.incode.make_me_birthday',
    website: 'https://make-me-birthday.com/',
    accent: '#4fc3f7',
  },
  {
    name: 'Gamble Count',
    role: 'Flutter Developer',
    summary:
      'A supportive app helping people overcome gambling addiction, combining sobriety tracking, savings monitoring and stress-management exercises with daily logging and visual progress tracking.',
    tech: [
      'Flutter',
      'Dart',
      'BLoC',
      'Flutter Flame',
      'Firebase',
      'RevenueCat',
      'fl_chart',
      'GoRouter',
    ],
    highlights: [
      'Built a habit-tracking and recovery app with full offline capability.',
      'Implemented multi-method authentication (Google, Apple, Facebook, email/password) with privacy in mind.',
      'Created a dynamic 10-step onboarding and KYC flow supporting predefined and custom inputs.',
      'Developed a visual dashboard with fl_chart tracking sobriety duration and money saved.',
      'Built a Stress Relief module on Flutter Flame with interactive mechanics for immediate distraction during cravings.',
      'Integrated the Flame GameWidget into the Flutter UI hierarchy with BLoC-consistent state between game loop and app.',
    ],
    result:
      'Launched on the App Store and Google Play as a stable, offline-capable recovery tool, holding a steady 60 FPS in the Flame-powered stress-relief modules and measurably increasing session time during cravings.',
    appStore: 'https://apps.apple.com/app/gamblecount/id6749377843',
    googlePlay:
      'https://play.google.com/store/apps/details?id=app.gamblecount.android',
    website: 'https://gamblecount-7a70a.web.app/',
    accent: '#b388ff',
  },
  {
    name: 'Reforge',
    role: 'Flutter Developer',
    summary:
      'A gamified fitness app that turns physical training into an RPG-like experience, motivating users through faction wars, character progression and unlockable lore woven into daily workouts.',
    tech: [
      'Flutter',
      'Dart',
      'BLoC',
      'Retrofit',
      'Dio',
      'Firebase',
      'RevenueCat',
      'GoRouter',
    ],
    highlights: [
      'Built a feature-rich fitness app combining complex workout logic with gamification.',
      'Implemented secure auth and an interactive onboarding flow for KYC and faction selection.',
      'Created a dynamic workout engine generating sessions and sets/reps from exercise metrics and user progress.',
      'Developed a reward system calculating XP, achievements and collectible cards from workout performance.',
      'Added global and faction-based leaderboards, plus a progressive Lore System unlocked by experience.',
      'Built custom high-performance animations including a bespoke Sun Ray visual effect used throughout the UI.',
    ],
    result:
      'Launched the MVP into active beta with an architecture that handles complex RPG gamification logic and synchronised backend updates, backed by cross-platform subscription infrastructure.',
    status: 'Beta',
    accent: '#ff8a65',
  },
];

export const education = {
  qualification: 'Computer Science',
  institution: 'KPNU Ivan Ohienko',
} as const;

export const languages = [
  { name: 'Ukrainian', level: 'Native', detail: 'Spoken & written' },
  {
    name: 'English',
    level: 'B2',
    detail: 'Upper-Intermediate, spoken & written',
  },
] as const;
