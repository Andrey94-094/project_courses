import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

import HotItemDrim from "./components/HotItem";
import Button from '../Button';
import "./HotToursDrim.scss";
import { fetchDirections } from '../../actionCreators';
import Line from '../Line';

class HotToursDrim extends PureComponent {

  handleClick = (id) => {
    this.setState({ newId: id })
  }

  state = {
    newId: 7,
  }

  componentDidMount() {
    const { fetchDirections } = this.props;
    fetchDirections();
  }

  render() {
    const { directions } = this.props;
    const { newId } = this.state;
    const allDirectionsCards = directions.slice(newId, newId + 1);
    const { theme } = this.props;
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
          {directions.map((item) => (
            <Link to={`/contacts/${item.country}`} onClick={() => this.handleClick(item.id)}>
              <HotItemDrim
                img={item.img}
                title={item.title}
              />
            </Link>
          ))}
        </div>
        <div className="wrapper-directions__texti"> м.т: +3755555555
          <div>
            e-mail:qqqq@q.q
          </div>
        </div>
        <div >
          {allDirectionsCards.map((item) => (
            <HotItemDrim
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className="wrapper-directions__button">
          <Link to="/"> <Button className={`button__${theme.theme}__pos`} text="НА ГЛАВНУЮ" /></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ directions, theme }) => ({
  directions: directions.directions,
  theme: theme,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDirections: () => dispatch(fetchDirections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotToursDrim);
