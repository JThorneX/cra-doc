import "./midheader.scss";
import { NavLink } from "react-router-dom";

function Midheader() {
    return (
<header className="midheader">
  <div className="banner w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 ">
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container justify-content-around">
        <NavLink
          className="btn midBtn btn-sm d-inline-block w-lg-64 p-3 fs-4 px-5"
          exact
          to="/aboutUs"
        >
          About Us
        </NavLink>
        <br />
        <a
          className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5"
          href="http://www.connectforhealthco.com/"
        >
          Connect for Health Colorado
        </a>{" "}
        <br />
        <a
          className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5"
          href="https://www.medicare.gov/"
        >
          Medicare
        </a>
      </div>
    </nav>
  </div>
</header>

);
}
export default Midheader;
