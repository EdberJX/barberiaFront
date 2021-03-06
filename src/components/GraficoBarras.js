import React , {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
};

export default class GraficoBarras extends Component{
   
  state =  {displayName: 'BarExample'}
    componentDidMount(){
        console.log(this.props.barberosEstadistica)
    }
  render() {
    return (
      
            <div>
              <h2>Servicios atendios por barberos</h2>
              <Bar
                data={data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
         
    );
  }
}