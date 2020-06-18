import React from "react";
import GlobalStyle from "../../Theme/GlobalStyle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import HomePage from "../HomePage";
import InternetView from "../InternetView";
import TelewizjaView from "../TelewizjaView";
import TelefonView from "../TelefonView";
import KontaktView from "../KontaktView";
import InneView from "../InneView";
import Footer from "../../components/Footer"

class Root extends React.Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <>
            <Header />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/Internet" component={InternetView} />
              <Route exact path="/Telewizja" component={TelewizjaView} />
              <Route path="/Telefon" component={TelefonView} />
              <Route path="/Kontakt" component={KontaktView} />
              <Route path="/Inne" component={InneView} />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
