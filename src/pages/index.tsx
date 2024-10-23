import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import Name from "./Name.jsx";
import Skills from "./Skills.jsx";
import Past from "./Past.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Name />
      <Skills />
      <Past />
    </>
  );
}
