import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import BarberShopList from './components/BarberShopList';
import ClientsList from './components/ClientsList';
import CitasList from './components/CitasList';
import CreateBarber from './components/CreateBarber';
import CreateBarberShop from './components/CreateBarberShop';
import BarberShop from './components/BarberShop';
import CreateCita from './components/CreateCita';
import CitasListbarberos from './components/CitasListbarberos'
import Index from './components/Index'; 

import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateService from './components/CreateService';


function App() {
  return (
    <Router>

        <Navigation />

       <Route path='/' exact component={Index}/>

       <Route path='/barber/:id' component={CreateBarber}/> 
       <Route path='/citas' component={CitasList}/>
       <Route path='/createBarberShop/:id' component={CreateBarberShop}/>
       <Route path='/barbershop/:id' component={BarberShop}/>
       <Route path='/addservice/:id' component={CreateService}/>
       <Route path='/createcita/:id' component={CreateCita}/>
       <Route path='/clients' component={ClientsList}/>
       <Route path='/barberShops' component={BarberShopList}/>
       <Route path='/signin' component={SignIn}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/citasbarberos/:id' component={CitasListbarberos}/>

       
    </Router>
  );
}

export default App;
