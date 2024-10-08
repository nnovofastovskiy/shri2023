import { Header } from '@/layout/Header/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Footer } from '@/layout/Footer/Footer';
import styles from './layout.module.css';
import cn from 'classnames';
import { StoreProvider } from '@/redux/StoreProvider';

const roboto = Roboto({ weight: ["400", "700"], subsets: ['cyrillic'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={cn(roboto.className, styles.body)}>
        <StoreProvider>
          <>
            <Header className={styles.header} />
            <section className={styles.main}>{children}</section>
            <Footer className={styles.footer} />
          </>
        </StoreProvider>
      </body>
    </html>
  );
}
