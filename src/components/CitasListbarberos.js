import React, { Component } from 'react';
import axios from 'axios';
//import { citas, barberos } from '../db/barber.json';
import Citas from './Citas';





export default class CitasListbarberos extends Component {
    async componentDidMount(){
    this.getCitas();
       
    }
  
    getCitas = async ()=>{
       
       const {data} = await axios.get('http://localhost:5000/citasbarbero/'+this.props.match.params.id)
      
       
        this.setState({
            citas: data
        })
            
        
         
    
    }
    
   terminar= ()=>{
       console.log("asd")
   }

   
  
      
onClick = (id) =>{
 this.setState({estado: true})
 console.log(this.state.estado)
}

    state = {
       
        citas:[],
        estado: false
    }

    render(){
        let i =1;
        return(
            <div className="container">
              
                     
                    <div className="container-fluid d-flex justify-content-center">
                         <div className="row">
                        
                            
                            {this.state.citas.map(cita => (
                             
                            <div className="col-md-4" key={cita._id} >
                                {this.terminar()}
                            <Citas 
                            nombreCliente={cita.nombreCliente}
                            telefonoCliente={cita.telefonoCliente}
                            barberia={cita.barberia}
                            barbero={cita.barbero}
                            estado={true}
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