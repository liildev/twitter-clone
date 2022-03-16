import React from "react";
import "./Tweets.scss";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import settings from "../../../assets/svg/settings.svg";
import { Avatar } from "@mui/material";
import boy from '../../../assets/svg/boy.svg'
import girl from '../../../assets/svg/girl.svg'


const Widgets = () => {
  return (
    <div className="Tweets">
      <div className="Tweets__input">
        <input type="text" placeholder="Search Twitter" />
        <SearchIcon className="Tweets__search" />
      </div>

      <div className="Tweets__container">
        <div className="trends">
          <h2>Trends for you</h2>
          <img className="settings" src={settings} alt="settings" />
        </div>

        <div className="revolution">
          <p>Trending in Germany</p>
          <MoreHorizIcon className="more" />
          <div className="revolution__trending">
            <h3>Revolution</h3>
            <p>50.4K Tweets</p>
          </div>
        </div>

        <div className="revolution">
          <p>Trending in Germany</p>
          <MoreHorizIcon className="more" />
          <div className="revolution__trending">
            <h3>Revolution</h3>
            <p>50.4K Tweets</p>
          </div>
        </div>

        <div className="revolution">
          <p>Trending in Germany</p>
          <MoreHorizIcon className="more" />
          <div className="revolution__trending">
            <h3>Revolution</h3>
            <p>50.4K Tweets</p>
          </div>
        </div>
      </div>

      <div className="widgets__like">
        <h2>You might like</h2>

        <div className="follow">
          <Avatar className="girl" src={girl}/>
          <div className="follower">
            <p>Mushtariy</p>
            <h3>@Mushtar565266</h3>
          </div>

          <button>Follow</button>
        </div>

        <div className="follow">
          <Avatar className="girl" src={boy}/>
          <div className="follower">
            <p>Shuhratbek</p>
            <h3>@mrshukhrat</h3>
          </div>

          <button>Follow</button>
        </div>

        <a href="#">Show more</a>
      </div>
    </div>
  );
};

export default Widgets;
