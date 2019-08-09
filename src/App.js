import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import BarberShopList from './components/BarberShopList';
import ClientsList from './components/ClientsList';
import CreateClients from './components/CreateClients';
import CreateBarber from './components/CreateBarber';
import CreateBarberShop from './components/CreateBarberShop';
import BarberShop from './components/BarberShop';
import CreateCita from './components/CreateCita';
import Index from './components/Index'; 

import './App.css';


function App() {
  return (
    <Router>

        <Navigation />

       <Route path='/' exact component={Index}/>

       <Route path='/barber' component={CreateBarber}/> 
       <Route path='/createClient' component={CreateClients}/>
       <Route path='/createBarberShop' component={CreateBarberShop}/>
       <Route path='/barbershop/id' component={BarberShop}/>
       
       <Route path='/createcita/:id' component={CreateCita}/>
       <Route path='/clients' component={ClientsList}/>
       <Route path='/barberShops' component={BarberShopList}/>
      

       
    </Router>
  );
}

export default App;
