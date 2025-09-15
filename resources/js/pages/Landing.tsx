import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Landing Page Components
import Hero from '../components/landing/Hero';
import RoleSelection from '../components/landing/RoleSelection';
import HowItWorks from '../components/landing/HowItWorks';
import SocialProof from '../components/landing/SocialProof';
import ContactForms from '../components/landing/ContactForms';

// Hooks
import { useTranslation } from '@/hooks/useTranslation';

interface LandingProps {
  title?: string;
}

const Landing: React.FC<LandingProps> = ({ title = 'Top Talks - Learn English the Fun Way!' }) => {
  const { t, currentLanguage } = useTranslation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Generate dynamic meta description based on language
  const getMetaDescription = () => {
    const descriptions: Record<string, string> = {
      en: "Join Top Talks' autumn learning adventure! Learn English with caring teachers, make friends worldwide, and enjoy fun games. Perfect for students and tutors.",
      zh: "加入Top Talks的秋天学习冒险！与关爱的老师学习英语，结交世界各地的朋友，享受有趣的游戏。",
      ko: "Top Talks의 가을 학습 모험에 참여하세요! 따뜻한 선생님과 영어를 배우고, 전 세계 친구들을 만나며, 재미있는 게임을 즐기세요.",
      es: "¡Únete a la aventura de aprendizaje de otoño de Top Talks! Aprende inglés con maestros cariñosos, haz amigos en todo el mundo y disfruta juegos divertidos.",
    };
    return descriptions[currentLanguage] || descriptions.en;
  };

  const getTitle = () => {
    const titles: Record<string, string> = {
      en: "Top Talks - Learn English the Fun Way! 🍂",
      zh: "Top Talks - 有趣地学英语！🍂",
      ko: "Top Talks - 재미있게 영어를 배워요! 🍂",
      es: "Top Talks - ¡Aprende Inglés de Manera Divertida! 🍂",
    };
    return titles[currentLanguage] || titles.en;
  };

  return (
    <>
      <Head>
        <title>{getTitle()}</title>
        <meta 
          name="description" 
          content={getMetaDescription()} 
        />
        <meta name="keywords" content="English learning, online tutors, kids education, language learning, autumn theme, Top Talks" />
        <meta name="author" content="Top Talks" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={getTitle()} />
        <meta property="og:description" content={getMetaDescription()} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Top Talks" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getTitle()} />
        <meta name="twitter:description" content={getMetaDescription()} />
        
        {/* Language and locale */}
        <meta property="og:locale" content={currentLanguage} />
        <html lang={currentLanguage} />
        
        {/* Favicon and theme */}
        <meta name="theme-color" content="#FAB12F" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext y='32' font-size='32'%3E🍂%3C/text%3E%3C/svg%3E" />
        
        {/* Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts - Nunito and Poppins for autumn theme */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Top Talks",
            "description": getMetaDescription(),
            "url": window.location.href,
            "logo": "🍂",
            "sameAs": [],
            "offers": {
              "@type": "Offer",
              "category": "Education",
              "description": "Online English learning platform"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": ["Students", "Teachers", "Parents"]
            }
          })}
        </script>
      </Head>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background"
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* Role Selection Section */}
          <RoleSelection />

          {/* How It Works Section */}
          <HowItWorks />

          {/* Social Proof / Testimonials Section */}
          <SocialProof />

          {/* Contact Forms Section */}
          <ContactForms />

          {/* Back to Top Button */}
          <motion.button
            className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg z-40 transition-colors duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            🍂
          </motion.button>

          {/* Static decorative elements */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            <div className="absolute top-10 right-10 text-2xl">🍂</div>
            <div className="absolute bottom-20 left-20 text-xl">🍁</div>
            <div className="absolute top-1/3 left-10 text-lg">🌰</div>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Loading overlay for page transitions */}
        <motion.div
          className="fixed inset-0 bg-background z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="text-6xl"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🍂
            </motion.div>
            <p className="text-muted-foreground font-medium">
              {t('common.loading')}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Landing;