import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer";
import NotFound from "./components/NotFound";

/** Root of your React Application */
function App() {
  // Prevent page reload, clear input
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route render={() => <Header handleSubmit={handleSubmit} />} />
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
