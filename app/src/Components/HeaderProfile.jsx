import React from "react";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function HeaderProfile({ avatar, title }) {
  return (
    <div className="headerOption">
      {avatar && <Avatar className="headerOption__avatar" src={avatar} />}
      <h3 className="headerOption__title">
        {title}
        <ArrowDropDownIcon />
      </h3>
    </div>
  );
}

export default HeaderProfile;
