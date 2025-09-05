import ChatBot from "@/component/chatbox/Chatbot";
import { Fade } from "react-awesome-reveal";
import "../training/training.css"
import Image from "next/image";
import Landing from "../../public/training/1.jpg";

export default function TrainingPage() {
    const class_content = [
        { content: "Khởi động là việc không thể thiếu trong những buổi tập. Bằng những động tác võ cơ bản giúp cơ thể nóng lên, tâm trí tập trung và tinh thần sẵn sàng. Mỗi cú ra đòn là một bước khởi đầu cho hành trình rèn luyện — không chỉ để khỏe hơn, mạnh mẽ hơn, mà còn để tìm thấy niềm vui trong từng nhịp chuyển động 🥋." },
        { content: "Hình ảnh các học viên 'Randori' (hay còn gọi là 'luyện tập đối kháng') là minh chứng cho sự nỗ lực và quyết tâm trong từng buổi tập." },
        { content: "Hình ảnh mọi người cười nói vui vẻ và thả lỏng cơ bắp sau là minh chứng cho việt quyết tâm trong buổi tập căng thẳng." },
    ]
    const photo = [
        { value: "2.jpg" },
        { value: "11.jpg" },
        { value: "23.jpg" },
        { value: "25.jpg" },
        { value: "8.jpg" },
        { value: "15.jpg" },
        { value: "13.jpg" },
        { value: "7.jpg" },
        { value: "5.jpg" },
        { value: "1.jpg" },
        { value: "88.jpg" },
        { value: "6.jpg" }
    ]
    const photoEnd = [
        { value: "17.jpg" },
         { value: "3.jpg" },
        { value: "16.jpg" }
     
    ]
    return (
        <div className="about-container">
            <Fade direction='down' duration={1000}>
                <div className="about-title">
                <p className="text-[var(--light-smoke)]">Hoạt động</p>
                <h1 className="text-[var(--blue)] text-4xl font-bold">Buổi tập luyện</h1>
                <p>Cùng mình tìm hiểu xem chúng mình làm gì trong những buổi tập nhé</p>
            </div>
            </Fade>
            
            <div className="about-cards flex justify-center items-start">
                <div className="class-content">
                    <div className="class-content-left">
                        <h3 className="uppercase">Khởi động</h3>
                        <Fade direction='left' duration={1000}>
                            <p className="text-[var(--light-smoke)]">{class_content[0].content}</p>
                        </Fade>
                    </div>
                    <div className="class-content-right">
                        <Fade direction='right' duration={1000}>
                            <Image
                            src={Landing}
                            alt="Group"
                            priority
                            width={1000}
                            height={800}
                            className="img-cover object-cover animate-[moveUpDown_5s_ease-in-out_infinite]"
                        />
                        </Fade>
                    
                    </div>

                </div>

            </div>
            <div className="class-imgs">
                <div className="getting-started-title">
                    <h1 className="uppercase">Cao điểm</h1>
                    <p className="text-[var(--light-smoke)] w-150">{class_content[1].content}</p>
                </div>
                <div className="class-imgs-2">
                    {photo.map((item, idx) => (
                        <div className="img-cover"key={idx}>
                            <Image
                                src={`/activities/${item.value}`}
                                alt="Group"
                                priority
                                className="w-full h-auto"
                                width={1200}                   // BẮT BUỘC khi dùng chuỗi
                                height={800}
                                sizes="(max-width:768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="class-imgs">
                <div className="getting-started-title">
                    <h1 className="uppercase">Kết thúc</h1>
                    <p className="text-[var(--light-smoke)] w-150">{class_content[2].content}</p>
                </div>
                <div className="class-imgs-2">
                    {photoEnd.map((item, idx) => (
                        <div className="img-cover" key={idx}>
                            <Image
                                src={`/activities/${item.value}`}
                                alt="Group"
                                priority
                                className="w-full h-auto"
                                width={1200}                   // BẮT BUỘC khi dùng chuỗi
                                height={800}
                                sizes="(max-width:768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ChatBot />

        </div>
    )
}