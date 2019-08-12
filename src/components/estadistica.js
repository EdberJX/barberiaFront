import React, { Component } from 'react';
import axios from 'axios';
export default class Estadistica extends Component{
    
    async componentDidMount(){
       await  this.setState({idbarberia: this.props.idbarberia})
        this.getEstadistica();

    }
    async getEstadistica(){
        const {data} = await axios.get("http://localhost:5000/estadisticas/"+this.state.idbarberia)
        console.log("s",data)
    }
    state = {
        idbarberia: "",
        barberosEstadistica:[]
    }
    render(){
        return(
            <div>
                hola
            </div>
        )
    }
}