import "./midheaderTablet.scss";
import { NavLink } from "react-router-dom";

function MidheaderTablet() {
  return (
    <header className="midheader">
      <nav className="navbar">
        <div className="midheaderBtns">
          <NavLink className="btn midBtn" exact to="/aboutUs">
            About Us
          </NavLink>
          <br />
          <a className="btn midBtn" href="http://www.connectforhealthco.com/">
            Connect for Health Colorado
          </a>{" "}
          <br />
          <a className="btn midBtn" href="https://www.medicare.gov/">
            Medicare
          </a>
        </div>
      </nav>
    </header>
  );
}
export default MidheaderTablet;
