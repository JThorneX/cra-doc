import "./home.scss";
import doctorPatient from "../../assets/images/doctor-patient.avif";
import medicalBuilding from "../../assets/images/medical-building.avif";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCalendarDate } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="doctorImage">
          <img
            src={doctorPatient}
            className="doctor-patient"
            alt="doctor with patient"
          />
          <div className="transition">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animatePreScroll={false}
              animateOnce={true}
            >
              <div className="missionText missionOverlay">
                <h1>
                  Our mission is to provide families meaningful <br /> care
                  leading to exceptional health.
                </h1>
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
                <a className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5">
                  Connect for Health Colorado
                </a>{" "}
                <br />
                <a className="btn midBtn btn-sm border-0 w-lg-auto mb-4 mb-lg-0 p-3 fs-4 px-5">
                  Medicare
                </a>
              </div>
            </nav>
          </div>
        </header>
        <div className="fixed">
          <div className="buildingImage">
            <img src={medicalBuilding} className="medical-building" />
          </div>
          <div className="homeMenu">
            {/* <div className="relative"> */}
            <div className="row leftSide gx-2 gy-5">
              <AnimationOnScroll
                className="aniBox"
                animateIn="animate__fadeInLeft"
                animatePreScroll={false}
                animateOnce={true}
              >
                <div className="col-lg-6 col-12 d-flex justify-content-center">
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
                    <div className="px-lg-8 px-4">
                      <a className="w-100" href="/" target="_blank"></a>
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
                    <div className="px-lg-8 px-4">
                      <a className="w-100" href="/" target="_blank"></a>
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
                    <div className="px-lg-8 px-4">
                      <a className="w-100" href="/" target="_blank"></a>
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
                    <div className="px-lg-8 px-4">
                      <a className="w-100" href="/" target="_blank"></a>
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
                    <div className="px-lg-8 px-4">
                      <a className="w-100" href="/" target="_blank"></a>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
