import React from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecommendIcon from "@mui/icons-material/Recommend";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import PostPopover from "./PostPopover";
import { useNavigate } from "react-router-dom";
import { guestUserAction } from "../Redux/Actions";

export default function NewsFeed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      {posts[0] ? (
        posts
          .filter((post) => post.username === user.username)
          .map((post, i) => (
            <div className="my-3 post" key={post._id}>
              <div className="mt-3 d-flex justify-content-between lineunder pb-1">
                <div className="treedotsuser ">
                  <img src={user.image} alt="user" />
                  <span>
                    <b>
                      {user.name} {user.surname}
                    </b>{" "}
                    created this post
                  </span>
                </div>{" "}
                {post.username === user.username ? (
                  <PostPopover post={post} />
                ) : (
                  <></>
                )}
              </div>
              <div className="posttop">
                <div>
                  <img
                    src={post.user.image}
                    alt="postautor"
                    className="authorimg"
                  />
                </div>
                <div className="author">
                  <p>
                    {post.user.name} {post.user.surname}{" "}
                    <span>
                      <i className="bi bi-dot"></i> 1-st
                    </span>
                  </p>

                  <p>{post.user.title}</p>
                  <p>1d</p>
                </div>
                <div className="postH5"></div>
              </div>
              <div>
                <p> {post.text}</p>
                <img
                  src={
                    post.image ? post.image : "https://placekitten.com/40" + i
                  }
                  alt="postimg"
                  className="postimg"
                />
              </div>
              <div className="d-flex  align-items-center mt-2">
                <div>
                  <RecommendIcon id="button11" />
                  <StarsIcon id="button22" />
                  <FavoriteIcon id="button33" />
                  <PetsIcon id="button44" />
                </div>
                <p className="likedPeople">
                  {user.name} and {Math.floor(Math.random() * 1400)} others
                  Liked this Post
                </p>
                <p className="likedPeople2">
                  {Math.floor(Math.random() * 1400)} Comments{" "}
                  {Math.floor(Math.random() * 1400)} Shares
                </p>
              </div>
              <div className="buttonsdiv">
                <Button className="postbutton mr-1">
                  <ThumbUpAltIcon />
                  Like
                </Button>
                <Button className="postbutton mr-1">
                  <CommentIcon />
                  Comment
                </Button>
                <Button className="postbutton mr-1">
                  <AutorenewIcon />
                  Share
                </Button>
                <Button className="postbutton mr-1">
                  <i class="bi bi-send"></i>Send
                </Button>
              </div>
            </div>
          ))
      ) : (
        <div></div>
      )}

      {posts[0] ? (
        posts.slice(0, 20).map((post, i) => (
          <div className="my-3 post" key={post._id}>
            <div className="mt-3 d-flex justify-content-between lineunder pb-1">
              <div className="treedotsuser ">
                <img src={user.image} alt="user" />
                <span>
                  <b>
                    {user.name} {user.surname}
                  </b>{" "}
                  saw this post
                </span>
              </div>{" "}
              {post.username === user.username ? (
                <PostPopover post={post} />
              ) : (
                <></>
              )}
            </div>
            <div className="posttop mb-3 mt-1">
              <Col xs={9} className="posttop">
                <div>
                  <img
                    src={post.user.image}
                    alt="postautor"
                    className="authorimg"
                  />
                </div>
                <div className="author">
                  <p
                    className="linkToGuest"
                    onClick={() => {
                      navigate(`/guest/${post.user._id}`);
                      dispatch(guestUserAction(post.user));
                    }}
                  >
                    {post.user.name} {post.user.surname}{" "}
                    <span>
                      <i className="bi bi-dot"></i> 1-st
                    </span>
                  </p>

                  <p>{post.user.title}</p>
                  <p>1d</p>
                </div>
              </Col>
              <Col xs={3} className="postH5">
                <h5>+ Follow</h5>
              </Col>
            </div>
            <div>
              <p> {post.text}</p>
              <img
                src={post.image ? post.image : "https://placekitten.com/40" + i}
                alt="postimg"
                className="postimg"
              />
            </div>
            <div className="d-flex  align-items-center mt-2">
              <div>
                <RecommendIcon id="button11" />
                <StarsIcon id="button22" />
                <FavoriteIcon id="button33" />
                <PetsIcon id="button44" />
              </div>
              <p className="likedPeople">
                {user.name} and {Math.floor(Math.random() * 1400)} others Liked
                this Post
              </p>
              <p className="likedPeople2">
                {Math.floor(Math.random() * 1400)} Comments{" "}
                {Math.floor(Math.random() * 1400)} Shares
              </p>
            </div>
            <div className="buttonsdiv">
              <Button className="postbutton mr-1">
                <ThumbUpAltIcon />
                Like
              </Button>
              <Button className="postbutton mr-1">
                <CommentIcon />
                Comment
              </Button>
              <Button className="postbutton mr-1">
                <AutorenewIcon />
                Share
              </Button>
              <Button className="postbutton mr-1">
                <i class="bi bi-send"></i>Send
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}
