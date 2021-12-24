import { connect } from 'react-redux';
import { PureComponent } from 'react';

import Input from "../Input";
import Button from "../../../Button"
import {addFooterBlock} from "../../../../actionCreators";

class FooterAdd extends PureComponent {
  state = {
    title: '',
    text: '',
  };

  handleClick = () => {
    const {footerblock} = this.props;
    const {title, text} = this.state;
    const {addFooterBlock} = this.props;
    const footerblocks = {
      id: Math.floor(Math.random() * 10+2),
      title,
      text,
    };
    footerblock.length < 3 ?addFooterBlock(footerblocks): console.log();
  }

  handleChangeTitle = (e) => {
    this.setState({title: e.target.value})
  };

  handleChangeText = (e) => {
    this.setState({text: e.target.value})
  };

  render() {
    const { title, text} = this.state;
    const {theme} = this.props;
    const {footerblock} = this.props;
    return (
      <div >
        <Input placeholder="title" onChange={this.handleChangeTitle} value={title}/>
        <Input placeholder="text"onChange={this.handleChangeText} value={text}/>
        <Button className={`${footerblock.length < 3 ? `button__${theme.theme}__pos`:`button::hover`}`} text={footerblock.length < 3 ? "добавить" : "максимально 3 блока"} onClick={this.handleClick}/> 
      </div>   
    );
  }
}

const mapStateToProps = ({ footerblock, theme }) => ({
  footerblock: footerblock.footerblock,
  theme: theme,
});

const mapDispatchToProps = (dispatch) => ({
  addFooterBlock: (footerblock) => dispatch(addFooterBlock(footerblock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterAdd);
