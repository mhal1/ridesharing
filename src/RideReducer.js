const initialState = {
    rides: [],
    ride: {},
    newRide: {},
    showRidesTable: false,
    showRide: false,
    showButtonBookRide: true,
    disableButtonAllRides: false,
    bookingId: 0,
    showOfferRide: false,
    bookings: [],
    redirect: false,
    currentUser: sessionStorage.getItem("currentUser"),
    loginCard: false,
    booking:sessionStorage.getItem("bookings")
};

function updateRides(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_RIDES' :
            var updateStateRides = Object.assign({}, state, {rides: action.data.rides})
            return updateStateRides;
        case 'UPDATE_RIDE' :
            var updateStateRide = Object.assign({}, state, {ride: action.data.ride})
            return updateStateRide;
        case 'ADD_RIDE' :
            var updateStateAddRide = Object.assign({}, state, {
                rides: action.data.rides,
                redirect: action.data.redirect
            })
            return updateStateAddRide;
        case 'UPDATE_REGISTRATION_REDIRECT' :
            var updateStateAddRide = Object.assign({}, state, {
                redirect: action.data.redirect
            })
            return updateStateAddRide;
        case 'SHOW_RIDES_TABLE':
            var updateStateShowRides = Object.assign({}, state, {showRidesTable: action.data.showRidesTable})
            return updateStateShowRides;
        case 'HIDE_BOOK_RIDE_BUTTON':
            var updateStateHideBookRideButton = Object.assign({}, state, {showButtonBookRide: action.data.showButtonBookRide})
            return updateStateHideBookRideButton;
        case 'DISABLE_ALL_RIDE_BUTTON':
            var updateStateDisableAllRideButton = Object.assign({}, state, {disableButtonAllRides: action.data.disableButtonAllRides})
            return updateStateDisableAllRideButton;
        case 'UPDATE_BOOKING_ID' :
            var updateStateUpdateBookingId = Object.assign({}, state, {bookingId: action.data.bookingId})
            return updateStateUpdateBookingId;
        case 'UPDATE_BOOKINGS' :
            var updateStateUpdateBookings = Object.assign({}, state, {bookings: action.data.bookings})
            return updateStateUpdateBookings;
        case 'SHOW_OFFER_RIDE' :
            var updateStateShowOfferRide = Object.assign({}, state, {showOfferRide: action.data.showOfferRide})
            return updateStateShowOfferRide;
        case 'SHOW_RIDE' :
            var updateStateShowRide = Object.assign({}, state, {showRide: action.data.showRide})
            return updateStateShowRide;
        case 'RESET_SHOW_RIDE' :
            var updateStateResetShowRide = Object.assign({}, state, {
                ride: {},
                newRide: {},
                showRidesTable: false,
                showButtonBookRide: true,
                disableButtonAllRides: false,
                bookingId: 0,
                showOfferRide: false,
                showRide: false,
                redirect: false
            })
            return updateStateResetShowRide;
        case 'UPDATE_SHOW_RIDE' :
            var updateStateUpdateShowRide = Object.assign({}, state, {
                ride: {},
                newRide: {},
                showRidesTable: false,
                showButtonBookRide: true,
                disableButtonAllRides: false,
                bookingId: 0,
                showOfferRide: false,
                showRide: false,
                redirect: false
            })
            return updateStateUpdateShowRide;
        case 'UPDATE_CURRENT_USER' :
            var updateStateCurrentUser = Object.assign({}, state, {currentUser: action.data.currentUser})
            return updateStateCurrentUser;
        case 'SHOW_SIGNUP' :
            var updateShowSignup = Object.assign({}, state, {loginCard: action.data.loginCard})
            return updateShowSignup;
        case 'BOOK_RIDE' :
            var updateBookRideClick = Object.assign({}, state, {
                ride: action.data.ride,
                showButtonBookRide: action.data.showButtonBookRide,
                showRidesTable: action.data.showRidesTable
            })
            return updateBookRideClick;
        case 'CANCEL_RIDE' :
            var updateCancelRideClick = Object.assign({}, state, {
                showButtonBookRide: action.data.showButtonBookRide,
                ride: action.data.ride,
                disableButtonAllRides: action.data.disableButtonAllRides,
                showRide: action.data.showRide
            })
            return updateCancelRideClick;
        case 'BOOKING_COUNT' :
            var updateBookingRide = Object.assign({}, state, {
                booking: action.data.booking,
            })
            return updateBookingRide;
        default:
            return state;
    }
}

export default updateRides;
