import localFont from "next/font/local";
import "./globals.css";
import { DarkModeProvider } from "@/component/contaxt/DarkModeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "junayedportfolio",
  description: "created junayed",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </DarkModeProvider>
  );
}
