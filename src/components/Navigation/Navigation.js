import React from 'react'

class Navigation extends React.Component{
    render(){
        const {navigationStatus,navigationChange}=this.props
        let context
        if(navigationStatus){
            context=(
                <div className="d-flex justify-content-end p-3">
                <button className="btn btn-link text-light btn-lg" onClick={()=>navigationChange("login")}>
                    Sign Out
                </button>
            </div>
            )
        }
        else(
            context=(
                <div className="d-flex justify-content-end p-3">
                <button className="btn btn-link text-light btn-lg" onClick={()=>{navigationChange("register")}}>
                    Register
                </button>
                <button className="btn btn-link text-light btn-lg" onClick={()=>{navigationChange("login")}}>
                    Login
                </button>
            </div>
            )
        )
        return(
            <div>
            { context }
            </div>
        )
    }
}


export default Navigation