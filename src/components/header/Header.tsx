const Header = () => {
  return (
    <>
      <section className="shadow-464646 pos-sticky">
        <div className="h-4rem d-flex box-y-center">
          <div className="w-50 ">
            <img
              src="https://uploads-ssl.webflow.com/6123bc7954851522336e876e/6123be80051bfea06e5b391b_Logo_Black_White_BG_cropped.png"
              className="w-20 ml-5rem"
            />
          </div>
          <div className="w-50 text-right px-2rem">
            <p className="f-16px fw-bold cursor-pointer">
              {/* <span className="btn">Login</span> */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
