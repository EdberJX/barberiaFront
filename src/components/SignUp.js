import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './signIn.css';
export default class SignUp extends Component {
    state = {
        _id : "02"
    }
    render(){
        return(
            <div id="cont" className="container card card-body mt-4">
                <form className="form-signin">
  
                 <h1 className="h3 mb-3 font-weight-normal text-primary"> Sign up</h1>
                 <select className="form-control">
              <option>Cliente</option>
              <option>Admin de la tienda</option>
              
            </select>
            <br></br>
                     <label  className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Nombre de Usuario" required />
                    <label  className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    
                    
                    <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/createbarbershop/"+this.state._id}> Crear cuenta </Link>
                </form>
            </div>
        )
    }
}