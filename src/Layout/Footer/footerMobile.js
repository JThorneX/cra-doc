import "./footerMobile.scss";

import { NavLink } from "react-router-dom";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const FooterMobile = () => {
  return (
    <div className="footerMobile">
      <div className="footerContentMobile">
        <div className="footerContentMobileWrapper">
          <section className="footerIconLinks">
            <NavLink
              exact
              to="/cra-doc-home"
              className="footerHomeIcon footerMobileIconBox"
            >
              <AiOutlineHome className="footerMobileIcon" />
              <h6>Home</h6>
            </NavLink>
            <NavLink
              exact
              to="/my-chart"
              className="footerMyChartIcon footerMobileIconBox"
            >
              <BsClipboardData className="footerMobileIcon" />
              <h6>My Chart</h6>
            </NavLink>
            <NavLink
              exact
              to="/user-settings"
              className="footerSettingsIcon footerMobileIconBox"
            >
              <IoSettingsOutline className="footerMobileIcon" />
              <h6>My Settings</h6>
            </NavLink>
            <NavLink
              exact
              to="/logout"
              className="footerLogoutIcon footerMobileIconBox"
            >
              <IoLogOutOutline className="footerMobileIcon" />
              <h6>Logout</h6>
            </NavLink>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
