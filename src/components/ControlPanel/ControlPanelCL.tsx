import type { FC } from "react";
import styles from "./ControlPanel.module.scss";
import Toggle from "../Toggle/Toggle";
import { useStore } from "../../store/store";
import { shallow } from "zustand/shallow";

const ControlPanelCL: FC = () => {
  const motion = useStore((s) => s.motion);
  const setMotion = useStore((s) => s.setMotion);


  return (
    <div className={styles.panel}>
      <div className={styles.control}>
        <Toggle id="motion-toggle" label="Motion" value={motion} onToggle={setMotion} />
      </div>

      <div className={styles.control}>
        <Toggle id="reset-toggle" label="Reset Cards" value={false} onToggle={() => {}} />
      </div>

      <div className={styles.control}>
        <Toggle id="theme-toggle" label="Theme" value={false} onToggle={() => {}} />
      </div>
    </div>
  );
};

export default ControlPanelCL;
