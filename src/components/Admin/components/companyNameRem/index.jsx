import { connect } from 'react-redux';
import { PureComponent } from 'react';

import Input from "../Input";
import Button from "../../../Button"
import { companyName } from "../../../../actionCreators";

class Edit extends PureComponent {
  state = {
    Name: "",
  };

  handleClick = () => {
    const { Name } = this.state;
    const { companyName } = this.props;
    companyName(Name);
  }

  handleChangeCompanyName = (e) => {
    this.setState({ Name: e.target.value })
  };


  render() {
    const { Name } = this.state;
    const { theme } = this.props;
    return (

      <div className="wrapper-add">
        <Input placeholder="Имя компании"
          onChange={this.handleChangeCompanyName} value={Name} />
        <Button className={`button__${theme.theme}__pos`} text="Редактировать название компании" onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ companyName, theme }) => ({
  companyName: companyName.companyName,
  theme: theme,
});

const mapDispatchToProps = (dispatch) => ({
  companyName: (Name) => dispatch(companyName(Name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
