import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid'

const Signup = ({setToggler, setUsers, Users}) => {
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const submitHandler = (data) => {
        data.id = nanoid();

        setUsers([...Users, data]);
        reset();
    }

    return (
        <form
        onSubmit={handleSubmit(submitHandler)}

            className="w-[50%] m-auto mt-10"
        >
            <h1 className="text-5xl mb-10 font-thin">
                Sign up to start your journey
            </h1>
            <input
            {...register("name", {required: true})}

                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="text"
                placeholder="John Doe"
            />
            <p>{errors.name ? "Name is Required" : ""}</p>
            <input
            {...register("email", {required: true})}


                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="email"
                placeholder="john@example.com"
            />
            <p>{errors.email ? "Email is Required" : ""}</p>
            <input
            {...register("password", {required: true, minLength: 5})}

                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="password"
                placeholder="***"
            />
             <p>{errors.password?.type === "required" ? "Password is Required" : ""}</p>
             <p>{errors.password?.type === "minLength" ? "At least 5 characters" : ""}</p>
            <button className="mt-5 text-lg px-8 py-2 border rounded">
                Sign Up
            </button>
            <p className="mt-3 font-thin text-sm">
                Already have an account ?{" "}
                <button
                onClick={()=> setToggler(true)}
                type="button"

                    className="text-blue-400"
                >
                    Signin
                </button>
            </p>
        </form>
    );
};

export default Signup;