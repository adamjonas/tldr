import Navbar from "@/app/components/server/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inika } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inika = Inika({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inika"
});


export const metadata: Metadata = {
  title: "Bitcoin TLDR",
  description: "Bitcoin-dev and Lightning-dev mailing list summaries and discoveries",
  keywords: "bitcoin, bitcoin development, bitcoin tldr, bitcoin tl;dr, bitcoin learning, bitcoin resources, bitcoin resources for beginners, bitcoin resources for developers, bitcoin resources for beginners and developers, bitcoin resources for beginners and developers",
  openGraph: {
    title: "Bitcoin TLDR",
    description: "Bitcoin-dev and Lightning-dev mailing list summaries and discoveries",
    url: "https://tldr.bitcoinsearch.xyz",
    type: "website",
    images: [
      {
        url: "https://tldr.bitcoinsearch.xyz/images/rabbit.jpg"
      }
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@chaincodelabs',
    images: ["https://tldr.bitcoinsearch.xyz/images/rabbit_landscape.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${inika.variable} font-inter h-full`}>
        <div className="flex flex-col min-h-full">
          <div className="fixed bg-white w-full h-[76px] flex items-end z-10">
            <Navbar />
          </div>
          <div className="pt-[76px] w-full max-w-5xl mx-auto px-4 flex-grow">
            {children}
          </div>
          <footer style={{padding: '15px', backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
            <p style={{fontSize: '16px', color: 'lightgray'}}>
              Built with ❤️ by{" "}
              <a
                href="https://bitcoindevs.xyz"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'orange'}}
              >
                The Bitcoin Dev Project
              </a>
            </p>
            <a
              href="https://cryptpad.fr/form/#/2/form/view/3P2CsohsHOkcH7C+WdtX0-tvqjBHqXnAmz5D9yx0e04/"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontSize: '14px', color: 'orange'}}
            >
              Submit Feedback
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
