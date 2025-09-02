"use client"
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import HomePage from "@/pages/home/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
