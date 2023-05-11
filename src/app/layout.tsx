import "./globals.css";
import { Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import AuthContext from "@/context/AuthContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-2xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-wihte z-10 border-b">
            <Nav />
          </header>
          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
