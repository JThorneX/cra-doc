import "./home.scss";
import { NavLink } from "react-router-dom";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  BsCalendarDate,
  BsEnvelope,
  BsClipboardData,
  BsClipboardPulse,
  BsPrescription,
} from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import PopUp from "../../Alert/banner";
import Subheader from "../../Subheader/subheader";

const Home = () => {
  return (
    <div className="home">
      <PopUp />
      <div className="home-content">
        <div className="doctorImage">
          <Subheader />
          <div className="transition">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animatePreScroll={false}
              animateOnce={true}
              className="animateOverlay"
              delay={500}
            >
              <div className="missionText missionOverlay">
                <section className="fs-1">
                  Our mission is to provide families meaningful <br /> care
                  leading to exceptional health.
                </section>
              </div>
            </AnimationOnScroll>
          </div>
        </div>

        <header className="midheader">
          <div className="banner w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 ">
            <nav className="navbar navbar-expand-lg p-0">
              <div className="container justify-content-around">
                <NavLink
                  className="btn midBtn btn-sm d-inline-block w-lg-64 p-3 fs-4 px-5"
                  exact
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
                <br />
                <a
                  className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5"
                  href="http://www.connectforhealthco.com/"
                >
                  Connect for Health Colorado
                </a>{" "}
                <br />
                <a
                  className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5"
                  href="https://www.medicare.gov/"
                >
                  Medicare
                </a>
              </div>
            </nav>
          </div>
        </header>

        <div className="fixed">
          <h1 className="services">Our Services</h1>

          <div className="homeMenu">
            {/* <div className="relative"> */}
            <div className="row leftSide gx-2 gy-5">
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInLeft"
                animatePreScroll={false}
                animateOnce={true}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center cardDiv">
                  <NavLink className="gridLink" exact to="/appointments">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <BsCalendarDate className="gridIcon" /> <br />
                        Make an appointment
                      </div>
                    </div>
                  </NavLink>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInLeft"
                animatePreScroll={false}
                animateOnce={true}
                delay={100}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <NavLink className="gridLink" exact to="/messages">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <BsEnvelope className="gridIcon" />
                        <br />
                        Message your provider
                      </div>
                    </div>
                  </NavLink>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInLeft"
                animateOnce={true}
                delay={200}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <NavLink className="gridLink" exact to="/prescriptions">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <BsPrescription className="gridIcon" /> <br />
                        Request a prescription renewal
                      </div>
                    </div>
                  </NavLink>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="row rightSide gx-2 gy-5">
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInRight"
                animatePreScroll={false}
                animateOnce={true}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <NavLink className="gridLink" exact to="/myChart">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <BsClipboardData className="gridIcon" /> <br />
                        Review your chart
                      </div>
                    </div>
                  </NavLink>
                </div>{" "}
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInRight"
                animatePreScroll={false}
                animateOnce={true}
                delay={100}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <NavLink className="gridLink" exact to="/testResults">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <BsClipboardPulse className="gridIcon" /> <br />
                        Review your test results
                      </div>
                    </div>
                  </NavLink>
                </div>{" "}
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInRight"
                animateOnce={true}
                delay={200}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <NavLink className="gridLink" exact to="/payBill">
                    <div className="card m-6">
                      <div className="px-lg-8 px-4 menuItem">
                        <TbReportMoney className="gridIcon" /> <br />
                        Pay your bill
                      </div>
                    </div>
                  </NavLink>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;