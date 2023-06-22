import { Header } from '@/layout/Header/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Footer } from '@/layout/Footer/Footer';
import styles from './layout.module.css';
import cn from 'classnames';
import { Sidebar } from '@/layout/Sirebar/Sidebar';

const roboto = Roboto({ weight: ["400", "700"], subsets: ['cyrillic'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={cn(roboto.className, styles.body)}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <main className={styles.main}>
          {children}
        </main>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
