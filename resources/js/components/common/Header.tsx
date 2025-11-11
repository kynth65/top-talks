import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Button from './Button';

const Header: React.FC = () => {
    const { t, changeLanguage, currentLanguage, availableLanguages } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMobileMenu = () => setIsMenuOpen(false);

    const currentLangData = availableLanguages.find((lang) => lang.code === currentLanguage);

    const handleLanguageChange = (langCode: string) => {
        changeLanguage(langCode);
        setShowLangDropdown(false);
    };

    const handleNavigation = (sectionId: string) => {
        // Check if we're on the home page
        if (window.location.pathname === '/') {
            // We're on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We're on a different page, navigate to home with hash
            window.location.href = `/#${sectionId}`;
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-sm">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between sm:h-16">
                    {/* Logo */}
                    <a href="/" className="text-lg font-bold whitespace-nowrap text-primary sm:text-xl md:text-2xl">
                        Top Talks
                    </a>

                    {/* Desktop Navigation - Only on large screens */}
                    <nav className="hidden items-center space-x-6 lg:flex xl:space-x-8">
                        <a
                            href="/"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                if (window.location.pathname === '/') {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    window.location.href = '/';
                                }
                            }}
                        >
                            {t('navigation.home')}
                        </a>
                        <a
                            href="/#roles"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('roles');
                            }}
                        >
                            {t('navigation.about')}
                        </a>
                        <a
                            href="/#how-it-works"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('how-it-works');
                            }}
                        >
                            How It Works
                        </a>
                        <a
                            href="/#testimonials"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('testimonials');
                            }}
                        >
                            Reviews
                        </a>
                        <a
                            href="/#contact"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('contact');
                            }}
                        >
                            {t('navigation.contact')}
                        </a>
                        <a href="/pricing" className="font-medium text-foreground transition-colors hover:text-primary">
                            Pricing
                        </a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center space-x-4 lg:flex">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLangDropdown(!showLangDropdown)}
                                className="flex cursor-pointer items-center space-x-2 rounded-xl bg-card px-3 py-2 transition-colors hover:bg-muted"
                            >
                                <span className="text-sm font-medium">{currentLangData?.name}</span>
                            </button>

                            {showLangDropdown && (
                                <div className="absolute top-12 right-0 z-10 min-w-[140px] rounded-xl border border-border bg-card p-2 shadow-lg">
                                    {availableLanguages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={cn(
                                                'flex w-full cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 text-left transition-colors',
                                                currentLanguage === lang.code ? 'bg-primary text-primary-foreground' : 'hover:bg-muted',
                                            )}
                                        >
                                            <span className="text-sm font-medium">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Button variant="outline" size="sm">
                            {t('navigation.login')}
                        </Button>
                    </div>

                    {/* Mobile/Tablet menu button - Shows on anything smaller than lg */}
                    <button onClick={toggleMenu} className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-muted lg:hidden">
                        {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </button>
                </div>

                {/* Mobile & Tablet Navigation */}
                {isMenuOpen && (
                    <div className="mt-4 border-t border-border pt-4 pb-6 lg:hidden">
                        <div className="flex flex-col space-y-4">
                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-3">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (window.location.pathname === '/') {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        } else {
                                            window.location.href = '/';
                                        }
                                        closeMobileMenu();
                                    }}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {t('navigation.home')}
                                </a>
                                <a
                                    href="/#roles"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('roles');
                                        closeMobileMenu();
                                    }}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {t('navigation.about')}
                                </a>
                                <a
                                    href="/#how-it-works"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('how-it-works');
                                        closeMobileMenu();
                                    }}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="/#testimonials"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('testimonials');
                                        closeMobileMenu();
                                    }}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    Reviews
                                </a>
                                <a
                                    href="/#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('contact');
                                        closeMobileMenu();
                                    }}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {t('navigation.contact')}
                                </a>
                                <a
                                    href="/pricing"
                                    onClick={closeMobileMenu}
                                    className="py-2 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    Pricing
                                </a>
                            </div>

                            {/* Language Selector */}
                            <div className="flex flex-wrap gap-2 py-2">
                                {availableLanguages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={cn(
                                            'flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-colors',
                                            currentLanguage === lang.code ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted',
                                        )}
                                    >
                                        <span className="font-medium">{lang.name}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 pt-2">
                                <Button variant="outline" size="md" className="w-full">
                                    {t('navigation.login')}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Close dropdown when clicking outside */}
            {showLangDropdown && <div className="fixed inset-0 z-0" onClick={() => setShowLangDropdown(false)} />}
        </header>
    );
};

export default Header;
