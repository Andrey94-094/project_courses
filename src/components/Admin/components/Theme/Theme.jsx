import { PureComponent } from 'react';
import { connect } from 'react-redux';

import Button from "../../../Button";
import { themeStyle } from "../../../../actionCreators"


class Theme extends PureComponent {
  state = {
    isShowMore: false,
    theme: ""
  }

  handleClick = () => {
    this.setState({ isShowMore: !this.state.isShowMore });
    this.state.isShowMore ? this.state.theme = "orange" : this.state.theme = "yellow";
    const { themeStyle } = this.props;
    const { theme } = this.state;
    themeStyle(theme);
  }

  render() {
    const { isShowMore } = this.state;
    const { theme } = this.props;
    return (
      <Button text={isShowMore ? "жёлтая тема" : "оранжевая тема"} onClick={this.handleClick}
        className={`button__${theme.theme}__pos`} />
    )
  }
}
const mapStateToProps = ({ theme }) => ({
  theme: theme,
});
const mapDispatchToProps = (dispatch) => ({
  themeStyle: (theme) => dispatch(themeStyle(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);