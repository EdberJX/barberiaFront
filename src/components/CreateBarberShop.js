import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CreateBarberShop extends Component{
    state={
        _id: "02"
    }
    render(){
        return(
            <div id="cont" className="container card card-body mt-4">
                <form className="form-signin">
  
                 <h1 className="h3 mb-3 font-weight-normal text-primary"> Registrar Barberia</h1>
                 
            <br></br>
                     <label  className="sr-only">Email address</label>
                        <input type="text" id="inputEmail" className="form-control" placeholder="Nombre" required />
                        <input type="text-area" id="inputEmail" className="form-control" placeholder="Direccion" required />
                        <input type="number" id="inputEmail" className="form-control" placeholder="telefono" required />
                       <br></br>
                    
                    <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/addservice/"+this.state._id}> Registrar</Link>
                </form>
            </div>
        )
    }
}