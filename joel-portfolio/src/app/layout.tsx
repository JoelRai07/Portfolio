import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Portfolio",
  description: "Personal portfolio website",
};
// #f4f4f5 for white background

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen text-white"
        style={{
          backgroundColor: "#18181b",
          backgroundImage:
            "linear-gradient(to right, rgba(38, 35, 49) 1px, transparent 1px), linear-gradient(to bottom, rgba(38, 35, 49) 1px, transparent 1px)",
          backgroundSize: "49px 49px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
