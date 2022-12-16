import React from "react";
import { Avatar, Menu, MenuItem, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderProfile({ avatar, title }) {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  return (
    <div className="headerOption">
      <div onClick={(e) => setOpen(true)}>
        {avatar && <Avatar className="headerOption__avatar" src={user.image} />}
        <h3 className="headerOption__title">
          {title}
          <ArrowDropDownIcon />
        </h3>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem id="idOfMenuItem">
          <Link id="linktoprofile" to={"/profile"}>
            <div className="menu__flexRow">
              {avatar && (
                <Avatar className="profile__avatar" src={user.image} />
              )}
              <div id="detailsOfMenuProfile">
                <h6 className="profile__name">
                  {user.name} {user.surname}
                </h6>
                <p className="profile__position">{user.title}</p>
              </div>
            </div>
          </Link>
        </MenuItem>
        <Link to={"/profile"}>
          <Button className="profile__button">View Profile</Button>
        </Link>
        <Divider />
        <MenuItem>
          <h3 className="menu__title">Account</h3>
        </MenuItem>
        <MenuItem>
          <a href="https://premium.linkedin.com/">
            <h4 className="menu__item" id="menu__item">
              Try Premium for free
            </h4>
          </a>
        </MenuItem>
        <MenuItem>
          <h4 className="menu__item">Settings & Privacy</h4>
        </MenuItem>
        <MenuItem>
          <h4 className="menu__item">Help</h4>
        </MenuItem>
        <MenuItem>
          <h4 className="menu__item">Language</h4>
        </MenuItem>
        <Divider />
        <MenuItem>
          <h3 className="menu__title">Manage</h3>
        </MenuItem>
        <MenuItem>
          <h4 className="menu__item">Posts & Activity</h4>
        </MenuItem>
        <MenuItem>
          <h4 className="menu__item">Job Posting Account</h4>
        </MenuItem>
        <Divider />
        <MenuItem>
          <h4 className="menu__item">Sign Out</h4>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default HeaderProfile;
