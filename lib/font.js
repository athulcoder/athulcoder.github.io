// app/fonts.ts or lib/fonts.ts
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter", // optional
});
