import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from "./components/Input";
import Button from "../Button"
import "./Form.scss"

class Form extends PureComponent {
  state = {
    isLoading: false,
    isShowForm: true,
    email: '',
    name: '',
    error: '',
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  };

  handleClick = async () => {
    this.setState({ isLoading: true });
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
        }),
      })
      this.setState({ isLoading: false });
      this.setState({ isShowForm: false });
    } catch (err) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { theme } = this.props;
    const { isShowForm, email, name, isLoading } = this.state;
    return (
      <section className="form">
        {isShowForm ?
          (<div className="form__wrapper">
            <Input placeholder="Enter your Name" onChange={this.handleChangeName} value={name} />
            <Input placeholder="Enter your email" onChange={this.handleChangeEmail} value={email} />
            <Button className={`button__${theme.theme}`} text="представить" onClick={this.handleClick} disabled={!name || !email || isLoading} />
          </div>
          ) : 'мы с вами свяжемся'}
      </section>
    )
  }
}
const mapStateToProps = ({ theme }) => ({
  theme: theme,
});
export default connect(mapStateToProps)(withRouter(Form));
