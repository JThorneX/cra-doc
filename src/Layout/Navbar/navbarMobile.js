import "./navbarMobile.scss";

import { NavLink } from "react-router-dom";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavbarMobile = () => {
  return (
    <div className="navbarMobile">
      <div className="navbarContentMobile">
        <div className="navbarContentMobileWrapper">
          <section className="navbarIconLinks">
            <NavLink
              exact
              to="/cra-doc-home"
              className="navbarHomeIcon navbarMobileIconBox"
            >
              <AiOutlineHome className="navbarMobileIcon" />
              <h6>Home</h6>
            </NavLink>
            <NavLink
              exact
              to="/my-chart"
              className="navbarMyChartIcon navbarMobileIconBox"
            >
              <BsClipboardData className="navbarMobileIcon" />
              <h6>My Chart</h6>
            </NavLink>
            <NavLink
              exact
              to="/user-settings"
              className="navbarSettingsIcon navbarMobileIconBox"
            >
              <IoSettingsOutline className="navbarMobileIcon" />
              <h6>My Settings</h6>
            </NavLink>
            <NavLink
              exact
              to="/logout"
              className="navbarLogoutIcon navbarMobileIconBox"
            >
              <IoLogOutOutline className="navbarMobileIcon" />
              <h6>Logout</h6>
            </NavLink>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
