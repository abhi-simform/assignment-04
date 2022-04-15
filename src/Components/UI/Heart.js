import React from "react";
import { useState } from "react";
import { RiHeartFill } from "react-icons/ri";
import "./Heart.scss";

const Heart = () => {
  const [favourite, setFavourite] = useState(false);
  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <div className="heart" onClick={handleClick}>
      <RiHeartFill className={favourite ? "heart--favourite" : "heart--normal"} />
    </div>
  );
};
export default Heart;
