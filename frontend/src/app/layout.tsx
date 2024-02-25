"use client"
import { store } from "@/redux/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LoadingBar from 'react-top-loading-bar'
import {useState,useEffect} from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolo India",
  description: "Write your stories here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const pathname= usePathname();
  const param= useSearchParams();
  useEffect(() => {
     setProgress(100)
  }, [pathname,param])
  
  return (
    <html lang="en">
      <body className={inter.className}>{
        <Provider store={store}>
           <LoadingBar
        color='#f11946'
        progress={progress}
        // shadow={true}
        waitingTime={500}
        // loaderSpeed={500}
        // transitionTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
      {children}
      <Footer/>
      </Provider>
      }</body>
    </html>
  );
}
