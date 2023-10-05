import "./splash.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/logo/fcsw dark logo.svg";

const Splash = () => {
  return (
    <div className="splashMobile">
      <div className="splashMobileWrapper">
        <section className="splashHeader">
          <h1>FAMILY CARE Southwest, P.C.</h1>
        </section>
        <NavLink exact to="/cra-doc" className="splashLogoSection m-3 ">
          <img src={Logo} alt="logo" className="splashLogoIconMobile logo" />
        </NavLink>
        <div className="splashBtns">
          <div className="splashBtnsWrapper">
            <NavLink
              className="btn splashBtn bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
              exact
              to="/loginmobile"
            >
              Login
            </NavLink>{" "}
            <br />
            <NavLink
              className="btn splashBtn bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
              exact
              to="/registermobile"
            >
              Register
            </NavLink>
          </div>
        </div>
        <div className="splashOfficeInfo">
          <section className="splashOfficeInfoWrapper">
            <h3>Office Hours</h3>
            <p>
              Monday-Friday 8:00am to 5:00pm <br />
              Saturday: 8:00am to 11:00am
            </p>
            <p>Phone: 303-933-4555</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Splash;
