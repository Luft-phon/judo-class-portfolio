import { AvatarDemo } from "./Avatar";
import "../cards/trainning.css"
import { FaArrowLeft, FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";
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
                <FaExternalLinkAlt />
                {/* link tới trang khác: bao gồm feedback + những hình ảnh buổi tập  */}
            </div>
        </div>
    )
}

export default TrainningCard;