import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';


//import { barberos } from "../db/barber.json";


export default class FormCita extends Component{
    
    
     async componentDidMount(){
           
           await this.getIdBarberia();
           this.getBaberos();
        // console.log(this.state.barberoSelected ,"una")
        
        
    }
     
   

        getIdBarberia = async () =>{
            this.setState({barberia: this.props.barberia })
        }
        getBaberos = async () => {
             const { data } = await axios.get('http://localhost:5000/barberos/'+this.state.barberia)
            if(data[0]){
             this.setState({
                 barberos:data,
                 barberoSelected: data[0]._id
                })
            }else{
                alert("Por favor Registre Barberos")
                window.location.href ="http://localhost:3000/barber/"+this.state.barberia;
                
            }

        }
        
        onInputChange =  async (e) => {
           
             await this.setState({[e.target.name]: e.target.value})
          
          
        }
        onChange = date =>{
            this.setState({date: new Date(date)})
            console.log(this.state.date)
            
          }
          onSubmitCita = async (e) =>{
            e.preventDefault(); 
           
            const newCita = {
                nombreCliente: this.state.cliente,
                telefonoCliente: this.state.telefonoCliente,
                barberia: this.state.barberia,
                barbero: this.state.barberoSelected,
                estado: this.state.estado,
                fecha: this.state.date,
                hora: this.state.hora,
                turno: this.state.turno
            }
       
            await axios.post('http://localhost:5000/addcita', newCita);
       
           alert("Cita agregada con exito")
         this.wipeState();

          
      
        }
        wipeState = ()=>{
            this.setState({
               
            
            cliente:"",
            telefonoCliente:"",
            estado: false,
            date: new Date(),
            hora: "08:00 - 09:00 AM",
            turno: ""
            })
        }
    state = {
        
        barberos: [],
        barberia:"",
        barberoSelected: "",
        cliente:"",
        telefonoCliente:"",
        estado: false,
        date: new Date(),
        hora: "08:00 - 09:00 AM",
        turno: ""
      };

    render(){
        return(
            <div className="card">
                <div className="card-header ">
                    
                    <h4 className="text-center">Obtener Cita</h4>
                 
                </div>
                <div className="container">
                 <form className="card-body" onSubmit= {this.onSubmitCita}>
                     <div className="form-group">
                        <select
                            className="form-control"
                            name="barberoSelected"
                            onChange={this.onInputChange}
                            value={this.state.barberoSelected}
                        >
                            {this.state.barberos.map(barberos => (
                                <option key={barberos._id} value={barberos._id}>
                                {barberos.nombre +" "+ barberos.apellido}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                         <input
                            value={this.state.cliente}
                            placeholder="Nombre"
                            className="form-control" 
                            type="text"
                            onChange={this.onInputChange}
                            name="cliente"
                            required
                        />
                    </div>
                    <div className="form-group">
                         <input
                            value={this.state.telefonoCliente}
                            placeholder="Telefono"
                            className="form-control" 
                            type="number"
                            onChange={this.onInputChange}
                            name="telefonoCliente"
                            required
                        />
                    </div>
                    <div className="form-group">
                         <select
                            value={this.state.hora}
                            placeholder="Nombre"
                            className="form-control" 
                            type="number"
                            onChange={this.onInputChange}
                            name="hora"
                            required
                        >
                            <option>08:00 - 09:00 AM</option>
                            <option>09:00 - 10:00 AM</option>
                            <option>10:00 - 11:00 AM</option>
                            <option>11:00 - 12:00 AM</option>

                            <option>02:00 - 03:00 PM</option>
                            <option>03:00 - 04:00 PM</option>
                            <option>04:00 - 05:00 PM</option>
                            <option>05:00 - 06:00 PM</option>
                            <option>06:00 - 07:00 PM</option>
                            <option>07:00 - 08:00 PM</option>
                            <option>08:00 - 09:00 PM</option>
                            <option>09:00 - 10:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <DatePicker
                        value={this.state.date}
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block ">
                        Enviar
                        </button>
                    </div>
                 </form> 
                 </div>
                 </div>
          
         
        )
    }
}