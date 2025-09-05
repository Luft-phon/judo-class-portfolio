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
            description: "Thanh Loan bắt đầu làm quen và tập Judo từ rất sớm nhờ một người thầy có huyền đai môn võ này. Trong giai đoạn thi đấu chuyên nghiệp, cô đã xuất sắc đoạt nhiều thành tích cao và giành được một suất trong đội tuyển quốc gia Việt Nam. Ấn tượng nhất là tấm HCB ở giải đấu quốc tế danh giá là Sea Game 19.",
            imageUrl: "/coaches/coLoan.jpg",
        },
        {
            name: "Trần Nguyễn Nhật Hào",
            role: "Huấn Luyện Viên",
            description: "Với kinh nghiệm huấn luyện judo tại Câu Lạc Bộ DojoHouse từ cơ bản đến nâng cao và với kinh nghiệm trong suốt quá trình luyện tập và huấn luyện. Mặc dù trẻ tuổi nhưng với tâm huyết và sự nhiệt huyết Hào luôn đồng hành cùng câu lạc bộ, phát triển và truyền lửa cho các thành viên.",
            imageUrl: "/coaches/hao.jpg",
        },
        {
            name: "Ngô Nguyễn Thanh Phong",
            role: "Học Viên & Admin fanpage",
            description: "Một học viên đã theo tập ở võ đường Quân Khu 7 trong khoảng thời gian bằng nửa tuổi đời của bạn. Phong có kinh nghiệm thi đấu nhiều giải lớn nhỏ trong nước và gặt hái nhiều thành tích cao cho đơn vị. Chàng trai trẻ luôn nhiệt huyết trong việc giúp đỡ các bạn mới cũng như quảng bá cho Judo Quân Khu 7",
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