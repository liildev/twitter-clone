import React from "react";
import "./Feed.scss";
import Tweetbox from "../TweetProf/TweetProf";
import back from "../../../assets/svg/back.svg";
import Post2 from "../../../Posts/Post2";
import Posts from "../../../Posts/Posts";
import { useNavigate } from "react-router";

const Feed = () => {
  const navigate = useNavigate();

  const formOnSubmit = (e) => {
    if(e.target.value === 'back') {
      navigate("/");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="feed2">
      <div className="feed2__header">
        <img value="back" onClick={formOnSubmit} src={back} alt="" />
        <div className="home2">
          <h2>mansourov</h2>
          <p>1,070 Tweets</p>
        </div>
      </div>

      <Tweetbox />

      <Post2 />
      <Posts />
    </div>
  );
};

export default Feed;
