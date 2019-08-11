import React , { Component } from 'react';
//import bg_2 from '../images/bg_2.jpg';
import { Link } from 'react-router-dom';
import './card.css';
export default class BarberShop extends Component{
    state = {
        nombre: "",
        direccion: "",
        _id:""
    }
    componentDidMount(){
       // console.log(this.props.nombre)
        this.setState({
            nombre: this.props.nombre,
            direccion: this.props.direccion,
            _id: this.props.id
        })
    }
    render(){
             
        return(
            <div className="card text-center pt-4">
                <div className="overflow">
                    <img src={this.props.imgSrc} alt="imagen1" className="card-img-top"></img>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">"{this.state.nombre}"</h4>
                    <p className="card-text text-secondary">
                        {this.state.direccion}
                    </p>
                    <Link className="btn btn-outline-success btn-block"  to={"/createcita/"+this.state._id}>
                        ver    
                    </Link>  
                </div>      
            </div>
        )
    }
}