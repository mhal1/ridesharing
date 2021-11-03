import {createStore} from "redux";
import updateRides from "./RideReducer";

const store = createStore(updateRides);

export default store;
