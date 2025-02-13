import { Poppins, Mona_Sans, Lexend, Outfit } from "next/font/google";
import "./styles/globals.css";
import HomePage from "./page";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Configure Mona Sans font
const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
});

// Configure Lexend font
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Krishna Digital Media",
  description: "Krishna Digital Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${monaSans.variable} ${lexend.variable} ${outfit.variable} antialiased font-sans`}
      >
        <HomePage>{children}</HomePage>
        <SpeedInsights />
      </body>
    </html>
  );
}
