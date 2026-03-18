
import ContactForm from "@/component/contact/Contact"
import ContactItem from "@/component/contact/ContactItem";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../contact/contact.css"
import { useTranslations } from "next-intl";
export default function ContactPage() {
    const t = useTranslations("Contactpage");
    return (
        <>

            <div className="contact-title">
                <h1 className="contact-title-h1">{t("title")}</h1>
                <span style={{ display: "block", width: "10%", height: "4px", backgroundColor: "var(--blue)" }}></span>
                <p className="whitespace-pre-line contact-subtitle">{t("content")}</p>
            </div>
            <div className="contact-content">
                <div className="contact-section">
                    <ContactItem item={{ icon: <FaMapMarkerAlt color="var(--yellow)" size={20} />, label: t("contact1.title"), value: t("contact1.content") }} />
                    <ContactItem item={{ icon: <FaPhoneAlt color="var(--yellow)" size={20} />, label: t("contact2.title"), value: t("contact2.content") }} />
                    <ContactItem item={{ icon: <FaEnvelope color="var(--yellow)" size={20} />, label: t("contact3.title"), value: "JudoQuanKhu7@gmail.com" }} />
                    <ContactItem item={{ icon: <FaClock color="var(--yellow)" size={20} />, label: t("contact4.title"), value: t("contact4.content") }} />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.080208494933!2d106.6733025748053!3d10.80516878934538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529006057d451%3A0xf2de4555dc834b38!2sJudo%20Qu%C3%A2n%20Khu%207!5e0!3m2!1sen!2sus!4v1756873226762!5m2!1sen!2sus"
                        className="iframe" width="140%" height="200" style={{ border: "0" }} loading="lazy"></iframe>

                </div>
                <ContactForm />
            </div>
        </>
    )
}
