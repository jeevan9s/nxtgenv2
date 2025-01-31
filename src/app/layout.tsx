
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Learning",
  description: "Training the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <title>NextGen Learning</title>
      <link href="https://fonts.cdnfonts.com/css/league-spartan" rel="stylesheet"/>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
