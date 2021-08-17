import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/cars" />} />

              <Route
                path="/cars"
                render={() => <GalleryContainer searchTerm="Cars" />}
              />
              <Route
                path="/plant"
                render={() => <GalleryContainer searchTerm="plants" />}
              />
              <Route
                path="/bird"
                render={() => <GalleryContainer searchTerm="bird" />}
              />

              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <GalleryContainer
                    searchTerm={props.match.params.searchInput}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
