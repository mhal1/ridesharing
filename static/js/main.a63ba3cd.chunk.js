(this.webpackJsonpridesharing=this.webpackJsonpridesharing||[]).push([[0],{18:function(e,t,s){},39:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(29),r=s.n(n),c=(s(39),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))}),d=s(7),o=s(8),l=s(11),b=s(10),h=s.p+"static/media/img_bg.123dae39.png",j=s(12),u=s.n(j),O=s(3),g=(s(18),s(30)),x={rides:[],ride:{},newRide:{},showRidesTable:!1,showRide:!1,showButtonBookRide:!0,disableButtonAllRides:!1,bookingId:0,showOfferRide:!1,bookings:[],redirect:!1,currentUser:sessionStorage.getItem("currentUser"),loginCard:!1,booking:sessionStorage.getItem("bookings")};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_RIDES":var s=Object.assign({},e,{rides:t.data.rides});return s;case"UPDATE_RIDE":var a=Object.assign({},e,{ride:t.data.ride});return a;case"ADD_RIDE":return Object.assign({},e,{rides:t.data.rides,redirect:t.data.redirect});case"UPDATE_REGISTRATION_REDIRECT":return Object.assign({},e,{redirect:t.data.redirect});case"SHOW_RIDES_TABLE":var i=Object.assign({},e,{showRidesTable:t.data.showRidesTable});return i;case"HIDE_BOOK_RIDE_BUTTON":var n=Object.assign({},e,{showButtonBookRide:t.data.showButtonBookRide});return n;case"DISABLE_ALL_RIDE_BUTTON":var r=Object.assign({},e,{disableButtonAllRides:t.data.disableButtonAllRides});return r;case"UPDATE_BOOKING_ID":var c=Object.assign({},e,{bookingId:t.data.bookingId});return c;case"UPDATE_BOOKINGS":var d=Object.assign({},e,{bookings:t.data.bookings,booking:t.data.bookings.length});return d;case"SHOW_OFFER_RIDE":var o=Object.assign({},e,{showOfferRide:t.data.showOfferRide});return o;case"SHOW_RIDE":var l=Object.assign({},e,{showRide:t.data.showRide});return l;case"RESET_SHOW_RIDE":var b=Object.assign({},e,{ride:{},newRide:{},showRidesTable:!1,showButtonBookRide:!0,disableButtonAllRides:!1,bookingId:0,showOfferRide:!1,showRide:!1,redirect:!1});return b;case"UPDATE_SHOW_RIDE":var h=Object.assign({},e,{ride:{},newRide:{},showRidesTable:!1,showButtonBookRide:!0,disableButtonAllRides:!1,bookingId:0,showOfferRide:!1,showRide:!1,redirect:!1});return h;case"UPDATE_CURRENT_USER":var j=Object.assign({},e,{currentUser:t.data.currentUser});return j;case"SHOW_SIGNUP":var u=Object.assign({},e,{loginCard:t.data.loginCard});return u;case"BOOK_RIDE":var O=Object.assign({},e,{ride:t.data.ride,showButtonBookRide:t.data.showButtonBookRide,showRidesTable:t.data.showRidesTable,booking:t.data.booking});return O;case"CANCEL_RIDE":var g=Object.assign({},e,{showButtonBookRide:t.data.showButtonBookRide,ride:t.data.ride,disableButtonAllRides:t.data.disableButtonAllRides,showRide:t.data.showRide});return g;case"BOOKING_COUNT":var m=Object.assign({},e,{booking:t.data.booking});return m;default:return e}},v=Object(g.a)(m),p=s(0),f=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).validateUserName=function(e){var t=e.target.value;t.length<1?a.setState({usernameError:"Username is invalid",usernameValid:!1}):a.setState({userName:t,usernameError:"",usernameValid:!0})},a.validatePassword=function(e){var t=e.target.value;0===t.length?a.setState({passwordError:"Password is invalid",passwordValid:!1}):a.setState({password:t,passwordError:"",passwordValid:!0})},a.signUp=function(e){e.preventDefault();var t={name:e.target[0].value,userName:e.target[1].value,password:e.target[2].value};u.a.post("http://localhost:8080/signup",t).then((function(e){null!=e.data?(a.setState({successMessage:"Sign up Successful - redirecting now.",errorMessage:""}),setTimeout((function(){v.dispatch({type:"SHOW_SIGNUP",data:{loginCard:!1}}),a.setState({loginCard:!1})}),1500)):a.setState({errorMessage:"Error - try again.",successMessage:""})}))},a.state={name:"",userName:"",password:"",usernameError:"",passwordError:"",usernameValid:!1,passwordValid:!1,successMessage:"",errorMessage:"",redirect:!1,currentUser:""},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"card-body text-white",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.signUp,children:[Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsxs)("div",{className:"row",children:["Full Name:",Object(p.jsx)("input",{className:"form-control",onChange:this.validateName,type:"text"}),Object(p.jsx)("br",{})]})}),Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsxs)("div",{className:"row",children:["Create Username:",Object(p.jsx)("input",{className:"form-control",onChange:this.validateUserName,type:"text"}),Object(p.jsx)("br",{})]})}),Object(p.jsx)("div",{className:"mb-5",children:Object(p.jsxs)("div",{className:"row",children:["Create Password:",Object(p.jsx)("input",{className:"form-control",onChange:this.validatePassword,type:"password"}),Object(p.jsx)("br",{})]})}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("button",{className:"btn btn-primary btn-lg me-3",disabled:!(this.state.usernameValid&&this.state.passwordValid),type:"submit",style:{cursor:"pointer"},children:" Sign Up"})}),Object(p.jsx)("div",{className:"text-center",hidden:""===this.state.successMessage,children:Object(p.jsx)("button",{className:"btn btn-success mt-4",children:this.state.successMessage})}),Object(p.jsx)("div",{className:"text-center",hidden:""===this.state.errorMessage,children:Object(p.jsx)("button",{className:"btn btn-danger mt-4",children:this.state.errorMessage})})]})})})})}}]),s}(i.a.Component),w=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).validateName=function(e){var t=e.target.value;t.length<1?a.setState({usernameError:"Username is invalid",usernameValid:!1}):a.setState({userName:t,usernameError:"",usernameValid:!0})},a.validatePassword=function(e){var t=e.target.value;0===t.length?a.setState({passwordError:"Password is invalid",passwordValid:!1}):a.setState({password:t,passwordError:"",passwordValid:!0})},a.login=function(e){e.preventDefault();var t={userName:e.target[0].value,password:e.target[1].value};u.a.post("http://localhost:8080/login",t).then((function(e){if("true"===e.data.valid){a.setState({successMessage:"Login Successful - redirecting now.",errorMessage:""});var s={type:"UPDATE_CURRENT_USER",data:{currentUser:t.userName}};v.dispatch(s),sessionStorage.setItem("currentUser",e.data.userName),u.a.get("http://localhost:8080/bookings/"+t.userName).then((function(e){a.setState({bookings:e.data});var t={type:"UPDATE_BOOKINGS",data:{bookings:e.data}};v.dispatch(t);v.dispatch({type:"RESET_SHOW_RIDE",data:{}}),sessionStorage.setItem("bookings",e.data.length)}));var i={id:e.data.id,name:e.data.name,userName:e.data.userName,password:e.data.password};u.a.post("http://localhost:8080/create-current-user",i).then((function(e){setTimeout((function(){a.setState({redirect:!0})}),3e3)}))}"false"===e.data.valid&&a.setState({errorMessage:"Login Denied - try again.",successMessage:""})}))},a.signup=function(){v.dispatch({type:"SHOW_SIGNUP",data:{loginCard:!0}})},a.state={userName:"",password:"",usernameError:"",passwordError:"",usernameValid:!1,passwordValid:!1,successMessage:"",errorMessage:"",redirect:!1,currentUser:""},a}return Object(o.a)(s,[{key:"render",value:function(){return this.state.redirect?Object(p.jsx)(O.a,{to:"/show-rides"}):Object(p.jsx)("div",{className:"card-body text-white",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.login,children:[Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsxs)("div",{className:"row",children:["Username:",Object(p.jsx)("input",{className:"form-control",onChange:this.validateName,type:"text"}),Object(p.jsx)("br",{})]})}),Object(p.jsx)("div",{className:"mb-5",children:Object(p.jsxs)("div",{className:"row",children:["Password:",Object(p.jsx)("input",{className:"form-control",onChange:this.validatePassword,type:"password"}),Object(p.jsx)("br",{})]})}),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("button",{className:"btn btn-primary btn-lg me-3",disabled:!(this.state.usernameValid&&this.state.passwordValid),type:"submit",style:{cursor:"pointer"},children:" Login"}),Object(p.jsx)("button",{onClick:this.signup,className:"btn btn-warning btn-lg ",type:"button",style:{cursor:"pointer"},children:"Sign up"})]}),Object(p.jsx)("div",{className:"text-center",hidden:""===this.state.successMessage,children:Object(p.jsx)("button",{className:"btn btn-success mt-4",children:this.state.successMessage})}),Object(p.jsx)("div",{className:"text-center",hidden:""===this.state.errorMessage,children:Object(p.jsx)("button",{className:"btn btn-danger mt-4",children:this.state.errorMessage})})]})})})})}}]),s}(i.a.Component),N=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;Object(d.a)(this,s),(a=t.call(this,e)).state={loginCard:!1,currentUser:""};return v.dispatch({type:"UPDATE_CURRENT_USER",data:{currentUser:""}}),a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({loginCard:v.getState().loginCard})})),Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(p.jsxs)("div",{className:"card bg-dark",hidden:this.state.loginCard,children:[Object(p.jsx)("div",{className:"card-header bg-light mb-4",style:{fontSize:"30px"},children:"Login"}),Object(p.jsx)(w,{})]}),Object(p.jsxs)("div",{className:"card bg-dark",hidden:!this.state.loginCard,children:[Object(p.jsx)("div",{className:"card-header bg-light mb-4",style:{fontSize:"30px"},children:"Sign Up"}),Object(p.jsx)(f,{})]})]})}}]),s}(i.a.Component);var R=function(){return Object(p.jsxs)("div",{id:"page-container",children:[Object(p.jsx)("div",{id:"content-wrap",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"text-white",style:{width:"100vw",height:"13vh",display:"flex",alignItems:"center",backgroundColor:"black"},children:Object(p.jsx)("h1",{children:"RideSharing"})})}),Object(p.jsxs)("div",{className:"row",style:{backgroundImage:"url(".concat(h,")"),width:"100vw",height:"81vh"},children:[Object(p.jsx)("div",{className:"text-white",style:{height:"10vh",backgroundColor:"black",opacity:"0.8",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsx)("h5",{children:"Take your next trip together."})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(N,{})})]})]})}),Object(p.jsx)("footer",{id:"footer",children:Object(p.jsxs)("div",{className:"text-white d-flex justify-content-around align-items-center",style:{height:"6vh",backgroundColor:"black"},children:[Object(p.jsx)("span",{children:"Terms & Conditions"}),Object(p.jsx)("span",{children:"Copyright \xa9 MHG Limited"}),Object(p.jsx)("span",{children:"Contact us"})]})})]})},k=s(4),S=s(33),y=s(2),E=s.p+"static/media/maybach.0acf4d2c.jpeg",C=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={rides:[],ride:{},showRidesTable:!1,showRide:!1,showButtonBookRide:!0,showButtonCancelRide:!1,disableButtonAllRides:!0},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://localhost:8080/rides").then((function(t){e.setState({rides:t.data});var s={type:"UPDATE_RIDES",data:{rides:t.data}};v.dispatch(s)}))}},{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({rides:v.getState().rides})})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"card-header text-center bg-light",children:"Please select a ride below!"}),Object(p.jsxs)("table",{className:"table table-borderless table-hover table-dark text-white",style:{borderRadius:"10px"},children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{className:"text-center",children:[Object(p.jsx)("th",{children:"Start Point"}),Object(p.jsx)("th",{children:"End Point"}),Object(p.jsx)("th",{children:"Seats Available"})]})}),Object(p.jsx)("tbody",{children:this.state.rides.map((function(e){return Object(p.jsxs)("tr",{hidden:0===e.seatsAvailable,onClick:function(){var t={type:"UPDATE_RIDE",data:{ride:{ride_id:e.id,name:e.name,startPoint:e.startPoint,endPoint:e.endPoint,car:e.car,seatsAvailable:e.seatsAvailable}}};v.dispatch(t);v.dispatch({type:"SHOW_RIDE",data:{showRide:!0}})},className:"text-center",children:[Object(p.jsx)("td",{"data-title":"StartPoint",children:e.startPoint}),Object(p.jsx)("td",{"data-title":"EndPoint",children:e.endPoint}),Object(p.jsx)("td",{"data-title":"Seats",children:e.seatsAvailable})]},e.id)}))})]}),Object(p.jsx)("br",{})]})}}]),s}(i.a.Component),B=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).bookRide=function(){v.subscribe((function(){return a.setState({ride:v.getState().ride,showButtonBookRide:v.getState().showButtonBookRide,bookingId:v.getState().bookingId,booking:v.getState().booking})}));var e={type:"BOOK_RIDE",data:{ride:{ride_id:a.state.ride.ride_id,name:a.state.ride.name,startPoint:a.state.ride.startPoint,endPoint:a.state.ride.endPoint,car:a.state.ride.car,seatsAvailable:a.state.ride.seatsAvailable-1},showButtonBookRide:!1,showRidesTable:!1,booking:Number(a.state.booking)+1}};v.dispatch(e);var t={ride:{id:a.state.ride.ride_id,name:a.state.ride.name,startPoint:a.state.ride.startPoint,endPoint:a.state.ride.endPoint,car:a.state.ride.car,seatsAvailable:a.state.ride.seatsAvailable},user:sessionStorage.getItem("currentUser"),status:"Booked"};u.a.post("http://localhost:8080/book_ride",t).then((function(e){if(null!=e.data){a.successMessage="Booking success with Booking ID: "+e.data.id,a.setState({successMessage:"Booking success with Booking ID: "+e.data.id}),sessionStorage.setItem("booking",e.data.numberOfBookings);var t={type:"BOOKING_COUNT",data:{booking:e.data.numberOfBookings}};v.dispatch(t)}sessionStorage.setItem("bookingId",e.data.id)}))},a.cancelRide=function(){a.setState({showButtonBookRide:v.getState().showButtonBookRide,booking:sessionStorage.getItem("bookings")});var e={type:"CANCEL_RIDE",data:{showButtonBookRide:!0,ride:{ride_id:a.state.ride.ride_id,name:a.state.ride.name,startPoint:a.state.ride.startPoint,endPoint:a.state.ride.endPoint,car:a.state.ride.car,seatsAvailable:a.state.ride.seatsAvailable+1},disableButtonAllRides:!1,showRide:!1}};v.dispatch(e);var t=sessionStorage.getItem("bookingId");u.a.delete("http://localhost:8080/delete_booking/"+t+"/"+sessionStorage.getItem("currentUser")).then((function(e){sessionStorage.setItem("booking",e.data.numberOfBookings);var t={type:"BOOKING_COUNT",data:{booking:e.data.numberOfBookings}};v.dispatch(t)}))},a.state={ride:{ride_id:0,name:"",startPoint:"",endPoint:"",car:"",seatsAvailable:0},bookingId:0,successMessage:"",showButtonBookRide:!0,booking:sessionStorage.getItem("bookings")},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({ride:v.getState().ride,rides:v.getState().rides,booking:v.getState().booking})})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"card text-center bg-success mb-3",hidden:this.state.showButtonBookRide,style:{color:"black"},children:this.successMessage}),Object(p.jsx)("div",{className:"card-header text-center bg-light",children:"Ride Details"}),Object(p.jsxs)("table",{className:"table table-borderless table-dark",style:{borderRadius:"0px 0px 10px 10px",backgroundColor:"darkgrey"},children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{className:"text-center",children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Start Point"}),Object(p.jsx)("th",{children:"End Point"}),Object(p.jsx)("th",{children:"Car"}),Object(p.jsx)("th",{children:"Seats Available"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{className:"text-center",children:[Object(p.jsx)("td",{children:this.state.ride.name}),Object(p.jsx)("td",{children:this.state.ride.startPoint}),Object(p.jsx)("td",{children:this.state.ride.endPoint}),Object(p.jsx)("td",{children:this.state.ride.car}),Object(p.jsx)("td",{children:this.state.ride.seatsAvailable})]})})]}),Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("div",{className:"text-center",hidden:!this.state.showButtonBookRide,children:Object(p.jsx)("button",{onClick:this.bookRide,className:"btn btn-light btn-lg mb-3",children:"Book Ride"})}),Object(p.jsxs)("div",{className:"text-center",hidden:this.state.showButtonBookRide,children:[Object(p.jsxs)(k.b,{to:"/bookings",className:"btn btn-light btn-lg me-3",children:["Go to bookings ",Object(p.jsx)("span",{children:"\u2192"})]}),Object(p.jsx)("button",{onClick:this.cancelRide,className:"btn btn-danger btn-lg",children:"Cancel Ride"})]})]})]})}}]),s}(i.a.Component),I=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={rides:[],ride:{},showRidesTable:!1,showRide:!1,showButtonBookRide:!0,showButtonCancelRide:!1,disableButtonAllRides:!1},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState(v.getState())})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-white",children:Object(p.jsx)("p",{hidden:this.state.disableButtonAllRides,style:{backgroundColor:"black",padding:"1px 10px 1px 10px",fontSize:"20px"},children:"RideSharing is an online app which allows you to book rides to your chosen destination or offer rides using your vehicle!"})}),Object(p.jsxs)("div",{className:"text-center mb-3",hidden:this.state.disableButtonAllRides,children:[Object(p.jsxs)("button",{onClick:function(){v.dispatch({type:"SHOW_RIDES_TABLE",data:{showRidesTable:!0}});v.dispatch({type:"DISABLE_ALL_RIDE_BUTTON",data:{disableButtonAllRides:!0}})},className:"btn btn-lg btn-light me-4",children:[" Show all rides ",Object(p.jsx)("span",{children:"\u2192"})]}),Object(p.jsxs)("button",{onClick:function(){v.dispatch({type:"SHOW_OFFER_RIDE",data:{showOfferRide:!0}})},className:"btn btn-lg btn-light",hidden:this.state.disableButtonAllRides,children:[" Offer a ride ",Object(p.jsx)("span",{children:"\u2192"})]})]}),Object(p.jsx)("div",{hidden:!this.state.showRidesTable,children:Object(p.jsx)(C,{})}),Object(p.jsx)("div",{hidden:!this.state.showRide,children:Object(p.jsx)(B,{})})]})}}]),s}(i.a.Component),_=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).validateName=function(e){var t=e.target.value;t.length<1?a.setState({nameError:"Please enter your name",nameValid:!1}):a.setState(Object(y.a)(Object(y.a)({},a.state),{},{newRide:Object(y.a)(Object(y.a)({},a.state.newRide),{},{name:t}),nameError:"",nameValid:!0}))},a.validateStartLocation=function(e){var t=e.target.value;t.length<1?a.setState({startError:"Please enter the start location",startValid:!1}):a.setState(Object(y.a)(Object(y.a)({},a.state),{},{newRide:Object(y.a)(Object(y.a)({},a.state.newRide),{},{startPoint:t}),startError:"",startValid:!0}))},a.validateDestination=function(e){var t=e.target.value;t.length<1?a.setState({endError:"Please enter the destination",endValid:!1}):a.setState(Object(y.a)(Object(y.a)({},a.state),{},{newRide:Object(y.a)(Object(y.a)({},a.state.newRide),{},{endPoint:t}),endError:"",endValid:!0}))},a.validateCar=function(e){var t=e.target.value;t.length<1?a.setState({carError:"Car is invalid",carValid:!1}):a.setState(Object(y.a)(Object(y.a)({},a.state),{},{newRide:Object(y.a)(Object(y.a)({},a.state.newRide),{},{car:t}),carError:"",carValid:!0}))},a.validateSeats=function(e){var t=Number(e.target.value);t<1?a.setState({seatsError:"Number of seats must be greater than 0",seatsValid:!1}):a.setState(Object(y.a)(Object(y.a)({},a.state),{},{newRide:Object(y.a)(Object(y.a)({},a.state.newRide),{},{seatsAvailable:t}),seatsError:"",seatsValid:!0}))},a.register=function(e){e.preventDefault();var t=a.state.newRide;u.a.post("http://localhost:8080/create_ride/",t).then((function(e){a.setState({successMessage:"Registration was successful",redirect:!0});var t={type:"ADD_RIDE",data:{rides:[].concat(Object(S.a)(v.getState().rides),[e.data]),redirect:!0}};v.dispatch(t)}))},a.state={newRide:{name:"",startPoint:"",endPoint:"",car:"",seatsAvailable:0},nameError:"",startError:"",endError:"",carError:"",seatsError:"",nameValid:!1,startValid:!1,endValid:!1,carValid:!1,redirect:!1,successMessage:""},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({redirect:v.getState().redirect})})),Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{onSubmit:this.register,hidden:!0===this.state.redirect,className:"text-white",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Name"})}),Object(p.jsx)("input",{className:"form-control",type:"text",onChange:this.validateName}),Object(p.jsx)("span",{children:this.state.nameError}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Start Location"})}),Object(p.jsx)("input",{type:"text",className:"form-control",onChange:this.validateStartLocation}),Object(p.jsx)("span",{children:this.state.startError}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Destination"})}),Object(p.jsx)("input",{type:"text",className:"form-control",onChange:this.validateDestination}),Object(p.jsx)("span",{children:this.state.endError}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Car"})}),Object(p.jsx)("input",{type:"text",className:"form-control",onChange:this.validateCar}),Object(p.jsx)("span",{children:this.state.carError}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Seats Available"})}),Object(p.jsx)("input",{type:"Number",min:"1",className:"form-control",onChange:this.validateSeats}),Object(p.jsx)("span",{children:this.state.seatsError}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("button",{className:"btn btn-primary me-3",disabled:!(this.state.seatsValid&&this.state.nameValid&&this.state.startValid&&this.state.endValid&&this.state.carValid),type:"submit",children:" Submit"}),Object(p.jsx)("button",{className:"btn btn-warning",onClick:function(){v.dispatch({type:"SHOW_OFFER_RIDE",data:{showOfferRide:!1}});v.dispatch({type:"UPDATE_SHOW_RIDE",data:{}})},type:"button",children:" Back"})]})]}),Object(p.jsxs)("div",{className:"text-center",hidden:!1===this.state.redirect,children:[Object(p.jsx)("h4",{className:"text-white",children:this.state.successMessage}),Object(p.jsx)("button",{className:"btn btn-warning",onClick:function(){v.dispatch({type:"SHOW_OFFER_RIDE",data:{showOfferRide:!1}});v.dispatch({type:"UPDATE_SHOW_RIDE",data:{}});v.dispatch({type:"UPDATE_REGISTRATION_REDIRECT",data:{redirect:!1}})},type:"button",children:" Back to rides"})]})]})}}]),s}(i.a.Component),D=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={showOfferRide:!1},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState(v.getState())})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{hidden:this.state.showOfferRide,children:Object(p.jsx)(I,{})}),Object(p.jsxs)("div",{className:"card bg-dark",hidden:!this.state.showOfferRide,children:[Object(p.jsx)("div",{className:"card-header text-white",children:Object(p.jsx)("h2",{children:" Car Ride Registration Form "})}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(_,{})})})]})]})}}]),s}(i.a.Component),P=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={booking:sessionStorage.getItem("bookings"),currentUser:sessionStorage.getItem("currentUser")},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({bookings:v.getState().bookings,booking:v.getState().booking})})),Object(p.jsxs)("div",{className:"text-white d-flex bd-highlight",style:{width:"100vw",height:"13vh",display:"flex",alignItems:"center",backgroundColor:"black"},children:[Object(p.jsx)("h1",{className:"me-auto p-3 bd-highlight",children:"RideSharing"}),Object(p.jsxs)(k.b,{type:"button",style:{color:"white",fontSize:"20px",textDecoration:"none"},className:"pe-5 ps-5 bd-highlight position-relative",to:"/bookings",children:["My Bookings ",Object(p.jsx)("span",{className:"position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger",hidden:0==this.state.booking.length,style:{color:"white",fontSize:"10px",textDecoration:"none"},children:this.state.booking})]}),Object(p.jsxs)(k.b,{type:"button",className:"pe-3 ps-2 bd-highlight position-relative",style:{color:"white",fontSize:"20px",textDecoration:"none",pointerEvents:"none"},children:[" ",this.state.currentUser,Object(p.jsx)("span",{id:"myDIV",className:"position-absolute top-50 start-0 translate-middle p-1 rounded-circle"})]}),Object(p.jsx)(k.b,{style:{color:"white",fontSize:"20px",textDecoration:"none"},className:"ps-4 pe-4 bd-highlight",to:"/login",onClick:function(){v.dispatch({type:"UPDATE_CURRENT_USER",data:{currentUser:""}})},children:"Logout"})]})}}]),s}(i.a.Component);var U=function(){return Object(p.jsxs)("div",{id:"page-container",children:[Object(p.jsx)("div",{id:"content-wrap",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(P,{})}),Object(p.jsx)("div",{className:"row",style:{backgroundImage:"url(".concat(E,")"),backgroundSize:"cover",width:"100vw",height:"81vh"},children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(p.jsx)(D,{})})})})]})}),Object(p.jsx)("footer",{id:"footer",children:Object(p.jsxs)("div",{className:"text-white d-flex justify-content-around align-items-center",style:{height:"6vh",backgroundColor:"black"},children:[Object(p.jsx)("span",{children:"Terms & Conditions"}),Object(p.jsx)("span",{children:"Copyright \xa9 MHG Limited"}),Object(p.jsx)("span",{children:"Contact us"})]})})]})},A=s.p+"static/media/mamg2.672ab6d2.jpg",T=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={bookings:[]},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("currentUser");u.a.get("http://localhost:8080/bookings/"+t).then((function(t){e.setState({bookings:t.data});var s={type:"UPDATE_BOOKINGS",data:{bookings:t.data}};v.dispatch(s);v.dispatch({type:"RESET_SHOW_RIDE",data:{}}),sessionStorage.setItem("bookings",t.data.length)}))}},{key:"render",value:function(){var e=this;return v.subscribe((function(){return e.setState({bookings:v.getState().bookings})})),Object(p.jsxs)("div",{children:[Object(p.jsxs)("table",{className:"table table-sm table-borderless",hidden:0===this.state.bookings.length,style:{color:"white",borderRadius:"8px",backgroundColor:"rgba(90,90, 90, 0.93)"},children:[Object(p.jsx)("thead",{className:"thead",children:Object(p.jsxs)("tr",{className:"text-center",children:[Object(p.jsx)("th",{children:"Booking ID"}),Object(p.jsx)("th",{children:"Ride ID"}),Object(p.jsx)("th",{children:"Driver Name"}),Object(p.jsx)("th",{children:"Start Point"}),Object(p.jsx)("th",{children:"End Point"}),Object(p.jsx)("th",{children:"Car"}),Object(p.jsx)("th",{children:"Seats Available"}),Object(p.jsx)("th",{children:"Status"})]})}),Object(p.jsx)("tbody",{children:this.state.bookings.map((function(e){return Object(p.jsxs)("tr",{className:"text-center",children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.ride.id}),Object(p.jsx)("td",{children:e.ride.name}),Object(p.jsx)("td",{children:e.ride.startPoint}),Object(p.jsx)("td",{children:e.ride.endPoint}),Object(p.jsx)("td",{children:e.ride.car}),Object(p.jsx)("td",{children:e.ride.seatsAvailable}),Object(p.jsx)("td",{children:e.status})]},e.id)}))})]}),Object(p.jsxs)("div",{className:"text-center mt-4",hidden:this.state.bookings.length>0,children:[Object(p.jsx)("h1",{style:{color:"white"},children:" You have no bookings "}),Object(p.jsxs)(k.b,{className:"btn btn-primary mt-3",to:"/show-rides",children:["Check out rides ",Object(p.jsx)("span",{children:"\u2192"})]})]}),Object(p.jsx)("br",{})]})}}]),s}(i.a.Component);var V=function(){return Object(p.jsxs)("div",{id:"page-container",children:[Object(p.jsx)("div",{id:"content-wrap",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"text-white d-flex bd-highlight",style:{width:"100vw",height:"13vh",display:"flex",alignItems:"center",backgroundColor:"black"},children:[Object(p.jsx)("h1",{className:"me-auto p-3 bd-highlight",children:"RideSharing"}),Object(p.jsx)(k.b,{style:{color:"white",fontSize:"20px",textDecoration:"none"},className:"pe-5 bd-highlight",to:"/show-rides",children:"Home"}),Object(p.jsxs)(k.b,{type:"button",className:"pe-3 ps-2 bd-highlight position-relative",style:{color:"white",fontSize:"20px",textDecoration:"none",pointerEvents:"none"},children:[" ",sessionStorage.getItem("currentUser"),Object(p.jsx)("span",{id:"myDIV",className:"position-absolute top-50 start-0 translate-middle p-1 rounded-circle"})]}),Object(p.jsx)(k.b,{style:{color:"white",fontSize:"20px",textDecoration:"none"},className:"p-4 bd-highlight",to:"/login",onClick:function(){v.dispatch({type:"UPDATE_CURRENT_USER",data:{currentUser:""}})},children:"Logout"})]})}),Object(p.jsxs)("div",{className:"row",style:{backgroundImage:"url(".concat(A,")"),backgroundSize:"cover",width:"100vw",height:"81vh"},children:[Object(p.jsx)("div",{className:"text-white",style:{height:"10vh",backgroundColor:"black",opacity:"0.8",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsx)("h5",{children:"My Bookings"})}),Object(p.jsx)("div",{className:"row col-10 offset-1",children:Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsx)(T,{})})})]})]})}),Object(p.jsx)("footer",{id:"footer",children:Object(p.jsxs)("div",{className:"text-white d-flex justify-content-around align-items-center",style:{height:"6vh",backgroundColor:"black"},children:[Object(p.jsx)("span",{children:"Terms & Conditions"}),Object(p.jsx)("span",{children:"Copyright \xa9 MHG Limited"}),Object(p.jsx)("span",{children:"Contact us"})]})})]})},M=s(34),L=["component","auth"],H=function(e){var t=e.component,s=(e.auth,Object(M.a)(e,L));return Object(p.jsx)(O.b,Object(y.a)(Object(y.a)({},s),{},{render:function(e){return""!==v.getState().currentUser?Object(p.jsx)(t,Object(y.a)({},e)):Object(p.jsx)(O.a,{to:"/login"})}}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(k.a,{basename:"/ridesharing",children:Object(p.jsx)("div",{children:Object(p.jsxs)(O.d,{children:[" ",Object(p.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(O.a,{to:"/login"})}}),Object(p.jsx)(O.b,{exact:!0,path:"/login",component:R}),Object(p.jsx)(H,{path:"/show-rides",component:U}),Object(p.jsx)(H,{exact:!0,path:"/show-rides",component:U}),Object(p.jsx)(H,{exact:!0,path:"/bookings",component:V})]})})})}),document.getElementById("root")),c()}},[[67,1,2]]]);
//# sourceMappingURL=main.a63ba3cd.chunk.js.map