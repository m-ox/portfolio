import { type ReactNode, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Card.module.scss';
import { useStore } from '../../store/store';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export default function CardCL({ children, className = '', style = {}, title }: Props) {
  const motionEnabled = useStore((s) => s.motion);
  const isMobile = useStore((s) => s.isMobile);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const safeStyle = typeof style === 'object' && style !== null ? style : {};
  const resolvedStyle: React.CSSProperties = {
    ...(isMobile ? {} : { position: 'relative', zIndex: -1 }),
    ...safeStyle,
  };

  const CardTag = isMobile || !motionEnabled ? 'div' : motion.div;

  return (
    <CardTag
      className={`${styles.card} ${className}`}
      {...(CardTag === motion.div
        ? {
            style: {
              x,
              y,
              rotateX,
              rotateY,
              willChange: 'transform',
              ...resolvedStyle,
            },
            drag: true,
            dragElastic: 0,
            dragTransition: { power: 0.05, timeConstant: 50 },
            whileTap: { scale: 1.02, rotate: Math.random() * 6 - 3 },
          }
        : { style: resolvedStyle })}
    >
      {title && (
        <h2>
          {title.split(/(Maud)/i).map((part, idx) =>
            /Maud/i.test(part) ? (
              <span key={idx} className="maudlin oxalis">{part}</span>
            ) : (
              <span key={idx}>{part}</span>
            )
          )}
        </h2>
      )}
      {children}
    </CardTag>
  );
}
