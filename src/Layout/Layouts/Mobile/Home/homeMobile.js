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
  BsCreditCard2Back,
} from "react-icons/bs";
// import { TbReportMoney } from "react-icons/tb";

const HomeMobile = () => {
  return (
    <div className="homeMobile">
      {/* <PopUp /> */}
      <HeaderMobile />
      <div className="homeContentMobile">
        <div className="mobileMissionImage">
          <div className="missionTextMobile missionOverlayMobile">
            <section className="fs-1">
              Our mission is to provide families meaningful care leading to
              exceptional health.
            </section>
          </div>
          <MidheaderMobile />
        </div>
        <div className="fixedMobile">
          <h1 className="servicesMobile">Our Services</h1>

          <div className="homeMenuMobile">
            <div className="rowMobile leftSideMobile gx-2 gy-5">
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/appointments">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsCalendarDate className="gridIconMobile" /> <br />
                      <p className="gridTextMobile">Make an appointment</p>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/messages">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsEnvelope className="gridIconMobile" />
                      <br />
                      <p className="gridTextMobile">Message your provider</p>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/prescriptions">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsPrescription className="gridIconMobile" /> <br />
                      <p className="gridTextMobile">
                        Request a prescription renewal
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="rowMobile rightSideMobile gx-2 gy-5">
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/myChart">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsClipboardData className="gridIconMobile" /> <br />
                      <p className="gridTextMobile">Review your chart</p>
                    </div>
                  </div>
                </NavLink>
              </div>{" "}
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/testResults">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsClipboardPulse className="gridIconMobile" /> <br />
                      <p className="gridTextMobile">Review your test results</p>
                    </div>
                  </div>
                </NavLink>
              </div>{" "}
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivMobile">
                <NavLink className="gridLinkMobile" exact to="/payBill">
                  <div className="cardMobile m-6">
                    <div className="px-lg-8 px-4 menuItemMobile">
                      <BsCreditCard2Back className="gridIconMobile" /> <br />
                      <p className="gridTextMobile">Pay your bill</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
};

export default HomeMobile;
