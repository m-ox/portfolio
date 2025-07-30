import { useCallback, type ReactNode } from "react";
import styles from './Secrets.module.scss';

interface Props {
  children: ReactNode;
}

export default function SecretsCL({
  children
}: Props) {

  return (
    <div className={styles.secretContainer}>
        <p className={styles.s1}>How's it going?</p>
        <p className={styles.s2}>You're a nerd.</p>
    </div>
  )
}
