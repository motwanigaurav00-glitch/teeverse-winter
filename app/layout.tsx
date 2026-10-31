import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeeVerse — Winter Collection 2026",
  description: "Meet the TeeVerse winter hoodie collection. Stay warm. Stay stylish. Own your winter.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
