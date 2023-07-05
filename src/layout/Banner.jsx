import React from "react";
import "./Banner.scss";

function Banner({title, classImg}) {
  return (
    <div className={classImg ? "banner " + classImg : "banner"}>
      {title && <p>{title}</p>}
    </div>
  );
}

export default Banner;
