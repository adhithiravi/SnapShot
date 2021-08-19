import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

export const PhotoContext = createContext();

function PhotoContextProvider(props) {
  // State to store an array of images.
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query) => {
    // its still loading
    setLoading(true);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=50&format=json&nojsoncallback=1`
      )
      .then((response) => {
        // set images from response in state
        setImages(response.data.photos.photo);

        // done loading
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <PhotoContext.Provider value={{ images, runSearch, loading }}>
      {props.children}
    </PhotoContext.Provider>
  );
}

export default PhotoContextProvider;
