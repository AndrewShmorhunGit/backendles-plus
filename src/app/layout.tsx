import { AppProviders } from "@/components/app/AppProviders";
import { AppContainer } from "@/components/app/AppContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Router",
  description: "Next.js app for Backendless",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <AppContainer>{children}</AppContainer>
    </AppProviders>
  );
}
