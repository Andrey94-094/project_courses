import "./GalleryImg.scss"


const GalleryImg = ({ image, className }) => {
    return (
        <img className={ `gallery-img ${className}` } src={ image }></img>
    )
}

export default GalleryImg;