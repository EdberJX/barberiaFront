import React, { Component } from 'react';




export default class Citas extends Component{
    
    componentDidMount(){
        this.setState({
            namebarber: this.props.namebarber,
            cliente: this.props.cliente,
            id: this.props.id,
            fecha: this.props.fecha,
            turno: this.props.turno,
            estado: this.props.estado
            
        })}
         
    state = {
        namebarber: "",
        cliente: "",
        barbershop: "",
        id:"",
        fecha: "",
        turno: "",
        estado: "",
       
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
            
              
          <div className="container">

                    

              
            <div className="card text-center pt-4">
           <h4 className="card-header">Turno {+ this.state.turno}</h4>
            <div className="card-body text-dark">
                
               
                   cliente: 
               
                <h4>{this.state.cliente}</h4>
               
                Barbero: 
               
                <h4>{this.state.namebarber}</h4>
             
                   Fecha 
               
              <h4> {this.state.fecha}</h4>
                <div className="card-footer">
                   {this.citacomplete()}
                </div>
            </div>      
        </div>
        </div>
           
        )
    }
}