import Line from "../Line"
import "./HeadSection.scss"

const HeadSection = ({ title, text, className }) => {
    return (
        <div className={`headSection ${className || ""}`}>
            <h2 className="headSection__title">{title}</h2>
            <Line className="line_mb" />
            <p className="headSection__text">{text}</p>
        </div>
    )
}

export default HeadSection;