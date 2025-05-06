import React from 'react'
import Navbar from './Navbar'
import Navbarsecond from './Navbarsecond'
import { useContext } from 'react'
import { SarthakContext } from '../context/SheryiansContext'

const Header = () => {


    const data = useContext(SarthakContext)

    console.log(data);

    return (
        <div className='header'>
            
            <Navbar />
            <Navbarsecond />
        </div>
    )
}

export default Header