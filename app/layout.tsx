import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Vigo Satria Ramadhan — Web Developer',
  description: 'Portfolio of Vigo Satria Ramadhan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}