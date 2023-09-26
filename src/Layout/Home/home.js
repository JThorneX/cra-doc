import "./home.scss";
import doctorPatient from "../../assets/images/doctor-patient.avif";
import medicalBuilding from "../../assets/images/medical-building.avif";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <header>
          <div className="w-lg-75 mx-lg-auto position-relative z-2 px-lg-3 py-4 shadow-5 rounded-3 rounded-lg-pill">
            <nav className="navbar navbar-expand-lg p-0">
              <div className="container">
                <a className="btn btn-info d-inline-block w-lg-64">
                  Home
                </a>
                <div className="collapse navbar-collapse justify-content-end ">
                  <div className="navbar-nav align-items-lg-center gap-2 ms-lg-4 w-lg-64">
                    <a className="btn btn-sm btn-info bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0">
                      Login
                    </a>
                    <a className="btn btn-sm btn-info bg-dark-hover border-0 w-100 w-lg-auto mb-4 mb-lg-0">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <img src={doctorPatient} className="doctor-patient" />
        <img src={medicalBuilding} className="medical-building" />
      </div>
    </div>
  );
};

export default Home;
