import { Fragment, PureComponent } from "react";
import Form from "../Form";
import Header from "../Header";
import Intro from "../Intro";
import Features from "../Features";
import HotTours from "../HotTours";
import Gallery from "../Gallery";
import Statistics from "../Statistics";
import Footer from "../Footer";

export default class HomePage extends PureComponent {

  render() {
    return (
      <Fragment>
        <Header />
        <Intro />
        <Features />
        <HotTours />
        <Gallery />
        <Form />
        <Statistics />
        <Footer />
      </Fragment>
    );
  }
}
