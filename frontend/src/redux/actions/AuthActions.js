import axios from "axios";
import axiosInstance from "../../utils/axiosInterceptor";

import {ERROR,LOGIN_ACTION,REGISTRATION_ACTION,SET_CONNECTED,LOGOUT} from "../reducers/AuthReducer";

export const RegistrationAction = (user)=>dispatch=>{
    axios.post("http://localhost:5000/signIn",user,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
        .then(result=>{
            dispatch({
                type:REGISTRATION_ACTION,
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}