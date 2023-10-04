import "./subheader.scss";
import { NavLink } from "react-router-dom";

function Subheader() {
  return (
    <header className="subheader">
      <div className="banner w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 shadow-5">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="navBtns">
            <div className="navbar-left">
              <NavLink
                className="btn subBtn d-inline-block p-2 fs-4 px-4"
                exact
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div className="navbar-right justify-content-end">
              <div className="navBtns align-items-lg-center gap-2 ms-lg-4 w-lg-6">
                <NavLink
                  className="btn subBtn bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
                  exact
                  to="/login"
                >
                  Login
                </NavLink>{" "}
                <br />
                <NavLink
                  className="btn subBtn bg-dark-hover border-0  mb-4 mb-lg-0 p-2 fs-4"
                  exact
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Subheader;
