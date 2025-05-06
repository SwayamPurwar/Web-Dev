import React from 'react'
import { useContext } from 'react';
import { SarthakContext } from '../context/SheryiansContext';
import { MinisterContext } from '../context/BhopalContext';

const Navbarsecond = () => {
  const data = useContext(SarthakContext)

  const bhopalData = useContext(MinisterContext)
  

  console.log(data);
  return (
    <div className='Navbarsecond'>
      <h1>{data}</h1>
      <h2>{bhopalData}</h2>
    </div>
  )
}

export default Navbarsecond
