import FeaturesItem from "./components/FeaturesItem";
import "./Features.scss"
import travel from "../../assets/Images/FeaturesImages/travel.svg"
import cases from "../../assets/Images/FeaturesImages/case.svg"
import mount from "../../assets/Images/FeaturesImages/mount.svg"
import user from "../../assets/Images/FeaturesImages/user.svg"


const Features = () => {

    const arrayFeatures = [
        { id: 1, image: travel, title: "Типы Праздников", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
        { id: 2, image: cases, title: "Путеводители", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
        { id: 3, image: mount, title: "Экстремальные Туры", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
        { id: 4, image: user, title: "Отпуск Мечты", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
    ]

    return (
        <section className="features">
            <div className="container">
                <div className="features__wrapper">
                    {arrayFeatures.map((item) => (
                        <FeaturesItem
                            key={item.id}
                            {...item}
                            />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;