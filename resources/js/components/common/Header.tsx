import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import Button from './Button';

const Header: React.FC = () => {
  const { t, changeLanguage, currentLanguage, availableLanguages } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const currentLangData = availableLanguages.find(lang => lang.code === currentLanguage);

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
    <motion.header 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl sm:text-3xl">🍂</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
              Top Talks
            </div>
          </motion.div>

          {/* Desktop Navigation - Only on large screens */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
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
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('roles');
              }}
            >
              {t('navigation.about')}
            </a>
            <a
              href="/#how-it-works"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('how-it-works');
              }}
            >
              How It Works
            </a>
            <a
              href="/#testimonials"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('testimonials');
              }}
            >
              Reviews
            </a>
            <a
              href="/#contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('contact');
              }}
            >
              {t('navigation.contact')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-card hover:bg-muted transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">{currentLangData?.name}</span>
              </motion.button>

              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute right-0 top-12 bg-card border border-border rounded-xl shadow-lg p-2 min-w-[140px] z-10"
                  >
                    {availableLanguages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={cn(
                          "w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors cursor-pointer",
                          currentLanguage === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-sm font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="outline" size="sm">
              {t('navigation.login')}
            </Button>
          </div>

          {/* Mobile/Tablet menu button - Shows on anything smaller than lg */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile & Tablet Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border mt-4 pt-4 pb-6"
            >
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
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
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
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
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
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
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
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
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
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {t('navigation.contact')}
                  </a>
                </div>

                {/* Language Selector */}
                <div className="flex flex-wrap gap-2 py-2">
                  {availableLanguages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm cursor-pointer",
                        currentLanguage === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-card hover:bg-muted"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">{lang.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <Button variant="outline" size="md" className="w-full">
                    {t('navigation.login')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Close dropdown when clicking outside */}
      {showLangDropdown && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowLangDropdown(false)} 
        />
      )}
    </motion.header>
  );
};

export default Header;