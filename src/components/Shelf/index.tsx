import React from "react";

import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IShelfProps {
  shelfTitle?: string;
}

const Shelf: React.FC<IShelfProps> = ({ shelfTitle }) => {
  return (
    <div className={"shelfContainer"}>
      <div className={"shelfTitle"}>{shelfTitle}</div>
    </div>
  );
};

export default Shelf;
