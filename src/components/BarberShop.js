import React , { Component } from 'react';
//import bg_2 from '../images/bg_2.jpg';
import { Link } from 'react-router-dom';
import './card.css';
export default class BarberShop extends Component{
    state = {
        title: "",
        description: "",
    }
    componentDidMount(){
        this.setState({
            title: this.props.title,
            description: this.props.description,
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
                    <h4 className="card-title">{this.state.title}</h4>
                    <p className="card-text text-secondary">
                        {this.state.description}
                    </p>
                    <Link className="btn btn-outline-success btn-block"  to={"/createcita/"+this.state._id}>
                        ver    
                    </Link>  
                </div>      
            </div>
        )
    }
}