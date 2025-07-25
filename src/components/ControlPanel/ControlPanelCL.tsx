import type { FC } from "react";
import styles from "./ControlPanel.module.scss";
import Toggle from "../Toggle/Toggle";
import { useStore } from "../../store/store";
import { useEffect } from "react";

const ControlPanelCL: FC = () => {
  const motion = useStore((s) => s.motion);
  const setMotion = useStore((s) => s.setMotion);
  const goffMode = useStore((s) => s.goffMode);
  const setGoffMode = useStore((s) => s.setGoffMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", goffMode);
  }, [goffMode]);

  const toggleGoff = () => {
    const newMode = goffMode === "light" ? "dark" : "light";
    setGoffMode(newMode);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.control}>
        <Toggle
          id="motion-toggle"
          label="Silly Mode (desktop only)"
          value={motion}
          onToggle={setMotion}
        />
      </div>
      <div className={styles.control}>
        <Toggle
          id="theme-toggle"
          label="Spooky Mode (in progress)"
          value={goffMode === "dark"}
          onToggle={toggleGoff}
        />
      </div>
    </div>
  );
};

export default ControlPanelCL;
