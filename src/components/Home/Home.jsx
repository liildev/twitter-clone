import React from 'react';
import Feed from "./Feed/Feed"
import Widgets from "./Widgets/Widgets"
const Home = () => {
    return (
        <div className="block">
            <Feed />
            <Widgets />
        </div>
    );
}

export default Home;
