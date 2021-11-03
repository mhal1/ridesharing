import React from "react";
import bg_img from './img_bg.png';
import axios from "axios";
import {Redirect} from "react-router-dom";
import './ShowRide.css'
import store from "./RideStore";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userName: '',
            password: '',
            usernameError: '',
            passwordError: '',
            usernameValid: false,
            passwordValid: false,
            successMessage: '',
            errorMessage: '',
            redirect: false,
            currentUser: ''
        }
    }

    validateUserName = (event) => {
        var name = event.target.value;
        if (name.length < 1) {
            this.setState({usernameError: 'Username is invalid', usernameValid: false})
        } else {
            this.setState({userName: name, usernameError: '', usernameValid: true})
        }
    }

    validatePassword = (event) => {
        var password = event.target.value;
        if (password.length === 0) {
            this.setState({passwordError: 'Password is invalid', passwordValid: false})
        } else {
            this.setState({password: password, passwordError: '', passwordValid: true})
        }
    }

    signUp = (event) => {
        event.preventDefault();
        let userDetails = {
            name: event.target[0].value,
            userName: event.target[1].value,
            password: event.target[2].value
        }
        axios
            .post("http://localhost:8080/signup", userDetails)
            .then(response => {
                console.log(response.data);
                if (response.data != null) {
                    this.setState({successMessage: 'Sign up Successful - redirecting now.', errorMessage: ''})
                    setTimeout(() => {
                        var action = {
                            type: 'SHOW_SIGNUP',
                            data: {
                                loginCard: false
                            }
                        };
                        store.dispatch(action);
                        this.setState({loginCard: false})
                    }, 1500)
                } else {
                    this.setState({errorMessage: 'Error - try again.', successMessage: ''})
                }
            })
    }

    render() {
        return (
            <div className='card-body'>
                <div className="container-fluid">
                    <div>
                        <form onSubmit={this.signUp}>
                            <div className='mb-3'>
                                <div className="row">
                                    Full Name:
                                    <input className='form-control' onChange={this.validateName} type='text'/><br/>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className="row">
                                    Create Username:
                                    <input className='form-control' onChange={this.validateUserName} type='text'/><br/>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className="row">
                                    Create Password:
                                    <input className='form-control' onChange={this.validatePassword}
                                           type='password'/><br/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg me-3"
                                        disabled={!(this.state.usernameValid && this.state.passwordValid)}
                                        type="submit"> Sign Up
                                </button>
                            </div>
                            <div className="text-center" hidden={this.state.successMessage === ""}>
                                <button className="btn btn-success mt-4">{this.state.successMessage}</button>
                            </div>
                            <div className="text-center" hidden={this.state.errorMessage === ""}>
                                <button className="btn btn-danger mt-4">{this.state.errorMessage}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class LoginCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            usernameError: '',
            passwordError: '',
            usernameValid: false,
            passwordValid: false,
            successMessage: '',
            errorMessage: '',
            redirect: false
        }
    }

    validateName = (event) => {
        var name = event.target.value;
        if (name.length < 1) {
            console.log("Name is invalid")
            this.setState({usernameError: 'Username is invalid', usernameValid: false})
        } else {
            console.log("Name is valid")
            this.setState({userName: name, usernameError: '', usernameValid: true})
        }
    }

    validatePassword = (event) => {
        var password = event.target.value;
        if (password.length === 0) {
            this.setState({passwordError: 'Password is invalid', passwordValid: false})
        } else {
            this.setState({password: password, passwordError: '', passwordValid: true})
        }
    }

    login = (event) => {
        event.preventDefault();
        console.log(event.target[1].value)
        let userDetails = {
            userName: event.target[0].value,
            password: event.target[1].value
        }
        axios
            .post("http://localhost:8080/login", userDetails)
            .then(response => {
                console.log(response.data.valid);
                if (response.data.valid === "true") {
                    this.setState({successMessage: 'Login Successful - redirecting now.', errorMessage: ''})
                    var action = {
                        type: 'UPDATE_CURRENT_USER',
                        data: {
                            currentUser: userDetails.userName
                        }
                    };
                    store.dispatch(action);
                    sessionStorage.setItem("currentUser", response.data.userName)
                    axios.get("http://localhost:8080/bookings/" + userDetails.userName) //url of API
                        .then(response2 => {
                            this.setState({
                                bookings: response2.data
                            })// get values and set
                            var action = {
                                type: 'UPDATE_BOOKINGS',
                                data: {
                                    bookings: response2.data
                                }
                            };
                            store.dispatch(action);
                            var action2 = {
                                type: 'RESET_SHOW_RIDE',
                                data: {}
                            };
                            store.dispatch(action2);
                            console.log(response2.data.length)
                            sessionStorage.setItem("bookings", response2.data.length)
                        })
                    let currentUser = {
                        id: response.data.id,
                        name: response.data.name,
                        userName: response.data.userName,
                        password: response.data.password
                    }
                    axios
                        .post("http://localhost:8080/create-current-user", currentUser)
                        .then(response2 => {
                                console.log(response2)
                                setTimeout(() => {
                                    this.setState({redirect: true})
                                }, 3000)
                            }
                        )
                }
                if (response.data.valid === "false") {
                    this.setState({errorMessage: 'Login Denied - try again.', successMessage: ''})
                }
            })
    }

    signup = () => {
        console.log("signup")
        //do with rudx
        var action = {
            type: 'SHOW_SIGNUP',
            data: {
                loginCard: true
            }
        };
        store.dispatch(action);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/show-rides'/>;
        }
        return (
            <div className='card-body'>
                <div className="container-fluid">
                    <div>
                        <form onSubmit={this.login}>
                            <div className='mb-3'>
                                <div className="row">
                                    Username:
                                    <input className='form-control' onChange={this.validateName} type='text'/><br/>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className="row">
                                    Password:
                                    <input className='form-control' onChange={this.validatePassword}
                                           type='password'/><br/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg me-3"
                                        disabled={!(this.state.usernameValid && this.state.passwordValid)}
                                        type="submit">Login
                                </button>
                                <button onClick={this.signup} className="btn btn-secondary btn-lg" type="button">Sign up
                                </button>
                            </div>
                            <div className="text-center" hidden={this.state.successMessage === ""}>
                                <button className="btn btn-success mt-4">{this.state.successMessage}</button>
                            </div>
                            <div className="text-center" hidden={this.state.errorMessage === ""}>
                                <button className="btn btn-danger mt-4">{this.state.errorMessage}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginCard: false
        }
    }

    render() {
        store.subscribe(() => this.setState({loginCard: store.getState().loginCard}))
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <div className='card' hidden={this.state.loginCard}>
                    <div className='card-header bg-primary text-white mb-4' style={{fontSize: '30px'}}>
                        Login
                    </div>
                    {<LoginCheck/>}
                </div>
                <div className='card' hidden={!this.state.loginCard}>
                    <div className='card-header bg-primary text-white mb-4' style={{fontSize: '30px'}}>
                        Sign Up
                    </div>
                    {<SignUp/>}
                </div>
            </div>
        );
    }

}

function Login() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='text-white' style={{
                            width: '100vw',
                            height: '13vh',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'black'
                        }}>
                            <h1>RideSharing</h1>
                        </div>
                    </div>
                    <div className='row' style={{backgroundImage: `url(${bg_img})`, width: '100vw', height: '81vh'}}>
                        <div className='text-white' style={{
                            height: '10vh',
                            backgroundColor: 'black',
                            opacity: '0.8',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h5>Take your next trip together.</h5>
                        </div>
                        <div className='row'>
                            <LoginSignUp/>
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

export default Login;