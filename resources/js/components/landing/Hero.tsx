import { useTranslation } from '@/hooks/useTranslation';
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
                <motion.div className="space-y-8 text-center" variants={containerVariants} initial="hidden" animate="visible">
                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl leading-tight font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                {t('hero.headline')}
                            </span>
                        </h1>
                        <motion.p className="mx-auto max-w-3xl text-xl text-muted-foreground sm:text-2xl md:text-3xl" variants={itemVariants}>
                            {t('hero.subheading')}
                        </motion.p>
                    </motion.div>

                    {/* Call-to-Action Buttons */}
                    <motion.div variants={itemVariants} className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Button size="xl" className="w-full shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-auto">
                                {t('hero.cta_student')}
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Button
                                variant="secondary"
                                size="xl"
                                className="w-full shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-auto"
                            >
                                {t('hero.cta_tutor')}
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Encouragement text */}
                    <motion.div variants={itemVariants} className="mt-12">
                        <p className="text-lg font-medium text-muted-foreground">Your autumn learning adventure starts here!</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
