import { type ReactNode } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Card.module.scss';
import { useStore } from '../../store/store';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  cardIndex?: number; // must be passed in from parent deterministically
}

const durationCycle = [0.25, 0.35, 0.45] as const;
const directionCycle = [-10, 0, 10] as const;
const tapRotateCycle = [-3, 0, 3] as const;

export default function CardCL({ children, className = '', style = {}, title, cardIndex = 0 }: Props) {
  const motionEnabled = useStore((s) => s.motion);
  const isMobile = useStore((s) => s.isMobile);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const safeStyle = typeof style === 'object' && style !== null ? style : {};
  const resolvedStyle: React.CSSProperties = {
    ...(isMobile
      ? {
          alignSelf: 'center',
          width: '90vw',
        }
      : {
          position: 'relative',
        }),
    ...safeStyle,
  };

  const initialX = directionCycle[cardIndex % directionCycle.length];
  const duration = durationCycle[cardIndex % durationCycle.length];
  const tapRotate = tapRotateCycle[cardIndex % tapRotateCycle.length];

  const sharedMotionProps = {
    initial: { opacity: 0, x: initialX },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  };

  const Title = title && (
    <h2>
      {title.split(/(Maud)/i).map((part, idx) =>
        /Maud/i.test(part) ? (
          <span key={idx} className="maudlin oxalis">{part}</span>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </h2>
  );

  if (isMobile || !motionEnabled) {
    return (
      <motion.div
        className={`${styles.card} ${className}`}
        style={resolvedStyle}
        {...sharedMotionProps}
      >
        {Title}
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
    layout="position"
      className={`${styles.card} ${className}`}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        willChange: 'transform',
        ...resolvedStyle,
      }}
      drag
      dragElastic={0}
      dragTransition={{ power: 0.05, timeConstant: 50 }}
      whileTap={{ scale: 1.02, rotate: tapRotate }}
      {...sharedMotionProps}
    >
      {Title}
      {children}
    </motion.div>
  );
}
