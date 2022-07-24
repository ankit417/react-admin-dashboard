import React, { useState } from "react";

export const Accordion = () => {
  const [isActive, setActive] = useState(false);
  const toogleAccordion = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="accordion-wrapper">
      <div
        className="accordion"
        onClick={() => {
          toogleAccordion();
        }}
      >
        <div>Accordion</div>
      </div>
      <div
        className="panel"
        style={{
          height: isActive ? "auto" : 0,
        }}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga
          alias facilis ex temporibus unde, eos odit error, tenetur, distinctio
          nesciunt. Corporis dolorem expedita natus dolorum. Ratione fuga ipsum
          incidunt!
        </p>
      </div>
    </div>
  );
};
