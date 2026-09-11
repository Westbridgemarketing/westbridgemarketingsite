import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/archivo/300.css";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Westbridge Marketing | Project Marketing for Developers",
  description:
    "Westbridge Marketing plans and runs the marketing and sales program behind new residential developments across Metro Vancouver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-archivo font-light antialiased"
        style={
          {
            "--font-grotesk": "'Space Grotesk', sans-serif",
            "--font-archivo": "'Archivo', sans-serif",
          } as React.CSSProperties
        }
      >
        <Header />
        <PageShell>{children}</PageShell>
        <Footer />
      </body>
    </html>
  );
}
