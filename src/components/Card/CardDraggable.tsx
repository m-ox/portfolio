import { type ReactNode } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Card.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export default function CardDraggable({ children, className = '', style = {}, title }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        willChange: 'transform',
      }}
      drag
      // dragMomentum={false}
      dragElastic={0}
      dragTransition={{ power: 0.05, timeConstant: 50 }}
      whileTap={{ scale: 1.02, rotate: Math.random() * 6 - 3 }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </motion.div>
  );
}
