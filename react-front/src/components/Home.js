import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteItem, listItems } from '../utils/item';

export default function Home() {
    let navigat= useNavigate();
    const [items,setItems]=useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

useEffect(() => {
    const fetchData = async () => {
      const result = await listItems();
      setItems(result);
      console.log(user)
    };
    fetchData();
  }, []);
  const deleteI= async (e) => {
    const result = await deleteItem(e);
    const r = await listItems();
    setItems(r);
    }
   const logout=async ()=>{
    localStorage.clear();
   navigat('/login');
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"></a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"href="/home">Home</a></li>
                        {user?.role!="USER" &&(
                         <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/users">Users</a></li>
                   )}
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"  onClick={() => logout()}>LOGOUT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      
        <section className="page-section portfolio mt-5" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Items</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <button type="button" className="btn btn-outline-primary mb-5"><a href='/new_item'>New item</a></button>
                <div className="row justify-content-center">
                {items?.map((item)=>(
                    <div className="col-md-6 col-lg-4 mb-5" key={item._id}>
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                           
                            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
                            <p>name: {item.nom}</p>
                            <p>stock: {item.stock}</p>
                <button type="button" className="btn btn-outline-secondary mb-5"><Link to={"/update_item/" + item._id}>Update</Link></button>
                <button type="button" className="btn btn-outline-danger mb-5"onClick={() => deleteI(item._id)}>Delete</button>

                        </div>
                    </div>
                ))}
                    
                  
                    
                   
                    
                </div>
            </div>
        </section>
       
      
  
  </>
  )
}
