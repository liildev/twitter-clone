import React from 'react';
import Feed from "./Feed/Feed"
import Widgets from "./Tweets/Tweets"
const Profile = () => {
    return (
        <div className="block">
            <Feed />
            <Widgets />
        </div>
    );
}

export default Profile;
