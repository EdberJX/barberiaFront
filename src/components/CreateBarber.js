import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import { barberos } from '../db/barber.json';
export default class CreateUser extends Component {
  
    async componentDidMount(){
       // await  this.getIdAdmin();
       const idAdmin = await axios.get('http://localhost:5000/barberiaid/'+this.props.match.params.id)
       this.setState({barberia: idAdmin.data[0].admin});
       await this.getBarberos();
      // console.log(idAdmin.data[0].admin)
     }
    
     onSubmitBarbero = async (e) =>{
        e.preventDefault(); 
        const newBarbero = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            password: this.state.password,
            barberia: this.props.match.params.id
        }
      await axios.post('http://localhost:5000/addbarbero', newBarbero);
      
       this.wipeState();
       this.getBarberos();
      
    }
    onDelete =   (id) =>{
        
        axios.delete('http://localhost:5000/removebarbero/'+id);
       this.getBarberos();
     
        
    }
   
    
    wipeState = ()=>{
        this.setState({
            nombre: "",
            email: "",
            password: "",
            apellido: "",
           
        })
    }

    getBarberos = async () =>{

       const res = await axios.get('http://localhost:5000/barberos/'+this.props.match.params.id)
        this.setState({barberos: res.data })
       // console.log(this.state.barberos)
    }
    
    state = {
        nombre: "",
        apellido: "",
        barberos: [],
        email: "",
        password: "",
        barberia: ""
    }
    onInpuntChange = (e) =>{
        this.setState({      [e.target.name]: e.target.value});
        
    } 
    


    render(){
        return(
            <div className="container pt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className=" card card-body">
                        <h3 className="text-center">Registrar Barbero</h3>
                        <div className="container pt-4">
                        <form onSubmit= {this.onSubmitBarbero}>
                            <div className="form-group">
                                <input
                                    value={this.state.nombre}
                                    placeholder="Nombre del barbero"
                                    className="form-control" type="text"
                                    onChange={this.onInpuntChange}
                                    name="nombre"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    value={this.state.apellido}
                                    placeholder="Apellido"
                                    className="form-control" type="text"
                                    onChange={this.onInpuntChange}
                                    name="apellido"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    value={this.state.email}
                                    placeholder="Correo"
                                    className="form-control" type="text"
                                    onChange={this.onInpuntChange}
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                            <input 
                                type="password" 
                                id="inputPassword" 
                                value={this.state.password}
                                className="form-control" 
                                placeholder="Password" 
                                onChange={this.onInpuntChange}
                                name="password"
                                required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block " > 
                                Registrar Barbero
                            </button>
                            <br></br>
                            <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/addservice/"+this.state.barberia}> Añadir servicio</Link>
                        </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8">
                <ul className="list-group">
                        {
                            this.state.barberos.map( barbers =>(
                                
                                <li 
                                className="list-group-item list-group-item-action" 
                                key={barbers._id}
                                onDoubleClick={()=>this.onDelete(barbers._id)}
                                >
                                   
                                    {barbers.nombre+" " + barbers.apellido}
                                </li>    
                                )
                            )
                          
                        }

                    </ul>
                    </div>
            </div>
            
            </div>
        )
    }
}
/*
<div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user.id} >
                                    {user.name}
                                </li>    
                                )
                            )
                            /* this.state.users.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={()=>this.onDelete(user._id)}>
                                    {user.userName}
                                </li>    
                                )
                            )
                        }
 {
                            this.state.barberos.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user.id} >
                                    {user.name}
                                </li>    
                                )
                            )
                           
                        }
                        </ul>
                    </div>

*/