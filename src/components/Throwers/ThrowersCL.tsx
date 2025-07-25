import { useStore } from "../../store/store";
import ThrowyCL from "../Throwy/ThrowyCL";

export default function ThrowersCL() {
  const isMobile = useStore((s) => s.isMobile);
  if (isMobile) return null;

  return (
    <>
      <ThrowyCL item="plant" />
      <ThrowyCL item="toy" />
      <ThrowyCL item="glasses" />
      <ThrowyCL item="marble" />
    </>
  );
}
