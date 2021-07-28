import React from "react";

// import { Container } from './styles';

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
