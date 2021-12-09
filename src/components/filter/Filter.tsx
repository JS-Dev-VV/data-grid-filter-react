import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  searchWord: string;
};

const Filter = ({ handler }: any) => {
  console.log("filter");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      handler(value.searchWord);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <section className="">
        <div className="w-100 text-center shadow-464646 mb-3rem">
          <h1 className="fw-bold btn">Filters</h1>
        </div>

        <div className="m-1rem">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1rem">
              <label className="fw-bold btn">Search Word:</label>
              <input
                className="w-100 btn"
                placeholder="Search..."
                {...register("searchWord", { required: true })}
              />
              {errors.searchWord && (
                <span className="c-red">This field is required</span>
              )}
            </div>
            {/* <div className="text-right">
                <input className="input-btn" type="submit" />
              </div> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default React.memo(Filter);
