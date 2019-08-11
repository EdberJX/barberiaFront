import React, { Component } from "react";
//import { BarberShops } from "../db/barber.json";
import FormCita from "./FormCita"
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateCita extends Component {

  async componentDidMount() {
   
    this.getBarberos();
    
    }
 

   
   
    //BarberShops._id === this.props.match.params)
   
    getBarberos = async () =>{
      
      const res = await axios.get('http://localhost:5000/barberos/'+this.props.match.params.id)
       this.setState({
         barberos: res.data,
         barberia: this.props.match.params.id
         })
         //console.log( this.state.barberia);
      // console.log(this.state.barberos, this.state.barberia )
   }

  state = {
    
  };
  onInputChange = async e => {
   
  };

  onChange = date => {
   
    
  };

  render() {
    return (
      //<div className="col-md-6 offset-md-3">
      <div className="container ">
        <div className="col-md-4">
              <FormCita barberia={this.props.match.params.id}/>
          </div>
      
     </div>
     
    );
  }
}
/*<div className="form-group">
            <DatePicker 
                className="form-control" 
                selected={this.state.date}
                onChange={this.onChange} 
            />
          </div>
          //las citass normales


          <div className="col-md-4">
          <div className="card card-body">
            <h4 className="text-center">Obtener Cita</h4>
            <div className="form-group">
              <select
                className="form-control"
                name="barberoSelected"
                onChange={this.onInputChange}
                value={this.state.barberoSelected}
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
            <form onSubmit={this.onSubmit}>
              <button type="submit" className="btn btn-secondary btn-block">
                Enviar
              </button>
            </form>
          </div>
        </div>
          

        //jumbotron

        <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style .</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        
        
        
        
        
        <div className="row mt-4">
        <div className="col-md-4">
              <FormCita/>
          </div>
          
        <div className="col-md-8">
            
        <div className="jumbotron">
            <div className="card-header ">
                    <h3 className="display-4">Bienvenidos a {this.state.title}</h3>
            </div>
                    
                        <div className="card-body">
                          <h5>Servicios:</h5>
                          <br></br>
                            <ul>
                            {this.state.servicios.map(servicios => (
                             <li key={servicios._id}> <h5>{servicios.nameService}</h5></li>
                              
                              ))}
                            </ul> 
                        </div>
                        <hr className="my-4"></hr>
                    <div className="card-footer">
                        <h4>Llamanos {this.state.telefono} </h4>
                    </div>
                        
                  </div>  
            </div>
        </div>
        
            */
