import { useState } from "react";
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

  const handleClicky = () => {
    onToggle?.(!value);
  }
  console.log('label:', label, 'value? ', value);

  return (
    <button
      type="button"
      onClick={handleClicky}
      aria-pressed={value}
      className={`${styles.toggle} ${value ? styles.on : styles.off} ${className}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.slider} />
    </button>
  );
}
