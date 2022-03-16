import { Avatar, Button } from '@mui/material';
import './TweetBox.scss'
import React from 'react';
import avatar from '../../../assets/img/me.jpeg'
import homeImg from '../../../assets//svg/home.svg'
const Tweetbox = () => {
    return (
        <div className="tweetBox">
             <form>
                 <div className="tweetBox__input">
                     <Avatar src={avatar} />
                     <input type="text" placeholder="What’s happening" />
                 </div>
                 <img className="homeImg" src={homeImg} alt="" />
                 <Button variant="outlined" className="tweetBox__tweet">Tweet</Button>
             </form>
        </div>
    );
}

export default Tweetbox;
