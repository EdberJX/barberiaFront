import React, { Component } from 'react';
import './signIn.css';
export default class SignIn extends Component {
    render(){
        return(
            <div id="cont" className="container card card-body mt-4">
                <form className="form-signin">
  
                 <h1 className="h3 mb-3 font-weight-normal text-primary"> Sign in</h1>
                 <select className="form-control">
              <option>Admin</option>
              <option>Admin de la tienda</option>
              <option>Barbero</option>
            </select>
            <br></br>
                     <label className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Nombre de Usuario" required />
                    <label  className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                    
                </form>
            </div>
        )
    }
}