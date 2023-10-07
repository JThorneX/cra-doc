// import { useContext } from "react";
// import { ThemeContext } from "../../contexts/theme-context";
// import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./headerTablet.scss";

const HeaderTablet = () => {
  // const { theme, setTheme } = useContext(ThemeContext);

  // const handleThemeChange = () => {
  //   const isCurrentDark = theme === "dark";
  //   setTheme(isCurrentDark ? "light" : "dark");
  //   localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  // };

  return (
    <div className="headerAll">
      <header className="headerTablet">
        <div className="headerTabletWrapper">
          <div className="headerTabletContent">
            <a href="/cra-doc" className="headerLogoSection m-3 ">
              <img
                src={Logo}
                alt="logo"
                className="headerLogoIconTablet logo"
              />
            </a>
            <section className="headerAddress fs-5">
              6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
            </section>

            <div className="headerRight">
              <div className="headerHours">
                <section className="fs-3 hoursText">Office Hours</section>
                <section className="fs-5 hoursText">
                  Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                  11:00 am <br /> <br /> Phone: 303-933-4555
                </section>
              </div>
            </div>
            <section className="siteTitleTablet">
              <h1>FAMILY CARE Southwest, P.C.</h1>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderTablet;
