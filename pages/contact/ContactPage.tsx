
import ContactForm from "@/component/contact/Contact"
import ContactItem from "@/component/contact/ContactItem";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../contact/contact.css"
export default function ContactPage() {
    const contactData = [
        {
            icon: <FaMapMarkerAlt color="var(--yellow)" size={20} />,
            label: "Địa chỉ",
            value: "21 Đào Duy Anh, phường 9, Phú Nhuận",
        },
        {
            icon: <FaPhoneAlt color="var(--yellow)" size={20} />,
            label: "Hotline",
            value: "(096) 319-3898",
        },
        {
            icon: <FaEnvelope color="var(--yellow)" size={20} />,
            label: "Email",
            value: "JudoQuanKhu7@gmail.com",
        },
        {
            icon: <FaClock color="var(--yellow)" size={20} />,
            label: "Giờ Mở Cửa",
            value: "Thứ 3-5-7: 18:30 - 20:00",
        },
    ];
    return (
        <>

            <div className="contact-title">
                <h1 className="contact-title-h1">Liên hệ</h1>
                <span style={{ display: "block", width: "10%", height: "4px", backgroundColor: "var(--blue)" }}></span>
                <p className="contact-subtitle">Bọn mình luôn chào đón những học viên mới đăng kí học tại Câu Lạc Bộ Judo Quân Khu 7. <br/> Hãy cho bọn mình biết nếu bạn có thắc mắc gì nhé ✨</p>
            </div>
            <div className="contact-content">
                <div className="contact-section">
                    {contactData.map((item, index) => (
                        <ContactItem key={index} item={item} />
                    ))}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.080208494933!2d106.6733025748053!3d10.80516878934538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529006057d451%3A0xf2de4555dc834b38!2sJudo%20Qu%C3%A2n%20Khu%207!5e0!3m2!1sen!2sus!4v1756873226762!5m2!1sen!2sus"
                        className="iframe" width="140%" height="200" style={{ border: "0" }}  loading="lazy"></iframe>

                </div>
                <ContactForm />
            </div>
        </>
    )
}
