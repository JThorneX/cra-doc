import "./subheaderMobile.scss";
import { NavLink } from "react-router-dom";

function SubheaderMobile() {
  return (
    <header className="subheaderMobile">
      <div className="bannerSubMobile w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 shadow-5">
        <nav className="navbarSubMobile navbar-expand-lg p-0">
          <div className="navBtnsMobile">
            <div className="navbar-left navbarLeftMobile">
              <a
                href="/"
                className="btn subBtnMobile d-inline-block p-2 fs-4 px-4"
              >
                Home
              </a>
            </div>
            <div className="navbar-right navbarRightMobile justify-content-end">
              <div className="navBtnsMobile align-items-lg-center gap-2 ms-lg-4 w-lg-6">
                <NavLink
                  className="btn subBtnMobile bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
                  exact
                  to="/my-chart"
                >
                  My Chart
                </NavLink>{" "}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SubheaderMobile;
