import { useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Users from "./components/Users";

const App = () => {
  const [toggler, setToggler] = useState(true);
  const [users, setUsers] = useState([]);

  console.log("users->", users);

  return (
    <main className="flex w-screen h-screen overflow-y-auto bg-gray-800 text-white p-10">
      {toggler ? (
        <Signin setToggler={setToggler} />
      ) : (
        <Signup setUsers={setUsers} users={users} setToggler={setToggler} />
      )}

      <div className="w-[70%]">
        <Users users={users} />
      </div>
    </main>
  );
};

export default App;
