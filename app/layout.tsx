import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Form Stress Test – Test Checkout Forms Under Realistic Conditions",
  description: "Simulate slow networks, mobile devices, and autofill conflicts to validate your checkout forms before launch."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ea99cc7-183c-4db5-a610-b9962d3deecf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
