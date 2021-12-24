import React from "react";
import "./Item.scss";

class Item extends React.Component {
  remove = () => {
    const { id, onRemove } = this.props;
    onRemove(id);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="item" >
        <button className="item__button" onClick={this.remove}>Удалить</button>
        <div>{text}</div>
      </div>
    );
  }
}
export default (Item);
