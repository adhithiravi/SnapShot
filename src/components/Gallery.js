import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import ImageList from "./ImageList";
import Loader from "./Loader";

function Gallery({ searchTerm }) {
  const { images, loading, runSearch } = useContext(PhotoContext);

  /**  Data fetching is done here since it is a side-effect 
   Everytime the searchTerm changes, the useEffect will be invoked and
  run the search again */
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <ImageList data={images} />}
    </div>
  );
}

export default Gallery;
