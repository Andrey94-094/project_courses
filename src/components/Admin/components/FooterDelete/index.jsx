import { PureComponent } from 'react';
import Item from "../Item";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFooter } from "../../../../actionCreators"

class FooterDelete extends PureComponent {
  onItemRemove = itemId => {
    const { deleteFooter } = this.props;
    deleteFooter(itemId);
  };

  render() {
    const { footerblock } = this.props;
    return (
      <div>
        {footerblock.map(item => (
          <Item
            id={item.id}
            text={item.title}
            onRemove={this.onItemRemove}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = ({ footerblock }) => ({
  footerblock: footerblock.footerblock,
});
const mapDispatchToProps = (dispatch) => ({
  deleteFooter: (footerblock) => dispatch(deleteFooter(footerblock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterDelete));