import "./footer.scss";
import Logo from "../../assets/logo/fcsw dark logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-content">
        <div className="logoInfo">
          <div className="logoMargin m-5 d-flex">
            <a href="/" className="logo-section me-3 ">
              <img src={Logo} alt="logo" className="LlogoIcon logo" />
            </a>
            <header className="fs-1 headerTitle mt-4">
              Family Care Southwest, P.C.
            </header>
          </div>
        </div>
        <br />
        <br />
        <div className="locationInfo justify-content-start pb-5 m-5">
          <div className="footerSecond">
            <div className="headerHours">
              <section className="fs-3 hoursText">Office Hours</section>
              <section className="fs-5 hoursText">
                Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                11:00 am <br /> <br /> Phone: 303-933-4555
              </section>
            </div>
            <br />
          </div>
          <section className="headerAddress fs-5">
            6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
          </section>
        </div>
      </div>
      <div className="copyrightWrapper d-flex">
        <div className="copyrightBackground d-flex pb-4 pt-4">
          <div className="privacyDisclaimer d-flex justify-content-evenly col-md-6 fs-5">
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
          </div>
          <div className="copyrightInfo d-flex col-md-6 justify-content-center fs-5">
            &copy; Family Care Southwest {new Date().getFullYear()}
            {". "} All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
