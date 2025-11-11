import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

// Hooks
import { useTranslation } from '@/hooks/useTranslation';

interface StartFreeTrialProps {
  title?: string;
}

const StartFreeTrial: React.FC<StartFreeTrialProps> = ({ title = 'Start Free Trial - Top Talks' }) => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    student_age: '',
    plan: 'standard',
    learning_goals: '',
    preferred_schedule: '',
    experience_level: 'beginner',
  });

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$49/month',
      lessons: '4 lessons',
      description: 'Perfect for beginners',
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: '$89/month',
      lessons: '8 lessons',
      description: 'Most popular choice',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$139/month',
      lessons: '12 lessons',
      description: 'For serious learners',
    },
  ];

  const benefits = [
    {
      icon: '🎓',
      title: '7-Day Free Trial',
      description: 'Try any plan risk-free for a week',
    },
    {
      icon: '✨',
      title: 'No Credit Card',
      description: 'Start without payment details',
    },
    {
      icon: '🌟',
      title: 'Expert Teachers',
      description: 'Learn from certified professionals',
    },
    {
      icon: '📱',
      title: 'Flexible Schedule',
      description: 'Book lessons at your convenience',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/api/trial/submit', {
      preserveScroll: true,
      onSuccess: () => {
        // Handle success - could redirect to thank you page
        console.log('Trial signup successful');
      },
      onError: (errors) => {
        console.error('Trial signup errors:', errors);
      },
    });
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Start your free 7-day trial with Top Talks. No credit card required. Learn English with expert teachers and see the difference."
        />
        <meta name="keywords" content="free trial, English lessons, start learning, online tutoring" />
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
          <section className="relative overflow-hidden bg-gradient-to-br from-autumn-cream via-background to-autumn-golden/20 py-16">
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
                      Start Your Free Trial Today
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                    Experience the Top Talks difference with a 7-day free trial. No credit card required!
                  </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                      <div className="text-4xl mb-3">{benefit.icon}</div>
                      <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {/* Left: Plan Selection */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="lg:col-span-1"
                >
                  <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Choose Your Plan
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Select the plan that best fits your learning goals
                    </p>
                    <Link href="/pricing" className="text-primary hover:underline text-sm">
                      View detailed pricing comparison →
                    </Link>
                  </motion.div>

                  <div className="space-y-4">
                    {plans.map((plan) => (
                      <motion.div
                        key={plan.id}
                        variants={itemVariants}
                        onClick={() => {
                          setSelectedPlan(plan.id);
                          setData('plan', plan.id);
                        }}
                        className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                          selectedPlan === plan.id
                            ? 'border-primary bg-primary/5 shadow-lg'
                            : 'border-border bg-card hover:border-primary/50'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 right-4">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                              Popular
                            </span>
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                        <p className="text-2xl font-bold text-primary mb-2">{plan.price}</p>
                        <p className="text-muted-foreground text-sm mb-1">{plan.lessons} per month</p>
                        <p className="text-muted-foreground text-sm">{plan.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Registration Form */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Your Information
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Parent/Guardian Name */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Parent/Guardian Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Enter your full name"
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={data.email}
                          onChange={(e) => setData('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="your@email.com"
                          required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </motion.div>

                      {/* Phone */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={data.phone}
                          onChange={(e) => setData('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </motion.div>

                      {/* Student Age */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="student_age" className="block text-sm font-semibold text-foreground mb-2">
                          Student Age *
                        </label>
                        <select
                          id="student_age"
                          value={data.student_age}
                          onChange={(e) => setData('student_age', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        >
                          <option value="">Select age range</option>
                          <option value="5-7">5-7 years old</option>
                          <option value="8-10">8-10 years old</option>
                          <option value="11-13">11-13 years old</option>
                          <option value="14-16">14-16 years old</option>
                          <option value="17+">17+ years old</option>
                        </select>
                      </motion.div>

                      {/* Experience Level */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="experience_level" className="block text-sm font-semibold text-foreground mb-2">
                          English Experience Level *
                        </label>
                        <select
                          id="experience_level"
                          value={data.experience_level}
                          onChange={(e) => setData('experience_level', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </motion.div>

                      {/* Learning Goals */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="learning_goals" className="block text-sm font-semibold text-foreground mb-2">
                          Learning Goals
                        </label>
                        <textarea
                          id="learning_goals"
                          value={data.learning_goals}
                          onChange={(e) => setData('learning_goals', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                          rows={4}
                          placeholder="Tell us about your learning goals and what you'd like to achieve..."
                        />
                      </motion.div>

                      {/* Preferred Schedule */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="preferred_schedule" className="block text-sm font-semibold text-foreground mb-2">
                          Preferred Schedule
                        </label>
                        <select
                          id="preferred_schedule"
                          value={data.preferred_schedule}
                          onChange={(e) => setData('preferred_schedule', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 9PM)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={itemVariants} className="pt-4">
                        <Button
                          type="submit"
                          size="xl"
                          className="w-full shadow-lg"
                          disabled={processing}
                        >
                          {processing ? 'Starting Your Trial...' : 'Start My Free Trial'}
                        </Button>
                        <p className="text-sm text-muted-foreground text-center mt-4">
                          By starting your trial, you agree to our Terms of Service and Privacy Policy
                        </p>
                      </motion.div>
                    </form>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* What Happens Next Section */}
          <section className="py-20 bg-gradient-to-b from-background to-autumn-cream/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What Happens Next?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Here's what you can expect after signing up
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Instant Confirmation</h3>
                      <p className="text-muted-foreground">
                        You'll receive a confirmation email immediately with your account details and next steps.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Teacher Matching</h3>
                      <p className="text-muted-foreground">
                        Within 24 hours, we'll match you with the perfect teacher based on your preferences and goals.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-autumn-golden rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Schedule First Lesson</h3>
                      <p className="text-muted-foreground">
                        Book your first lesson at a time that works best for you through our easy-to-use platform.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-autumn-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Start Learning!</h3>
                      <p className="text-muted-foreground">
                        Begin your English learning journey with your dedicated teacher. Enjoy your 7-day trial!
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What Our Students Say
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Join thousands of satisfied learners
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                        👧
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">Emma S.</h4>
                        <p className="text-sm text-muted-foreground">Age 11, Canada</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "The free trial convinced me right away! My teacher is amazing and I'm learning so much."
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-2xl">
                        👦
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">David K.</h4>
                        <p className="text-sm text-muted-foreground">Age 13, Japan</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "Started with the trial and immediately upgraded to premium. Best decision ever!"
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-autumn-golden/20 rounded-full flex items-center justify-center text-2xl">
                        👧
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-foreground">Sofia R.</h4>
                        <p className="text-sm text-muted-foreground">Age 9, Brazil</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "The platform is so easy to use and the lessons are really fun. I look forward to every class!"
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default StartFreeTrial;
