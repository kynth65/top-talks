import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import React from 'react';

const SocialProof: React.FC = () => {
    const { t } = useTranslation();

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    // Sample testimonials with real student photos
    const testimonials = [
        {
            avatar: '/images/student_asian_wearing_white_shirt.png',
            name: 'Emma',
            age: 12,
            country: '🇺🇸',
            message: 'Learning with Top Talks is like playing games with friends from around the world! I love the autumn theme!',
            rating: 5,
        },
        {
            avatar: '/images/student_wearing_denimandwhite_shirt.png',
            name: 'Carlos',
            age: 10,
            country: '🇲🇽',
            message: 'My teacher is so kind and patient. Now I can speak English with my online friends!',
            rating: 5,
        },
        {
            avatar: '/images/student_asian_wearing_white_shirt.png',
            name: 'Zara',
            age: 14,
            country: '🇳🇬',
            message: "The lessons are fun and colorful. I feel like I'm collecting autumn leaves of knowledge!",
            rating: 5,
        },
        {
            avatar: '/images/student_wearing_denimandwhite_shirt.png',
            name: 'Oliver',
            age: 11,
            country: '🇬🇧',
            message: 'I made so many friends here! Learning English feels like an adventure every day!',
            rating: 5,
        },
    ];

    // Featured tutors with real teacher photos
    const featuredTutors = [
        {
            avatar: '/images/teacher_wearing_black.png',
            name: 'Sarah Johnson',
            specialty: 'Kids English',
            experience: '5 years',
            rating: 4.9,
            students: 150,
            country: '🇺🇸',
        },
        {
            avatar: '/images/teacher_wearing_denim.png',
            name: 'Miguel Rodriguez',
            specialty: 'Grammar Fun',
            experience: '4 years',
            rating: 4.8,
            students: 120,
            country: '🇪🇸',
        },
        {
            avatar: '/images/teacher_wearing_black.png',
            name: 'Amara Okafor',
            specialty: 'Speaking Confidence',
            experience: '6 years',
            rating: 4.9,
            students: 200,
            country: '🇳🇬',
        },
    ];

    const stats = [
        {
            icon: '🍂',
            number: '10,000+',
            label: t('socialProof.statistics.learners'),
            description: t('socialProof.statistics.learnersDescription'),
        },
        {
            icon: '🌰',
            number: '500+',
            label: t('socialProof.statistics.teachers'),
            description: t('socialProof.statistics.teachersDescription'),
        },
        {
            icon: '🍁',
            number: '50+',
            label: t('socialProof.statistics.countries'),
            description: t('socialProof.statistics.countriesDescription'),
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-autumn-cream/20 py-20" id="testimonials">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-xl"
                        style={{
                            left: `${10 + i * 7}%`,
                            top: `${15 + (i % 4) * 20}%`,
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
                            <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                {t('socialProof.title')}
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">{t('socialProof.subtitle')}</p>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div variants={itemVariants} className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="rounded-3xl border border-border bg-card p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
                                whileHover={{ scale: 1.05, y: -5 }}
                                variants={itemVariants}
                            >
                                <div className="mb-2 text-3xl font-bold text-primary">{stat.number}</div>
                                <div className="mb-2 text-lg font-semibold text-foreground">{stat.label}</div>
                                <div className="text-sm text-muted-foreground">{stat.description}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Testimonials */}
                    <motion.div variants={itemVariants} className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} className="group relative" whileHover={{ scale: 1.02, y: -5 }} variants={itemVariants}>
                                <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                                    {/* Speech bubble tail */}
                                    <div className="absolute -bottom-2 left-6 h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-card border-r-transparent border-l-transparent"></div>

                                    {/* Rating */}
                                    <div className="mb-3 flex justify-center">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-lg text-autumn-golden">
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* Message */}
                                    <p className="text-center text-sm leading-relaxed text-muted-foreground italic">"{testimonial.message}"</p>

                                    {/* Student info with avatar */}
                                    <div className="mt-4 flex flex-col items-center space-y-2">
                                        <img
                                            src={testimonial.avatar}
                                            alt={`${testimonial.name} - student`}
                                            className="w-12 h-12 object-cover rounded-full border-2 border-primary/20"
                                        />
                                        <div className="text-center">
                                            <div className="text-sm font-semibold text-foreground">
                                                {testimonial.name}, {testimonial.age}
                                            </div>
                                            <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Featured Tutors */}
                    <motion.div variants={itemVariants} className="mb-8 text-center">
                        <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                            <span className="text-primary">{t('socialProof.featuredTeachersTitle')}</span>
                        </h3>
                        <p className="text-muted-foreground">{t('socialProof.featuredTeachersSubtitle')}</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {featuredTutors.map((tutor, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
                                whileHover={{ scale: 1.03, y: -5 }}
                                variants={itemVariants}
                            >
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-bl from-autumn-golden/20 to-transparent blur-2xl"></div>

                                <div className="relative z-10">
                                    {/* Tutor avatar */}
                                    <div className="mb-4 flex justify-center">
                                        <img
                                            src={tutor.avatar}
                                            alt={`${tutor.name} - teacher`}
                                            className="w-20 h-20 object-cover rounded-full border-4 border-primary/20 shadow-lg"
                                        />
                                    </div>

                                    {/* Tutor info */}
                                    <h4 className="mb-2 text-lg font-bold text-foreground">
                                        {tutor.name} {tutor.country}
                                    </h4>

                                    <p className="mb-2 font-semibold text-primary">{tutor.specialty}</p>

                                    <p className="mb-4 text-sm text-muted-foreground">
                                        {tutor.experience} experience • {tutor.students}+ students
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="flex">
                                            {[...Array(Math.floor(tutor.rating))].map((_, i) => (
                                                <span key={i} className="text-autumn-golden">
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-foreground">{tutor.rating}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom encouragement */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <p className="text-lg font-medium text-muted-foreground">{t('socialProof.encouragement')}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
