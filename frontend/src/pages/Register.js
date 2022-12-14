import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {RegistrationAction} from "../redux/actions/AuthActions";


const Register =()=>{

    const {register, handleSubmit, formState:{errors}}= useForm();
    const [matchPwd,setPwd] = useState(false);
    //const [confirmCreate,setConfirmCreate]=useState(false);
    const dispatch = useDispatch();
    const AuthState = useSelector(state=>state.Auth);
    const submit = (data)=>{
        var formData = new FormData();
        formData.append("firstName",data.firstName);
        formData.append("lastName",data.lastName);
        formData.append("userName",data.userName);
        formData.append("email",data.email);
        formData.append("password",data.password);
        formData.append("confirmPwd",data.confirmPwd);
        formData.append("phone",data.phone);
        formData.append("gender",data.gender);
        formData.append("img",data.img['0']);
        formData.append("birthDate",data.birthDate);
        setPwd(data.password===data.confirmPwd);
        dispatch(RegistrationAction(formData))
    }


    return(
        <div>

            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">

                                <div className="card-body p-md-5 mx-md-4">

                                    <form onSubmit={handleSubmit(submit)}>
                                        <p>Please fill in this form</p>


                                        <div className="formUnit">
                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">First name</label>
                                                <input  type="text" id="form2Example11" className="form-control"
                                                        placeholder="First name" {...register("firstName",{required:true})}/>
                                                {(errors.firstName?.type) && <div class="alert alert-danger" role="alert">
                                                    first name is required
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Last name</label>
                                                <input  type="text" id="form2Example11" className="form-control"
                                                        placeholder="Last name" {...register("lastName",{required:true})}/>
                                                {(errors.lastName?.type) && <div class="alert alert-danger" role="alert">
                                                    last name is required
                                                </div>}
                                            </div>
                                        </div>


                                        <div className="formUnit">
                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Username (how your account will show)</label>
                                                <input  type="text" id="form2Example11" className="form-control"
                                                        placeholder="User name" {...register("userName",{required:true})}/>
                                                {(errors.userName?.type) && <div class="alert alert-danger" role="alert">
                                                    username is required
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Email</label>
                                                <input  type="text" id="form2Example11" className="form-control"
                                                        placeholder="Email" {...register("email", { required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' })}/>
                                                {errors.email?.type === "required" && <div class="alert alert-danger" role="alert">
                                                    email is required
                                                </div>}
                                                {errors.email?.type === "pattern" && <div class="alert alert-danger" role="alert">
                                                    email format is invalid
                                                </div>}
                                            </div>
                                        </div>


                                        <div className="formUnit">
                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Password</label>
                                                <input  type="password" id="form2Example11" className="form-control"
                                                        placeholder="******" {...register("password", { required: true, minLength: 8 })}/>
                                                {errors.password?.type === "required" && <div className="alert alert-danger" role="alert">
                                                    password is required
                                                </div>}
                                                {errors.password?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                                    the password must be longer than 8 characters
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Confirm password</label>
                                                <input  type="password" id="form2Example11" className="form-control"
                                                        placeholder="******" {...register("confirmPwd", { required: true, })}/>
                                                {!matchPwd && <div className="alert alert-danger" role="alert">
                                                    the two passwords must match !
                                                </div>}
                                            </div>
                                        </div>

                                        <div className="formUnit">
                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Gender</label>
                                                <select className="form-select" {...register("gender")}>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                            </div>

                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Phone number</label>
                                                <input  type="number" id="form2Example11" className="form-control"
                                                        placeholder="123456789" {...register("phone", { required: true, minLength: 8, maxLength:8 })}/>
                                                {errors.phone?.type === "required" && <div className="alert alert-danger" role="alert">
                                                    phone number is required
                                                </div>}
                                                {errors.phone?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                                    the phone number must have 8 digits
                                                </div>}
                                                {errors.phone?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                                    the phone number must have 8 digits
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Profile photo</label>
                                                <input  type="file" id="form2Example11" className="form-control" {...register("img", { required: true })}/>
                                                {errors.img?.type && <div class="alert alert-danger" role="alert">
                                                    profile Picture is required
                                                </div>}
                                            </div>
                                        </div>

                                        <div className="formUnit">
                                            <div className="form-outline col-5 mt-5">
                                                <label className="form-label" htmlFor="form3Example90">Birth date</label>
                                                <input type="date" id="form3Example90" className="form-control form-control-lg" {...register("birthDate", { required: true })} />
                                                {errors.birthDate?.type && <div class="alert alert-danger" role="alert">
                                                    birth date is required
                                                </div>}
                                            </div>

                                        </div>


                                        <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                            <button
                                                className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                type="submit">Create account
                                            </button>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <div>
                                                <Link to="/login" className="btn btn-outline-success">You have an account? Log in here</Link>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                {!AuthState?.error &&  <div className="alert alert-success" role="alert">
                                    registration completed successfully! please refer to your inbox for the confirmation mail and then login <Link to="/login">here</Link>
                                </div>}
                                {AuthState?.error && <div className="alert alert-warning" role="alert">
                                    {AuthState.error.data}
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Register;