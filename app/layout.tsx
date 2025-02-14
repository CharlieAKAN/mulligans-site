import "./globals.css";
import { Inter } from "next/font/google";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Load specific font weights
});

export const metadata = {
  title: "Mulligans Coffee and Cards",
  description: "We'll be back soon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
