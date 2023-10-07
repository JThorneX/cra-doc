import "./homeTablet.scss";
import { NavLink } from "react-router-dom";
import HeaderTablet from "../../../Header/headerTablet";
import FooterTablet from "../../../Footer/footerTablet";
import MidheaderTablet from "../../../Midheader/midheaderTablet";

const HomeTablet = () => {
  return (
    <div className="homeTablet">
      <HeaderTablet />
      <MidheaderTablet />
      <section>hi this is a tablet test</section>
      <FooterTablet />
    </div>
  );
};

export default HomeTablet;
