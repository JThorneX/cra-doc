import "./banner.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Alert() {
  return (
    <div className="popUpWrapper">
      <AnimationOnScroll
        animateIn="animate__fadeInRightBig"
        animatePreScroll={false}
        animateOnce={true}
        className="animatePopUp"
      >
        <div className="popUpInfo">
          <p className="popUpText">
            Get your flu shot!
            <br />
            Call to reserve a time or walk in.
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Alert;