import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Velocity USDT - The Speed of Now | Fast, Low-Cost Crypto Transactions",
  description: "Experience instant, near-zero fee transactions with Velocity USDT (vUSDT). Built on Solana blockchain for payments, DeFi, and yield farming. The future of decentralized finance.",
  keywords: "Velocity USDT, vUSDT, cryptocurrency, blockchain, Solana, DeFi, yield farming, fast transactions, low fees, digital assets",
  author: "Velocity USDT Team",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
