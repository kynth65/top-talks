import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import React from 'react';
import Button from '../common/Button';

const RoleSelection: React.FC = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-autumn-cream/30 py-20" id="roles">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-xl"
                        style={{
                            left: `${15 + i * 10}%`,
                            top: `${10 + (i % 4) * 22}%`,
                        }}
                    >
                        {['🍂', '🍁', '🌰', '🍄'][i % 4]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    {/* Section Header */}
                    <motion.div variants={cardVariants} className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Choose Your{' '}
                            <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                Autumn Adventure
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                            Whether you're here to learn or teach, we have the perfect path for your English journey
                        </p>
                    </motion.div>

                    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                        {/* Student Section */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -5 }} className="group">
                            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                                {/* Card background decoration */}
                                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-bl from-autumn-golden/20 to-transparent blur-2xl"></div>

                                <div className="relative z-10">
                                    <div className="mb-8 text-center">
                                        <h3 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">{t('roleSelection.student.title')}</h3>

                                        <div className="space-y-4 text-left">
                                            {[
                                                t('roleSelection.student.benefit1'),
                                                t('roleSelection.student.benefit2'),
                                                t('roleSelection.student.benefit3'),
                                            ].map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 * index }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="mt-1.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20"></div>
                                                    <p className="font-medium text-muted-foreground">{benefit}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button size="lg" className="w-full transition-all duration-300 group-hover:shadow-lg">
                                                {t('roleSelection.student.cta')}
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tutor Section */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -5 }} className="group">
                            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                                {/* Card background decoration */}
                                <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-autumn-orange/20 to-transparent blur-2xl"></div>

                                <div className="relative z-10">
                                    <div className="mb-8 text-center">
                                        <h3 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">{t('roleSelection.tutor.title')}</h3>

                                        <div className="space-y-4 text-left">
                                            {[
                                                t('roleSelection.tutor.benefit1'),
                                                t('roleSelection.tutor.benefit2'),
                                                t('roleSelection.tutor.benefit3'),
                                            ].map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 * index + 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="mt-1.5 h-6 w-6 flex-shrink-0 rounded-full bg-secondary/20"></div>
                                                    <p className="font-medium text-muted-foreground">{benefit}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                variant="secondary"
                                                size="lg"
                                                className="w-full transition-all duration-300 group-hover:shadow-lg"
                                            >
                                                {t('roleSelection.tutor.cta')}
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom encouragement */}
                    <motion.div variants={cardVariants} className="mt-16 text-center">
                        <motion.p
                            className="text-lg font-medium text-muted-foreground"
                            animate={{
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            Every great journey begins with a single step
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default RoleSelection;
