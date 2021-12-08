import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchContext } from "../../contexts/searchContext";

type Inputs = {
  highlightWord: string;
};

const Filter = () => {
  const sContext = React.useContext(SearchContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  watch("highlightWord");

  return (
    <>
      <section className="">
        <div className="w-100 text-center shadow-464646 mb-3rem">
          <h1 className="fw-bold btn">Filters</h1>
        </div>

        {true && (
          <div className="m-1rem">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1rem">
                <label className="fw-bold btn">Search Word:</label>
                <input
                  className="w-100 btn"
                  placeholder="Search..."
                  {...register("highlightWord", { required: true })}
                />
                {errors.highlightWord && (
                  <span className="c-red">This field is required</span>
                )}
              </div>
              <div className="text-right">
                <input className="input-btn" type="submit" />
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default Filter;
