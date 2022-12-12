import React from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

function HeaderProfile({ avatar, title }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="headerOption">
      <div onClick={(e) => setOpen(true)}>
        {avatar && <Avatar className="headerOption__avatar" src={avatar} />}
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
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default HeaderProfile;
