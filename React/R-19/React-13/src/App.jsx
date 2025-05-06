import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <form onSubmit={handleSubmit(SubmitHandler)}>
        {/* value input */}
        <input
          {...register("FullName", { required: "Full Name is required" })}
          type="text"
          placeholder="Full Name"
        />
        <p className="mt-2 text-red-500 ">{errors?.FullName?.message}</p>

        {/* radio button */}
        <br />
        <br />

        <label className="mr-5" htmlFor="">
          <input value="Male" {...register("Gender")} type="radio" /> Male
        </label>

        <label className="ml-5" htmlFor="">
          <input value="Female" {...register("Gender")} type="radio" /> Female
        </label>

        {/* checked box   */}
        <br />
        <br />

        <label htmlFor="">
          <input {...register("Accept")} type="checkbox" /> Accept
        </label>

        {/* select */}
        <br />
        <br />

        <select {...register("City", { required: "City is Required!" })}>
          <option value=" " disabled>
            City
          </option>
          <option value="satna">Satna</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
