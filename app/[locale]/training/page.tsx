"use client"
import ChatBot from "@/component/chatbox/Chatbot";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import TrainingPage from "@/pages/training/TrainingPage";


export default function Training() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <TrainingPage />
        <ChatBot/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
