import React from "react";
import { Avatar } from "@mui/material";
import me from "../assets/img/me.jpeg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import comment from "../assets/svg/footer/comment.svg";
import retweet from "../assets/svg/footer/retweet.svg";
import like from "../assets/svg/footer/like.svg";
import share from "../assets/svg/footer/share.svg";
import statistics from "../assets/svg/footer/statistics.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Posts.scss";

const Posts = () => {
  return (
    <div className="post">
      <div className="post__body">
        <Avatar className="me" src={me} />
        <div className="post__text">
          <span>
            <h3>mansourov {""}</h3>
            <VerifiedUserIcon className="post__badge" />
            <p className="username">@mansurov.jr</p>
          </span>
          <div className="">
            <p>I challenge to build a Twitter clone in React</p>
          </div>
        </div>
        <MoreHorizIcon className="more" />

        <div className="post__desc"></div>
      </div>
      <img
        className="video"
        src="https://media.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        alt=""
      />

      <div className="post__footer">
        <img src={comment} />
        <img src={retweet} />
        <img src={like} />
        <img src={share} />
        <img src={statistics} />
      </div>
    </div>
  );
};

export default Posts;
