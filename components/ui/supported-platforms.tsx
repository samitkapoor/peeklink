'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, MessageCircle, Facebook } from 'lucide-react';

const SUPPORTED_PLATFORMS = [
  {
    name: 'Twitter',
    icon: Twitter,
    shortName: 'X'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    shortName: 'LI'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    shortName: 'FB'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    shortName: 'WA'
  },
  {
    name: 'Peerlist',
    icon: null,
    shortName: 'PL'
  },
  {
    name: 'Substack',
    icon: null,
    shortName: 'ST'
  }
];

const SupportedPlatforms = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.3,
        delay: 0.1
      }}
      className="flex flex-col items-center gap-2 mt-6"
    >
      <p className="text-gray-500 text-sm">Preview across platforms</p>
      <div className="flex items-center gap-3">
        {SUPPORTED_PLATFORMS.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.2,
              delay: 0.2 + index * 0.05
            }}
            className="group relative"
            title={platform.name}
          >
            <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center group-hover:border-orange-300 group-hover:bg-orange-50 transition-all duration-200">
              {platform.icon ? (
                <platform.icon className="w-4 h-4 text-gray-600 group-hover:text-orange-500 transition-colors duration-200" />
              ) : (
                <span className="text-xs font-semibold text-gray-600 group-hover:text-orange-500 transition-colors duration-200">
                  {platform.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {platform.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SupportedPlatforms;
