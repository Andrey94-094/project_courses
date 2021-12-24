import Line from "../../../Line";
import "./FeaturesItem.scss"

const FeaturesItem = ({ image, title, text }) => {
    return (
        <div className="features-item">
            <img className="features-item__img" src={image}></img>
            <div className="features-item__title">{title}</div>
            <div className="features-item__text">{text}</div>
            <Line />
        </div>
    )
}

export default FeaturesItem;