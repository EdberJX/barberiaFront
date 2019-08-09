import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
        <Link className="navbar-brand" to="/"> BarberTime </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/"> Inicio </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/barber"> Create barber </Link>
                    </li>
                  
                    <li className="nav-item">
                    <Link className="nav-link" to="/createClient"> Create client </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/createBarberShop"> Create BarberShop </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/clients"> Clientes</Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
