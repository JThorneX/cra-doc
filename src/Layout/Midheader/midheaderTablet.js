import "./midheaderTablet.scss";
import { NavLink } from "react-router-dom";

function MidheaderTablet() {
  return (
    <header className="midheaderTablet">
      <nav className="navbarTablet">
        <div className="midheaderBtnsTablet">
          <NavLink className="btn midBtnTablet" exact to="/aboutUs">
            About Us
          </NavLink>
          <br />
          <a
            className="btn midBtnTablet"
            href="http://www.connectforhealthco.com/"
          >
            Connect for Health Colorado
          </a>{" "}
          <br />
          <a className="btn midBtnTablet" href="https://www.medicare.gov/">
            Medicare
          </a>
        </div>
      </nav>
    </header>
  );
}
export default MidheaderTablet;
