import "./HotItem.scss"

export default function HotItem({ title, img,text }) {

  return (
    <div className="directions-cards-wrap" >
      <div className="directions-cards-wrap__title">{title}</div>
      <img src={img} className="directions-cards-wrap__img" alt="" ></img>
      <div className="directions-cards-wrap__text">{text}</div>
    </div>
  );
}
