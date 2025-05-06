import React, { useState } from "react";

const App = () => {
  const [fullname, setfullname] = useState("");
  const [gender, setgender] = useState("Male");
  const [accept, setaccept] = useState("no");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      fullname,
      gender,
      accept,
    };
    console.log(user);
  };

  return (
    <form onSubmit={SubmitHandler} className="w-[200px] border p-2 text-lg mb-3">
      <label className="block mb-2">
        Full Name:
        <input
          type="text"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
          className="block w-full"
        />
      </label>

      <label className="mr-5">
        <input
          type="radio"
          onChange={() => setgender("Male")}
          checked={gender === "Male"}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          onChange={() => setgender("Female")}
          checked={gender === "Female"}
        />
        Female
      </label>

      <label className="block mb-3">
        <input
          type="checkbox"
          onChange={(e) => setaccept(e.target.checked ? "yes" : "no")}
          checked={accept === "yes"}
        />
        {" "}Accept
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;