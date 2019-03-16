import React from "react";

const BackButton = props => {
  return (
    <div>
      <button onClick={props.onClick}>Back</button>
    </div>
  );
};

export default BackButton;
