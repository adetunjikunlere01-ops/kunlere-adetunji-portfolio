import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunlere Adetunji — Associate Architect",
  description: "Architecture, design and delivery. Selected work by Kunlere Adetunji, Associate Architect, Lagos, Nigeria."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
