import { PureComponent } from 'react';
import { connect } from 'react-redux';

import HotItem from "./HotItem";
import Button from "../Button"
import "./HotTours.scss";
import Line from '../Line';


class HotTours extends PureComponent {
  state = {
    isShowMore: false,
  }

  handleClick = () => {
    this.setState({ isShowMore: !this.state.isShowMore });
  }

  render() {
    const { directions } = this.props;
    const { isShowMore } = this.state;
    const { theme } = this.props;
    const showedDirectionCards = isShowMore ? directions : directions.slice(0, 4);;

    return (
      <div className="wrapper-directions">
        <div className="wrapper-directions__background">
          <div className="wrapper-directions__title">
            <h2 className={`${theme.theme}`}>Горячие Направления</h2>
            <Line />
            <div className="wrapper-directions__text">Первое место для
              поиска экологически чистого отдыха
            </div>
          </div>
        </div>
        <div className="wrapper-directions__cards">
          {showedDirectionCards.map((item) => (
            <HotItem
              key={item.id}
              {...item}
            />
          ))}
        </div>

        <div className="wrapper-directions__button">
          <Button text={isShowMore ? "свернуть" : "показать больше"} onClick={this.handleClick} className={`button__${theme.theme}__pos`} />
        </div>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = ({ directions, theme }) => ({
  directions: directions.directions,
  theme: theme,
});


export default connect(mapStateToProps)(HotTours);
