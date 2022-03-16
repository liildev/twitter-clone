import { Avatar } from "@mui/material";
import "./TweetProf.scss";
import React from "react";
import avatar from "../../../assets/img/me.jpeg";
import location from "../../../assets/svg/location.svg";
import silka from "../../../assets/svg/silka.svg";
import ball from "../../../assets/svg/ball.svg";
import calendar from "../../../assets/svg/calendar.svg";

const TweetProf = () => {
  return (
    <div className="tweetProf">
      <div className="tweetProf__logo">
        <Avatar className="avatar" src={avatar} />
        <button className="edit">Edit profile</button>
      </div>

      <div className="tweetProf__name">
        <h2>mansourov</h2>
        <span>@mansurv.jr</span>
        <p>
          Student at <a href="https://najottalim.uz/">Najot Ta'lim</a>
        </p>

        <div className="tweetProf__location">
          <div className="location">
            <img src={location} alt="" />
            <a href="https://www.google.com/maps/d/viewer?ie=UTF8&oe=UTF8&msa=0&mid=1RaaM7zPjlX5bqdgnekzeJ8lhy2I&ll=41.33915253972937%2C69.2630585&z=13">
              Toshkent
            </a>
          </div>

          <div className="silka">
            <img src={silka} alt="" />
            <a className="telegram" href="#">
              t.me/mansurov_jr
            </a>
          </div>

          <div className="born">
            <img src={ball} alt="" />
            <span>Born February 03, 2000</span>
          </div>

          <div className="join">
            <img src={calendar} alt="" />
            <span>Joined January 2022</span>
          </div>
        </div>

        <div className="tweetProf__followers">
          <p>
            67 <span>Following</span>
          </p>

          <p className="followers">
            47 <span>Followers</span>
          </p>
        </div>
      </div>
      
      <ul className="menuBar">
        <li>
          <a href="#">Tweets</a>
        </li>
        <li>
          <a href="#">Tweets & replies</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li>
          <a href="#">Likes</a>
        </li>
      </ul>
    </div>
  );
};

export default TweetProf;
