import { FaMessage } from "react-icons/fa6"
import "../cards/gettingStart.css"
export default function GettingStart(){
    return(
        <div className="gettingStart-card">
            <div className="gettingStart-title">
                <div className="icon"><FaMessage/></div>
                <div className="gettingStart-title-content">
                    <h1>Bước 1</h1>
                    <h1>Tư vấn</h1>
                </div>
            </div>
            <div className="gettingStart-content">Đội ngũ chuyên viên của VuDecor sẽ trao đổi chi tiết về ý tưởng, phong cách và ngân sách của bạn. Chúng tôi sẽ khảo sát không gian để đưa ra giải pháp tối ưu nhất.</div>
        </div>
    )
}