import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/user';


export default function Register() {
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
        role:""
    });
    const onSubmit = async (e) => {
        console.log("**r",user)
    const result = await createUser(user) .then((user) => {
        if(user!=null){
            console.log("added",user);
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

            <h3>Register</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
         
  
          <div className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter your firstname"  onChange={(e) =>
                    setUser({ ...user, firstname: e.target.value })
                  }/>
              <label className="form-label" htmlFor="form3Example3">FirstName</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter your lastname" onChange={(e) =>setUser({ ...user, lastname: e.target.value }) }
                />
              <label className="form-label" htmlFor="form3Example3">LastName</label>
            </div>
  
            
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" onChange={(e) =>setUser({ ...user, email: e.target.value }) }/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>
  
           
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" onChange={(e) =>setUser({ ...user, password: e.target.value }) }/>
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
  
            <select
                   className="form-control form-control-lg"
                    onChange={(e) =>
                      setUser({ ...user, role: e.target.value })
                    }
                  >
                    <option>USER</option>

                    <option>ADMIN</option>
                  </select>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg"
              >Register</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">You have an account? <a href="/login"
                  className="link-danger">SignIn</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </section>
  )
}
