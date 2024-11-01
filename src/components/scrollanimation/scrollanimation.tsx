import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const bounceVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.7
    }
  }
};

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className = "" }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: "0px 0px -100px 0px" // This will trigger animation slightly before the element comes into view
  });

  return (
    <motion.div
      ref={ref}
      variants={bounceVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;