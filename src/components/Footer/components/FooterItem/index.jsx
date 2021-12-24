import "./FooterItem.scss"


export default function FooterItem({ title, text, name }) {
    return (
        <div className="footerItem">
            <h4 className="footerItem__title">{title}</h4>
            <p className="footerItem__text">{text}</p>
            <h3 className="footerItem__name">{name}</h3>
        </div>
    )
}
