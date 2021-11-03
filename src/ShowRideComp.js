import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import store from "./RideStore";
import './ShowRide.css'
import maybach from "./maybach.jpeg"

class RideList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            ride: {},
            showRidesTable: false,
            showRide: false,
            showButtonBookRide: true,
            showButtonCancelRide: false,
            disableButtonAllRides: true
        }
    }

    // want the fecth of details from backend to happen as soon as component loads
    componentDidMount() {
        //get request using axios
        axios.get("http://localhost:8080/rides") //url of API
            .then(response => {
                this.setState({
                    rides: response.data
                })// get values and set
                var action = {
                    type: 'UPDATE_RIDES',
                    data: {
                        rides: response.data
                    }
                };
                store.dispatch(action);
            })
    }

    render() {
        store.subscribe(() => this.setState({rides: store.getState().rides}))
        return (
            <div>
                <div className="card-header text-center bg-light">
                    Please select a ride below!
                </div>
                <table className='table table-borderless table-hover table-dark text-white'
                       style={{borderRadius: '10px'}}>
                    <thead className="thead-light">
                    <tr className="text-center">
                        <th>Start Point</th>
                        <th>End Point</th>
                        <th>Seats Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rides.map(ride => {
                        return (
                            <tr hidden={ride.seatsAvailable === 0} key={ride.id} onClick={() => {
                                var action = {
                                    type: 'UPDATE_RIDE',
                                    data: {
                                        ride: {
                                            ride_id: ride.id,
                                            name: ride.name,
                                            startPoint: ride.startPoint,
                                            endPoint: ride.endPoint,
                                            car: ride.car,
                                            seatsAvailable: ride.seatsAvailable
                                        }
                                    }
                                };
                                store.dispatch(action);
                                var action3 = {
                                    type: 'SHOW_RIDE',
                                    data: {
                                        showRide: true
                                    }
                                };
                                store.dispatch(action3);
                            }} className="text-center">
                                <td data-title="StartPoint">{ride.startPoint}</td>
                                <td data-title="EndPoint">{ride.endPoint}</td>
                                <td data-title="Seats">{ride.seatsAvailable}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br/>
            </div>
        )
    }
}

class Ride extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ride: {
                ride_id: 0,
                name: '',
                startPoint: '',
                endPoint: '',
                car: '',
                seatsAvailable: 0
            },
            bookingId: 0,
            successMessage: '',
            showButtonBookRide: true,
            booking:sessionStorage.getItem("bookings")
        }
    }

    bookRide = () => {
        console.log("book ride")
        store.subscribe(() => this.setState({
            ride: store.getState().ride,
            showButtonBookRide: store.getState().showButtonBookRide,
            bookingId: store.getState().bookingId,
            booking: sessionStorage.getItem("booking")
        }))
        var action = {
            type: 'BOOK_RIDE',
            data: {
                ride: {
                    ride_id: this.state.ride.ride_id,
                    name: this.state.ride.name,
                    startPoint: this.state.ride.startPoint,
                    endPoint: this.state.ride.endPoint,
                    car: this.state.ride.car,
                    seatsAvailable: this.state.ride.seatsAvailable - 1
                },
                showButtonBookRide: false,
                showRidesTable: false

            }
        };
        store.dispatch(action);

        var ride_id = this.state.ride.ride_id
        var name = this.state.ride.name
        var startPoint = this.state.ride.startPoint
        var endPoint = this.state.ride.endPoint
        var car = this.state.ride.car
        var seatsAvailable = this.state.ride.seatsAvailable
        var currentUser = sessionStorage.getItem("currentUser")
        let ride = {
            "ride": {
                "id": ride_id,
                "name": name,
                "startPoint": startPoint,
                "endPoint": endPoint,
                "car": car,
                "seatsAvailable": seatsAvailable
            },
            "user": currentUser,
            "status": "Booked"
        }
        axios
            .post("http://localhost:8080/book_ride", ride)
            .then(response => {
                if (response.data != null) {
                    this.successMessage = "Booking success with Booking ID: " + response.data.id
                    this.setState({successMessage: "Booking success with Booking ID: " + response.data.id})
                }
                sessionStorage.setItem("bookingId",response.data.id)
            })
    }

    cancelRide = () => {
        this.setState({
            showButtonBookRide: store.getState().showButtonBookRide,
            booking:sessionStorage.getItem("bookings")
        })
        var action = {
            type: 'CANCEL_RIDE',
            data: {
                showButtonBookRide: true,
                ride: {
                    ride_id: this.state.ride.ride_id,
                    name: this.state.ride.name,
                    startPoint: this.state.ride.startPoint,
                    endPoint: this.state.ride.endPoint,
                    car: this.state.ride.car,
                    seatsAvailable: this.state.ride.seatsAvailable + 1
                },
                disableButtonAllRides: false,
                showRide: false
            }
        };
        store.dispatch(action);

        var bookingId = sessionStorage.getItem("bookingId");
        axios
            .delete("http://localhost:8080/delete_booking/" + bookingId)
            .then(response => {
                console.log("Deleted:" + bookingId);
                this.setState({booking: Number(this.state.booking)-1})
            })
    }

    render() {
        console.log("Book ride render ")
        store.subscribe(() => this.setState({
            ride: store.getState().ride,
            rides: store.getState().rides,
            booking:store.getState().bookings
        }))
        return (
            <div>
                <div className="card text-center bg-success mb-3" hidden={this.state.showButtonBookRide}
                     style={{color: 'black'}}>
                    {this.successMessage}
                </div>
                <div className="card-header text-center bg-light">
                    Ride Details
                </div>
                <table className='table table-borderless table-dark'
                       style={{borderRadius: '0px 0px 10px 10px', backgroundColor: 'darkgrey'}}>
                    <thead className="thead-light">
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Start Point</th>
                        <th>End Point</th>
                        <th>Car</th>
                        <th>Seats Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="text-center">
                        <td>{this.state.ride.name}</td>
                        <td>{this.state.ride.startPoint}</td>
                        <td>{this.state.ride.endPoint}</td>
                        <td>{this.state.ride.car}</td>
                        <td>{this.state.ride.seatsAvailable}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="container-fluid">
                    <div className="text-center" hidden={!this.state.showButtonBookRide}>
                        <button onClick={this.bookRide} className="btn btn-light btn-lg mb-3">Book
                            Ride
                        </button>
                    </div>
                    <div className="text-center" hidden={this.state.showButtonBookRide}>
                        <Link to='/bookings' className="btn btn-light btn-lg me-3">Go to bookings <span>&#8594;</span>
                        </Link>
                        <button onClick={this.cancelRide} className="btn btn-danger btn-lg">Cancel
                            Ride
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

class Rides extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            ride: {},
            showRidesTable: false,
            showRide: false,
            showButtonBookRide: true,
            showButtonCancelRide: false,
            disableButtonAllRides: false
        }
    }

    render() {
        store.subscribe(() => this.setState(store.getState()))
        return (
            <div>
                <div className='text-white'>
                    <p hidden={this.state.disableButtonAllRides}
                       style={{backgroundColor: 'black', padding: '1px 10px 1px 10px', fontSize: '20px'}}>
                        RideSharing is an online app which allows you to book rides to your chosen
                        destination or offer rides using your vehicle!
                    </p>
                </div>
                <div className='text-center mb-3' hidden={this.state.disableButtonAllRides}>
                    <button onClick={() => {
                        var action = {
                            type: 'SHOW_RIDES_TABLE',
                            data: {
                                showRidesTable: true
                            }
                        };
                        store.dispatch(action);
                        var action2 = {
                            type: 'DISABLE_ALL_RIDE_BUTTON',
                            data: {
                                disableButtonAllRides: true
                            }
                        };
                        store.dispatch(action2);
                    }} className="btn btn-lg btn-light me-4"> Show all
                        rides <span>&#8594;</span>
                    </button>
                    <button onClick={() => {
                        var action = {
                            type: 'SHOW_OFFER_RIDE',
                            data: {
                                showOfferRide: true
                            }
                        };
                        store.dispatch(action);
                    }} className="btn btn-lg btn-light" hidden={this.state.disableButtonAllRides}> Offer a
                        ride <span>&#8594;</span>
                    </button>
                </div>
                <div hidden={!this.state.showRidesTable}>
                    <RideList/>
                </div>
                <div hidden={!this.state.showRide}>
                    <Ride/>
                </div>
            </div>
        )
    }
}

class CarRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newRide: {
                name: '',
                startPoint: '',
                endPoint: '',
                car: '',
                seatsAvailable: 0
            },
            nameError: '',
            startError: '',
            endError: '',
            carError: '',
            seatsError: '',
            nameValid: false,
            startValid: false,
            endValid: false,
            carValid: false,
            redirect: false,
            successMessage: ''
        }
    }

    validateName = (event) => {
        var name = event.target.value;
        if (name.length < 1) {
            this.setState({nameError: 'Please enter your name', nameValid: false})
        } else {
            this.setState({...this.state, newRide: {...this.state.newRide, name: name}, nameError: '', nameValid: true})
        }
    }

    validateStartLocation = (event) => {
        var location = event.target.value;
        if (location.length < 1) {
            this.setState({startError: 'Please enter the start location', startValid: false})
        } else {
            this.setState({
                ...this.state,
                newRide: {...this.state.newRide, startPoint: location},
                startError: '',
                startValid: true
            })
        }
    }

    validateDestination = (event) => {
        var destination = event.target.value;
        if (destination.length < 1) {
            this.setState({endError: 'Please enter the destination', endValid: false})
        } else {
            this.setState({
                ...this.state,
                newRide: {...this.state.newRide, endPoint: destination},
                endError: '',
                endValid: true
            })
        }
    }

    validateCar = (event) => {
        var car = event.target.value;
        if (car.length < 1) {
            this.setState({carError: 'Car is invalid', carValid: false})
        } else {
            this.setState({...this.state, newRide: {...this.state.newRide, car: car}, carError: '', carValid: true})
        }
    }

    validateSeats = (event) => {
        var seats = Number(event.target.value);
        if (seats < 1) {
            this.setState({seatsError: 'Number of seats must be greater than 0', seatsValid: false})
        } else {
            this.setState({
                ...this.state,
                newRide: {...this.state.newRide, seatsAvailable: seats},
                seatsError: '',
                seatsValid: true
            })
        }
    }

    register = (event) => {
        event.preventDefault();
        var rideToAdd = this.state.newRide;
        axios
            .post("http://localhost:8080/create_ride/", rideToAdd)
            .then(response => {
                this.setState({successMessage: 'Registration was successful', redirect: true})
                var action = {
                    type: 'ADD_RIDE',
                    data: {
                        rides: [...store.getState().rides, response.data],
                        redirect: true
                    }
                };
                store.dispatch(action);
            });
    }

    render() {
        store.subscribe(() => this.setState({redirect: store.getState().redirect}))
        return (
            <div>
                <form onSubmit={this.register} hidden={this.state.redirect === true} className="text-white">
                    <div>
                        <label><strong>Name</strong></label>
                        <input className="form-control" type="text"
                               onChange={this.validateName}/><span>{this.state.nameError}</span><br/>
                    </div>
                    <div>
                        <label><strong>Start Location</strong></label>
                        <input type="text" className="form-control"
                               onChange={this.validateStartLocation}/><span>{this.state.startError}</span><br/>
                    </div>
                    <div>
                        <label><strong>Destination</strong></label>
                        <input type="text" className="form-control"
                               onChange={this.validateDestination}/><span>{this.state.endError}</span><br/>
                    </div>
                    <div>
                        <label><strong>Car</strong></label>
                        <input type="text" className="form-control"
                               onChange={this.validateCar}/><span>{this.state.carError}</span><br/>
                    </div>
                    <div>
                        <label><strong>Seats Available</strong></label>
                        <input type="Number" min="1" className="form-control"
                               onChange={this.validateSeats}/><span>{this.state.seatsError}</span><br/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary me-3"
                                disabled={!(this.state.seatsValid && this.state.nameValid && this.state.startValid && this.state.endValid && this.state.carValid)}
                                type="submit"> Submit
                        </button>
                        <button className="btn btn-warning" onClick={() => {
                            var action = {
                                type: 'SHOW_OFFER_RIDE',
                                data: {
                                    showOfferRide: false
                                }
                            };
                            store.dispatch(action);
                            var action2 = {
                                type: 'UPDATE_SHOW_RIDE',
                                data: {}
                            };
                            store.dispatch(action2);
                        }} type="button"> Back
                        </button>
                    </div>
                </form>
                <div className="text-center" hidden={this.state.redirect === false}>
                    <h4 className="text-white">{this.state.successMessage}</h4>
                    <button className="btn btn-warning" onClick={() => {
                        var action = {
                            type: 'SHOW_OFFER_RIDE',
                            data: {
                                showOfferRide: false
                            }
                        };
                        store.dispatch(action);
                        var action2 = {
                            type: 'UPDATE_SHOW_RIDE',
                            data: {}
                        };
                        store.dispatch(action2);
                        var action3 = {
                            type: 'UPDATE_REGISTRATION_REDIRECT',
                            data: {
                                redirect: false
                            }
                        };
                        store.dispatch(action3);
                    }} type="button"> Back to rides
                    </button>
                </div>
            </div>
        )
    }
}


