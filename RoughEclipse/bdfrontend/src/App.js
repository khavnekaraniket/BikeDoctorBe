
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/HomePage/Home';
import { Link, Route, Routes } from 'react-router-dom';
import CustomerRegistration from './Component/Registration/CustomerRegistration';
import ServiceRegistration from './Component/Registration/ServiceCenterRegistration';
import LoginNewPage from './Component/Login/LoginNewPage';
import CustomerHome from './Component/HomePage/CustomerHome';
import ServiceHome from './Component/HomePage/CustomerHome';
import ServiceCenterRegistration from './Component/Registration/ServiceCenterRegistration';
import { useSelector } from 'react-redux';
import { BookingList } from './Component/UseCases/BookingList';
import AdminHome from './Component/HomePage/AdminHome'
import Logout from './Component/Logout/Logout';
import AdminServiceCenterVerification from './Component/UseCases/AdminServiceCenterVerification ';
import LoginListWithDelete  from './Component/UseCases/LoginListWithDelete';
import GetTransaction from './Component/HomePage/GetTransaction';
import ViewBookings from './Component/UseCases/ViewBookings';
import Crousal from './Component/HomePage/Crousal';
import {pic} from './Component/Images/Img2.jpg'
import CardGrid from './Component/HomePage/CardGrid';
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentComponent from './Component/HomePage/PaymentComponent';
import BookingsForServiceCenter from './Component/HomePage/BookingsForServiceCenter ';


function App() {

  const mystate=useSelector((state)=>state.logged);

  return (
      <div> 
        <div style={{display:mystate.loggedIn?"none":"block "}}>
        <nav className="navbar navbar-expand-lg bg-light" style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.4)" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Bike Doctor
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/bookinglist">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Service Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SignUp
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/customerregistration">
                        User
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/serviceregistration">
                        Service Center
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        
        <div>

         <Routes>
         <Route
                path="customerregistration"
                element={<CustomerRegistration/>}
              ></Route>
              <Route
                path="servicecenterregistration"
                element={<ServiceRegistration/>}
              ></Route>
              <Route path="login"
                element={<LoginNewPage/>}></Route>
                <Route path="userlogin"
                element={<LoginNewPage/>}></Route>
                <Route path="serviceregistration" element={<ServiceCenterRegistration/>}></Route>
                <Route path="customerhome" element={<CustomerHome />}></Route>
                <Route path="serviceHome" element={<ServiceHome />}></Route>
                <Route path="bookinglist" element={<BookingList />}></Route>
                <Route path="/admin_Home" element={<AdminHome/>}></Route>
                <Route path="/Verifycenters" element={<AdminServiceCenterVerification/>}></Route>
                <Route path="/allLogin" element={<LoginListWithDelete/>}></Route>
                <Route path="/allbooking" element={<ViewBookings/>}></Route>
               
                <Route path="/viewTransactions" element={<GetTransaction/>}></Route>
                <Route path="/payment" element={<BookingsForServiceCenter/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
                
              
         </Routes>
        </div>
        
      </div>
   
  );
}

export default App;
