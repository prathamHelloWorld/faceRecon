import React from 'react'
import logo from './logo.png'
import Tilt from 'react-tilt'
const Register=({navigationChange})=>{
    return(
        <div class="wrapper fadeInDown">
    <div id="formContent" className="shadow border-top">

    <h2 class="text-light m-3"> Register </h2>

    <div class="fadeIn first">
    <div className="m-5 d-flex justify-content-center">
        <Tilt className="Tilt shadow box" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <   div className="Tilt-inner p-3"> <img src={logo} alt="logo" className="logo" ></img> 
        </div>
        </Tilt>
    </div>
    </div>

    <form>
      <input type="text" className="bg-dark text-light fadeIn second"  placeholder="username" />
      <input type="password"  className="bg-dark text-light fadeIn third"  placeholder="password" />
      <input type="email"  className="bg-dark text-light fadeIn third"  placeholder="email" />
      <input type="submit" className="fadeIn fourth" onClick={()=>{navigationChange("login")}}/>
    </form>
  </div>
</div>
    )
}

export default Register