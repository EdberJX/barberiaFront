import React, { Component } from 'react';
import { BarberShops } from '../db/barber.json';
import BarberShop from './BarberShop';
import bg_2 from '../images/bg_2.jpg';
import bg_1 from '../images/bg_1.jpg';
import bg_3 from '../images/bg_3.jpg';
import bg_4 from '../images/bg_4.jpg';


/*
<div className="col-md-4 ">
                        <BarberShop imgSrc={bg_2}/>
                    </div>
                    <div className="col-md-4 ">
                        <BarberShop imgSrc={bg_3}/>
                </div>
                
                <div className="col-md-4 ">
                     <BarberShop imgSrc={bg_4}/>
                </div>
*/
export default class BarberShopList extends Component {
    async componentDidMount(){
        //console.log(BarberShops);
     await   this.getBarberShop();
     
        console.log(this.state);
    }
    getBarberShop = async ()=>{
        this.setState({barberShops: BarberShops})
    }
   
    state = {
        barberShops: []
    }
    imgS=(n)=>{
        
       if(n==="01"){
        return bg_1; 
       } 
       if(n==="02"){
        return bg_2; 
       }
       if(n==="03"){
        return bg_3; 
       }
       if(n==="04"){
        return bg_4; 
       }
       
    }
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                {this.state.barberShops.map(BarberShops =>
                    <div className="col-md-4" key={BarberShops._id}>
                      
                        <BarberShop
                         imgSrc={this.imgS(BarberShops._id)} 
                         title={BarberShops.title}
                         description={BarberShops.description}
                         id={BarberShops._id}
                         />
                    </div>
                )}
                    
                </div>
                
                

            </div>
        )
    }
}