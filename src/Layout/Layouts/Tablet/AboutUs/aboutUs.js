import "./aboutUs.scss";
import Header from "../../../Header/headerTablet";
import Footer from "../../../Footer/footerTablet";
// import AccordionComplete from "../../../components/Accordion/accordionComplete";
// import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import SimsMobile from "../../../../assets/images/sims.jpg";
import KellerMobile from "../../../../assets/images/keller.jpg";
import HildebrandMobile from "../../../../assets/images/hildebrand.JPG";
import MorganMobile from "../../../../assets/images/morgan.jpg";
import TimMobile from "../../../../assets/images/tim.jpg";
import WhitescarverMobile from "../../../../assets/images/whitescarver.jpg";

import ScrollToTop from "../../../../components/scrollToTop";

const AboutUs = () => {
  return (
    <div className="aboutUsMobile">
      <ScrollToTop />
      <Header />
      <div className="aboutUsWrapperMobile">
        <div className="providersWrapperMobile">
          <h2>Meet our providers</h2>
          <div className="accordion" id="accordionProvidersMobile">
            {/* data-bs-parent ^^  */}
            {/* SIMS ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#SimsMobile"
                  aria-expanded="false"
                  aria-controls="SimsMobile"
                >
                  Robert M. Sims II M.D.
                </button>
              </h2>
              <div
                id="SimsMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={SimsMobile}
                      alt="headshot of head doctor"
                      className="headshotImgMobile"
                    />
                  </div>
                  <div className="accordion-body accordionTextMobile">
                    My role as a physician is to work as a team with my patients
                    to maximize their health by encouraging them to participate
                    in and enjoy healthy behaviors. I also like to help patients
                    navigate the healthcare system by coordinating their care
                    among their various providers, both conventional and
                    alternative practitioners. I believe in exploring a variety
                    of therapies that will help my patients as long as there is
                    some scientific evidence to support them.
                    <br />
                    <br />
                    As a son and father of two kids, I also have a special
                    interest in Diabetes and Heart Disease/Stroke. I help my
                    patients address diabetic issues with a multi-disciplinary
                    approach, and I encourage them to prevent problems by eating
                    well, engaging in stress reduction practices and remaining
                    physically active as they age in a positive and enjoyable
                    way.
                    <br />
                    <br />I also believe in work/life balance and when I am not
                    taking care of patients, I enjoy soccer, basketball and
                    softball on my days off.
                  </div>
                </div>
              </div>
            </div>
            {/* SIMS ACCORDION END  */}
            {/* KELLER ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#KellerMobile"
                  aria-expanded="false"
                  aria-controls="KellerMobile"
                >
                  Lisa G. Keller PA-C
                </button>
              </h2>
              <div
                id="KellerMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={KellerMobile}
                      alt="headshot of physician's assistant"
                      className="headshotImgMobile"
                    />
                  </div>
                  <div className="accordion-body accordionTextMobile">
                    As a PA-C and mother, I understand first hand the pressures
                    that stress a busy family. My goal is to maximize my
                    patients’ health by encouraging them to participate in
                    healthy behaviors.
                    <br />
                    <br />I have a special interest in teaching and patient
                    education. I try hard to make you feel at ease and
                    comfortable with the care I deliver. My husband and I enjoy
                    the outdoors, including rock-climbing, mountain biking and
                    skiing. I also enjoy playing the piano.
                  </div>
                </div>
              </div>
            </div>
            {/* KELLER ACCORDION END  */}
            {/* HILDEBRAND ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#HildebrandMobile"
                  aria-expanded="false"
                  aria-controls="HildebrandMobile"
                >
                  Cindy A. Hildebrand PA-C
                </button>
              </h2>
              <div
                id="HildebrandMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={HildebrandMobile}
                      alt="headshot of physician's assistant"
                      className="headshotImgMobile"
                    />
                  </div>

                  <div className="accordion-body accordionTextMobile">
                    I have worked as a PA in the Littleton community since 2006.
                    Before becoming a PA, I worked in youth social services and
                    as a medical assistant in women’s health. I treat a large
                    variety of medical conditions for patients of all age
                    groups, and welcome a challenge. I grew up in the Midwest
                    and enjoyed many summers in the Upper Peninsula of Michigan
                    with my Grandfather, who taught me a love of nature and
                    community. <br />
                    <br />I spend my free time enjoying Denver city life and
                    mountain excursions. I play both indoor and outdoor soccer
                    and enjoy skiing, hiking, and canoeing.
                  </div>
                </div>
              </div>
            </div>
            {/* HILDEBRAND ACCORDION END  */}
            {/* MORGAN ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#MorganMobile"
                  aria-expanded="false"
                  aria-controls="MorganMobile"
                >
                  Lara E. Morgan PA-C
                </button>
              </h2>
              <div
                id="MorganMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={MorganMobile}
                      alt="headshot of physician's assistant"
                      className="headshotImgMobile"
                    />
                  </div>

                  <div className="accordion-body accordionTextMobile">
                    I have a Nutritional Sciences degree and a Physician
                    Assistant Masters from the University of Florida. I'm
                    originally from South Florida and have worked in family
                    medicine in Colorado since 2009. I an married to Brian and
                    have two wonderful children, Savannah and Jack.
                    <br />
                    <br />
                    I'm passionate about relationships and making sure each of
                    my patients are completely satisfied and confidant in the
                    healthcare I provide. I have a strong interest in nutrition,
                    exercise and an individual's mental wellbeing and how these
                    influence over all health. I am also passionate about
                    preventative healthcare, such as thoroughly evaluating one’s
                    risk for heart disease and treating obesity.
                    <br />
                    <br />
                    My favorite thing is to be active in Colorado's beautiful
                    mountains with my family.
                  </div>
                </div>
              </div>
            </div>
            {/* MORGAN ACCORDION END  */}
            {/* TIM ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TimMobile"
                  aria-expanded="false"
                  aria-controls="TimMobile"
                >
                  Lena Tim PA-C
                </button>
              </h2>
              <div
                id="TimMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={TimMobile}
                      alt="headshot of physician's assistant"
                      className="headshotImgMobile"
                    />
                  </div>

                  <div className="accordion-body accordionTextMobile">
                    I am passionate about family medicine. I value getting to
                    know and developing relationships with my patients,
                    providing individualized care to achieve their health goals.
                    I take special interest in promoting the importance of
                    health and wellbeing by emphasizing preventive care and
                    evidence-based medicine. Prior to joining Family Care
                    Southwest my medical background included surgical/trauma and
                    ICU experience.
                    <br />
                    <br /> I am a Colorado native and enjoy spending time with
                    family and friends, hiking, biking, skiing, and traveling in
                    my free time.
                  </div>
                </div>
              </div>
            </div>
            {/* TIM ACCORDION END  */}
            {/* WHITESCARVER ACCORDION START  */}
            <div className="providerItemMobile accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordionBtnMobile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#WhitescarverMobile"
                  aria-expanded="false"
                  aria-controls="WhitescarverMobile"
                >
                  Annette L. Whitescarver PA-C
                </button>
              </h2>
              <div
                id="WhitescarverMobile"
                className="accordion-collapse collapse accordionBodyMobile"
                data-bs-parent="#accordionProvidersMobile"
              >
                <div className="cardWrapperMobile">
                  <div className="imgWrapperMobile">
                    <img
                      src={WhitescarverMobile}
                      alt="headshot of physician's assistant"
                      className="headshotImgMobile"
                    />
                  </div>

                  <div className="accordion-body accordionTextMobile">
                    I am thrilled to be with Family Care Southwest. I love the
                    diversity of medicine in family practice and the opportunity
                    to get to know patients and educate them on prevention and
                    disease management. <br />
                    <br /> In my free time I am constantly planning my next trip
                    to fulfill my love of traveling. I also love spending time
                    outdoors, whether it be playing a team sport, going for a
                    jog, or enjoying a weekend in the mountains.
                  </div>
                </div>
              </div>
            </div>
            {/* WHITESCARVER ACCORDION END  */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
