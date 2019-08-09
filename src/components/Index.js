import React, { Component } from 'react';
import { BarberShops } from '../db/barber.json';
//import { Link } from 'react-router-dom';
import BarberShopList from '../components/BarberShopList';
export default class Index extends Component{

    async componentDidMount(){
        //console.log(BarberShops);
     await   this.getBarberShop();
        console.log(this.state);
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
          /*  <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.barberShops.map( barberShops =>(
                                <li className="list-group-item list-group-item-action" key={barberShops.id} >
                                    {barberShops.name}
                                </li>    
                                )
                            )
                        }

                    </ul>
                </div>*/
                
            <div className = "container pt-4">
                <div className="collage container pb-4"> 
                    <form className="form-inline my-2 my-lg-0">
                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark " type="submit">Search</button>
                    </form>
                    </div>
                    
               {/* <div className="row">
                {this.state.barberShops.map(BarberShops =>
                    <div className="col-md-4 p-2" key={BarberShops._id}>
                        <div className="card-header d-flex justify-content-between">
                            <h5>{BarberShops.title}</h5>
                            
                         </div>   
                        <div className="card card-body">
                            <div className="card-body">
                                <p>{BarberShops.description}</p>
                                <p>{BarberShops.admin}</p>
                               
                            </div>    
                        </div>
                        <div className="card-footer">
                        <Link className="btn btn-btn btn-outline-dark" to={"/barbershop/id"}>
                                Ver
                        </Link>
                        </div>

                    </div>
                    
                    )}
         
            </div>*/}
            <BarberShopList/>
                </div>

        )
    }
}