import { PureComponent } from 'react';
import Cross from '../Cross';
import './Popup.scss';
import { closePopup } from '../../actionCreators';
import { connect } from 'react-redux';

class Popup extends PureComponent {

  handleClick = () => {
    const { closePopup } = this.props;
    closePopup();
  }

  render() {
    const { isPopupOpen } = this.props;
    if (!isPopupOpen) {
      return null;
    }

    return (
      <div className="popup">
        <div className="popup__content">
          <Cross onClick={this.handleClick} />
          <div>Popap</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ popup }) => ({
  isPopupOpen: popup.isPopupOpen,
});

const mapDispatchToProps = dispatch => ({
  closePopup: () => dispatch(closePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);