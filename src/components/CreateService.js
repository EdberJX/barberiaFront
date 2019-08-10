import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { BarberShops } from '../db/barber.json';
export default class CreateService extends Component {
 async componentDidMount(){
    await  this.getBarberia();
   // console(this.props.match.params);
      
  }
 
  getBarberia = async() =>{
    //const barberia = await BarberShops.filter(barber => barber._id === this.props.match.params.id );
    const barber = await BarberShops.filter(barber => barber._id === this.props.match.params.id )
     // this.setState({barberia: barberia.servicios})
     this.setState({
         servicios: barber[0].servicios,
         idBarberShop: this.props.match.params.id
     })
  }
  state = {
      servicios: [],
      idBarberShop:""
  }  

    render(){
        return(
           <div>
               <div className="container pt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className=" card card-body">
                        <h3 className="text-center">Añadir servicio</h3>
                        <div className="container pt-4">
                        <form >
                            <div className="form-group">
                                <input
                                    //value={this.state.userName}
                                    placeholder="Nombre del servicio"
                                    className="form-control" type="text"
                                  //  onChange={this.onChangeUsername}
                                />
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-block " > 
                                Añadir servicio
                            </button>
                            <br></br>
                            <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/barber/"+this.state.idBarberShop}> Registrar Barberos</Link>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.servicios.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user._id} >
                                    {user.nameService}
                                </li>    
                                )
                            )
                          
                        }

                    </ul>
                </div>
            </div>
            
            </div>
           </div>
        )
    }
}