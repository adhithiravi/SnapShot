import React from "react";

function Image({ url, title }) {
  return (
    <li>
      <img src={url} alt={title} />
    </li>
  );
}
export default Image;
