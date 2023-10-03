import React from "react";
import Accordion from "./accordion";
import "./styles/accordionStyles.scss";

import Sims from "../../assets/images/sims.jpg";
import Keller from "../../assets/images/keller.jpg";
import Hildebrand from "../../assets/images/hildebrand.JPG";
import Morgan from "../../assets/images/morgan.jpg";
import Tim from "../../assets/images/tim.jpg";
import Whitescarver from "../../assets/images/whitescarver.jpg";

// import Badge from "../../assets/logo/fcsw dark logo.svg";

const questionsAnswers = [
  {
    photo: <img src={Sims} className="headshotImg"></img>,
    question: "Robert M. Sims II M.D.",
    answer: `My role as a physician is to work as a team with my patients to maximize their health by encouraging them to participate in and enjoy healthy behaviors. I also like to help patients navigate the healthcare system by coordinating their care among their various providers, both conventional and alternative practitioners.  I believe in exploring a variety of therapies that will help my patients as long as there is some scientific evidence to support them.
   
    As a son and father of two kids, I also have a special interest in Diabetes and Heart Disease/Stroke. I help my patients address diabetic issues with a multi-disciplinary approach, and I encourage them to prevent problems by eating well, engaging in stress reduction practices and remaining physically active as they age in a positive and enjoyable way.
      

    I also believe in work/life balance and when I am not taking care of patients, I enjoy soccer, basketball and softball on my days off.`,
  },
  {
    photo: <img src={Keller} className="headshotImg"></img>,
    question: "Lisa G. Keller PA-C",
    answer: `As a PA-C and mother, I understand first hand the pressures that stress a busy family.  My goal is to maximize my patients’ health by encouraging them to participate in healthy behaviors. 
    
    I have a special interest in teaching and patient education. I try hard to make you feel at ease and comfortable with the care I deliver. My husband and I enjoy the outdoors, including rock-climbing, mountain biking and skiing. I also enjoy playing the piano.`,
  },
  {
    photo: <img src={Hildebrand} className="headshotImg"></img>,
    question: "Cindy A. Hildebrand PA-C",
    answer: ` I have worked as a PA in the Littleton community since 2006.  Before becoming a PA, I worked in youth social services and as a medical assistant in women’s health. I treat a large variety of medical conditions for patients of all age groups, and welcome a challenge. I grew up in the Midwest and enjoyed many summers in the Upper Peninsula of Michigan with my Grandfather, who taught me a love of nature and community. I spend my free time enjoying Denver city life and mountain excursions. I play both indoor and outdoor soccer and enjoy skiing, hiking, and canoeing. `,
  },
  {
    photo: <img src={Morgan} className="headshotImg"></img>,
    question: "Lara E. Morgan PA-C",
    answer: ` I have a Nutritional Sciences degree and a Physician Assistant Masters from the University of Florida. I'm originally from South Florida and have worked in family medicine in Colorado since 2009. I an married to Brian and have two wonderful children, Savannah and Jack.

    I'm passionate about relationships and making sure each of my patients are completely satisfied and confidant in the healthcare I provide. I have a strong interest in nutrition, exercise and an individual's mental wellbeing and how these influence over all health. I am also passionate about preventative healthcare, such as thoroughly evaluating one’s risk for heart disease and treating obesity.
   
   My favorite thing is to be active in Colorado's beautiful mountains with my family. `,
  },
  {
    photo: <img src={Whitescarver} className="headshotImg"></img>,
    question: "Annette L. Whitescarver PA-C",
    answer: `I am thrilled to be with Family Care Southwest.  I love the diversity of medicine in family practice and the opportunity to get to know patients and educate them on prevention and disease management.  In my free time I am constantly planning my next trip to fulfill my love of traveling.  I also love spending time outdoors, whether it be playing a team sport, going for a jog, or enjoying a weekend in the mountains.`,
  },
  {
    photo: <img src={Tim} className="headshotImg"></img>,
    question: "Lena Tim PA-C",
    answer: `I am passionate about family medicine. I value getting to know and developing relationships with my patients, providing individualized care to achieve their health goals. I take special interest in promoting the importance of health and wellbeing by emphasizing preventive care and evidence-based medicine. Prior to joining Family Care Southwest my medical background included surgical/trauma and ICU experience. I am a Colorado native and enjoy spending time with family and friends, hiking, biking, skiing, and traveling in my free time.`,
  },
];

const AccordionComplete = () => {
  return (
    <div className="container">
      <div className="component">
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  );
};

export default AccordionComplete;