class BookARide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOfferRide: false
        }
    }

    render() {
        store.subscribe(() => this.setState(store.getState()))
        return (
            <div>
                <div hidden={this.state.showOfferRide}>
                    <Rides/>
                </div>
                <div className='card bg-dark' hidden={!this.state.showOfferRide}>
                    <div className='card-header text-white'>
                        <h2> Car Ride Registration Form </h2>
                    </div>
                    <div className='card-body'>
                        <div className='container'>
                            <CarRegistration/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: sessionStorage.getItem("bookings"),
            currentUser: sessionStorage.getItem("currentUser")
        }
    }

    render() {
        console.log("navbar render")
        store.subscribe(() => this.setState({booking:store.getState().bookings}))
        return (
            <div className='text-white d-flex bd-highlight' style={{
                width: '100vw',
                height: '13vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'black'
            }}>
                <h1 className="me-auto p-3 bd-highlight">RideSharing</h1>
                <Link type="button" style={{color: 'white', fontSize: '20px', textDecoration: 'none'}}
                      className="pe-5 ps-5 bd-highlight position-relative" to='/bookings'>My Bookings <span
                    className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger"
                    hidden={this.state.bookings.length == 0} style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>{this.state.bookings}</span></Link>
                <Link type="button"
                    className="pe-3 ps-2 bd-highlight position-relative" style={{
                    color: 'white',
                    fontSize: '20px',
                    textDecoration: 'none',
                    pointerEvents: 'none'
                }}> {this.state.currentUser}<span id="myDIV"
                    className="position-absolute top-50 start-0 translate-middle p-1 rounded-circle"></span></Link>

                <Link style={{color: 'white', fontSize: '20px', textDecoration: 'none'}}
                      className="ps-4 pe-4 bd-highlight" to='/login'>Logout</Link>
            </div>
        )
    }

}

function ShowRide() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <div className='container-fluid'>
                    <div className='row'>
                        <NavBar/>
                    </div>
                    <div className='row' style={{
                        backgroundImage: `url(${maybach})`,
                        backgroundSize: 'cover',
                        width: '100vw',
                        height: '81vh'
                    }}>
                        <div className='row'>
                            <div
                                className='d-flex justify-content-center align-items-center'>
                                <BookARide/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer">
                <div className='text-white d-flex justify-content-around align-items-center' style={{
                    height: '6vh',
                    backgroundColor: 'black'
                }}>
                    <span>Terms & Conditions</span>
                    <span>Copyright © MHG Limited</span>
                    <span>Contact us</span>
                </div>
            </footer>
        </div>
    );
}

export default ShowRide;