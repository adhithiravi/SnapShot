import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import ImageList from "./ImageList";
import Loader from "./Loader";

/** TODO Renders gallery component and uses photocontext */
function Gallery({ searchTerm }) {
  const { images, runSearch, loading } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <ImageList images={images} />}
    </div>
  );
}

export default Gallery;
