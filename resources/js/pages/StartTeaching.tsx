import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

// Hooks
import { useTranslation } from '@/hooks/useTranslation';

interface StartTeachingProps {
  title?: string;
}

const StartTeaching: React.FC<StartTeachingProps> = ({ title = 'Start Teaching - Top Talks' }) => {
  const { t } = useTranslation();

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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Join Top Talks as an English teacher. Learn about our application process, requirements, and how to start your teaching journey with us."
        />
        <meta name="keywords" content="English teaching, online tutoring, teacher application, Top Talks careers" />
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
                {/* Left Content */}
                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                        {t('startTeaching.title')}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6 leading-relaxed">
                      {t('startTeaching.subtitle')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                    <Button size="xl" className="shadow-lg">
                      {t('common.applyNow')}
                    </Button>
                    <Button variant="outline" size="xl">
                      {t('common.learnMore')}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  className="relative flex justify-center lg:justify-end"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src="/images/teacher_wearing_black.png"
                    alt="Professional teacher ready to inspire students"
                    className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Application Process Section */}
          <section className="py-20 bg-background">
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
                    {t('startTeaching.howToApply.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('startTeaching.howToApply.subtitle')}
                  </p>
                </motion.div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t('startTeaching.howToApply.step1.title')}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {t('startTeaching.howToApply.step1.description')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('startTeaching.howToApply.step1.details')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t('startTeaching.howToApply.step2.title')}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {t('startTeaching.howToApply.step2.description')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('startTeaching.howToApply.step2.details')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-autumn-golden rounded-full flex items-center justify-center text-white font-bold text-lg">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t('startTeaching.howToApply.step3.title')}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {t('startTeaching.howToApply.step3.description')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('startTeaching.howToApply.step3.details')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-autumn-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t('startTeaching.howToApply.step4.title')}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {t('startTeaching.howToApply.step4.description')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('startTeaching.howToApply.step4.details')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 5 */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-autumn-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                          5
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t('startTeaching.howToApply.step5.title')}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {t('startTeaching.howToApply.step5.description')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('startTeaching.howToApply.step5.details')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-20 bg-gradient-to-b from-background to-autumn-cream/20">
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
                    {t('startTeaching.requirements.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('startTeaching.requirements.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Essential Requirements */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-foreground mb-6">{t('startTeaching.requirements.essential.title')}</h3>
                    <div className="space-y-4">
                      {(t('startTeaching.requirements.essential.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Preferred Qualifications */}
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-foreground mb-6">{t('startTeaching.requirements.preferred.title')}</h3>
                    <div className="space-y-4">
                      {(t('startTeaching.requirements.preferred.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-background">
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
                    {t('startTeaching.benefits.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('startTeaching.benefits.subtitle')}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.flexibleSchedule.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.flexibleSchedule.description')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.competitivePay.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.competitivePay.description')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.professionalDevelopment.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.professionalDevelopment.description')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.globalCommunity.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.globalCommunity.description')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.technicalSupport.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.technicalSupport.description')}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('startTeaching.benefits.curriculumProvided.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('startTeaching.benefits.curriculumProvided.description')}
                    </p>
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
                    {t('startTeaching.cta.title')}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {t('startTeaching.cta.subtitle')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="xl" className="shadow-lg">
                      {t('common.applyNow')}
                    </Button>
                    <Button variant="outline" size="xl">
                      {t('common.contactUs')}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('startTeaching.cta.note')}
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

export default StartTeaching;