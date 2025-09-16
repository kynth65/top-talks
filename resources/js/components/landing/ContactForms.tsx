import { useTranslation } from '@/hooks/useTranslation';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../common/Button';

const ContactForms: React.FC = () => {
    const { t, availableLanguages } = useTranslation();
    const [activeForm, setActiveForm] = useState<'newsletter' | 'earlyAccess' | 'contact'>('newsletter');
    const [formStates, setFormStates] = useState({
        newsletter: { submitted: false, loading: false },
        earlyAccess: { submitted: false, loading: false },
        contact: { submitted: false, loading: false },
    });

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

    const handleSubmit = async (formType: 'newsletter' | 'earlyAccess' | 'contact', data: any) => {
        setFormStates((prev) => ({
            ...prev,
            [formType]: { submitted: false, loading: true },
        }));

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setFormStates((prev) => ({
            ...prev,
            [formType]: { submitted: true, loading: false },
        }));

        // Reset after 3 seconds
        setTimeout(() => {
            setFormStates((prev) => ({
                ...prev,
                [formType]: { submitted: false, loading: false },
            }));
        }, 3000);
    };

    const forms = [
        {
            id: 'newsletter',
            title: t('forms.newsletter.title'),
            icon: Mail,
            color: 'from-autumn-golden to-autumn-orange',
        },
        {
            id: 'earlyAccess',
            title: t('forms.earlyAccess.title'),
            icon: Clock,
            color: 'from-autumn-orange to-autumn-red',
        },
        {
            id: 'contact',
            title: t('forms.contact.title'),
            icon: MessageCircle,
            color: 'from-autumn-red to-autumn-golden',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-autumn-cream/20 to-background py-20" id="contact">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-xl"
                        style={{
                            left: `${15 + i * 10}%`,
                            top: `${10 + (i % 3) * 30}%`,
                        }}
                    >
                        {['🍂', '🍁', '🌰'][i % 3]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Let's{' '}
                            <span className="bg-gradient-to-r from-autumn-golden via-autumn-orange to-autumn-red bg-clip-text text-transparent">
                                Connect
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                            Join our autumn learning community and start your English adventure today!
                        </p>
                    </motion.div>

                    <div className="mx-auto max-w-4xl">
                        {/* Form Selector */}
                        <motion.div variants={itemVariants} className="mb-12 flex justify-center">
                            <div className="rounded-2xl border border-border bg-card p-2 shadow-lg">
                                <div className="flex space-x-1">
                                    {forms.map((form) => {
                                        const Icon = form.icon;
                                        return (
                                            <motion.button
                                                key={form.id}
                                                onClick={() => setActiveForm(form.id as any)}
                                                className={`relative flex items-center space-x-2 rounded-xl px-4 py-3 font-semibold transition-all duration-300 cursor-pointer ${
                                                    activeForm === form.id
                                                        ? 'text-primary-foreground shadow-md'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {activeForm === form.id && (
                                                    <motion.div
                                                        layoutId="activeFormTab"
                                                        className={`absolute inset-0 bg-gradient-to-r ${form.color} rounded-xl`}
                                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                                <span className="relative flex items-center space-x-2">
                                                    <Icon className="h-4 w-4" />
                                                    <span className="hidden text-sm sm:inline">{form.title.split('!')[0]}</span>
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Forms */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeForm}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl"
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${forms.find((f) => f.id === activeForm)?.color} rounded-3xl opacity-5`}
                                ></div>

                                <div className="relative z-10">
                                    {/* Newsletter Form */}
                                    {activeForm === 'newsletter' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            <div className="mb-8 text-center">
                                                <h3 className="mb-2 text-2xl font-bold text-foreground">{t('forms.newsletter.title')}</h3>
                                                <p className="text-muted-foreground">Get learning tips and updates delivered to your inbox</p>
                                            </div>

                                            {!formStates.newsletter.submitted ? (
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        const formData = new FormData(e.currentTarget);
                                                        handleSubmit('newsletter', {
                                                            email: formData.get('email'),
                                                            language: formData.get('language'),
                                                        });
                                                    }}
                                                    className="space-y-6"
                                                >
                                                    <div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder={t('forms.newsletter.emailPlaceholder')}
                                                            required
                                                            className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <select
                                                            name="language"
                                                            required
                                                            className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        >
                                                            <option value="">{t('forms.newsletter.languagePlaceholder')}</option>
                                                            {availableLanguages.map((lang) => (
                                                                <option key={lang.code} value={lang.code}>
                                                                    {lang.flag} {lang.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <Button type="submit" size="lg" className="w-full" loading={formStates.newsletter.loading}>
                                                        <Mail className="mr-2 h-4 w-4" />
                                                        {t('forms.newsletter.subscribe')}
                                                    </Button>
                                                </form>
                                            ) : (
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="py-8 text-center"
                                                >
                                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                                                        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
                                                    </motion.div>
                                                    <h4 className="mb-2 text-xl font-bold text-foreground">{t('forms.newsletter.successMessage')}</h4>
                                                    <p className="text-muted-foreground">Check your email for a welcome message! </p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* Early Access Form */}
                                    {activeForm === 'earlyAccess' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            <div className="mb-8 text-center">
                                                <h3 className="mb-2 text-2xl font-bold text-foreground">{t('forms.earlyAccess.title')}</h3>
                                                <p className="text-muted-foreground">Get exclusive early access to new features and courses</p>
                                            </div>

                                            {!formStates.earlyAccess.submitted ? (
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        const formData = new FormData(e.currentTarget);
                                                        handleSubmit('earlyAccess', {
                                                            name: formData.get('name'),
                                                            email: formData.get('email'),
                                                            role: formData.get('role'),
                                                        });
                                                    }}
                                                    className="space-y-6"
                                                >
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder={t('forms.earlyAccess.namePlaceholder')}
                                                            required
                                                            className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder={t('forms.earlyAccess.emailPlaceholder')}
                                                            required
                                                            className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <select
                                                            name="role"
                                                            required
                                                            className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        >
                                                            <option value="">{t('forms.earlyAccess.rolePlaceholder')}</option>
                                                            <option value="student">Student</option>
                                                            <option value="tutor">Teacher/Tutor</option>
                                                            <option value="parent">Parent</option>
                                                        </select>
                                                    </div>

                                                    <Button
                                                        type="submit"
                                                        variant="secondary"
                                                        size="lg"
                                                        className="w-full"
                                                        loading={formStates.earlyAccess.loading}
                                                    >
                                                        <Clock className="mr-2 h-4 w-4" />
                                                        Get Early Access
                                                    </Button>
                                                </form>
                                            ) : (
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="py-8 text-center"
                                                >
                                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                                                        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-secondary" />
                                                    </motion.div>
                                                    <h4 className="mb-2 text-xl font-bold text-foreground">You're on the list!</h4>
                                                    <p className="text-muted-foreground">We'll notify you as soon as we launch new features!</p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* Contact Form */}
                                    {activeForm === 'contact' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            <div className="mb-8 text-center">
                                                <h3 className="mb-2 text-2xl font-bold text-foreground">{t('forms.contact.title')}</h3>
                                                <p className="text-muted-foreground">We'd love to hear from you! Send us a message</p>
                                            </div>

                                            {!formStates.contact.submitted ? (
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        const formData = new FormData(e.currentTarget);
                                                        handleSubmit('contact', {
                                                            name: formData.get('name'),
                                                            email: formData.get('email'),
                                                            subject: formData.get('subject'),
                                                            message: formData.get('message'),
                                                        });
                                                    }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder={t('forms.contact.namePlaceholder')}
                                                            required
                                                            className="rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder={t('forms.contact.emailPlaceholder')}
                                                            required
                                                            className="rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                        />
                                                    </div>

                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder={t('forms.contact.subjectPlaceholder')}
                                                        required
                                                        className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                    />

                                                    <textarea
                                                        name="message"
                                                        rows={4}
                                                        placeholder={t('forms.contact.messagePlaceholder')}
                                                        required
                                                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                                    />

                                                    <Button
                                                        type="submit"
                                                        variant="accent"
                                                        size="lg"
                                                        className="w-full"
                                                        loading={formStates.contact.loading}
                                                    >
                                                        <Send className="mr-2 h-4 w-4" />
                                                        {t('forms.contact.send')}
                                                    </Button>
                                                </form>
                                            ) : (
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="py-8 text-center"
                                                >
                                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                                                        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-accent" />
                                                    </motion.div>
                                                    <h4 className="mb-2 text-xl font-bold text-foreground">Message sent!</h4>
                                                    <p className="text-muted-foreground">We'll get back to you within 24 hours!</p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForms;
