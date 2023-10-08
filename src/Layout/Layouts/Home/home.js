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
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import PopUp from "../../Alert/banner";
import Subheader from "../../Subheader/subheader";
import Midheader from "../../Midheader/midheader";

const Home = () => {
  return (
    <div className="home">
      <PopUp />
      <Header />
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

        <Midheader />
        
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
      <Footer />
    </div>
  );
};

export default Home;
