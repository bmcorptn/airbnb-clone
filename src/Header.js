import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__middle">
        <input
          type="text"
          className="header__search"
          placeholder="Start your search"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__right">
        <p className="header__option">Become a host</p>
        <div className="header__option">
          <LanguageIcon />
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="header__accountOption">
          <MenuIcon />
          <Avatar className="header__avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
