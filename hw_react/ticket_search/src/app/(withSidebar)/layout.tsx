import styles from './layout.module.css';
import { Sidebar } from '@/layout/Sirebar/Sidebar';

export default function WithSidebarLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar id='sidebar-portal' className={styles.sidebar} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
