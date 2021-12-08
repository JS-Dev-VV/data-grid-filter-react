import Loader from "../loader/Loader";

const FallBackComp = () => {
  return (
    <Loader loading={true} loadingText="Loading...">
      <div className="vh-100 w-100"></div>
    </Loader>
  );
}

export default FallBackComp;
