
import "../cards/trainning.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "../../i18n/routing";
function TrainningCard() {
    return (
        <div className="card">
            <div className="customer">
                {/* <div className="customer-name">
                    <AvatarDemo src="/Cover/avatar.jpg" />
                    <p>Ngô Nguyễn Thanh Phong</p>
                </div> */}
                <Link href="/training" className="flex items-center text-[var(--yellow)]">
                    <button className="training-btn">Show All</button>
                </Link>
            </div>
            <div className="card-title">
                <h1 className="text-[var(--yellow)]">Training <br /> Experiences</h1>
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