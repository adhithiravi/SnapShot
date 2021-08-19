import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer";
import NotFound from "./components/NotFound";

/** Root of your React Application */
function App() {
  // Prevent page reload, clear input
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <HashRouter basename="/">
        <div className="container">
          <Route
            render={(props) => (
              <Header history={props.history} handleSubmit={handleSubmit} />
            )}
          />
          <Switch>
            <Route
              path="/search/:searchInput"
              render={(props) => (
                <GalleryContainer searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route
              path="/cars"
              render={() => <GalleryContainer searchTerm={"cars"} />}
            />
            <Route
              path="/plants"
              render={() => <GalleryContainer searchTerm={"plants"} />}
            />
            <Route
              path="/flowers"
              render={() => <GalleryContainer searchTerm={"flowers"} />}
            />
            <Route
              path="/food"
              render={() => <GalleryContainer searchTerm={"food"} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
