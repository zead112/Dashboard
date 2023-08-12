import "../src/css/master.css";
import "../src/css/framework.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import logo from "./assets/imgs/MyLogo.png";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Friends from "./components/Friends";
import Files from "./components/Files";
import Plans from "./components/Plans";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [isNavigate, setIsNavigate] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Dashboard");
    setIsNavigate(false);
  }, [isNavigate]);

  return (
    <div className="page d-flex">
      <Sidebar />

      <div className="content w-full">
        <Header />
        {/* <Dashboard /> */}
        {/* <Settings /> */}
        {/* <Profile /> */}
        {/* <Projects /> */}
        {/* <Courses /> */}
        {/* <Friends /> */}
        {/* <Files /> */}
        {/* <Plans /> */}

        <Outlet />
      </div>
    </div>
  );
}

export default App;
