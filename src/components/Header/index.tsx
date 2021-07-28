import React from "react";
import {
  CorebizIcon,
  SearchIcon,
  UserIcon,
  MinicartIcon,
  MenuIcon
} from "../../assets/icons/icons";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <>
      <div className={"headerContainer"}>
        <div className={"headerWrappper"}>
          <div className={"headerIcon"}>
            <a href="/">
              <CorebizIcon />
            </a>
          </div>
          <div className={"headerSearch"}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
          </div>
          <div className={"headerAccount"}>
            <a href="/login">
              Minha Conta
              <UserIcon />
            </a>
          </div>
          <div className={"headerMinicart"}>
            <MinicartIcon />
          </div>
        </div>
      </div>
      <div className={"headerContainerMobile"}>
        <div className={"headerWrappper"}>
          <div className={"menuIcon"}>
            <MenuIcon />
          </div>
          <div className={"headerIcon"}>
            <a href="/">
              <CorebizIcon />
            </a>
          </div>
          <div className={"headerMinicart"}>
            <MinicartIcon />
          </div>
          <div className={"headerSearch"}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
