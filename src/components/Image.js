import React from "react";

function Image({ url, id, title }) {
  return (
    <li key={id}>
      <img src={url} alt={title} />
    </li>
  );
}
export default Image;
