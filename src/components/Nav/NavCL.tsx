import styles from './Nav.module.scss';

interface Props {
  currentPath: string;
}

export default function NavCL({ currentPath }: Props) {
  const links = [
    { path: '/', label: 'Home', style: styles.home },
    { path: '/about', label: 'About', style: styles.about },
    { path: '/projects', label: 'Projects', style: styles.projects },
    { path: '/contact', label: 'Contact', style: styles.contact },
  ];

  return (
    <nav className={styles.navbar}>
      <p>m-ox</p>
      {links.map(({ path, label, style }) => {
        const normalize = (s: string) => s.replace(/\/+$/, '') || '/';
        const isActive = normalize(currentPath) === normalize(path);
        
        return (
          <a
            key={path}
            href={path}
            data-astro-transition
            className={`${styles.navLink} ${style} ${isActive ? styles.active : ''}`}
            aria-disabled={isActive}
            tabIndex={isActive ? -1 : undefined}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
