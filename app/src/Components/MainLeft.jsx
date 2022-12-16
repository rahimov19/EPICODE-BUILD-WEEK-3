import React from "react";
import { useSelector } from "react-redux";

export default function MainLeft() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div id="righttop">
        <img
          src="http://placekitten.com/1500/600"
          alt="cover"
          id="righttopcover"
        />
        <img src={user.image} alt="cover" id="righttopava" />
        <div className="mt-5" id="righttopname">
          <h5>
            {user.name} {user.surname}
          </h5>
          <p>{user.title}</p>
        </div>
        <div className="righttopstats">
          <div>
            <p>Profile view</p>
            <p> 33</p>
          </div>
          <div>
            <p>Posts view</p>
            <p> 222</p>
          </div>
        </div>
        <div className="righttoptabs">
          <i className="bi bi-bookmark-fill"></i>
          <p>My Bookmarks </p>
        </div>
      </div>
      <div id="righttoplinks">
        <div id="righttoplinksp">
          <p>Groups</p>
          <p>Events</p>
          <p>Followed Hastags</p>
        </div>
        <div id="righttopsearch">
          <p>Search New</p>
        </div>
      </div>
    </>
  );
}
