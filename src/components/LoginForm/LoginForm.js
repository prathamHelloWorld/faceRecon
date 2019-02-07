import React from 'react'
import logo from './logo.png'
import './login.css'
import Tilt from 'react-tilt'
const Login=({navigationChange})=>{
    return(
        <div class="wrapper fadeInDown">
  <div id="formContent" className="shadow border-top">

    <h2 class="text-light m-3"> Sign In </h2>

    <div class="fadeIn first ">
    <div className="m-5 d-flex justify-content-center">
        <Tilt className="Tilt shadow box" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <   div className="Tilt-inner p-3"> <img src={logo} alt="logo" className="logo" ></img> 
        </div>
        </Tilt>
    </div>

    <form>
      <input type="text" className="bg-dark text-light fadeIn second"  placeholder="email" />
      <input type="password"  className="bg-dark text-light fadeIn third"  placeholder="password" />
      <input type="submit" className="fadeIn fourth" onClick={()=>navigationChange("home")} />
    </form>
    <div id="formFooter">
      <a className="btn btn-link text-light" href="#2" onClick={()=>navigationChange("register")}>Register here</a>
    </div>

  </div>
</div>
</div>
    )
}

export default Login