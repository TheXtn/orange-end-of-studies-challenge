import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem, updateItem } from '../utils/item';

export default function UpdateItem() {
    let { id } = useParams();

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
    useEffect(() => {
        const fetchData = async () => {
          const result = await getItem(id);
          setItem(result)
         
        }
        fetchData();
      },[]);

    const onSubmit = async (e) => {
    console.log(item);
    const result = await updateItem(id,item) .then((item) => {
        console.log("added");})
        navigate("/home");


    }
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
       
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

            <h3>Update Item</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
         
  
          <div className="form-outline mb-4">
              <input type="text" id="form3Example3"  value={item.nom} className="form-control form-control-lg"
                placeholder="Enter name of item"  onChange={(e) =>
                    setItem({ ...item, nom: e.target.value })
                  }/>
              <label className="form-label" htmlFor="form3Example3">Item Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="form3Example3" value={item.stock} className="form-control form-control-lg"
                placeholder="Enter stock" onChange={(e) =>setItem({ ...item, stock: e.target.value }) }
                />
              <label className="form-label" htmlFor="form3Example3">Item stock</label>
            </div>
  
            
         
  
           
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg"
              >Update</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </section>
  )
}
