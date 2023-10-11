import Logo from "../../assets/logo/fcsw dark logo.svg";
import "./headerTablet.scss";

const HeaderTablet = () => {
  return (
    <div className="headerAll" id="headerAll">
      <header className="headerTablet">
        <div className="headerTabletWrapper">
          <div className="headerTabletContent">
            <div className="headerTabletTitle">
              <a href="/home" className="headerLogoSectionTablet">
                <img
                  src={Logo}
                  alt="logo"
                  className="headerLogoIconTablet logo"
                />
              </a>
              <section className="siteTitleTablet">
                <h1 className="titleTitle">FAMILY CARE Southwest, P.C.</h1>
              </section>
            </div>
            <section className="headerAddress">
              <p className="addressText">
                6169 S. Balsam Way, Suite #250 <br /> Littleton Colorado, 80123
              </p>
            </section>
          </div>

          <div className="headerTabletRight">
            <div className="headerHours">
              <section className="hoursText">Office Hours</section>
              <section className="hoursText">
                Monday-Friday: 8:00 am to 5:00 pm <br /> Saturday: 8:00am to
                11:00 am <br /> <br /> Phone: 303-933-4555
              </section>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderTablet;
