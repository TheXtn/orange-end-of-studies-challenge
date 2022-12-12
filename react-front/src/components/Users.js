import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, listUsers } from '../utils/user';

export default function Users() {
    let navigat= useNavigate();
    const [users,setUsers]=useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

useEffect(() => {
    const fetchData = async () => {
      const result = await listUsers();
      setUsers(result);
    };
    fetchData();
  }, []);
  const deleteI= async (e) => {
    const result = await deleteUser(e);
    const r = await listUsers();
    setUsers(r);
    }
   const logout=async ()=>{
    localStorage.clear();
   navigat('/login');
    }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"></a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"href="/home">Home</a></li>
                        {user?.role!="USER" &&(
                         <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/users">Users</a></li>
                   )}
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"  onClick={() => logout()}>LOGOUT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      
        <section class="page-section portfolio mt-5" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Users</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <button type="button" class="btn btn-outline-primary mb-5"><a href='/new_user'>New user</a></button>
                <div class="row justify-content-center">
                {users?.map((user)=>(
                    <div class="col-md-6 col-lg-4 mb-5" key={user._id}>
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                           
                            <img class="img-fluid" src="assets/img/portfolio/user.png" alt="..." />
                            <p>name: {user.firstname}{user.lastname}</p>
                            <p>email: {user.email}</p>
                <button type="button" class="btn btn-outline-secondary mb-5"><Link to={"/update_user/" + user._id}>Update</Link></button>
                <button type="button" class="btn btn-outline-danger mb-5"onClick={() => deleteI(user._id)}>Delete</button>

                        </div>
                    </div>
                ))}
                    
                  
                    
                   
                    
                </div>
            </div>
        </section>
       
      
  
  </>
  )
}
