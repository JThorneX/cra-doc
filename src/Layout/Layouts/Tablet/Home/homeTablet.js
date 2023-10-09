import "./homeTablet.scss";
import { NavLink } from "react-router-dom";
import HeaderTablet from "../../../Header/headerTablet";
import FooterTablet from "../../../Footer/footerTablet";
import MidheaderTablet from "../../../Midheader/midheaderTablet";

import {
  BsCalendarDate,
  BsEnvelope,
  BsClipboardData,
  BsClipboardPulse,
  BsPrescription,
  BsCreditCard2Back,
} from "react-icons/bs";

const HomeTablet = () => {
  return (
    <div className="homeTablet">
      <HeaderTablet />
      <div className="homeContentTablet">
        <div className="tabletMissionImage">
          <div className="missionTextMobile missionOverlayTablet">
            <section className="fs-1">
              Our mission is to provide families meaningful care leading to
              exceptional health.
            </section>
          </div>
          <MidheaderTablet />
        </div>
        <div className="fixedTablet">
          <h1 className="servicesTablet">Our Services</h1>

          <div className="homeMenuTablet">
            <div className="rowTablet leftSideTablet gx-2 gy-5">
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/appointments">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsCalendarDate className="gridIconTablet" /> <br />
                      <p className="gridTextTablet">Make an appointment</p>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/messages">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsEnvelope className="gridIconTablet" />
                      <br />
                      <p className="gridTextTablet">Message your provider</p>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/prescriptions">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsPrescription className="gridIconTablet" /> <br />
                      <p className="gridTextTablet">
                        Request a prescription renewal
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="rowTablet rightSideTablet gx-2 gy-5">
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/my-chart">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsClipboardData className="gridIconTablet" /> <br />
                      <p className="gridTextTablet">Review your chart</p>
                    </div>
                  </div>
                </NavLink>
              </div>{" "}
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/test-results">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsClipboardPulse className="gridIconTablet" /> <br />
                      <p className="gridTextTablet">Review your test results</p>
                    </div>
                  </div>
                </NavLink>
              </div>{" "}
              <div className="col-lg-6 col-12 d-flex justify-content-center cardDivTablet">
                <NavLink className="gridLinkTablet" exact to="/pay-bill">
                  <div className="cardTablet m-6">
                    <div className="px-lg-8 px-4 menuItemTablet">
                      <BsCreditCard2Back className="gridIconTablet" /> <br />
                      <p className="gridTextTablet">Pay your bill</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTablet />
    </div>
  );
};

export default HomeTablet;
