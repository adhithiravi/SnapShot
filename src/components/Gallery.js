import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import ImageList from "./ImageList";
import Loader from "./Loader";

function Gallery({ searchTerm }) {
  const { images, loading, runSearch } = useContext(PhotoContext);
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
