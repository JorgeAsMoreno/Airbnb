import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <img
        alt="Logo"
        className="header-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
      />

      <div className="header-center">
        <input
          type="text"
        />
        <SearchIcon />
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <ArrowDropDownIcon />
        <AccountCircleIcon />
      </div>
    </header>
  )
}

export default Header