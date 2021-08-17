import React from "react";
import NoImage from "./NoImage";
import Image from "./Image";

function ImageList(props) {
  const results = props.data;
  let images;

  if (results.length > 0) {
    images = results.map((image) => {
      const { farm, server, id, secret, title } = image;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  }

  return images ? <ul>{images}</ul> : <NoImage />;
}

export default ImageList;
