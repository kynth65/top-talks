import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

// Hooks
import { useTranslation } from '@/hooks/useTranslation';

interface ViewPricingProps {
  title?: string;
}

const ViewPricing: React.FC<ViewPricingProps> = ({ title = 'View Pricing - Top Talks' }) => {
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

  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '$49',
      period: '/month',
      description: 'Perfect for beginners starting their English journey',
      features: [
        '4 one-on-one lessons per month',
        'Access to basic learning materials',
        'Progress tracking dashboard',
        'Email support',
        'Mobile app access',
        'Basic vocabulary exercises',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Standard Plan',
      price: '$89',
      period: '/month',
      description: 'Most popular choice for consistent learners',
      features: [
        '8 one-on-one lessons per month',
        'Premium learning materials & resources',
        'Advanced progress analytics',
        'Priority chat support',
        'Mobile & tablet app access',
        'Interactive games & activities',
        'Homework assignments',
        'Monthly progress reports',
      ],
      popular: true,
      buttonText: 'Get Started',
    },
    {
      name: 'Premium Plan',
      price: '$139',
      period: '/month',
      description: 'Comprehensive package for serious learners',
      features: [
        '12 one-on-one lessons per month',
        'All premium materials + exclusive content',
        'Real-time progress tracking',
        '24/7 priority support',
        'All device access',
        'Advanced interactive features',
        'Daily practice exercises',
        'Weekly progress reports',
        'Bonus group conversation sessions',
        'Certificate upon completion',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
  ];

  const addOnServices = [
    {
      name: 'Extra Lessons',
      price: '$15',
      period: '/lesson',
      description: 'Add individual lessons to your plan',
    },
    {
      name: 'Test Preparation',
      price: '$99',
      period: '/month',
      description: 'Specialized preparation for English proficiency tests',
    },
    {
      name: 'Group Sessions',
      price: '$29',
      period: '/month',
      description: 'Join interactive group conversation sessions',
    },
    {
      name: 'Custom Curriculum',
      price: '$199',
      period: 'one-time',
      description: 'Personalized learning path designed for your goals',
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="View Top Talks' comprehensive pricing plans for English learning. Choose from Basic, Standard, or Premium plans tailored to your learning needs."
        />
        <meta name="keywords" content="pricing, English lessons, tutoring plans, learning packages" />
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
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                    <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                      Choose Your Perfect Plan
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Flexible pricing options designed to fit every learner's needs and budget
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8">
                  <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3">
                    <span className="text-primary font-semibold">🎉 Special Offer: First lesson free on all plans!</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Pricing Plans Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                        plan.popular
                          ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary ring-1 ring-primary/20 scale-105'
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

                      <Link href="/free-trial">
                        <Button
                          className={`w-full mt-auto ${plan.popular ? 'shadow-lg' : ''}`}
                          variant={plan.popular ? 'default' : 'outline'}
                        >
                          {plan.buttonText}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    All plans include a 7-day free trial. No credit card required.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Need a custom plan? <Link href="/#contact" className="text-primary hover:underline">Contact our team</Link> for personalized pricing.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Add-On Services Section */}
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
                    Enhance Your Learning Experience
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Complement your plan with these additional services
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {addOnServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">{service.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
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
                    Frequently Asked Questions
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Can I change my plan later?</h3>
                    <p className="text-muted-foreground">
                      Yes! You can upgrade or downgrade your plan at any time. Changes will take effect in your next billing cycle.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">
                      We accept all major credit cards, PayPal, and bank transfers. All payments are secure and encrypted.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Is there a cancellation fee?</h3>
                    <p className="text-muted-foreground">
                      No cancellation fees! You can cancel your subscription at any time. Your access continues until the end of your billing period.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Do unused lessons roll over?</h3>
                    <p className="text-muted-foreground">
                      Unused lessons roll over for one month. After that, they expire to ensure active learning progress.
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
                    Ready to Start Your Learning Journey?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join thousands of students already learning with Top Talks
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/free-trial">
                      <Button size="xl" className="shadow-lg">
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button variant="outline" size="xl">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No credit card required for free trial • Cancel anytime
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

export default ViewPricing;
