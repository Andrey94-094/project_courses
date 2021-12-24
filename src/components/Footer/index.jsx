import { connect } from 'react-redux';
import { PureComponent } from 'react';

import FooterItem from "./components/FooterItem";
import "./Footer.scss"

class Footer extends PureComponent {

    render() {
        const { companyName } = this.props;
        const { footerblock } = this.props;
        return (
            <section className="footer">
                <div className="container">
                    <div className="footer__content">
                        {footerblock.map((item) => (
                            <FooterItem
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <hr className="footer__line"></hr>
                    <h3 className="footer__title">Туристическая Компания
                        {<FooterItem
                            name={companyName.companyName}
                        />}
                    </h3>
                </div>
            </section>
        )
    }
}
const mapStateToProps = ({ companyName, footerblock }) => ({
    companyName: companyName,
    footerblock: footerblock.footerblock,
});

export default connect(mapStateToProps)(Footer);