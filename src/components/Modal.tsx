import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cn } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className,
  showCloseButton = true 
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn(
                "bg-white dark:bg-neutral-900 rounded-2xl shadow-xl w-full max-w-lg border border-neutral-200 dark:border-neutral-800 pointer-events-auto overflow-hidden",
                className
              )}
            >
              <div className="p-6">
                {(title || showCloseButton) && (
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      {title && (
                        typeof title === 'string' ? (
                          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                            {title}
                          </h3>
                        ) : title
                      )}
                    </div>
                    {showCloseButton && (
                      <button
                        onClick={onClose}
                        className="p-1 text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <Cross2Icon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                )}
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
