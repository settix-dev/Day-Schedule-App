// import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const Schedule = ({schedule, onDelete}) => {
    return (
        <div className="schedule" onClick={onDelete}>
            <h3>{schedule.title} 
            <FontAwesomeIcon icon={faTimesCircle}
            style={{color:"red",
            marginRight:0, }} />
            </h3>
            <p>{schedule.time}</p>
        </div>
    )
}

export default Schedule
