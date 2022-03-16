import React from "react";
import "./App.scss";
import Createacc from "./components/CreateAcc/CreateAcc";
import Login from "./components/Login/Login";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home/HomeBlog";
import Explore from "./views/Explore/Explore";
import Notification from "./views/Notifications/Notifications";
import Messages from "./views/Messages/Messages";
import Bookmarks from "./views/Bookmark/Bookmark";
import Profile from "./views/Profile/Profile";
import Lists from "./views/Lists/Lists";
import More from "./views/More/More";
import ThemeTwitter from "./ThemeTwitter";
import Adminlayouts from "./layouts/AdminLayOuts";
import Noauthlayouts from "./layouts/NoAuthLayOuts";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <ThemeTwitter className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Adminlayouts />}>
            <Route
              path=""
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="explore"
              element={
                <ProtectedRoute>
                  <Explore />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Messages />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="lists" element={<Lists />} />
            <Route path="profile" element={<Profile />} />
            <Route path="more" element={<More />} />

            <Route path="*">404</Route>
          </Route>

          <Route path="/auth" element={<Noauthlayouts />}>
            <Route
              path=""
              element={<Navigate to="/auth/login" replace={true} />}
            />
            <Route path="login" index element={<Login />} />
          </Route>
        </Routes>
      </div>
    </ThemeTwitter>
  );
}
//21;00
export default App;
