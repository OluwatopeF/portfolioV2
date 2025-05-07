import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  weight: ["400","500","600", "700"],subsets: ["latin"],
});

const geistMono = Geist_Mono({
  weight: ["400"],  subsets: ["latin"],
});

export const metadata = {
  title: "Oluwatope Folorunso",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
