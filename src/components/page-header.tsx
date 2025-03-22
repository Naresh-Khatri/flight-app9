"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: 'default' | 'large';
}

export function PageHeader({ 
  title, 
  description, 
  subtitle,
  align = 'left',
  size = 'default'
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_25%,rgba(68,68,68,.05)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.05)_75%)] bg-[length:24px_24px]" />
      </div>

      <div className={`
        relative
        max-w-7xl 
        mx-auto 
        px-4 
        sm:px-6 
        lg:px-8 
        ${size === 'large' ? 'py-20 md:py-28' : 'py-12 md:py-16'}
        ${align === 'center' ? 'text-center' : 'text-left'}
      `}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {subtitle && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4 justify-center"
            >
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {subtitle}
              </span>
              <div className="h-px w-8 bg-primary/60" />
            </motion.div>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`
              font-bold 
              tracking-tight 
              bg-gradient-to-r 
              from-gray-900 
              via-gray-800 
              to-gray-700 
              bg-clip-text 
              text-transparent
              ${size === 'large' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'}
            `}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`
                mt-4 
                text-gray-600 
                ${size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'}
                ${align === 'center' ? 'mx-auto max-w-2xl' : ''}
              `}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-24 h-24 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

