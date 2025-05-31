import React from 'react'
import { useContext } from 'react'
import { userContext } from './wrapper'


const App = () => {
  const [user, setUser] = useContext(userContext)
  console.log(user)

  return (
    <div>
     
      <h1>This is H1 from Wrapper</h1>
    </div>
  )
}

export default App
