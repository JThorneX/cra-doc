// import { useContext } from "react";
// import { ThemeContext } from "../../contexts/theme-context";
// import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./headerMobile.scss";

const Header = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleThemeChange = () => {
//     const isCurrentDark = theme === "dark";
//     setTheme(isCurrentDark ? "light" : "dark");
//     localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
//   };

  return (
    <div className="headerAll">
      <header className="headerMobile">
        <div className="headerMobileWrapper">
          <div className="headerMobileContent">
            <a href="/cra-doc" className="headerLogoSection m-3 ">
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
