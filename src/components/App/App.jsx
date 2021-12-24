import Admin from "../Admin";
import Popup from "../Popup";
import { PureComponent } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import ContactsPage from "../Contacts";
import HomePage from "../HomePage";
import { fetchDirections } from "../../actionCreators";

class App extends PureComponent {
  componentDidMount() {
    const { fetchDirections } = this.props;
    fetchDirections();
  }
  render() {
    return (
      <Router>
        <Popup />
        <main>
          <Link to="/"></Link>
          <Link to="/contacts" ></Link>
          <Link to="/admins" ></Link>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/contacts/:id?">
              <ContactsPage />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDirections: () => dispatch(fetchDirections()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
