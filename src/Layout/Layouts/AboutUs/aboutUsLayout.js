import "./aboutUsStyles.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Sims from "../../../assets/images/sims.jpg";
import Keller from "../../../assets/images/keller.jpg";
import Hildebrand from "../../../assets/images/hildebrand.JPG";
import Morgan from "../../../assets/images/morgan.jpg";
import Tim from "../../../assets/images/tim.jpg";
import Whitescarver from "../../../assets/images/whitescarver.jpg";

const AboutUs = () => {
  return (
    <div className="providerPage">
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Sims} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Morgan} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Whitescarver} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Tim} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Hildebrand} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
      <div className="providerItem">
        <div className="accordianShown">
          <div className="accordianCard">
            <div className="accordianHeader">
              <h5>
                <button className="btn btn-link collapsed">
                  <div className="providerHeadshot">
                    <img src={Keller} className="headshotImg"></img>
                  </div>
                  <div className="providerName"></div>
                  <div className="providerLink"></div>
                </button>
              </h5>
            </div>
            <div className="accordianBody collapse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
