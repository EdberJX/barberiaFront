import React, { Component } from 'react';
import axios from 'axios';



export default class Citas extends Component{
    
    componentDidMount(){
        this.getbarer();
     console.log(this.props.barbero)
        this.setState({
            nombreCliente: this.props.nombreCliente,
            telefonoCliente: this.props.telefonoCliente,
            barberia: this.props.barberia,
            barbero: this.props.barbero,
            estado:this.props.estado,
            fecha: this.props.fecha,
            hora: this.props.hora,
            n:this.props.n
        })}
        getbarer= async() =>{
            const {data} = await axios.get("http://localhost:5000/barberos/"+this.props.barbero)
            console.log(data);
        }
         
    state = {
        nombreCliente: "",
    telefonoCliente: "",
    barberia: "",
    barbero: "",
    estado:false,
    fecha: "",
    hora: "",
     n:""  
    }

    citacomplete = ()=>{
        if(this.state.estado){
            return(
                <button className="btn btn-success">Terminado</button>

            )}else{
                return(
                <button className="btn btn-danger">En Marcha</button>
                )}
        }
    
    render(){
        return(
            
              
          <div className="container pt-4">
         <div className="card text-center ">
           <h4 className="card-header">Cita 0{+ this.state.n}</h4>
            <div className="card-body text-dark">
                
               
                   Cliente:<p> {this.state.nombreCliente}</p>
                   Telefono: <p>{this.state.telefonoCliente}</p>
                   Codigo del barbero:<p>{this.state.barbero}</p>
                   Fecha: <p>{this.state.fecha} </p>
                   hora: <p>{this.state.hora}</p>
            
                <div className="card-footer">
                   {this.citacomplete()}
                </div>
            </div>      
        </div>
        </div>
           
        )
    }
}