import "./aboutUs.scss";
import AccordionComplete from "../../../components/Accordion/accordionComplete";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import Sims from "../../../assets/images/sims.jpg";
// import Keller from "../../../assets/images/keller.jpg";
// import Hildebrand from "../../../assets/images/hildebrand.JPG";
// import Morgan from "../../../assets/images/morgan.jpg";
// import Tim from "../../../assets/images/tim.jpg";
// import Whitescarver from "../../../assets/images/whitescarver.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="providerPage">
        <div className="providerItem">
          <AccordionComplete />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
