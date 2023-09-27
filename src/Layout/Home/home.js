import "./home.scss";
import doctorPatient from "../../assets/images/doctor-patient.avif";
import medicalBuilding from "../../assets/images/medical-building.avif";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img src={doctorPatient} className="doctor-patient" />
        <img src={medicalBuilding} className="medical-building" />
      </div>
    </div>
  );
};

export default Home;
