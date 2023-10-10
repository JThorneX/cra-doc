import "./footerMobile.scss";
import Logo from "../../assets/logo/fcsw dark logo.svg";
import { NavLink } from "react-router-dom";

// import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
// import { BsClipboardData } from "react-icons/bs";
// import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerMobile">
      <div className="footerContentMobile">
        <div className="logoInfoMobile">
          <div className="logoMarginMobile d-flex">
            <a href="/home" className="logoSectionMobile me-3 ">
              <img src={Logo} alt="logo" className="logoIconMobile logo" />
            </a>
            <header className="fs-3 headerTitleMobile mt-4">
              Family Care Southwest, P.C.
            </header>
          </div>
        </div>

        <div className="firstRowMobile row d-flex justify-content-center">
          <div className="locationInfoMobile justify-content-start col-lg-6 col-sm-6 col-12">
            <div className="footerSecondMobile">
              <div className="headerHoursMobile">
                <section className=" hoursTextMobile">Office Hours</section>
                <section className=" hoursTextMobile">
                  Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                  11:00 am <br /> <br /> Phone: 303-933-4555
                </section>
              </div>
              <br />
            </div>
            <section className="headerAddressMobile">
              6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
            </section>
          </div>
          <div className="badgeInfoMobile col-lg-6 col-sm-6 col-12 d-flex justify-content-end align-items-center">
            <section className="badgeTextMobile">
              NCQA Patient-Centered Medical Home (PCMH) Recognition is the most
              widely-used way to transform primary care practices into medical
              homes.
            </section>
            <div className="badgeNCQAMobile">
              <a href="https://www.ncqa.org/programs/health-care-providers-practices/heart-stroke-recognition-program-hsrp/"></a>
            </div>
          </div>
        </div>
        <div className="copyrightWrapperMobile d-flex">
          <div className="copyrightBackgroundMobile d-flex pb-4 pt-4">
            <div className="privacyDisclaimerMobile d-flex justify-content-evenly col-md-6 fs-5">
              <NavLink exact to="/privacy" className="disclaimerLinkMobile">
                Privacy Policy
              </NavLink>
              <NavLink exact to="/disclaimer" className="disclaimerLinkMobile">
                Disclaimer
              </NavLink>
            </div>
            <div className="copyrightInfoMobile d-flex col-md-6 justify-content-center">
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
