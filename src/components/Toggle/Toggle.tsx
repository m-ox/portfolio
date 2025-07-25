import { useCallback } from "react";
import styles from './Toggle.module.scss';

interface ToggleProps {
  id?: string;
  label?: string;
  value: boolean;
  onToggle?: (value: boolean) => void;
  className?: string;
}

export default function Toggle({
  label,
  value,
  onToggle,
  className = "",
}: ToggleProps) {

  const handleClick = useCallback(() => {
    onToggle?.(!value);
  }, [value, onToggle]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={value}
      className={`${styles.toggle} ${value ? styles.on : styles.off} ${className}`}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.slider} />
    </button>
  );
}
