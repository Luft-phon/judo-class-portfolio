import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram, FaLocationArrow, FaMap, FaTwitter } from "react-icons/fa"
import "../footer/footer.css"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo.png";
import { FaLocationPin } from "react-icons/fa6";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="footer-info-brand">
                    <div className="footer-info-title">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={100}
                                height={75}
                                className="cursor-pointer"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="footer-info-content">
                        <p>Với sứ mệnh "Rèn Luyện - Học Tập - Giải Trí", địa điểm này không chỉ phù hợp với mọi độ tuổi và trình độ tập luyện mà còn tuân thủ các tiêu chuẩn an toàn của Liên Đoàn Judo Việt Nam.</p>
                    </div>
                </div>
                <div className="footer-info-nav">
                    <div className="footer-info-title"><h3>Trang chủ</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li>
                                <Link href="./" className="flex items-center gap-2 group"><FaArrowRight className="hidden group-hover:flex"/>
                                 Trang chủ
                                 </Link>
                            </li>
                            <li>
                                <Link href="./" className="flex items-center gap-2 group"><FaArrowRight className="hidden group-hover:flex"/>
                                 Về chúng tôi
                                 </Link>
                            </li>
                            <li>
                                <Link href="./" className="flex items-center gap-2 group"><FaArrowRight className="hidden group-hover:flex"/>
                                 Huấn Luyện
                                 </Link>
                            </li>
                            <li>
                                <Link href="./" className="flex items-center gap-2 group"><FaArrowRight className="hidden group-hover:flex"/>
                                 Blog
                                 </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-information">
                    <div className="footer-info-title"><h3>Thông tin</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li><a href="tel:0963193898">+8496 319 38 98</a></li>
                            <li>JudoQuanKhu7@gmail.com</li>
                            <li>21 Đào Duy Anh, phường 9, Phú Nhuận</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-hour">
                    <div className="footer-info-title"><h3>Giờ Mở Cửa</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li>Thứ 3 - 5 -7: 18:30 - 20:00</li>
                            <li>Thứ 2 - 4 - 6 - Sun: Nghỉ</li>
                            <li>Ngày lễ: Nghỉ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-media">
                <div className="footer-media-watermark">© {year} Judo Quân Khu 7. All rights reserved | Made by <strong><a href="https://www.instagram.com/luftphon_/">Phong Ngo</a></strong></div>
                <div className="footer-media-social">
                    <Link href="https://www.facebook.com/JudoQuanKhu7/"><FaFacebook /></Link>
                    <Link href="https://share.google/SSqxoLOmZ21fybNob"><FaGoogle /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer