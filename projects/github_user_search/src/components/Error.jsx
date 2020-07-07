import React from "react";
import { StateContext } from "../context/context";
import "../scss/index.scss";

export default function Error() {
  return (
    <StateContext.Consumer>
      {({ errorText }) => {
        return <div className="error">Error: {errorText}</div>;
      }}
    </StateContext.Consumer>
  );
}
