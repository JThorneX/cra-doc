import "./home.scss";
import doctorPatient from "../../assets/images/doctor-patient.avif";
import medicalBuilding from "../../assets/images/medical-building.avif";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
        <img src={medicalBuilding} className="medical-building" />
      </div>
    </div>
  );
};

export default Home;
