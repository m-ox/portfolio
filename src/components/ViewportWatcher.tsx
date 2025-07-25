import { useEffect } from 'react';
import { useStore } from '../store/store';

export default function ViewportWatcher() {
  const isMobile = useStore(s => s.isMobile);
  const setIsMobile = useStore(s => s.setIsMobile);
  console.log("ViewportWatcher loaded")
  console.log('setIsMobile:', setIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    console.log('isMobile:', isMobile);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  return null;
}
