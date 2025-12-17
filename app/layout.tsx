import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pumori Coffee | Premium Specialty Coffee",
  description:
    "Experience the finest specialty coffee from the foothills of the Himalayas. Pumori Coffee delivers exceptional quality and taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} ${notoSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}