import { useTranslation } from '@/hooks/useTranslation';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'students' | 'tutors'>('students');

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

    const stepVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'backOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: -50,
            transition: { duration: 0.3 },
        },
    };


    const studentSteps = [
        {
            number: 1,
            title: t('howItWorks.students.step1.title'),
            description: t('howItWorks.students.step1.description'),
            color: 'from-autumn-golden to-autumn-orange',
        },
        {
            number: 2,
            title: t('howItWorks.students.step2.title'),
            description: t('howItWorks.students.step2.description'),
            color: 'from-autumn-orange to-autumn-red',
        },
        {
            number: 3,
            title: t('howItWorks.students.step3.title'),
            description: t('howItWorks.students.step3.description'),
            color: 'from-autumn-red to-autumn-golden',
        },
    ];

    const tutorSteps = [
        {
            number: 1,
            title: t('howItWorks.tutors.step1.title'),
            description: t('howItWorks.tutors.step1.description'),
            color: 'from-autumn-golden to-autumn-orange',
        },
        {
            number: 2,
            title: t('howItWorks.tutors.step2.title'),
            description: t('howItWorks.tutors.step2.description'),
            color: 'from-autumn-orange to-autumn-red',
        },
        {
            number: 3,
            title: t('howItWorks.tutors.step3.title'),
            description: t('howItWorks.tutors.step3.description'),
            color: 'from-autumn-red to-autumn-golden',
        },
    ];

    const currentSteps = activeTab === 'students' ? studentSteps : tutorSteps;

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-autumn-cream/30 to-background py-20" id="how-it-works">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 opacity-15">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-xl"
                        style={{
                            left: `${5 + i * 8}%`,
                            top: `${10 + (i % 4) * 20}%`,
                        }}
                    >
                        {['🍂', '🍁', '🌰', '🍄'][i % 4]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            How It{' '}
                            <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                Works
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Your autumn learning journey made simple and fun</p>
                    </motion.div>

                    {/* Tab Selector */}
                    <motion.div variants={itemVariants} className="mb-12 flex justify-center">
                        <div className="rounded-2xl border border-border bg-card p-2 shadow-lg">
                            <div className="flex space-x-1">
                                {['students', 'tutors'].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as 'students' | 'tutors')}
                                        className={`relative rounded-xl px-6 py-3 font-semibold transition-all duration-300 cursor-pointer ${
                                            activeTab === tab ? 'text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-xl bg-primary"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative">
                                            {tab === 'students' ? t('howItWorks.students.title') : t('howItWorks.tutors.title')}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Steps */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {currentSteps.map((step, index) => (
                                <motion.div
                                    key={`${activeTab}-${index}`}
                                    variants={stepVariants}
                                    className="group relative"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
                                        {/* Background gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-5`}></div>


                                        <div className="relative z-10">

                                            {/* Step content */}
                                            <div className="text-center py-6">
                                                <h3 className="mb-6 text-2xl leading-tight font-bold text-foreground">{step.title}</h3>
                                                <p className="text-base font-medium text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>

                                            {/* Connecting arrow (except for last step) */}
                                            {index < currentSteps.length - 1 && (
                                                <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 transform md:block">
                                                    <div className="text-2xl text-primary">→</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom CTA */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <p className="mb-4 text-lg font-medium text-muted-foreground">
                            Ready to start your journey? Join thousands of learners today!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
