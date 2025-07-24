import { Navbar, NavigationBar } from "@/components/Navbar";
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
        <NavigationBar />
        {children} <BackgroundBeams />
      </body>
    </html>
  );
}
