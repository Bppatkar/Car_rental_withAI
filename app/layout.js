import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "car rental system with ai",
  description: "find your dream Car ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-200 py-4">
            <div className="container mx-auto p-4 text-center text-gray-800">
              <p className="font-semibold">Made with 💗 by Bhanu Pratap</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
