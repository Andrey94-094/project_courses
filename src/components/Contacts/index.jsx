import { PureComponent } from "react";
import Header from "../Header";
import Intro from "../Intro";
import Form from "../Form";
import HotToursDrim from "../HotToursDrim";

class ContactsPage extends PureComponent {

  render() {
    return (
      <main>
        <Header />
        <Intro />
        <Form />
        <HotToursDrim />
      </main>
    );
  }
}

export default (ContactsPage);
