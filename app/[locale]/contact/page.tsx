"use client"

import Footer from "@/component/footer/Footer"
import Navbar from "@/component/navbar/Navbar"
import ContactForm from "@/component/contact/Contact"
import ContactItem from "@/component/contact/ContactItem";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactPage from "@/pages/contact/ContactPage";

export default function Contact() {
    
    return (
        <>
            <Navbar />
            <main className="flex-1">
                <ContactPage />    
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
