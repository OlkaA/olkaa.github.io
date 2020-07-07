import React from "react";
import "../scss/index.scss";

const InfoButton = ({ color }) => {
  return (
    <button style={{ border: `1px solid ${color}` }} className="infoButton">
      Detailed Info
    </button>
  );
};

export default InfoButton;
