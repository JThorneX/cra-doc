import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./headerMobile.scss";

const Header = () => {
  return (
    <div className="headerAll">
      <header className="headerMobile">
        <div className="headerMobileWrapper">
          <div className="headerMobileContent">
            <a href="/home" className="headerLogoSection">
              <img
                src={Logo}
                alt="logo"
                className="headerLogoIconMobile logo"
              />
            </a>
            <section className="siteTitleMobile">
              <h2>FAMILY CARE Southwest, P.C.</h2>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
