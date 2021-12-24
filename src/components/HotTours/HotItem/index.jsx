import "./HotItem.scss"

export default function HotItem({ img, title, text }) {
  return (
    <div className="directions-cards-wrap">
      <img src={img} className="directions-cards-wrap__img" alt="" ></img>
      <div className="directions-cards-wrap__title">{title}</div>
      <div className="directions-cards-wrap__text">{text}</div>
    </div>
  );
}
