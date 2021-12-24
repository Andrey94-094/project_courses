import "./Admin.scss";
import { PureComponent } from 'react';
import Add from "./components/Add";
import Button from "../Button";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Delete from "./components/Delete";
import Edit from "./components/companyNameRem";
import FooterAdd from "./components/FooterAdd";
import FooterDelete from "./components/FooterDelete";
import Theme from "./components/Theme/Theme";


class Admin extends PureComponent {

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        const { theme } = this.props;
        return (
            <div className="admin">
                <div className="admin__block">
                    <Theme />
                    <div className="admin__title">Добавление или удаление информации</div>
                    <Add />
                    <Delete />
                    <div className="admin__title"> Изменение названия компании в Header&Footer</div>
                    <Edit />
                    <div className="admin__title"> Footer</div>
                    <FooterAdd />
                    <FooterDelete />
                </div>
                <div className="admin__block">
                    <Button text="на главную" className={`button__${theme.theme}`} onClick={this.handleClick} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ theme }) => ({
    theme: theme,
});
export default connect(mapStateToProps)(withRouter(Admin));

