import { type ReactNode, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Card.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export default function CardDraggable({ children, className = '', style = {}, title }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setIsMounted(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) return null;

  const safeStyle = typeof style === 'object' && style !== null ? style : {};

  if (isMobile) {
    return (
      <div className={`${styles.card} ${className}`} style={safeStyle}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${styles.card} ${className}`}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        willChange: 'transform',
        ...safeStyle,
      }}
      drag
      dragElastic={0}
      dragTransition={{ power: 0.05, timeConstant: 50 }}
      whileTap={{ scale: 1.02, rotate: Math.random() * 6 - 3 }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </motion.div>
  );
}
