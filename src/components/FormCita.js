import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { barberos } from "../db/barber.json";


export default class FormCita extends Component{
    
    async componentDidMount() {
     
        await this.setState({
          barberos: barberos,
          barberoSelected: barberos[0].name
        });
    }
    state = {
        
        barberos: [],
        barberoSelected: "",
        date: new Date()
      };

    render(){
        return(
            <div className="card">
                <div className="card-header ">
                    
                    <h4 className="text-center">Obtener Cita</h4>
                 
                </div>
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
                    <div className="form-group">
                        <DatePicker
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