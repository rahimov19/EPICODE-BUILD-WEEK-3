import React from "react";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { Divider } from "@mui/material";
import HeaderProfile from "./HeaderProfile";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [profileData, setProfileData] = useState({});
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/me";
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MjZmOWM5NmRmYjAwMTUyMWE1Y2QiLCJpYXQiOjE2NzA4NzIxOTksImV4cCI6MTY3MjA4MTc5OX0.yvOTDhvjHOMjzOljbQSy14jHPbW8thYnr5ZABpcn5W4",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProfileData(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to={"/"} className="lilogo">
          <img
            src="https://www.svgrepo.com/show/157006/linkedin.svg"
            alt="logo"
          />
        </Link>
        <div className="searchBar__div">
          <Searchbar />
        </div>

        <div className="header__right">
          <Link to={"/"}>
            {" "}
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Link>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={TextsmsIcon} title="Messaging" />
          <Link to={"/notifications"}>
            {" "}
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          </Link>

          <HeaderProfile
            avatar={profileData.image}
            alt="profileImage"
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
    </div>
  );
}

export default NavBar;
