import React from "react";
import Gallery from "./Gallery";

/** TODO Renders gallery container */
function GalleryContainer({ searchTerm }) {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Gallery searchTerm={searchTerm} />
    </div>
  );
}

export default GalleryContainer;
