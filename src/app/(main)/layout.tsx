import { Links } from "@/components/links/Links";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Links />
      {children}
    </div>
  );
}
