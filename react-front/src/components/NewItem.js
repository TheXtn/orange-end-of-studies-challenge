import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { createItem } from '../utils/item';

export default function NewItem() {
  let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();

      const [item,setItem]=useState({
        nom: "",
        stock: "",
    });
    const onSubmit = async (e) => {
    console.log(item);
    const result = await createItem('6397080e1696fc3b41dd7109',item) .then((item) => {
        console.log("added");})
        navigate("/home");


    }
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
       
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

            <h3>New Item</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
         
  
          <div className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter name of item"  onChange={(e) =>
                    setItem({ ...item, nom: e.target.value })
                  }/>
              <label className="form-label" htmlFor="form3Example3">Item Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="number" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter stock" onChange={(e) =>setItem({ ...item, stock: e.target.value }) }
                />
              <label className="form-label" htmlFor="form3Example3">Item stock</label>
            </div>
  
            
         
  
           
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg"
              >Add</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </section>
  )
}
