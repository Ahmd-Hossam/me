import type { Profile } from './profile.model';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Components never hard-code user-facing text.
 *  Source of truth: Ahmed_Hossam_Senior_Frontend_Angular_CV.pdf
 *
 *  ⚠ ARABIC: NEEDS REVIEW
 *  Every `ar` string in this file is a first draft written by Claude and has
 *  not yet been reviewed by a native speaker. Company names, product names and
 *  technical terms are intentionally kept in English. When a string has been
 *  reviewed, nothing else needs to change. Once all are reviewed, flip
 *  ARABIC_REVIEW_STATUS to 'reviewed'.
 *
 *  Search for "TODO" to find content that still needs your input.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const ARABIC_REVIEW_STATUS: 'needs-review' | 'reviewed' = 'needs-review';

export const PROFILE: Profile = {
  name: { en: 'Ahmed Hossam', ar: 'أحمد حسام' },
  initials: 'AH',
  title: {
    en: 'Senior Front-End Engineer · Angular',
    ar: 'مهندس واجهات أمامية أول · Angular',
  },
  location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
  valueProposition: {
    en: 'I build fast, accessible Angular platforms for government, enterprise and SaaS teams across Saudi Arabia, the UAE and Egypt.',
    ar: 'أبني منصات Angular سريعة وسهلة الاستخدام للجميع لصالح الجهات الحكومية والمؤسسات ومنتجات SaaS في السعودية والإمارات ومصر.',
  },
  facts: [
    { en: '7+ years experience', ar: 'أكثر من 7 سنوات خبرة' },
    { en: 'Clients in KSA, UAE & Egypt', ar: 'عملاء في السعودية والإمارات ومصر' },
    { en: 'Currently at Youxel Technology', ar: 'حاليًا في Youxel Technology' },
    { en: 'Based in Cairo', ar: 'مقيم في القاهرة' },
  ],

  // Optional headshot. Add the image to /public/images and uncomment.
  // When omitted, the typographic "AH" mark is shown instead.
  // TODO: add a professional headshot (square, at least 480×480, WebP or JPEG).
  // photo: {
  //   src: 'images/ahmed-hossam.webp',
  //   width: 480,
  //   height: 480,
  //   alt: { en: 'Portrait of Ahmed Hossam', ar: 'صورة أحمد حسام' },
  // },

  cvPath: 'Ahmed_Hossam_CV.pdf',

  seo: {
    title: {
      en: 'Ahmed Hossam — Senior Front-End Engineer (Angular)',
      ar: 'أحمد حسام — مهندس واجهات أمامية أول (Angular)',
    },
    description: {
      en: 'Senior Front-End Engineer with 7+ years building enterprise, government and SaaS Angular platforms for clients in Saudi Arabia, the UAE and Egypt. Based in Cairo.',
      ar: 'مهندس واجهات أمامية أول بخبرة تزيد على 7 سنوات في بناء منصات Angular للمؤسسات والجهات الحكومية ومنتجات SaaS لعملاء في السعودية والإمارات ومصر. مقيم في القاهرة.',
    },
    imageAlt: {
      en: 'Ahmed Hossam — Senior Front-End Engineer, Angular. Cairo, Egypt.',
      ar: 'أحمد حسام — مهندس واجهات أمامية أول، Angular. القاهرة، مصر.',
    },
    address: { locality: 'Cairo', countryCode: 'EG' },
  },

  about: [
    {
      en: "I'm a Senior Front-End Engineer with 7+ years of professional experience building enterprise, government and SaaS web platforms with Angular for clients across Saudi Arabia, the UAE and Egypt.",
      ar: 'أنا مهندس واجهات أمامية أول بخبرة مهنية تزيد على 7 سنوات في بناء منصات ويب للمؤسسات والجهات الحكومية ومنتجات SaaS باستخدام Angular، لعملاء في السعودية والإمارات ومصر.',
    },
    {
      en: 'I specialize in scalable front-end architecture with Nx monorepos, modern Angular (Signals, Standalone Components, Deferrable Views), RxJS and NgRx, and reusable component libraries.',
      ar: 'أتخصص في بناء معماريات واجهات أمامية قابلة للتوسع باستخدام Nx monorepos وأحدث ميزات Angular (Signals وStandalone Components وDeferrable Views) وRxJS وNgRx، إلى جانب مكتبات مكونات قابلة لإعادة الاستخدام.',
    },
    {
      en: 'My background in UI design drives pixel-perfect, responsive and accessible interfaces, delivered in close collaboration with UI/UX and backend teams in Agile environments.',
      ar: 'تنعكس خلفيتي في تصميم واجهات المستخدم على واجهات دقيقة التفاصيل ومتجاوبة وسهلة الاستخدام للجميع، أنفّذها بتعاون وثيق مع فرق UI/UX وفرق Backend في بيئات عمل Agile.',
    },
  ],

  experience: [
    {
      title: { en: 'Senior Front-End Developer (Angular)', ar: 'مطوّر واجهات أمامية أول (Angular)' },
      company: { en: 'Youxel Technology' },
      companyUrl: 'https://www.youxel.com/',
      start: '2023-07',
      end: null,
      highlights: [
        {
          en: "Build scalable, high-performance Angular applications for government and enterprise clients and for Youxel's SaaS products (CERQEL, TREMVO).",
          ar: 'بناء تطبيقات Angular عالية الأداء وقابلة للتوسع لعملاء من الجهات الحكومية والمؤسسات، ولمنتجات Youxel من نوع SaaS (CERQEL وTREMVO).',
        },
        {
          en: 'Architect reusable, maintainable UI components following Clean Architecture principles within an Nx Workspace.',
          ar: 'تصميم مكونات واجهة قابلة لإعادة الاستخدام وسهلة الصيانة وفق مبادئ Clean Architecture داخل Nx Workspace.',
        },
        {
          en: 'Adopt modern Angular features across the codebase: Signals, Standalone Components, Lazy Loading, Deferrable Views and the new Control Flow syntax.',
          ar: 'تبنّي أحدث ميزات Angular في قاعدة الكود: Signals وStandalone Components وLazy Loading وDeferrable Views وصيغة Control Flow الجديدة.',
        },
        {
          en: 'Integrate RESTful APIs and optimize application performance and loading speed.',
          ar: 'ربط واجهات RESTful APIs وتحسين أداء التطبيقات وسرعة التحميل.',
        },
        {
          en: 'Implement responsive interfaces with Tailwind CSS, Bootstrap and Angular Material.',
          ar: 'تنفيذ واجهات متجاوبة باستخدام Tailwind CSS وBootstrap وAngular Material.',
        },
        {
          en: 'Contribute to code reviews, debugging and quality improvements in an Agile team alongside UI/UX and backend engineers.',
          ar: 'المساهمة في مراجعة الكود وتتبّع الأخطاء وتحسين الجودة ضمن فريق Agile إلى جانب مهندسي UI/UX ومهندسي Backend.',
        },
      ],
    },
    {
      title: { en: 'Front-End Developer (Angular)', ar: 'مطوّر واجهات أمامية (Angular)' },
      company: { en: 'IFBS' },
      note: { en: 'part-time', ar: 'دوام جزئي' },
      start: '2022-01',
      end: '2026-09',
      highlights: [
        {
          en: 'Developed ERP system modules covering finance, HR, supply chain and business management interfaces.',
          ar: 'تطوير وحدات نظام ERP تشمل واجهات المالية والموارد البشرية وسلاسل الإمداد وإدارة الأعمال.',
        },
        {
          en: 'Built reusable components and optimized front-end performance.',
          ar: 'بناء مكونات قابلة لإعادة الاستخدام وتحسين أداء الواجهة الأمامية.',
        },
        {
          en: 'Worked closely with backend developers on API integration and business logic; resolved UI/UX issues to keep the system stable.',
          ar: 'العمل عن قرب مع مطوّري Backend على ربط واجهات APIs ومنطق الأعمال، ومعالجة مشكلات UI/UX للحفاظ على استقرار النظام.',
        },
      ],
    },
    {
      title: { en: 'Front-End Developer (Angular)', ar: 'مطوّر واجهات أمامية (Angular)' },
      company: { en: 'Shura Solutions' },
      start: '2022-10',
      end: '2023-07',
      highlights: [
        {
          en: 'Developed enterprise-level Angular applications for government and business sectors.',
          ar: 'تطوير تطبيقات Angular على مستوى المؤسسات لقطاعات الحكومة والأعمال.',
        },
        {
          en: 'Built dynamic dashboards, complex forms and data-driven user interfaces.',
          ar: 'بناء لوحات تحكم ديناميكية ونماذج معقّدة وواجهات قائمة على البيانات.',
        },
        {
          en: 'Implemented authentication, routing and state management, and integrated backend APIs.',
          ar: 'تنفيذ المصادقة والتوجيه (Routing) وإدارة الحالة (State Management)، وربط واجهات Backend APIs.',
        },
        {
          en: 'Worked with Git, Azure DevOps and Agile methodologies.',
          ar: 'العمل باستخدام Git وAzure DevOps ومنهجيات Agile.',
        },
      ],
    },
    {
      title: { en: 'Front-End Developer (Angular)', ar: 'مطوّر واجهات أمامية (Angular)' },
      company: { en: 'BlackStone eIT' },
      start: '2021-07',
      end: '2022-09',
      highlights: [
        {
          en: 'Developed responsive web applications with Angular, TypeScript and RxJS.',
          ar: 'تطوير تطبيقات ويب متجاوبة باستخدام Angular وTypeScript وRxJS.',
        },
        {
          en: 'Established clean, maintainable code structures and built interactive UI components.',
          ar: 'إرساء هياكل كود نظيفة وسهلة الصيانة وبناء مكونات واجهة تفاعلية.',
        },
        {
          en: 'Improved application performance and user experience.',
          ar: 'تحسين أداء التطبيقات وتجربة المستخدم.',
        },
      ],
    },
    {
      title: { en: 'Front-End Developer (Angular)', ar: 'مطوّر واجهات أمامية (Angular)' },
      company: { en: 'eG Innovations' },
      start: '2020-03',
      end: '2021-06',
      highlights: [
        {
          en: 'Developed and maintained multiple Angular applications and landing pages.',
          ar: 'تطوير وصيانة عدة تطبيقات Angular وصفحات هبوط (Landing Pages).',
        },
        {
          en: 'Converted UI/UX designs into responsive, pixel-perfect interfaces.',
          ar: 'تحويل تصاميم UI/UX إلى واجهات متجاوبة مطابقة للتصميم بدقة.',
        },
        {
          en: 'Integrated APIs and improved application functionality and accessibility.',
          ar: 'ربط واجهات APIs وتحسين وظائف التطبيقات وإتاحتها لجميع المستخدمين (Accessibility).',
        },
      ],
    },
    {
      title: { en: 'Front-End UI Designer', ar: 'مصمم واجهات مستخدم (Front-End)' },
      company: { en: 'Musaada' },
      start: '2019-04',
      end: '2020-02',
      highlights: [
        {
          en: 'Designed and developed responsive website interfaces and landing pages with HTML, CSS, JavaScript and Bootstrap.',
          ar: 'تصميم وتطوير واجهات مواقع وصفحات هبوط متجاوبة باستخدام HTML وCSS وJavaScript وBootstrap.',
        },
      ],
    },
    {
      title: { en: 'Freelance Front-End / UI Designer', ar: 'مطوّر واجهات أمامية ومصمم واجهات مستقل' },
      company: { en: 'Self-employed', ar: 'عمل حر' },
      start: '2018',
      end: '2019',
      highlights: [
        {
          en: 'Designed and built responsive websites and web applications for multiple clients.',
          ar: 'تصميم وبناء مواقع وتطبيقات ويب متجاوبة لعدد من العملاء.',
        },
      ],
    },
  ],

  // Only link to public URLs that have been explicitly approved.
  // TODO (optional): for each project, add a one-line note on your role or what you built.
  projectCategories: [
    {
      id: 'latest',
      title: { en: 'Latest', ar: 'الأحدث' },
      summary: { en: 'Insurance Authority, Saudi Arabia', ar: 'هيئة التأمين، المملكة العربية السعودية' },
      projects: [
        {
          name: { en: 'Insurance Authority portal', ar: 'بوابة هيئة التأمين' },
          description: { en: 'The official Insurance Authority portal.', ar: 'البوابة الرسمية لهيئة التأمين.' },
          url: 'https://www.ia.gov.sa/ar/home',
        },
        {
          name: { en: "Policyholders' Protection Fund", ar: 'صندوق حماية حملة الوثائق' },
          description: {
            en: "The Policyholders' Protection Fund platform.",
            ar: 'منصة صندوق حماية حملة الوثائق.',
          },
        },
      ],
    },
    {
      id: 'gov-ksa',
      title: { en: 'Government & Enterprise — Saudi Arabia', ar: 'الحكومة والمؤسسات — السعودية' },
      shortTitle: { en: 'Gov & Enterprise · KSA', ar: 'حكومة ومؤسسات · السعودية' },
      projects: [
        {
          name: { en: 'King Abdullah Financial District (KAFD)', ar: 'مركز الملك عبدالله المالي (KAFD)' },
          url: 'https://kafd.sa/en/',
        },
        {
          name: {
            en: 'Ministry of Communications and Information Technology (MCIT)',
            ar: 'وزارة الاتصالات وتقنية المعلومات (MCIT)',
          },
        },
      ],
    },
    {
      id: 'gov-uae-eg',
      title: { en: 'Government & Enterprise — UAE & Egypt', ar: 'الحكومة والمؤسسات — الإمارات ومصر' },
      shortTitle: { en: 'Gov & Enterprise · UAE & Egypt', ar: 'حكومة ومؤسسات · الإمارات ومصر' },
      projects: [
        {
          name: { en: 'Dubai Chamber portal', ar: 'بوابة غرفة دبي' },
          url: 'https://www.dubaichamber.com/en/home/',
        },
        {
          name: { en: 'Emirates Schools Establishment', ar: 'مؤسسة الإمارات للتعليم المدرسي' },
          url: 'https://www.ese.gov.ae/Ar/Pages/Home.aspx',
        },
        {
          name: { en: 'ADQCC Exam Portal', ar: 'بوابة اختبارات ADQCC' },
          description: {
            en: 'Abu Dhabi Quality & Conformity Council.',
            ar: 'مجلس أبوظبي للجودة والمطابقة.',
          },
          url: 'https://qcc.gov.ae/',
        },
        {
          name: { en: 'Ajman Citizens Portal', ar: 'بوابة مواطني عجمان' },
        },
        {
          name: { en: 'GS1 Egypt portal', ar: 'بوابة GS1 مصر' },
          description: { en: 'Barcode standards.', ar: 'معايير الباركود.' },
          url: 'https://gs1eg.org/',
        },
      ],
    },
    {
      id: 'saas',
      title: { en: 'SaaS products', ar: 'منتجات SaaS' },
      projects: [
        {
          name: { en: 'CERQEL' },
          description: {
            en: 'AI-powered platform unifying employee services, customer services and operational workflows.',
            ar: 'منصة مدعومة بالذكاء الاصطناعي توحّد خدمات الموظفين وخدمة العملاء وسير العمليات التشغيلية.',
          },
          url: 'https://www.youxel.com/products/cerqel',
        },
        {
          name: { en: 'TREMVO' },
          description: {
            en: 'Peer-to-peer employee recognition and engagement platform.',
            ar: 'منصة لتقدير الموظفين لبعضهم البعض وتعزيز تفاعلهم.',
          },
          url: 'https://www.youxel.com/products/cerqel-community',
        },
      ],
    },
    {
      id: 'business',
      title: { en: 'Business systems & others', ar: 'أنظمة الأعمال وغيرها' },
      projects: [
        {
          name: { en: 'IFBS ERP' },
          description: {
            en: 'Finance, HR, supply chain, manufacturing and distribution.',
            ar: 'المالية والموارد البشرية وسلاسل الإمداد والتصنيع والتوزيع.',
          },
        },
        {
          name: { en: 'Tyibat' },
          description: { en: 'E-commerce portal.', ar: 'بوابة تجارة إلكترونية.' },
        },
        {
          name: { en: 'Motanaw3' },
          description: {
            en: 'Online-courses platform with an admin dashboard.',
            ar: 'منصة دورات تعليمية عبر الإنترنت مع لوحة تحكم إدارية.',
          },
          url: 'https://motanawa.netlify.app/',
        },
        {
          name: { en: 'Digital Workspace' },
          description: { en: 'Internal social and task app.', ar: 'تطبيق داخلي للتواصل الاجتماعي وإدارة المهام.' },
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: { en: 'Languages', ar: 'لغات البرمجة' },
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS/Sass'],
    },
    {
      title: { en: 'Angular' },
      skills: [
        'Angular 8 → 22',
        'Signals',
        'Standalone Components',
        'Control Flow syntax',
        'Deferrable Views',
        'Functional Guards & Resolvers',
        'Lazy Loading',
        'RxJS',
        'NgRx',
      ],
    },
    {
      title: { en: 'Architecture', ar: 'المعمارية' },
      skills: [
        'Nx Workspace (monorepos)',
        'Custom npm libraries',
        'Clean Architecture',
        'SOLID',
        'Design patterns',
        'OOP',
        'Code splitting',
      ],
    },
    {
      title: { en: 'UI', ar: 'واجهات المستخدم' },
      skills: [
        'Tailwind CSS',
        'Angular Material',
        'PrimeNG',
        'ng-bootstrap',
        'Bootstrap 5',
        'Responsive design',
        'i18n (ngx-translate)',
      ],
    },
    {
      title: { en: 'Other', ar: 'أخرى' },
      skills: ['React (Hooks)', 'Ionic', 'Vite', 'Firebase', 'Unit testing'],
    },
    {
      title: { en: 'Tools', ar: 'الأدوات' },
      skills: [
        'Git / GitHub',
        'Azure DevOps',
        'Agile/Scrum',
        'AI-assisted development (Claude Code, ChatGPT)',
        'Adobe Photoshop',
      ],
    },
  ],

  education: [
    {
      degree: { en: "Bachelor's Degree in Computer", ar: 'بكالوريوس الحاسبات' },
      institution: { en: 'Mansoura University', ar: 'جامعة المنصورة' },
      year: '2020',
    },
    {
      degree: { en: 'Diploma, Electronic Devices Department', ar: 'دبلوم، قسم الأجهزة الإلكترونية' },
      institution: { en: 'Technology College, Mahalla', ar: 'الكلية التكنولوجية بالمحلة' },
      year: '2017',
      note: { en: 'Grade: Excellent', ar: 'التقدير: امتياز' },
    },
  ],

  awards: [
    {
      title: { en: '1st Place, Website Design', ar: 'المركز الأول في تصميم المواقع' },
      event: {
        en: 'Scientific Research Competition, Mansoura University',
        ar: 'مسابقة البحث العلمي، جامعة المنصورة',
      },
      year: '2019',
    },
  ],

  spokenLanguages: [
    { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Native', ar: 'اللغة الأم' } },
    {
      name: { en: 'English', ar: 'الإنجليزية' },
      level: {
        en: 'Very good — professional working proficiency',
        ar: 'جيد جدًا — كفاءة مهنية في العمل',
      },
    },
  ],

  beyondCode: {
    heading: { en: 'Away from the keyboard', ar: 'بعيدًا عن لوحة المفاتيح' },
    body: [
      {
        en: "I'm a runner and a member of MRT — the Madinaty Running Team.",
        ar: 'أنا عدّاء وعضو في فريق MRT — فريق مدينتي للجري.',
      },
    ],
    link: {
      label: { en: 'Follow my runs on Strava', ar: 'تابع جرياتي على Strava' },
      href: 'https://www.strava.com/athletes/1648192745',
    },
  },

  contact: {
    email: 'ahossamw@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahmed-hossam-1a34081a0/',
    github: 'https://github.com/Ahmd-Hossam',
    strava: 'https://www.strava.com/athletes/1648192745',
    // TODO: confirm the repository name once it is created on GitHub (README › Deploy).
    source: 'https://github.com/Ahmd-Hossam/portfolio',
  },

  ui: {
    skipToContent: { en: 'Skip to content', ar: 'انتقل إلى المحتوى' },
    nav: {
      about: { en: 'About', ar: 'نبذة' },
      experience: { en: 'Experience', ar: 'الخبرات' },
      projects: { en: 'Projects', ar: 'المشاريع' },
      skills: { en: 'Skills', ar: 'المهارات' },
      education: { en: 'Education & Awards', ar: 'التعليم والجوائز' },
      beyond: { en: 'Beyond code', ar: 'خارج الكود' },
      contact: { en: 'Contact', ar: 'تواصل' },
    },
    primaryNav: { en: 'Primary', ar: 'القائمة الرئيسية' },
    openMenu: { en: 'Open menu', ar: 'فتح القائمة' },
    closeMenu: { en: 'Close menu', ar: 'إغلاق القائمة' },
    toggleTheme: { en: 'Toggle dark mode', ar: 'تبديل الوضع الداكن' },
    switchLanguage: { en: 'اقرأ بالعربية', ar: 'Read in English' },
    downloadCv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
    contactMe: { en: 'Contact me', ar: 'تواصل معي' },
    present: { en: 'Present', ar: 'حتى الآن' },
    current: { en: 'Current', ar: 'الحالي' },
    visitSite: { en: 'Visit site', ar: 'زيارة الموقع' },
    opensInNewTab: { en: '(opens in a new tab)', ar: '(يفتح في نافذة جديدة)' },
    education: { en: 'Education', ar: 'التعليم' },
    awards: { en: 'Awards', ar: 'الجوائز' },
    languages: { en: 'Languages', ar: 'اللغات' },
    contactLead: {
      en: 'Have a role or a project in mind? Email is the fastest way to reach me.',
      ar: 'لديك فرصة عمل أو مشروع؟ البريد الإلكتروني هو أسرع طريقة للتواصل معي.',
    },
    emailLabel: { en: 'Email', ar: 'البريد الإلكتروني' },
    backToTop: { en: 'Back to top', ar: 'العودة للأعلى' },
    viewSource: { en: 'View source on GitHub', ar: 'الكود المصدري على GitHub' },
    footerNote: {
      en: 'Built with Angular 22, Signals and Tailwind CSS.',
      ar: 'بُني باستخدام Angular 22 وSignals وTailwind CSS.',
    },
  },
};
