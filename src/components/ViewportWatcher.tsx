import { useEffect } from 'react';
import { useStore } from '../store/store';

type Theme = 'light' | 'dark';

export default function ViewportWatcher() {
  const setIsMobile = useStore((s) => s.setIsMobile);
  const goffMode = useStore((s) => s.goffMode);
  const setGoffMode = useStore((s) => s.setGoffMode);

  // Load saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      setGoffMode(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme: Theme = prefersDark ? 'dark' : 'light';
      setGoffMode(defaultTheme);
      localStorage.setItem('theme', defaultTheme);
    }
  }, [setGoffMode]);

  // Sync theme to DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', goffMode);
    localStorage.setItem('theme', goffMode);
  }, [goffMode]);

  // Watch for window resize and theme preference changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme: Theme = e.matches ? 'dark' : 'light';
      setGoffMode(newTheme);
    };

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    handleResize();
    window.addEventListener('resize', handleResize);
    darkQuery.addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      darkQuery.removeEventListener('change', handleThemeChange);
    };
  }, [setIsMobile, setGoffMode]);

  return null;
}
