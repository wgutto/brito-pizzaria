import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleModeButton } from "@/components/layout/toggle-theme-mode";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { PizzaInitializer } from "@/components/pizza-initializer";
import { getAllPizzasService } from "@/services/getAllPizzasService";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brito Pizzaria",
  description: "As melhores pizzas salgadas e doces da região 🍕"
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {

  const pizzas = await getAllPizzasService()

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <PizzaInitializer pizzas={pizzas} />

          <Header />

          {children}

          <Toaster />

          <div className="fixed bottom-5 right-5"><ToggleModeButton /></div>

        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout
