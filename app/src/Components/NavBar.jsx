import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { Divider } from "@mui/material";

function NavBar() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.svgrepo.com/show/157006/linkedin.svg"
          alt="logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://avatars.githubusercontent.com/u/114650763?v=4"
          title="Me"
        />
        <Divider className="headerOption__divider" orientation="vertical" />
        <HeaderOption Icon={AppsIcon} title="Work" />
        <a
          className="headerOption__premium"
          href="https://premium.linkedin.com/"
        >
          <p>Try Premium for free</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
