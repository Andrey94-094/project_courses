import { combineReducers } from 'redux';
import popup from './popup';
import directions from './directions';
import companyName from './companyName';
import footerblock from './footerblock';
import theme from './theme';

export default combineReducers({
    popup,
    directions,
    companyName,
    footerblock,
    theme,
});
