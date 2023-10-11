import "./footerTablet.scss";
import Logo from "../../assets/logo/fcsw dark logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerTablet">
      <div className="footerContentTablet">
        <div className="logoInfoTablet">
          <div className="logoMarginTablet">
            <a href="/home" className="logoSectionTablet me-3">
              <img src={Logo} alt="logo" className="logoIconTablet logo" />
            </a>
            <header className="headerTitleTablet">
              Family Care Southwest, P.C.
            </header>
          </div>
        </div>
        <div className="firstRowTablet row d-flex">
          <div className="locationInfoTablet justify-content-start col-lg-6 col-12">
            <div className="footerSecondTablet">
              <div className="headerHoursTablet">
                <section className="hoursTextTablet">Office Hours</section>
                <section className="hoursTextTablet">
                  Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                  11:00 am <br /> <br /> Phone: 303-933-4555
                </section>
              </div>
              <br />
            </div>
            <section className="headerAddressTablet">
              6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
            </section>
          </div>
          <div className="badgeInfoTablet col-lg-6 col-12 d-flex justify-content-end align-items-center">
            <section className="badgeTextTablet">
              NCQA Patient-Centered Medical Home (PCMH) Recognition is the most
              widely-used way to transform primary care practices into medical
              homes.
            </section>
            <div className="badgeNCQATablet">
              <a href="https://www.ncqa.org/programs/health-care-providers-practices/heart-stroke-recognition-program-hsrp/"></a>
            </div>
          </div>
        </div>
        <div className="copyrightWrapperTablet d-flex ">
          <div className="copyrightBackgroundTablet d-flex pb-4 pt-4">
            <div className="privacyDisclaimerTablet d-flex justify-content-evenly col-md-6 fs-5">
              <NavLink exact to="/privacy" className="disclaimerLinkTablet">
                Privacy Policy
              </NavLink>
              <NavLink exact to="/disclaimer" className="disclaimerLinkTablet">
                Disclaimer
              </NavLink>
            </div>
            <div className="copyrightInfoTablet d-flex col-md-6 justify-content-center">
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
