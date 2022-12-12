import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/user';
import "./user.css";


export default function Login() {
    let navigat=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();
    const [user,setUser]=useState({
        firstname: "",
        lastname: "",
        password: "",
        email: "",
    });
    const onSubmit = async (e) => {
        console.log("*****",user);

    const result = await getUser(user) .then((user) => {
        console.log("*ff*",user)
        if(user.length!=0){
            localStorage.setItem('user', JSON.stringify(user));
            navigat("/home");
    
        }
       
    })

    }
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit(onSubmit)}> 
         
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" onChange={(e) =>
                    setUser({ ...user, email: e.target.value })}/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>
  
           
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password"onChange={(e) =>
                    setUser({ ...user, password: e.target.value })} />
              <label className="form-label" htmlFor="form3Example4" >Password</label>
            </div>
  
           
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg"
              onClick={() => onSubmit()} >Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                  className="link-danger">Register</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    
  </section>
  )
}
