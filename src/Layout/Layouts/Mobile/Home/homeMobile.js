import "./homeMobile.scss";
import { NavLink } from "react-router-dom";
import HeaderMobile from "../../../Header/headerMobile";
import FooterMobile from "../../../Footer/footerMobile";


const HomeMobile = () => {
  return (
    <div className="homeMobile">
      <HeaderMobile />
      <section>hi this is a mobile test</section>
      <FooterMobile />
    </div>
  );
};

export default HomeMobile;
