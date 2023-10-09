import "./splash.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/logo/fcsw dark logo.svg";

const Splash = () => {
  return (
    <div className="splashTablet">
      <div className="splashTabletWrapper">
        <section className="splashHeaderTablet">
          <h1>FAMILY CARE Southwest, P.C.</h1>
        </section>
        <NavLink exact to="/cra-doc" className="splashLogoSectionTablet m-3 ">
          <img src={Logo} alt="logo" className="splashLogoIconTablet logo" />
        </NavLink>
        <div className="splashBtnsTablet">
          <div className="splashBtnsWrapperTablet">
            <NavLink
              className="btn splashBtnTablet bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
              exact
              to="/login"
            >
              Login
            </NavLink>{" "}
            <br />
            <NavLink
              className="btn splashBtnTablet bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
              exact
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
        <div className="splashOfficeInfoTablet">
          <section className="splashOfficeInfoWrapperTablet">
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
