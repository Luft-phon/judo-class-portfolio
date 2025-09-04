"use client";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import AboutPage from "@/pages/about-us/About";


export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
      <AboutPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}
