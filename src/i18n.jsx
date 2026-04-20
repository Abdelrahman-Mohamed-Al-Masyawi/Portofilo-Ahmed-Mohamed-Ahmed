// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        home: 'Home',
        objective: 'Objective',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        certificates: 'Certificates',
        contact: 'Contact',
        name: 'Ahmed El-Sayed',
      },
      // Hero
      hero: {
        name: 'Ahmed Elsayed',
        title: 'Professional Accountant',
        location: 'Riyadh, Saudi Arabia',
        phone: '0592060065',
        email: 'ahmedelsayed9174@gmail.com',
        nationality: 'Egyptian',
        marital: 'Married',
        dob: '4/7/1991',
        license: 'Valid Driver License',
        cv: 'Download CV',
      },
      // Objective
      objective: {
        text: 'Facing challenges and achieving the highest level of professional work by joining a team that develops administrative skills and obtaining more advanced levels',
      },
      // Skills
      skills: {
        title: 'Professional Skills',
        list: [
          'Financial Reporting',
          'Accounting Systems',
          'Microsoft Office ',
          'Excel Advanced  ',
          'Tax & Zakat Preparation',
          'Supplier & Customer Account Management',
          'Financial Statement Preparation',
        ],
      },
      // Experience
      experience: {
        title: 'Work Experience',
        items: [
          {
            title: 'Accountant - Bas Company',
            location: 'Saudi Arabia',
            period: '2022 - 2025',
            responsibilities: [
              'Managing customer and supplier accounts',
              'Recording daily journal entries',
              'Preparing financial statements',
              'Tax and Zakat reports',
              'Inventory control and stock management',
            ],
          },
          {
            title: 'Accountant - Farm Company',
            location: 'Saudi Arabia',
            period: '2025 - 2026',
            responsibilities: [
              'Same accounting responsibilities',
              'Financial reporting',
              'Account tracking and reconciliation',
            ],
          },
        ],
      },
      // Education
      education: {
        title: 'Education',
        degree: 'Bachelor of Commerce',
        university: 'Beni Suef University',
        department: 'Accounting & Auditing Department',
      },
      // Certificates
      certificates: {
        title: 'Professional Certificates',
        cert1: ' Accounting & Auditing Masterclass ',
        cert2: 'ICDL',
        cert3: 'Cours English',
      },
      // Contact
      contact: {
        title: 'Contact Information',
        phone: 'Call Me',
        whatsapp: 'WhatsApp',
        email: 'Send Email',
        location: 'Riyadh, Saudi Arabia',
      },
      // Languages
      languages: {
        title: 'Languages',
        arabic: 'Arabic (Native)',
        english: 'English (Good)',
      },
      footer: {
        text: '© 2024 Ahmed Elsayed - Professional Accountant. All rights reserved.',
      },
    },
  },
  ar: {
    translation: {
      // Navbar
      nav: {
        home: 'الرئيسية',
        objective: 'الهدف',
        skills: 'المهارات',
        experience: 'الخبرات',
        education: 'التعليم',
        certificates: 'الشهادات',
        contact: 'اتصل بي',
        name:"أحمد السيد "
      },
      // Hero
      hero: {
        name: 'أحمد السيد',
        title: 'محاسب محترف',
        location: 'الرياض، المملكة العربية السعودية',
        phone: '0592060065',
        email: 'ahmedelsayed9174@gmail.com',
        nationality: 'مصري',
        marital: 'متزوج',
        dob: '4/7/1991',
        license: 'رخصة قيادة سارية',
        cv: 'تحميل السيرة الذاتية',
      },
      // Objective
      objective: {
        text: 'تحديات اجتياز وتحقيق أجل من وذلك المستوى وعالي احترافي عمل فريق إلى الانضمام وتطوير المهارات الإدارية والحصول على المزيد من المستويات',
      },
      // Skills
      skills: {
        title: 'المهارات المهنية',
        list: [
          'التقارير المالية',
          'النظم المحاسبية',
          'مايكروسوفت أوفيس ',
          ' أكسل متقدم ',
          'إعداد الضرائب والزكاة',
          'إدارة حسابات الموردين والعملاء',
          'إعداد القوائم المالية',
        ],
      },
      // Experience
      experience: {
        title: 'الخبرات العملية',
        items: [
          {
            title: 'محاسب - شركة باس',
            location: 'المملكة العربية السعودية',
            period: '2022 - 2025',
            responsibilities: [
              'إدارة حسابات العملاء والموردين',
              'تسجيل القيود اليومية',
              'إعداد القوائم المالية',
              'تقارير الضرائب والزكاة',
              'مراقبة المخزون وإدارة المخزون',
            ],
          },
          {
            title: 'محاسب - شركة فارم',
            location: 'المملكة العربية السعودية',
            period: '2025 - 2026',
            responsibilities: ['نفس المسؤوليات المحاسبية', 'التقارير المالية', 'تتبع الحسابات والتسويات'],
          },
        ],
      },
      // Education
      education: {
        title: 'التعليم',
        degree: 'بكالوريوس التجارة',
        university: 'جامعة بني سويف',
        department: 'قسم المحاسبة والمراجعة',
      },
      // Certificates
      certificates: {
        title: 'الشهادات المهنية',
        cert1: 'شهادة المحاسبة والمراجعة',
        cert2: ' الرخصة الدولية لقيادة الحاسب الالي',
        cert3: 'دورة في اللغة الانجليزية',
      },
      // Contact
      contact: {
        title: 'معلومات الاتصال',
        phone: 'اتصل بي',
        whatsapp: 'واتساب',
        email: 'أرسل بريداً',
        location: 'الرياض، المملكة العربية السعودية',
      },
      // Languages
      languages: {
        title: 'اللغات',
        arabic: 'العربية (لغة أم)',
        english: 'الإنجليزية (جيد)',
      },
      footer: {
        text: '© ٢٠٢٤ أحمد السيد - محاسب محترف. جميع الحقوق محفوظة',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;