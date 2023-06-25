import styles from './layout.module.css';

export const metadata = {
  title: 'Билетопоиск',
  description: 'Покупка билетов в кинотетр'
}

export default function WoSidebarLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
