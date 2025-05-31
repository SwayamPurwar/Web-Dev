import { createContext, useState } from "react";
export const usercontext = createContext(null);
const Wrapper = (props) => {
    const [user, setuser] = useState({name: "Jhon", city: "Bhopal"})
  return (
    <usercontext.Provider value={[user, setuser]}>
         {props.children}
    </usercontext.Provider>
   
  )
}

export default Wrapper
