import { combineReducers, createStore } from "redux";
import {customerReducer} from "./CustomerState";
import { companyReducer } from "./CompanyState";
import { couponReducer } from "./CouponState";
import { authReducer } from "./AuthState";



const reducers=combineReducers
({customerState:customerReducer,
    companyState:companyReducer,  
    couponState:couponReducer,
    authState:authReducer});

const store=createStore(reducers);

export default store;