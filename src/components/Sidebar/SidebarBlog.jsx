import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/svg/twitter-logo.svg";
import homeIcon from "../../assets/svg/home2.svg";
import explore from "../../assets/svg/explore.svg";
import notification from "../../assets/svg/notification.svg";
import messages from "../../assets/svg/messages.svg";
import bookmarks from "../../assets/svg/bookmarks.svg";
import lists from "../../assets/svg/lists.svg";
import prof from "../../assets/svg/profile.svg";
import more from "../../assets/svg/more.svg";
import { Avatar } from "@mui/material";
import me from "../../assets/img/me.jpeg";
import { NavLink } from "react-router-dom";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const SidebarBlog = () => {
  
  return (
      <div className="sidebar">
        <NavLink to="/home">
          <img src={logo} alt="logo" />
        </NavLink>

        <ul className="menu">
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/home"
              className="menu__links"
            >
              <img src={homeIcon} alt="" />
              Home
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/explore"
              className="menu__links"
            >
              <img src={explore} alt="" />
              Explore
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/notification"
              className="menu__links"
            >
              <img src={notification} alt="" />
              Notifications
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/messages"
              className="menu__links"
            >
              <img src={messages} alt="" />
              Messages
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/bookmarks"
              className="menu__links"
            >
              <img src={bookmarks} alt="" />
              Bookmarks
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/lists"
              className="menu__links"
            >
              <img src={lists} alt="" />
              Lists
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/profile"
              className="menu__links"
            >
              <img src={prof} alt="" />
              Profile
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink
              // activeClassName="menu__links--active"
              to="/more"
              className="menu__links"
            >
              <img src={more} alt="" />
              More
            </NavLink>
          </li>
        </ul>
        <button className="tweetBtn">Tweet</button>

        <div className="sidebar__avatar">
          <Avatar className="me" src={me} />
          <div className="sidebar__text">
            <span>
              <h3>mansourov {""}</h3>
              <VerifiedUserIcon className="post__badge" />
            </span>
            <p className="username">@mansurov.jr</p>
          </div>
        </div>
      </div>
  );
};

export default SidebarBlog;
