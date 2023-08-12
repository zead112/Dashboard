import { Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar bg-white p-20 p-relative">
      <h3 className="p-relative txt-c mt-0">Zead Hajebrahem</h3>
      <ul>
        <li>
          <NavLink
            to="/Dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Settings"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-gear fa-fw"></i>
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-user fa-fw"></i>
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-diagram-project fa-fw"></i>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Courses"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-graduation-cap fa-fw"></i>
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Friends"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-user-group fa-fw"></i>
            <span>Friends</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Files"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-solid fa-file fa-fw"></i>
            <span>Files</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Plans"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex align-center fs-14 c-black rad-6 p-10"
                : isActive
                ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                : "d-flex align-center fs-14 c-black rad-6 p-10"
            }
          >
            <i className="fa-regular fa-credit-card"></i>
            <span>Plans</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
