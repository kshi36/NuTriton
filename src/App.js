import './App.css';
import Header from './views/header.js';
import Navbar from './views/navbar.js';
import RestaurantList from './views/restaurantlist.js';
import Security_paper from "./views/security.js"

import Auth from './views/auth.js';
import Profile from './views/profile.js';
import Profile_setting from './views/profile_setting.js'
import Edit from './views/edit profile.js'
import Guest from './views/guest profile.js';
import Map from './views/map.js'
// import Login from './views/login';
// import Signup from './views/signup';

import { ContextProvider } from "./controllers/restaurantcontext.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoieGlvbmdkIiwiYSI6ImNsdGozcW9hejBsaDgyaXA1djE4YzcyZXkifQ.z-6FL9gKcIZvQJt5FPD4CA';


function App() {
  return (
    <div className="ui container">
        <Router>
            <Header/>
            <ContextProvider>
                <Routes>
                    {/* <Route exact path="/" element={<RestaurantList/>}/> */}
                    <Route path="/auth" element={<Auth/>}/>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                    {/*<Route path="/signup" element={<Signup/>}/>*/}
                    <Route path= "/profile" element = {<Profile/>}/>
                    <Route path= "/profile_setting" element = {<Profile_setting/>}/>
                    <Route path= "/edit" element = {<Edit/>}/>
                    <Route path= "/guest" element = {<Guest/>}/>
                    <Route path= "/security_paper" element = {<Security_paper/>}/>
                    <Route path= "/map" element = {<Map/>}/>
                    
                    

                    
                </Routes>
            </ContextProvider>
            <Navbar/>
        </Router>
    </div>
  );
}

export default App;
