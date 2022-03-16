import React from "react";
import { Avatar } from "@mui/material";
import me from "../assets/img/me.jpeg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import comment from "../assets/svg/footer/comment.svg";
import retweet from "../assets/svg/footer/retweet.svg";
import like from "../assets/svg/footer/like.svg";
import share from "../assets/svg/footer/share.svg";
import statistics from "../assets/svg/footer/statistics.svg";
import pin from "../assets/svg/pin.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Posts.scss";

const Posts = () => {
  return (
    <div className="post2">
        <div className="pin">
          <img src={pin} alt="" />
          <span>Pinned Tweet</span>
        </div>
        <div className="post2__body">
          <Avatar className="me" src={me} />
          <div className="post2__avatar"></div>
          <div className="post2__text">
            <span>
              <h3>mansourov {""}</h3>
              <VerifiedUserIcon className="post2__badge" />
              <p className="username">@mansurov.jr</p>
            </span>
            <p>
              As we become more and more positive, and more and more joyful, we
              uplift everyone around us.
            </p>
          </div>
          <MoreHorizIcon className="more" />

          <div className="post2__desc"></div>
        </div>

        <div className="post2__footer">
          <div>
            <img src={comment} />
            <p>10</p>
          </div>
          <div>
            <img className="retweet" src={retweet} />
            <p>1</p>
          </div>
          <div>
            <img src={like} />
            <p>8</p>
          </div>
          <img src={share} />
          <img src={statistics} />
        </div>
    </div>
  );
};

export default Posts;
