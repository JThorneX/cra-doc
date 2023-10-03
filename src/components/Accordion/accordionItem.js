import React from "react";
import "./styles/accordionStyles.scss";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item.question}>
    <div className="providerField">
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        <div className="headshotImg">{item.photo}</div>
        <dd className="paragraph">
          <h2>{item.question}</h2>
          <p
            id={`faq${index + 1}_desc`}
            data-qa="faq__desc"
            className={`faq__desc ${showDescription}`}
          >
            {item.answer}
          </p>
          
        </dd>
      </button>
    </div>
  </div>
);

export default AccordionItem;
