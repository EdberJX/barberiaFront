import React, { Component } from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './card.css';
//import GraficoBarras from './GraficoBarras';

export default class Estadistica extends Component{
    
    async componentDidMount(){
       await  this.setState({idbarberia: this.props.idbarberia})
        this.getEstadistica();

    }
    async getEstadistica(){
        const res = await axios.get("http://localhost:5000/estadisticas/"+this.state.idbarberia)
        const nombre = res.data.map( barbe =>barbe.nombre);
        const servicios = res.data.map( barbe =>barbe.citasAtendidas);
        console.log(servicios)
        const data = {
            labels: nombre,
            datasets: [
              {
                label: 'Barberos vs Servicios realizados',
                backgroundColor: '#fffd82',
                borderColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'green',
                data: servicios
              }
            ]
        };
        this.setState({
            barberosEstadistica: res.data,
        data: data
        })
        console.log(this.state.barberosEstadistica)
        
    }
    
    state = {
        idbarberia: "",
        barberosEstadistica:[],
        data:[],
        displayName: 'BarExample'
    }
    render(){
        return(
            
            <div className=" text-center id="esta>
                 <div>
              <h2>Servicios atendios por barberos</h2>
              <Bar
                data={this.state.data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            </div> 
          
        )
    }
}
/**
 * //<GraficoBarras barberosEstadistica={this.barberosEstadistica}/>
 */