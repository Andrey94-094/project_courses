import HeadSection from "../HeadSection/HeadSection";
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import "./Gallery.scss"
import GalleryImg from "./components/GalleryImg";
import road from "./../../assets/Images/GalleryImages/road.jpeg"
import mounts from "./../../assets/Images/GalleryImages/mounts.jpeg"
import waterfall from "./../../assets/Images/GalleryImages/waterfall.jpeg"
import village from "./../../assets/Images/GalleryImages/village.jpeg"
import road_two from "./../../assets/Images/GalleryImages/road_two.jpeg"
import road_three from "./../../assets/Images/GalleryImages/road_three.jpeg"
import road_four from "./../../assets/Images/GalleryImages/road_four.jpeg"


class Gallery extends PureComponent {
    render() {
        const galleryHead = {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
        }
        const galleryImg = {
            road,
            mounts,
            waterfall,
            village,
            road_two,
            road_three,
            road_four
        }
        const { theme } = this.props;

        return (
            <section className="gallery">
                <div className="container wrapper-directions__title">
                    <h2 className={`${theme.theme}`}>Удивительные Места</h2>
                    <HeadSection
                        className={`gallery__headSection`}
                        text={galleryHead.text} />
                    <div className={`gallery__wrapper `}>
                        <div className="gallery__column">
                            <GalleryImg image={galleryImg.road} />
                            <GalleryImg image={galleryImg.waterfall} />
                        </div>
                        <div className="gallery__column">
                            <GalleryImg image={galleryImg.mounts} className="gallery-img_center" />
                            <GalleryImg image={galleryImg.village} className="gallery-img_center" />
                            <GalleryImg image={galleryImg.road_two} className="gallery-img_center" />
                        </div>
                        <div className="gallery__column gallery__column_width">
                            <GalleryImg image={galleryImg.road_three} />
                            <GalleryImg image={galleryImg.road_four} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ theme }) => ({
    theme: theme,
});

export default connect(mapStateToProps)((Gallery));