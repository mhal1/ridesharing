import React from "react";
import axios from "axios";
import store from "./RideStore";
import {Link} from "react-router-dom";
import './ShowRide.css'
import mamg from './mamg2.jpg'

class BookingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    // want the fecth of details from backend to happen as soon as component loads
    componentDidMount() {
        //get request using axios
        var currentUser = sessionStorage.getItem("currentUser")
        axios.get("http://localhost:8080/bookings/" + currentUser) //url of API
            .then(response => {
                this.setState({
                    bookings: response.data
                })// get values and set
                var action = {
                    type: 'UPDATE_BOOKINGS',
                    data: {
                        bookings: response.data
                    }
                };
                store.dispatch(action);

                var action2 = {
                    type: 'RESET_SHOW_RIDE',
                    data: {}
                };
                store.dispatch(action2);
                sessionStorage.setItem("bookings",response.data.length)
            })
    }

    render() {
        store.subscribe(() => this.setState({bookings: store.getState().bookings}))
        return (
            <div>
                <table className='table table-sm table-borderless' hidden={this.state.bookings.length === 0} style={{color:'white',borderRadius:'8px',backgroundColor: 'rgba(90,90, 90, 0.93)'}}>
                    <thead className="thead">
                    <tr className="text-center">
                        <th>Booking ID</th>
                        <th>Ride ID</th>
                        <th>Driver Name</th>
                        <th>Start Point</th>
                        <th>End Point</th>
                        <th>Car</th>
                        <th>Seats Available</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.bookings.map(booking => {
                        return (
                            <tr key={booking.id} className="text-center">
                                <td>{booking.id}</td>
                                <td>{booking.ride.id}</td>
                                <td>{booking.ride.name}</td>
                                <td>{booking.ride.startPoint}</td>
                                <td>{booking.ride.endPoint}</td>
                                <td>{booking.ride.car}</td>
                                <td>{booking.ride.seatsAvailable}</td>
                                <td>{booking.status}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div className="text-center mt-4" hidden={this.state.bookings.length > 0}>
                    <h1 style={{color: 'white'}}> You have no bookings </h1>
                    <Link className="btn btn-primary mt-3" to='/show-rides'>Check out rides <span>&#8594;</span></Link>
                </div>
                <br/>
            </div>
        )
    }
}

function Bookings() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='text-white d-flex bd-highlight' style={{
                            width: '100vw',
                            height: '13vh',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'black'
                        }}>
                            <h1 className="me-auto p-3 bd-highlight">RideSharing</h1>
                            <Link style={{color: 'white', fontSize: '20px', textDecoration: 'none'}}
                                  className="pe-5 bd-highlight" to='/show-rides'>Home</Link>
                            <Link type="button"
                                  className="pe-3 ps-2 bd-highlight position-relative" style={{
                                color: 'white',
                                fontSize: '20px',
                                textDecoration: 'none',
                                pointerEvents: 'none'
                            }}> {sessionStorage.getItem("currentUser")}<span id="myDIV"
                                                              className="position-absolute top-50 start-0 translate-middle p-1 rounded-circle"></span></Link>
                            <Link style={{color: 'white', fontSize: '20px', textDecoration: 'none'}}
                                  className="p-4 bd-highlight" to='/login'>Logout</Link>
                        </div>
                    </div>
                    <div className='row' style={{backgroundImage: `url(${mamg})`, backgroundSize: 'cover',width: '100vw', height: '81vh'}}>
                        <div className='text-white' style={{
                            height: '10vh',
                            backgroundColor: 'black',
                            opacity: '0.8',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h5>My Bookings</h5>
                        </div>
                        <div className='row col-10 offset-1'>
                            <div className='table-responsive'>
                                {<BookingTable/>}
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

export default Bookings;