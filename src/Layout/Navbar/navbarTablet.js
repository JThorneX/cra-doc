import "./navbarTablet.scss";

import { NavLink } from "react-router-dom";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavbarTablet = () => {
  return (
    <div className="navbarNavTablet">
      <div className="navbarContentTablet">
        <div className="navbarContentTabletWrapper">
          <section className="navbarIconLinksTablet">
            <NavLink
              exact
              to="/home"
              className="navbarHomeIcon navbarTabletIconBox"
            >
              <AiOutlineHome className="navbarTabletIcon" />
              <h6>Home</h6>
            </NavLink>
            <NavLink
              exact
              to="/my-chart"
              className="navbarMyChartIcon navbarTabletIconBox"
            >
              <BsClipboardData className="navbarTabletIcon" />
              <h6>My Chart</h6>
            </NavLink>
            <NavLink
              exact
              to="/user-settings"
              className="navbarSettingsIcon navbarTabletIconBox"
            >
              <IoSettingsOutline className="navbarTabletIcon" />
              <h6>My Settings</h6>
            </NavLink>
            <NavLink
              exact
              to="/logout"
              className="navbarLogoutIcon navbarTabletIconBox"
            >
              <IoLogOutOutline className="navbarTabletIcon" />
              <h6>Logout</h6>
            </NavLink>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NavbarTablet;
