import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

// Hooks
import { useTranslation } from '@/hooks/useTranslation';

interface StudentServicesProps {
  title?: string;
}

const StudentServices: React.FC<StudentServicesProps> = ({ title = 'Student Services - Top Talks' }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const pricingPlans = [
    {
      name: t('studentServices.pricing.basic.name'),
      price: t('studentServices.pricing.basic.price'),
      period: t('studentServices.pricing.basic.period'),
      description: t('studentServices.pricing.basic.description'),
      features: [
        "4 one-on-one lessons per month",
        "Access to basic learning materials",
        "Progress tracking dashboard",
        "Email support",
        "Mobile app access",
        "Basic vocabulary exercises"
      ],
      popular: false,
      buttonText: t('studentServices.pricing.basic.buttonText')
    },
    {
      name: t('studentServices.pricing.standard.name'),
      price: t('studentServices.pricing.standard.price'),
      period: t('studentServices.pricing.standard.period'),
      description: t('studentServices.pricing.standard.description'),
      features: [
        "8 one-on-one lessons per month",
        "Premium learning materials & resources",
        "Advanced progress analytics",
        "Priority chat support",
        "Mobile & tablet app access",
        "Interactive games & activities",
        "Homework assignments",
        "Monthly progress reports"
      ],
      popular: true,
      buttonText: t('studentServices.pricing.standard.buttonText')
    },
    {
      name: t('studentServices.pricing.premium.name'),
      price: t('studentServices.pricing.premium.price'),
      period: t('studentServices.pricing.premium.period'),
      description: t('studentServices.pricing.premium.description'),
      features: [
        "12 one-on-one lessons per month",
        "All premium materials + exclusive content",
        "Real-time progress tracking",
        "24/7 priority support",
        "All device access",
        "Advanced interactive features",
        "Daily practice exercises",
        "Weekly progress reports",
        "Bonus group conversation sessions",
        "Certificate upon completion"
      ],
      popular: false,
      buttonText: t('studentServices.pricing.premium.buttonText')
    }
  ];

  const serviceFeatures = [
    {
      title: t('studentServices.services.personalizedLearning.title'),
      description: t('studentServices.services.personalizedLearning.description')
    },
    {
      title: t('studentServices.services.qualifiedTeachers.title'),
      description: t('studentServices.services.qualifiedTeachers.description')
    },
    {
      title: t('studentServices.services.interactivePlatform.title'),
      description: t('studentServices.services.interactivePlatform.description')
    },
    {
      title: t('studentServices.services.flexibleScheduling.title'),
      description: t('studentServices.services.flexibleScheduling.description')
    },
    {
      title: t('studentServices.services.progressTracking.title'),
      description: t('studentServices.services.progressTracking.description')
    },
    {
      title: t('studentServices.services.familySupport.title'),
      description: t('studentServices.services.familySupport.description')
    }
  ];

  const confidenceReasons = [
    {
      title: t('studentServices.whyChoose.provenTrack.title'),
      description: t('studentServices.whyChoose.provenTrack.description')
    },
    {
      title: t('studentServices.whyChoose.expertTeachers.title'),
      description: t('studentServices.whyChoose.expertTeachers.description')
    },
    {
      title: t('studentServices.whyChoose.innovativeMethods.title'),
      description: t('studentServices.whyChoose.innovativeMethods.description')
    },
    {
      title: t('studentServices.whyChoose.satisfaction.title'),
      description: t('studentServices.whyChoose.satisfaction.description')
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Discover Top Talks' comprehensive English learning services for students. View our pricing plans, features, and why thousands of families trust us for their children's education."
        />
        <meta name="keywords" content="English learning for kids, online tutoring, student services, English lessons, pricing plans" />
      </Head>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background"
      >
        <Header />

        <main className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-autumn-cream via-background to-autumn-golden/20 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <motion.div
                  className="relative flex justify-center lg:justify-start order-2 lg:order-1"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src="/images/student_asian_wearing_white_shirt.png"
                    alt="Happy student learning English online"
                    className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Right Content */}
                <motion.div
                  className="space-y-8 order-1 lg:order-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                        {t('studentServices.title')}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6 leading-relaxed">
                      {t('studentServices.subtitle')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                    <Button size="xl" className="shadow-lg">
                      {t('common.startFreeTrial')}
                    </Button>
                    <Button variant="outline" size="xl">
                      {t('common.viewPricing')}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('studentServices.whyChoose.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t('studentServices.whyChoose.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {confidenceReasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-4">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Service Features Section */}
          <section className="py-20 bg-gradient-to-b from-background to-autumn-cream/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('studentServices.services.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t('studentServices.services.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('studentServices.pricing.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t('studentServices.pricing.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                        plan.popular
                          ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary ring-1 ring-primary/20'
                          : 'bg-card border border-border'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                          <span className="text-muted-foreground ml-2">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full mt-auto ${plan.popular ? 'shadow-lg' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    {t('studentServices.pricing.trialNote')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('studentServices.pricing.customNote')}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* How to Get Started Section */}
          <section className="py-20 bg-gradient-to-b from-autumn-cream/20 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('studentServices.howToStart.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('studentServices.howToStart.subtitle')}
                  </p>
                </motion.div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{t('studentServices.howToStart.step1.title')}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {t('studentServices.howToStart.step1.description')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('studentServices.howToStart.step1.details')}
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{t('studentServices.howToStart.step2.title')}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {t('studentServices.howToStart.step2.description')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('studentServices.howToStart.step2.details')}
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-autumn-golden rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{t('studentServices.howToStart.step3.title')}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {t('studentServices.howToStart.step3.description')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('studentServices.howToStart.step3.details')}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Student Success Stories */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('studentServices.successStories.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('studentServices.successStories.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src="/images/student_wearing_denimandwhite_shirt.png"
                        alt="Student success story"
                        className="w-12 h-12 object-cover rounded-full border-2 border-primary/20"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">Sarah M.</h4>
                        <p className="text-sm text-muted-foreground">Age 12, USA</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "My English improved so much in just 3 months! My teacher makes learning fun with games and stories. Now I can talk with my international friends online!"
                    </p>
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-primary">Improved from Beginner to Intermediate</span>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src="/images/student_asian_wearing_white_shirt.png"
                        alt="Student success story"
                        className="w-12 h-12 object-cover rounded-full border-2 border-primary/20"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">Alex K.</h4>
                        <p className="text-sm text-muted-foreground">Age 14, South Korea</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Top Talks helped me pass my English exam with flying colors! The personalized lessons and practice tests were exactly what I needed."
                    </p>
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-primary">Achieved 95% on English Proficiency Exam</span>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src="/images/student_wearing_denimandwhite_shirt.png"
                        alt="Student success story"
                        className="w-12 h-12 object-cover rounded-full border-2 border-primary/20"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">Maria L.</h4>
                        <p className="text-sm text-muted-foreground">Age 10, Mexico</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "I love my English lessons! My teacher is so patient and kind. We play games and read fun stories. Learning English is my favorite time of the day!"
                    </p>
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-primary">Gained Confidence in Speaking</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-autumn-golden/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center max-w-3xl mx-auto"
              >
                <motion.div variants={itemVariants} className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t('studentServices.cta.title')}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {t('studentServices.cta.subtitle')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="xl" className="shadow-lg">
                      {t('common.startFreeTrial')}
                    </Button>
                    <Button variant="outline" size="xl">
                      {t('common.scheduleConsultation')}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('studentServices.cta.note')}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default StudentServices;