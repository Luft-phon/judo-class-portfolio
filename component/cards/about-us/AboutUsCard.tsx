import Image from "next/image";
import "../../cards/about-us/aboutUsCard.css";

interface AboutUsCardProps {
    about: {
        name: string;
        role: string;
        description: string;
        imageUrl: string;
    };
}
export default function AboutUsCard({about}: AboutUsCardProps) {
    return (
        <div className="about-card">
            <div className="about-card-image">
                <Image src={about.imageUrl} alt="About Us" className="rounded-full object-cover" width={100}                   // BẮT BUỘC khi dùng chuỗi
                    height={100}/>
            </div>
            <div className="about-card-name items-center">
                <p className="text-[var(--blue)] text-center font-bold">{about.name}</p>
                <p className="text-center text-[var(--light-smoke)]">{about.role}</p>
            </div>
            <div className="about-card-content">
                <p className="text-center">{about.description}</p>
            </div>
        </div>
    );
}