import "./midheaderMobile.scss";
import { NavLink } from "react-router-dom";

function MidheaderMobile() {
  return (
    <header className="midheaderMobile">
      <nav className="navbarMidMobile">
        <div className="midheaderBtnsMobile">
          <NavLink className="btn midBtnMobile" exact to="/about-us">
            About Us
          </NavLink>
          <br />
          <a
            className="btn midBtnMobile"
            href="http://www.connectforhealthco.com/"
          >
            Connect for Health Colorado
          </a>{" "}
          <br />
          <a className="btn midBtnMobile" href="https://www.medicare.gov/">
            Medicare
          </a>
        </div>
      </nav>
    </header>
  );
}
export default MidheaderMobile;
