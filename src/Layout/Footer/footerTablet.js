import "./footerTablet.scss";

import { NavLink } from "react-router-dom";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const FooterTablet = () => {
  return (
    <div className="footerTablet">
      <div className="footerContentTablet">
        <div className="footerContentTabletWrapper">
          <section className="footerIconLinks">
            <NavLink
              exact
              to="/cra-doc-home"
              className="footerHomeIcon footerTabletIconBox"
            >
              <AiOutlineHome className="footerTabletIcon" />
              <h6>Home</h6>
            </NavLink>
            <NavLink
              exact
              to="/my-chart"
              className="footerMyChartIcon footerTabletIconBox"
            >
              <BsClipboardData className="footerTabletIcon" />
              <h6>My Chart</h6>
            </NavLink>
            <NavLink
              exact
              to="/user-settings"
              className="footerSettingsIcon footerTabletIconBox"
            >
              <IoSettingsOutline className="footerTabletIcon" />
              <h6>My Settings</h6>
            </NavLink>
            <NavLink
              exact
              to="/logout"
              className="footerLogoutIcon footerTabletIconBox"
            >
              <IoLogOutOutline className="footerTabletIcon" />
              <h6>Logout</h6>
            </NavLink>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FooterTablet;
