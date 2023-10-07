import "./homeMobile.scss";
import { NavLink } from "react-router-dom";
import HeaderMobile from "../../../Header/headerMobile";
import FooterMobile from "../../../Footer/footerMobile";
import MidheaderMobile from "../../../Midheader/midheaderMobile";
import PopUp from "../../../Alert/banner";

import {
  BsCalendarDate,
  BsEnvelope,
  BsClipboardData,
  BsClipboardPulse,
  BsPrescription,
} from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";

const HomeMobile = () => {
  return (
    <div className="homeMobile">
      <PopUp />
      <HeaderMobile />
      <div className="homeContentMobile">
        <div className="mobileMissionImage">
          <div className="missionTextMobile missionOverlayMobile">
            <section className="fs-1">
              Our mission is to provide families meaningful <br /> care leading
              to exceptional health.
            </section>
          </div>
          <MidheaderMobile />
        </div>
        <section>hi this is a mobile test</section>
      </div>
      <FooterMobile />
    </div>
  );
};

export default HomeMobile;
