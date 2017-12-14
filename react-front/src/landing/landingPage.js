import React from 'react';
import './landingPage.css';
import fetch from 'cross-fetch';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.baseURL = 'http://localhost:3000/';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            users: [],
            currentUserId: null
        }
    }

    componentDidMount() {
        this.findAllUsers().then(response => {
            this.setState({ users: response });
        });
    }

    handleInputChange(event) {
        this.setState({ userId: event.target.value });
    }

    findAllUsers() {
        let url = this.baseURL + 'allUsers';
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    findUserById() {
        let id = this.state.userId;
        let url = this.baseURL + 'findUser?id=' + id;
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    buyPermit(userId){
        let user = {};
        user.id = userId;
        let url = this.baseURL + 'buyPermit';
        return fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(user)
        }).then(response => { return Promise.resolve(console.log(response.json())) },
            err => { console.log("error") });
    }

    updatePrmit(userId){
      console.log('userId', userId)
      //let userId = e.target.id;
      //this.setState({ currentUserId: userId })
      this.buyPermit(userId)
      .then(response => {
        console.log(response);
        this.getUserData()
      });
    }

    getAllUsers() {
        this.findAllUsers().then(response => {
            this.setState({ users: response });
        });
    }

    getUser() {
        this.findUserById().then(user => {
            this.setState({ users: user });
        });
    }

    getUserData() {
        let items = [];
        if(this.state.users){
          for (var i = 0; i < this.state.users.length; i++) {
              let user = this.state.users[i];
              if(user.permit_number){
                items.push(<tr>
                  <td>{user.user_name}</td>
                  <td>{user.user_address}</td>
                  <td><Link to={`vehicle/${user.user_id}`}>Add/View Vehicle</Link></td>
                  <td>{user.permit_number}</td>
                  <td><Link to={`grabSpot/${user.user_id}`}>Grab Spot</Link></td>
               </tr>);
              } else{
                items.push(<tr>
                  <td>{user.user_name}</td>
                  <td>{user.user_address}</td>
                  <td><Link to={`vehicle/${user.user_id}`}>Add/View Vehicle</Link></td>
                  <input className="btn btn-secondary btn-sm add-margin" type='button' id={user.user_id} value='Buy Permit' onClick={this.updatePrmit.bind(this, user.user_id)} />
                  <td></td>
                </tr>);
              }
          }
        }
        return items;
    }

    render() {
        return (
            <div className='form'>
                <div className="app-header-container jambotron center">
                    <h1 className="app-header-text">Rutgers Parking System</h1>
                </div>
                <div className='center'>
                <label>Search User:</label>
                <input className='input textbox' type='text'
                    placeholder='Enter User Id'
                    name='firstName'
                    value={this.state.userId}
                    onChange={this.handleInputChange} /><br />
                <input className="btn btn-secondary btn-sm add-margin" type='button' value='Search' onClick={() => { this.getUser() }} />
                <input className="btn btn-secondary btn-sm" type='button' value='All users' onClick={() => { this.getAllUsers() }} />
                <div>
                <Link to='/addUser'>Add User</Link>
                </div>
                <h2>List Of Existing Users</h2>
                <table className="pure-table pure-table-horizontal">
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Add/View Vehicle</th>
                        <th>Permit Number</th>
                        <th>Grab Spot</th>
                    </tr>
                   </thead>
                   <tbody>
                    {this.getUserData()}
                   </tbody>
                </table>
                </div>
            </div>
        );
    }
}
