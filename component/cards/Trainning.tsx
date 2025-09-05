import { AvatarDemo } from "./Avatar";
import "../cards/trainning.css"
import { FaArrowLeft, FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
function TrainningCard() {
    return (
        <div className="card">
            <div className="customer">
                <div className="customer-name">
                    <AvatarDemo src="/Cover/avatar.jpg" />
                    <p>Ngô Nguyễn Thanh Phong</p>
                </div>
                <button className="training-btn">Show All</button>
            </div>
            <div className="card-title">
                <h1 className="text-[var(--yellow)]">Training <br/> Experiences</h1>
                <div className="hover:transition-transform hover:scale-110">
                    <Link href="/training" className="flex items-center text-[var(--yellow)]">
                        <FaExternalLinkAlt />
                    </Link>
                </div>
                
                {/* link tới trang khác: bao gồm feedback + những hình ảnh buổi tập  */}
            </div>
        </div>
    )
}

export default TrainningCard;