import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer";
import NotFound from "./components/NotFound";

/** Root of your React Application */
function App() {
  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route
            render={(props) => (
              <Header handleSubmit={handleSubmit} history={props.history} />
            )}
          />
          <Switch>
            <Route
              path="/search/:searchInput"
              render={(props) => (
                <GalleryContainer searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
