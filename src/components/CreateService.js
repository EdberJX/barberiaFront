import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

//import { BarberShops } from '../db/barber.json';
export default class CreateService extends Component {
 
    async componentDidMount(){
    await  this.getBarberia();
   
   // console(this.props.match.params);
 }
 
  getBarberia = async() =>{
      
    const res = await axios.get('http://localhost:5000/barberia/'+this.props.match.params.id);
     //this.setState({servicio: res.data})
     
     this.setState({
         id: res.data[0]._id,
         servicios: res.data[0].servicios
        })
    console.log(res.data[0].servicios)
    }
 
  onSubmitBarberia = async (e) =>{
    e.preventDefault(); 
    const newServicio = {
        servicio: this.state.servicio,
        id: this.state.id
    }
    const res = await axios.post('http://localhost:5000/addserviciobarberia', newServicio);
   //alert(res.data.msj)
   this.getBarberia(); 
   console.log(res.data)
}
  state = {
      servicio:"",
      servicios:[],
      id:""
  }  
  onInpuntChange = (e) =>{
    this.setState({ 
      [e.target.name]: e.target.value,

    }); 
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
                        <form onSubmit={this.onSubmitBarberia}>
                            <div className="form-group">
                                <input
                                    //value={this.state.userName}
                                    placeholder="Nombre del servicio"
                                    className="form-control" type="text"
                                    name="servicio"
                                    onChange={this.onInpuntChange}
                                />
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-block " > 
                                Añadir servicio
                            </button>
                            <br></br>
                            <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/barber/"+this.state.id}> Registrar Barberos</Link>
                        </form>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.servicios.map( servicio =>(
                                
                                <li className="list-group-item list-group-item-action" >
                                   
                                    {servicio}
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

/**
 *  <div className="col-md-8">
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
 */