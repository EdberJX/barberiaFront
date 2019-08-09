import React, { Component } from "react";
import { barberos,BarberShops } from "../db/barber.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateCita extends Component {
  async componentDidMount() {
    this.getBarber();
    await this.setState({
      barberos: barberos,
      barberoSelected: barberos[1].name
    });
    
  }
  onSubmit = async e => {
    e.preventDefault();
  };

   
   
    //BarberShops._id === this.props.match.params)
   
  getBarber = async ()=>{
   
   const barber = await BarberShops.filter(barber => barber._id === this.props.match.params.id )
   this.setState({
     _id: barber[0]._id,
     title: barber[0].title,
     description: barber[0].description,
     servicios: barber[0].servicios
   })
  }

  state = {
    barberos: [],
    barberoSelected: "",
    _id: "",
    title: "",
    description: "",
    servicios: "",
    date: new Date()
  };
  onInputChange = async e => {
    console.log(e.target.name);
    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.barberoSelected);
  };

  onChange = date => {
    this.setState({ date: new Date(date) });
    
  };

  render() {
    return (
      //<div className="col-md-6 offset-md-3">
      <div className="container pt-4">
      <div className="row">
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
        <div className="col-md-8">
            
                
            <div className="card-header d-flex justify-content-between">
                    <h5>{this.state.title}</h5>
            </div>
                    
                        <div className="card-body">
                            {this.state.servicios}
                        </div>
                      
                    <div className="card-footer">
                        {this.state._id}
                    </div>
                        
                    
            </div>
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
          </div>*/
