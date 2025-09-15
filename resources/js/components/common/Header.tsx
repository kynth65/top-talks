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

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl">🍂</div>
            <div className="text-2xl font-bold text-primary">
              Top Talks
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('navigation.home')}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('navigation.about')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('navigation.contact')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-card hover:bg-muted transition-colors"
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
                          "w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors",
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
            <Button size="sm">
              {t('navigation.register')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border mt-4 pt-4 pb-6"
            >
              <div className="flex flex-col space-y-4">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-3">
                  <a 
                    href="#" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {t('navigation.home')}
                  </a>
                  <a 
                    href="#about" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {t('navigation.about')}
                  </a>
                  <a 
                    href="#contact" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {t('navigation.contact')}
                  </a>
                </div>

                {/* Mobile Language Selector */}
                <div className="flex flex-wrap gap-2 py-2">
                  {availableLanguages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm",
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

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-2">
                  <Button variant="outline" size="md" className="w-full">
                    {t('navigation.login')}
                  </Button>
                  <Button size="md" className="w-full">
                    {t('navigation.register')}
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