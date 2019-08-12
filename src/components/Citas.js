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
            _id: this.props._id,
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
    estado:"",
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
                    
                <button className="btn btn-danger" onClick={this.toggleOnClick}>En Marcha</button>
                )}
        }

        toggleOnClick = async (e) =>{
         
            this.setState({estado: !this.state.estado})
            console.log(this.state._id)
            const id = {
                id: this.state._id
            }
            const { data } = await axios.post("http://localhost:5000/atendercita",id)
            console.log(data)
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
/*
<div className="card-footer">
                   {this.citacomplete()}
                </div>
*/