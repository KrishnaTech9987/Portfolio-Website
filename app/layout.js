import { Poppins } from "next/font/google";
import "./styles/globals.css";
import HomePage from "./page";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Krishna Digital Media",
  description: "Krishna Digital Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        <HomePage>{children}</HomePage>
        <SpeedInsights />
      </body>
    </html>
  );
}
