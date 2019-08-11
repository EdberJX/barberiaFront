import React, { Component } from 'react';
import { BarberShops } from '../db/barber.json';
//import { Link } from 'react-router-dom';
import BarberShopList from '../components/BarberShopList';
export default class Index extends Component{

    async componentDidMount(){
        //console.log(BarberShops);
     await   this.getBarberShop();
        //console.log(this.state);
    }
    getBarberShop = async ()=>{
        this.setState({barberShops: BarberShops})
    }
    deleteBarberShop = ()=>{
        alert("hola");
    }
    state = {
        barberShops: []
    }
    render(){
        return(
         
                
            <div className = "container pt-4">
                <div className="collage container pb-4"> 
                    <form className="form-inline my-2 my-lg-0">
                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark " type="submit">Search</button>
                    </form>
                    </div>
                    
              
            <BarberShopList/>
                </div>

        )
    }
}