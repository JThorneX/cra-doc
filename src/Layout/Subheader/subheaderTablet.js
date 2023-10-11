import "./subheaderTablet.scss";
import { NavLink } from "react-router-dom";

function SubheaderTablet() {
  return (
    <header className="subheaderTablet">
      <div className="bannerSubTablet w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 shadow-5">
        <nav className="navbarSubTablet navbar-expand-lg p-0">
          <div className="navBtnsTablet">
            <div className="navbar-left navbarLeftTablet">
              <a
                href="/"
                className="btn subBtnTablet d-inline-block p-2 fs-4 px-4"
              >
                Home
              </a>
            </div>
            <div className="navbar-right navbarRightTablet justify-content-end">
              <div className="navBtnsTablet align-items-lg-center gap-2 ms-lg-4 w-lg-6">
                <NavLink
                  className="btn subBtnTablet bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
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

export default SubheaderTablet;
