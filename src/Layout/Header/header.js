import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./header.scss";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <div className="headerAll">
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo-section m-3 ">
            <img src={Logo} alt="logo" className="LlogoIcon logo" />
          </a>
          <div className="headerText w-75">
            <span className="fs-1 headerTitle">
              Family Care Southwest, P.C.
            </span>
            <section className="headerAddress fs-5">
              6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
            </section>
          </div>
          <div className="headerRight">
            <div className="headerHours">
              <section className="fs-3 hoursText">Office Hours</section>
              <section className="fs-5 hoursText">
                Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                11:00 am <br /> <br /> Phone: 303-933-4555
              </section>
            </div>
            <br />
            <div className="toggle-btn-section">
              <div className={`toggle-checkbox m-vertical-auto`}>
                <div className="modeText">Dark Mode</div>
                <input
                  className="toggle-btn__input"
                  type="checkbox"
                  name="checkbox"
                  onChange={handleThemeChange}
                  checked={theme === "light"}
                />
                <button
                  type="button"
                  className={`toggle-btn__input-label`}
                  onClick={handleThemeChange}
                ></button>
                <div className="modeText">Light Mode</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="subheader">
        <div className="banner w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 shadow-5 rounded-3 rounded-lg-pill">
          <nav className="navbar navbar-expand-lg p-0">
            <div className="container">
              <a
                className="btn subBtn d-inline-block w-lg-64 p-2 fs-4 px-4"
                href="/"
              >
                Home
              </a>
              <div className="collapse navbar-collapse justify-content-end ">
                <div className="navbar-nav align-items-lg-center gap-2 ms-lg-4 w-lg-6">
                  <a className="btn subBtn bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0 p-2 fs-4 px-44">
                    Login
                  </a>{" "}
                  <br />
                  <a className="btn subBtn bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0 p-2 fs-4 px-4">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
