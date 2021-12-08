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
        <span>Click</span>
      </p>
    </div>
  );
};

export default ButtonRenderer;
