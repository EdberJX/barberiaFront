import React, { Component } from 'react';
import { citas, barberos } from '../db/barber.json';
import Citas from './Citas';




export default class BarberShopList extends Component {
    async componentDidMount(){
    
     await   this.getCitas();
     
        
    }
    getCitas = async ()=>{
        this.setState({
            citas: citas,
            barberos: barberos,
            barberoSelected: barberos[0].name
        })
    }
   
    state = {
        citas: [],
        barberos:[],
        barberoSelected:""
    }

    render(){
        return(
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
        )
    }
}