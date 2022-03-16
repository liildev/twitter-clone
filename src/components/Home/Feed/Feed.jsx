import React from "react";
import "./Feed.scss";
import Tweetbox from "../TweetBox/TweetBox";
import Customize from "../../../assets/svg/Customize.svg";
import Posts from "../../../Posts/Posts";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <div className="home">
          <h2>Home</h2>
          <img src={Customize} alt="" />
        </div>
      </div>
      
      <Tweetbox />

      <Posts />
      <Posts />
      <Posts />

    </div>
  );
};

export default Feed;
