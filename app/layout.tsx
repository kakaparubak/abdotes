import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Abdotes",
};

const inter = Inter(
  {
    variable: "--font-inter",
    subsets: ["latin"],
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans flex w-full items-center justify-between bg-background px-4 py-3.5 shadow-lg shadow-accent/50">
            <Header />
          </div>
          <main className="font-sans min-h-screen w-full px-10 py-8">{children}</main>

          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
