import React from "react";
import { useSelector } from "react-redux";

export default function MainMiddle() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div id="middletoppart">
        <div id="middlesearch">
          <img src={user.image} alt="ava" id="middleAvatar" />
          <input type="text" placeholder="New Post" id="middleinput" />
        </div>
        <div id="middlebuttons" className="mt-2">
          <div>
            <i className="bi bi-image-fill mr-2" id="button1"></i>
            Photo
          </div>
          <div>
            <i className="bi bi-play-btn-fill mr-2" id="button2"></i>
            Video
          </div>
          <div>
            <i className="bi bi-calendar-date mr-2" id="button3"></i>
            Event
          </div>
          <div>
            <i className="bi bi-newspaper mr-2" id="button4"></i>
            Write an Article
          </div>
        </div>
      </div>
    </>
  );
}