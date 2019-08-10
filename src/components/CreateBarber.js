import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import axios from 'axios';
import { barberos } from '../db/barber.json';
export default class CreateUser extends Component {
  
    async componentDidMount(){
      await  this.getBarbers();
        console.log(this.state)
    }
    getBarbers = async() =>{
        this.setState({
            users: barberos,
            idBarberShop: this.props.match.params.id
        })
    }
    state = {
        users: [],
        userName: '',
        idBarberShop: ""
    }

    /*async componentDidMount(){
        this.getUsers();
        console.log(this.state.users.map(user=>user.userName))
    }

     getUsers = async() =>{
        const res = await axios.get('http://localhost:5000/api/users');
        this.setState({users: res.data});
    }
    onDelete =  async (id) =>{
        const res = await axios.delete('http://localhost:5000/api/users/' + id);
        console.log(res)
        this.getUsers();
    }
    onChangeUsername = (e) =>{
        this.setState({
            userName: e.target.value
        }) 
    }
    onSubmit = async (e) =>{
        e.preventDefault(); 
         await axios.post('http://localhost:5000/api/users',{
            userName: this.state.userName
        })
        this.setState({userName:''});
        this.getUsers();
       
    }
*/
onSubmit =  (e) =>{
    e.preventDefault(); 
   // console.log(e.target.value);
   // alert('Barbero creado');
    //console.log(barberos);
    console.log(this.state)
          
}

    render(){
        return(
            <div className="container pt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className=" card card-body">
                        <h3 className="text-center">Registrar Barbero</h3>
                        <div className="container pt-4">
                        <form onSubmit= {this.onSubmit}>
                            <div className="form-group">
                                <input
                                    //value={this.state.userName}
                                    placeholder="Nombre del barbero"
                                    className="form-control" type="text"
                                  //  onChange={this.onChangeUsername}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    //value={this.state.userName}
                                    placeholder="correo"
                                    className="form-control" type="text"
                                  //  onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block " > 
                                Registrar Barbero
                            </button>
                            <br></br>
                            <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/addservice/"+this.state.idBarberShop}> Añadir servicio</Link>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user.id} >
                                    {user.name}
                                </li>    
                                )
                            )
                            /* this.state.users.map( user =>(
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={()=>this.onDelete(user._id)}>
                                    {user.userName}
                                </li>    
                                )
                            )*/
                        }

                    </ul>
                </div>
            </div>
            
            </div>
        )
    }
}