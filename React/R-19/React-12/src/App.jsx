import React from 'react'
import { useState } from 'react'

const App = () => {

  const [fullname, setfullname] = useState("")
  const [gender, setgender] = useState("")
  const [accept, setaccept] = useState(false)
  const [city, setcity] = useState()

  const SubmitHandler = (e) =>{
    e.preventDefault();
    const user = {
      fullname,
      gender,
      accept,
      city
    };
    console.log(user);
    
  }

  return (



    <div className='w-[80%] mx-auto mt10'>
      <form>
        <input
        onChange={(e) => setfullname(e.target.value)}
        value={fullname}
        type='text'
        placeholder='Full Name' 
         />

         {/* radio button */}
         <br />
         <br />

         <label className='mr-5' htmlFor=''>
          <input value="Male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "Male" ? true : false}
          type='radio' 
          />{' '}
          Male
         </label>
         <label className='mr-5' htmlFor=''>
          <input value="Female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "Female" ? true : false}
          type='radio' 
          />{' '}
          Female
         </label>

         {/* checked box   */}
         <br />
         <br />

         <label htmlFor=''>
          <input
          onChange={() => setaccept(!accept)}
          checked={accept}
          type='checkbox'
          />{" "}
          Accept
         </label>

         {/* select */}
         <br />
         <br />

         <select onChange={(e) => setcity(e.target.value)} value={city}>
          <option value="satna">Satna</option>
          <option value="bhopla">Bhopal</option>
          <option value="indore">Indore</option>
         </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
