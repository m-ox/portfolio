import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useStore } from "../../store/store";
import styles from "./Throwy.module.scss";

interface Props {
  item: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ThrowyCL({ item, alt = "", className = "", style = {} }: Props) {
  const motionEnabled = useStore((s) => s.motion);
  const isMobile = useStore((s) => s.isMobile);
  const [isMounted, setIsMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const src = `/portfolio/throwers/${item}.png`;
  const resolvedStyle: React.CSSProperties = {
    width: style.width ?? (isMobile ? "50%" : "15rem"),
    ...style,
  };

  const combinedClassName = [
    styles.throwy,
    className,
    !isMobile ? item : `mobile ${item}`,
  ].filter(Boolean).join(" ");

  if (isMobile || !motionEnabled) {
    return (
      <img
        src={src}
        alt={alt}
        className={combinedClassName}
        style={resolvedStyle}
        draggable={false}
      />
    );
  }

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX,
        rotateY,
        willChange: "transform",
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
      }}
      drag
      dragElastic={0}
      dragTransition={{ power: 0.05, timeConstant: 50 }}
      whileTap={{ scale: 1.02, rotate: Math.random() * 6 - 3 }}
    >
      <img
        src={src}
        alt={alt}
        className={combinedClassName}
        style={resolvedStyle}
        draggable={false}
      />
    </motion.div>
  );
}
