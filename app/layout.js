import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "forumstr",
  description: "Forums served on the nostr protocol.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Nav/>
        {children}
      </body>
    </html>
  );
}
