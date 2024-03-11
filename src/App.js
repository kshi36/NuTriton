import './App.css';
import Header from './views/header';
import Home from './views/home';
import Navbar from './views/navbar';
import RestaurantList from './views/restaurantlist';
import Security_paper from './views/security';

import Auth from './views/auth';
import Profile from './views/profile';
import Profile_setting from './views/profile_setting';
import Edit from './views/edit profile';
import Guest from './views/guest profile';
import Map from './views/map';

import { ContextProvider } from "./controllers/restaurantcontext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="ui container">
        <Router>
            <Header/>
            <ContextProvider>
                <Routes>
                    {/*<Route exact path="/" element={<Home/>}/>*/}
                    <Route exact path="/" element={<Auth/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path= "/profile" element = {<Home/>}/>
                    <Route path= "/map" element = {<Home/>}/>
                    <Route path= "/profile_setting" element = {<Profile_setting/>}/>
                    <Route path= "/edit" element = {<Edit/>}/>
                    <Route path= "/guest" element = {<Guest/>}/>
                    <Route path= "/security_paper" element = {<Security_paper/>}/>
                </Routes>
            </ContextProvider>
            {/*<Navbar/>*/}
        </Router>
    </div>
  );
}

export default App;
