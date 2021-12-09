import React from "react";

const ButtonRenderer = ({ value }: any) => {
  const handleClick = () => {
    console.log(value);
    if (value !== "NA") {
      window.open(value);
    } else {
      alert("Sorry! Resume link not available.");
    }
  };

  return (
    <div className="cell-btn">
      <p
        onClick={() => {
          handleClick();
        }}
      >
        <span>View</span>
      </p>
    </div>
  );
};

export default React.memo(ButtonRenderer);
