import React from "react";
import NoImage from "./NoImage";
import Image from "./Image";

function ImageList(props) {
  const results = props.data;
  let images;
  let noImages;

  if (results.length > 0) {
    images = results.map((image) => {
      const { farm, server, id, secret, title } = image;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImage />;
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
}

export default ImageList;
