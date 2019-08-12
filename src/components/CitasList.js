import React, { Component } from 'react';
import axios from 'axios';
//import { citas, barberos } from '../db/barber.json';
import Citas from './Citas';
import CitasListbarberos from './CitasListbarberos';




export default class CitasList extends Component {
    async componentDidMount(){
    
       await this.getBarberias();
      
    }
    getBarberias = async ()=>{
        const {data} = await axios.get('http://localhost:5000/barberias')
        this.setState({
            barberias: data,
            barberiaSelected: data[0]._id,
            
        })
  
    }
    getCitas = async ()=>{
       
       const {data} = await axios.get('http://localhost:5000/citas/'+this.state.barberiaSelected)
       
       if(data.length!==0){
       
        this.setState({
            citas: data,
            citasEstado: true,
            nombreCliente: "",
            telefonoCliente: "",
            barberia: "",
            barbero: "",
            estado:"",
            fecha: "",
            hora: ""
        })
            
       } 
         
    
    }
    
    onInputChangeBarberia =  async (e) => {
     
       await  this.setState({[e.target.name]: e.target.value})
       this.getCitas();
       }

   onInputChangeBarbero =   (e) => {
           
     this.setState({[e.target.name]: e.target.value})
   
     this.getCitas();
    }
   getBarberos = async (e) =>{
       const {data} = await axios.get("http://localhost:5000/barberos/"+this.state.barberiaSelected)
       if(data[0]){ 
       this.setState({
            barberos: data,
            barberoSelected: data[0]._id
        })
    }else{
        console.log("no entro")
        this.setState({
            barberos: data,
            barberoSelected: ""
    })
       //console.log(this.state.barberos)
    }}

    state = {
        barberias: [],
        barberos:[],
        citas:[],
        barberiaSelected:"",
        barberoSelected:"",
        citasEstado: false,
            nombreCliente: "",
            telefonoCliente: "",
            barberia: "",
            barbero: "",
            estado:"",
            fecha: "",
            hora: ""
    }

    render(){
        let i =1;
        return(
            <div className="container">
              
                     <div className="form-group">
                        <select
                            className="form-control"
                            name="barberiaSelected"
                            onChange={this.onInputChangeBarberia}
                            
                        >
                            {this.state.barberias.map(barberias => (
                                <option key={barberias._id} value={barberias._id}>
                                {barberias.nombre }
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="container-fluid d-flex justify-content-center">
                         <div className="row">
                        
                            
                            {this.state.citas.map(cita => (
                             
                            <div className="col-md-4" key={cita._id}>
                                
                            <Citas 
                            nombreCliente={cita.nombreCliente}
                            telefonoCliente={cita.telefonoCliente}
                            barberia={cita.barberia}
                            barbero={cita.barbero}
                            estado={cita.estado}
                            fecha={cita.fecha}
                            hora={cita.hora}
                            n={i++}
                            />
                            </div>
                            ))}
                     </div>
                    </div>
                    </div>
              
        )
    }
}
/*
<div className="container">
 <div className="container">
<form className="card-body">
                     <div className="form-group">
                        <select
                            className="form-control"
                            name="barberoSelected"
                           // onChange={this.onInputChange}
                            //value={this.state.barberoSelected}
                        >
                            {this.state.barberos.map(barberos => (
                                <option key={barberos.id} value={barberos.name}>
                                {barberos.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                 </form>
                <div className="row">
                {this.state.citas.map(citas =>
                    <div className="col-md-4 pt-4" key={citas.id}>
                      
                        <Citas
                         namebarber={citas.namebarber} 
                         cliente={citas.cliente}
                         fecha={citas.fecha}
                         id={citas.id}
                         turno={citas.turno}
                         estado={citas.estado}
                         />
                    </div>
                )}
                    
                </div>
                
                </div>

            </div>

select de barberos
            <div className="form-group">
                    <select
                            className="form-control"
                            name="barberoSelected"
                            onChange={this.onInputChangeBarbero}
                            
                        >
                            {this.state.barberos.map(barbero => (
                                <option key={barbero._id} value={barbero._id}>
                                {barbero.nombre }
                                </option>
                            ))}
                        </select>
                    </div>
*/