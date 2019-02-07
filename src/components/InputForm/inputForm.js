import React from 'react'
import './inputForm.css'
class InputForm extends React.Component{
    render(){
    const {imageURL,inputData,onSumbit}=this.props
    let img
    if(imageURL!==""){
        img=(
            <div className="d-flex justify-content-center">
                <img src={ imageURL } alt="search" height="500px" width="auto"></img>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="jumbotron shadow" >
                <form className="mb-5">
                <div class="form-group text-center">
                    <label className="h2 text-light" >Enter your link</label>
                    <div class="input-group">
                        <input type="text"  placeholder="Enter your link" class="form-control bg-dark text-light" onChange={ inputData }/>
                        <div class="input-group-append">
                            <button href="#1" className="btn btn-outline-light" onClick={ onSumbit }>sumbit</button>
                        </div>
                    </div>
                </div>
                    </form>
                    { img }
            </div>
        </div>
    )
    }
}

export default InputForm