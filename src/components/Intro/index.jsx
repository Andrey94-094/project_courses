import { PureComponent } from 'react';
import { connect } from 'react-redux';
import aerostat from "../../assets/Images/IntroImages/aerostat.png"
import Button from "../Button";
import "./Intro.scss"
import { openPopup } from '../../actionCreators';

class Intro extends PureComponent {
    handleClick = () => {
        const { openPopup } = this.props;
        openPopup();
    }
    render() {
        return (
            <section className="intro">
                <div className="container">
                    <div className="intro__wrapper">
                        <div className="intro__bg">
                            <h4 className="intro__suptitle">пришло время для великих</h4>
                            <h1 className="intro__title">Приключение</h1>
                            <Button text="начать сейчас" className="button__welcome" onClick={this.handleClick} />
                            <img className="intro__img" src={aerostat} alt="аэростат"></img>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    openPopup: () => dispatch(openPopup())
});

export default connect(null, mapDispatchToProps)(Intro);
