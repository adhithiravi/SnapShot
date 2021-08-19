import React from "react";
import Image from "./Image";

function ImageList({ images }) {
  let imageList;
  if (images.length > 0) {
    imageList = images.map((image) => {
      const { farm, server, id, secret, title } = image;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} id={id} title={title} />;
    });
  }

  return imageList ? <ul>{imageList}</ul> : <></>;
}

export default ImageList;
