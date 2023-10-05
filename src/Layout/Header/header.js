import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
// import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./header.scss";

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
          <a href="/cra-doc" className="logo-section m-3 ">
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
      <header className="headerMobile">
        <div className="headerMobileWrapper">
          <div className="headerMobileContent">
            <a href="cra-doc/" className="headerLogoSection m-3 ">
              <img
                src={Logo}
                alt="logo"
                className="headerLogoIconMobile logo"
              />
            </a>
            <section className="siteTitleMobile">
              <h1>FAMILY CARE Southwest, P.C.</h1>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
