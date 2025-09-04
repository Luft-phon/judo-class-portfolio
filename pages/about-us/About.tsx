import AboutUsCard from "@/component/cards/about-us/AboutUsCard";
import "../about-us/about.css";
import ChatBot from "@/component/chatbox/Chatbot";
export default function AboutPage() {
    const coaches = [
        {
            name: "Nguyễn Thành Tài",
            role: "Trưởng bộ môn & Huấn Luyện Viên Trưởng",
            description: "Võ sư Nguyễn Thanh Tài – HLV trưởng CLB Judo Quân Đội trên cương vị huấn luyện, anh dẫn dắt đội tuyển Judo Quân đội và tuyển Judo Kata Việt Nam giành được rất nhiều thành tích cao, điển hình là giúp đội tuyển Judo Kata Việt Nam giành 1 HCV, 3 HCB và 1 HCĐ tại Giải Vô địch Kata châu Á.",
            imageUrl: "/coaches/thayTai.jpg",
        },
        {
            name: "Thanh Loan",
            role: "Huấn Luyện Viên",
            description: "Trong giai đoạn thi đấu chuyên nghiệp, cô đã xuất sắc đoạt nhiều thành tích cao và giành được một suất trong đội tuyển quốc gia Việt Nam. Ấn tượng nhất là tấm HCB ở giải đấu quốc tế danh giá là Sea Game 19.",
            imageUrl: "/coaches/coLoan.jpg",
        },
        {
            name: "Trần Nguyễn Nhật Hào",
            role: "Huấn Luyện Viên",
            description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            imageUrl: "/coaches/hao.jpg",
        },
        {
            name: "Ngô Nguyễn Thanh Phong",
            role: "Học Viên",
            description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            imageUrl: "/Cover/avatar.jpg",
        },
    ]
    return (
        <div className="about-container">
            <div className="about-title">
                <p className="text-[var(--light-smoke)]">Về chúng tôi</p>
                <h1 className="text-[var(--blue)] text-4xl font-bold">Đội Ngũ Huấn Luyện Viên</h1>
                <p>Nơi kết nối đến mọi đam mê</p>
            </div>
            <div className="about-cards flex justify-center items-start">
                {coaches.map((coach) => {
                return <AboutUsCard about={coach} key={coach.name}/>;
            })}
            </div>
            <ChatBot/>

        </div>
    );
}