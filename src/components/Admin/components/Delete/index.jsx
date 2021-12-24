import { PureComponent } from 'react';
import Item from "../Item";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteDirection } from "../../../../actionCreators"

class Delete extends PureComponent {
  onItemRemove = itemId => {
    const { deleteDirection } = this.props;
    deleteDirection(itemId);
  };

  render() {
    const { directions } = this.props;
    return (
      <div>
        {directions.map(item => (
          <Item
            id={item.id}
            text={item.country}
            onRemove={this.onItemRemove}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = ({ directions }) => ({
  directions: directions.directions,
});
const mapDispatchToProps = (dispatch) => ({
  deleteDirection: (direction) => dispatch(deleteDirection(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Delete));