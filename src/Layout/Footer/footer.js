import "./footer.scss";
import Logo from "../../assets/logo/fcsw dark logo.svg";
import { NavLink } from "react-router-dom";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="logoInfo">
          <div className="logoMargin m-5 d-flex">
            <a href="/cra-doc" className="logo-section me-3 ">
              <img src={Logo} alt="logo" className="LlogoIcon logo" />
            </a>
            <header className="fs-1 headerTitle mt-4">
              Family Care Southwest, P.C.
            </header>
          </div>
        </div>
        <br />
        <br />
        <div className="firstRow row d-flex justify-content-center pb-5">
          <div className="locationInfo justify-content-start col-lg-6 col-sm-6 col-12">
            <div className="footerSecond ms-5">
              <div className="headerHours">
                <section className="fs-3 hoursText">Office Hours</section>
                <section className="fs-5 hoursText">
                  Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                  11:00 am <br /> <br /> Phone: 303-933-4555
                </section>
              </div>
              <br />
            </div>
            <section className="headerAddress fs-5 ms-5">
              6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
            </section>
          </div>
          <div className="badgeInfo col-lg-6 col-sm-6 col-12 d-flex justify-content-end align-items-center">
            <section className="text-align-center badgeText fs-5">
              NCQA Patient-Centered Medical Home (PCMH) Recognition is the most
              widely-used way to transform primary care practices into medical
              homes.
            </section>
            <div className="badgeNCQA">
              <a href="https://www.ncqa.org/programs/health-care-providers-practices/heart-stroke-recognition-program-hsrp/"></a>
            </div>
          </div>
        </div>
        <div className="copyrightWrapper d-flex">
          <div className="copyrightBackground d-flex pb-4 pt-4">
            <div className="privacyDisclaimer d-flex justify-content-evenly col-md-6 fs-5">
              <NavLink exact to="/privacy" className="disclaimerLink">
                Privacy Policy
              </NavLink>
              <NavLink exact to="/disclaimer" className="disclaimerLink">
                Disclaimer
              </NavLink>
            </div>
            <div className="copyrightInfo d-flex col-md-6 justify-content-center fs-5">
              &copy; Family Care Southwest {new Date().getFullYear()}
              {". "} All rights reserved
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
