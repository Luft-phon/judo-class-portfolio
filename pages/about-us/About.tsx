import AboutUsCard from "@/component/cards/about-us/AboutUsCard";
import "../about-us/about.css";
import ChatBot from "@/component/chatbox/Chatbot";
import { useTranslations } from "next-intl";
export default function AboutPage() {
    const t = useTranslations("Aboutpage");
    const coaches = [
        {
            name: t("coach1.name"),
            role: t("coach1.position"),
            description: t("coach1.content"),
            imageUrl: "/coaches/thayTai.jpg",
        },
        {
            name: t("coach2.name"),
            role: t("coach2.position"),
            description: t("coach2.content"),
            imageUrl: "/coaches/coLoan.jpg",
        },
        {
            name: t("coach3.name"),
            role: t("coach3.position"),
            description: t("coach3.content"),
            imageUrl: "/coaches/hao.jpg",
        },
        {
            name: t("coach4.name"),
            role: t("coach4.position"),
            description: t("coach4.content"),
            imageUrl: "/Cover/avatar.jpg",
        },
    ]
    return (
        <div className="about-container">
            <div className="about-title">
                <p className="text-[var(--light-smoke)]">{t("title")}</p>
                <h1 className="text-[var(--blue)] text-4xl font-bold">{t("subtitle")}</h1>
                <p>{t("content")}</p>
            </div>
            <div className="about-cards flex justify-center items-start">
                {coaches.map((coach) => {
                    return <AboutUsCard about={coach} key={coach.name} />;
                })}
            </div>
            <ChatBot />

        </div>
    );
}