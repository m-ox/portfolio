import styles from './Nav.module.scss';

interface Props {
  currentPath: string;
}

export default function NavCL({ currentPath }: Props) {
  const links = [
    { path: '/portfolio', label: 'Home', style: styles.home },
    { path: '/portfolio/about', label: 'About', style: styles.about },
    { path: '/portfolio/projects', label: 'Projects', style: styles.projects },
    { path: '/portfolio/contact', label: 'Contact', style: styles.contact },
  ];

  console.log('currentPath', currentPath);

  return (
    <nav className={styles.navbar}>
      {links.map(({ path, label, style }) => {
        const isActive =
          currentPath === path ||
          currentPath === path + '/' ||
          currentPath + '/' === path;
        
          console.log('className: ', `${styles.navLink} ${style} ${isActive ? styles.active : ''}`)
        return (
          <a
            key={path}
            href={path}
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
