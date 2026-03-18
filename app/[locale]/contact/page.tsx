"use client"

import Footer from "@/component/footer/Footer"
import Navbar from "@/component/navbar/Navbar"
import ContactPage from "@/views/contact/ContactPage";

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
