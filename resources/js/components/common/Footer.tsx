import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };


  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700 text-slate-100">
      {/* Static background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}px`,
            }}
          >
            {['🍂', '🍁', '🌰'][i % 3]}
          </div>
        ))}
      </div>

      <div className="relative">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-2xl font-bold text-white">
                Top Talks
              </div>
              <p className="text-slate-300 max-w-sm">
                Making English learning a fun autumn adventure for students and teachers around the world.
              </p>
              <div className="text-sm text-slate-400">
                Made with care for learners everywhere
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <motion.a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t('navigation.home')}
                </motion.a>
                <motion.a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t('navigation.about')}
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t('navigation.contact')}
                </motion.a>
                <motion.a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  For Students
                </motion.a>
                <motion.a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  For Teachers
                </motion.a>
              </nav>
            </motion.div>

            {/* Statistics */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Community</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-white">10,000+</div>
                  <div className="text-sm text-slate-400">Happy Learners</div>
                </div>
                <div>
                  <div className="font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Caring Teachers</div>
                </div>
                <div>
                  <div className="font-bold text-white">50+</div>
                  <div className="text-sm text-slate-400">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-600 space-y-4 md:space-y-0"
          >
            <div className="text-sm text-slate-400">
              {t('footer.copyright')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {t('footer.privacy')}
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {t('footer.terms')}
              </motion.a>
              <div className="text-slate-400">
                Follow us on social media
              </div>
            </div>
          </motion.div>

          {/* Seasonal Message */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-6 p-4 bg-slate-700/50 rounded-2xl"
          >
            <p className="text-sm text-slate-300 italic">
              "Learning English is like collecting autumn leaves - every word you gather makes your knowledge more beautiful."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;