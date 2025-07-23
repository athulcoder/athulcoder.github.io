import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
export const metadata = {
  title: "Athul Sabu | athulcoder",
  description: "Computer Science Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} <BackgroundBeams />
      </body>
    </html>
  );
}
