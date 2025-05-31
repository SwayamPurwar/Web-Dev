const Signin = ({setToggler, setUsers}) => {
    
    return (
        <form className="w-[50%] m-auto mt-10">
            <h1 className="text-5xl mb-10 font-thin">
                Signin and Check if you are registered!
            </h1>
            <input
                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="email"
                placeholder="john@example.com"
            />
            <input
                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="password"
                placeholder="***"
            />
            <button className="mt-5 text-lg px-8 py-2 border rounded">
                Sign Up
            </button>
            <p className="mt-3 font-thin text-sm">
                Don't have an account?{" "}
                <button
                onClick={()=> setToggler(false)}
                className="text-blue-400">
                    Signup
                </button>
            </p>
        </form>
    );
};

export default Signin;