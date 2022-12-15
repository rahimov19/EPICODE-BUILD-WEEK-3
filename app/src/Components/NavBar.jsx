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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link to={"/"} className="lilogo">
            <img
              src="https://www.svgrepo.com/show/157006/linkedin.svg"
              alt="logo"
            />
          </Link>

          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <Link to={"/"}>
            {" "}
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Link>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          
          <Link to={"/messaging"}>
          <HeaderOption Icon={TextsmsIcon} title="Messaging" />
          </Link>
       
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <Link to={"/profile"}>
            <HeaderOption
              avatar="https://avatars.githubusercontent.com/u/114650763?v=4"
              title="Me"
            />
          </Link>
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
      {location.pathname === "/profile/experience" ? (
        <div className="header2">
          <div className="navbarForXp">
            <div>
              <img src={user.image} alt="user" />
            </div>
            <div>
              <p>
                {user.name} {user.surname}
              </p>
              <p>{user.title}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavBar;
