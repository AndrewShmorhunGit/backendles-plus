import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export function AppContainer({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-touch" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
