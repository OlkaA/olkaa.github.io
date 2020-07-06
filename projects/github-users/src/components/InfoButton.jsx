import React from "react";

const InfoButton = ({ color }) => {
  return (
    <button style={{ border: `1px solid ${color}` }} className="infoButton">
      Detailed Info
    </button>
  );
};

export default InfoButton;
