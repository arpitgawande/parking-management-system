import ReactDOM from 'react-dom'
import React from 'react';
import './grabSpot.css';
import fetch from 'cross-fetch';
import { Link } from 'react-router-dom';

export default class GrabSpot extends React.Component {
    constructor(props) {
        super(props);
        this.baseURL = 'http://localhost:3000/';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            campuses: [],
            parkingLots: [],
            campus: {name: 'Camden', id:null},
            parkingLot: {name: '', id:null},
            parkingSpots: [],
            className: ''
        };
    }

    componentDidMount() {
      console.log('match.params',this.props.match.params)
        this.getCampusList()
            .then(response => {
                this.setState({ campuses: response });
                let campus = this.state.campuses[0];
                this.setState({ campus: {name: campus.campus_name, id:campus.campus_id}});

                this.getParkingLotList()
                .then(response => {
                    this.setState({ parkingLots: response });
                    let lot = this.state.parkingLots[0];
                    this.setState({ parkingLot: {name: lot.lot_name, id:lot.lot_id}});

                    this.getParkingSpotList()
                    .then(response => {
                        //console.log('SpotList', response)
                        this.setState({ parkingSpots: response });
                    });
                });
            });
    }

    getCampusList() {
        const url = this.baseURL + 'campuses';
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    getParkingLotList() {
        let campusId = this.state.campus.id
        const url = this.baseURL + 'parkingLots?id=' + campusId;
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    getParkingSpotList() {
        let lotId = this.state.parkingLot.id
        const url = this.baseURL + 'parkingLotSpots?lotId=' + lotId;
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    getSpot(spotId){
      let userId = this.props.match.params.id;
      let lotId = this.state.parkingLot.id;
      console.log('spotId, lotId, userId',spotId, lotId, userId);
      const url = this.baseURL + 'getSpot?userId=' + userId+'&lotId=' + lotId+'&spotId=' + spotId;
      return fetch(url)
      .then(response => {Promise.resolve(response.json())
        .then(value => { //Server send promise we need to resolve it
          console.log('Server Response for getSpot is:', value)
          if(value = 1){

          }else{

          }
      }) },
      err => { console.log("error") });
    }

    createCampusSelectItems() {
        let items = [];
        for (var i = 0; i < this.state.campuses.length; i++) {
            items.push(<option value={this.state.campuses[i].campus_name}>{this.state.campuses[i].campus_name}</option>);
        }
        return items;
    }

    createParkingLotSelectItems() {
        let items = [];
        for (var i = 0; i < this.state.parkingLots.length; i++) {
            items.push(<option value={this.state.parkingLots[i].lot_name}>{this.state.parkingLots[i].lot_name}</option>);
        }
        return items;
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        if(name === 'campus'){
          for (var i = 0; i < this.state.campuses.length; i++) {
            let camp = this.state.campuses[i];
            if(camp.campus_name === value){
              console.log(this.state.campus);
              this.setState({ campus: {name: camp.campus_name, id:camp.campus_id}});
            }
          }
          this.getParkingLotList()
          .then(response => {
              console.log(response);
              this.setState({ parkingLots: response });
          });
        }
        if(name === 'selectedParkingLot'){
          for (var i = 0; i < this.state.parkingLots.length; i++) {
            let lot = this.state.parkingLots[i];
            if(lot.lot_name === value){
              this.setState({ parkingLot: {name: lot.lot_name, id:lot.lot_id}});
            }
          }

          this.getParkingSpotList()
          .then(response => {
              //console.log(response)
              this.setState({ parkingSpots: response });
          });
        }
    }

    renderSpots(){
      let items = [];
      if(this.state.parkingSpots){
        for(var i=0; i <= this.state.parkingSpots.length; i++) {
                //console.log(this.state.parkingSpots[i]);
                if(this.state.parkingSpots[i]){
                let spotId = this.state.parkingSpots[i].spot_id
                items.push(<div className="grid-item"><input className={this.state.className} type='button'
                value={spotId} onClick={this.getSpot.bind(this, spotId)}/></div>);
                }
          }
      }
      return items;
    }

    render() {
        return(
            <div className='form center'>
                <h1>Grab Spot</h1>
                <label>Campus:</label>
                <select className="add-margin" name='campus' value={this.state.campus.name}
                onChange={this.handleInputChange}>
                    {this.createCampusSelectItems()}
                </select>
                <select className="add-margin" name='selectedParkingLot' value={this.state.parkingLot.name}
                onChange={this.handleInputChange}>
                    {this.createParkingLotSelectItems()}
                </select>

                <h1>List of Spots</h1>
                <div className="grid-container">
                  {this.renderSpots()}
                </div>
                <Link to='/'>List of Users</Link>
            </div>
        );
    }
}
