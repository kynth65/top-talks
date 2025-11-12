import { useTranslation } from '@/hooks/useTranslation';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';
import Button from '../common/Button';

const Hero: React.FC = () => {
    const { t } = useTranslation();

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
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-autumn-cream via-background to-autumn-golden/20">
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
                    {/* Left Content */}
                    <motion.div className="space-y-8 text-center lg:text-left order-2 lg:order-1" variants={containerVariants} initial="hidden" animate="visible">
                        {/* Main Headline */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl leading-tight font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                    {t('hero.headline')}
                                </span>
                            </h1>
                            <motion.p className="mx-auto lg:mx-0 max-w-3xl text-xl text-muted-foreground sm:text-2xl md:text-3xl" variants={itemVariants}>
                                {t('hero.subheading')}
                            </motion.p>
                        </motion.div>

                        {/* Call-to-Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/student-services">
                                    <Button
                                        size="xl"
                                        className="w-full shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-auto"
                                    >
                                        {t('hero.cta_student')}
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/start-teaching">
                                    <Button
                                        variant="secondary"
                                        size="xl"
                                        className="w-full shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-auto"
                                    >
                                        {t('hero.cta_tutor')}
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Encouragement text */}
                        <motion.div variants={itemVariants} className="mt-12">
                            <p className="text-lg font-medium text-muted-foreground">{t('hero.encouragement')}</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.img
                            src="/images/teacher_wearing_denim.png"
                            alt="Professional teacher ready to help students learn"
                            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-3xl shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Decorative elements around the image */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-autumn-golden rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-autumn-orange/30 rounded-full opacity-80"></div>
                        <div className="absolute top-1/2 -left-8 w-6 h-6 bg-autumn-red/40 rounded-full opacity-70"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
