import "./home.scss";
import doctorPatient from "../../assets/images/doctor-patient.avif";
import medicalBuilding from "../../assets/images/medical-building.avif";
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

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="doctorImage">
          <header className="subheader">
            <div className="banner w-lg-75 mx-lg-auto position-relative px-lg-3 py-4 shadow-5 rounded-3 rounded-lg-pill">
              <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                  <a
                    className="btn subBtn d-inline-block w-lg-64 p-2 fs-4 px-4"
                    href="/"
                  >
                    Home
                  </a>
                  <div className="collapse navbar-collapse justify-content-end ">
                    <div className="navbar-nav align-items-lg-center gap-2 ms-lg-4 w-lg-6">
                      <a className="btn subBtn bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0 p-2 fs-4 px-44">
                        Login
                      </a>{" "}
                      <br />
                      <a className="btn subBtn bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0 p-2 fs-4 px-4">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <div className="transition">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animatePreScroll={false}
              animateOnce={true}
              className="animateOverlay"
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
                <a
                  className="btn midBtn btn-sm d-inline-block w-lg-64 p-3 fs-4 px-5"
                  href="/"
                >
                  About Us
                </a>
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
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <BsCalendarDate className="gridIcon" /> <br />
                        Make an appointment
                      </a>
                    </div>
                  </div>
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
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <BsEnvelope className="gridIcon" />
                        <br />
                        Message your provider
                      </a>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInLeft"
                animateOnce={true}
                delay={200}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <BsPrescription className="gridIcon" /> <br />
                        Request a prescription renewal
                      </a>
                    </div>
                  </div>
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
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <BsClipboardData className="gridIcon" /> <br />
                        Review your chart
                      </a>
                    </div>
                  </div>
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
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <BsClipboardPulse className="gridIcon" /> <br />
                        Review your test results
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </AnimationOnScroll>
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInRight"
                animateOnce={true}
                delay={200}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                  <div className="card m-6">
                    <div className="px-lg-8 px-4 menuItem">
                      <a className="w-100" href="/" target="_blank">
                        <TbReportMoney className="gridIcon" /> <br />
                        Pay your bill
                      </a>
                    </div>
                  </div>
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
