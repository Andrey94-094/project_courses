import { connect } from 'react-redux';
import { PureComponent } from 'react';

import Input from "../Input";
import Button from "../../../Button"
import { addDirection } from '../../../../actionCreators';
import { remDirection } from '../../../../actionCreators';

class Add extends PureComponent {
  state = {
    country: '',
    img: '',
    title: '',
    text: '',
  };

  handleClick = () => {
    const { addDirection } = this.props;
    const { remDirection } = this.props;
    const { country, img, title, text } = this.state;
    const { directions } = this.props;
    directions.map((item) => { item.country === this.state.country ? (remDirection(country)) : (console.log()) })
    const direction = {
      id: Math.floor(Math.random() * 100 + 10),
      img,
      country,
      title,
      text,
    };
    addDirection(direction);
  }

  handleChangeCountry = (e) => {
    this.setState({ country: e.target.value })
  };

  handleChangeImg = (e) => {
    this.setState({ img: e.target.value })
  };

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  };

  handleChangeText = (e) => {
    this.setState({ text: e.target.value })
  };

  render() {
    const { img, country, title, text } = this.state;
    const { theme } = this.props;
    console.log(theme)
    return (

      <div className="wrapper-add">
        <Input placeholder="img" onChange={this.handleChangeImg} value={img} />
        <Input placeholder="country" onChange={this.handleChangeCountry} value={country} />
        <Input placeholder="title" onChange={this.handleChangeTitle} value={title} />
        <Input placeholder="text" onChange={this.handleChangeText} value={text} />
        <Button className={`button__${theme.theme}`} text="добавить/редактировать" onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ directions, theme }) => ({
  directions: directions.directions,
  theme: theme,
});

const mapDispatchToProps = (dispatch) => ({
  addDirection: (direction) => dispatch(addDirection(direction)),
  remDirection: (country) => dispatch(remDirection(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
