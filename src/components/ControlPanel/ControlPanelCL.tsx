import type { FC } from "react";
import styles from "./ControlPanel.module.scss";
import Toggle from "../Toggle/Toggle";
import { useStore } from "../../store/store";

const ControlPanelCL: FC = () => {
  const motion = useStore((s) => s.motion);
  const setMotion = useStore((s) => s.setMotion);
  const isMobile = useStore((s) => s.isMobile);

  return (
    <div className={styles.panel}>
      <div className={styles.control}>
        <Toggle id="motion-toggle" label="Silly Mode (desktop only)" value={motion} onToggle={setMotion} />
      </div>
      {/* <div className={styles.control}>
        <Toggle id="theme-toggle" label="Theme" value={false} onToggle={() => {}} />
      </div> */}
    </div>
  );
};

export default ControlPanelCL;
