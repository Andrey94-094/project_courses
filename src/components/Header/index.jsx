import "./Header.scss"
import FooterItem from "../Footer/components/FooterItem";
import { PureComponent } from "react";
import { connect } from "react-redux";

class Header extends PureComponent {
    render() {
        const { companyName } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <h3 className="header__title">ТУРИСТИЧЕСКОЕ АГЕНТСТВО {<FooterItem title={companyName.companyName} />}</h3>
                </div>
            </header>
        )
    }
}

const mapStateToProps = ({ companyName }) => ({
    companyName: companyName,
});
export default connect(mapStateToProps)(Header);