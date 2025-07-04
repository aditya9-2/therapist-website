import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "SCare | Book Therapy with Dr. Serena Blake",
  description: "Easily book confidential and compassionate therapy sessions with Dr. Serena Blake, a licensed mental health professional. Personalized care for healthcare providers, students, and individuals seeking emotional wellness.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
      type: "image/png",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
