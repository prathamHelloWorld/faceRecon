import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './logo.png'
const Logo=()=>{
    return(
        <div className="m-5">
        <Tilt className="Tilt shadow box" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <   div className="Tilt-inner p-3"> <img src={logo} alt="logo" className="logo" ></img> </div>
    </Tilt>
    </div>
    )
}

export default Logo