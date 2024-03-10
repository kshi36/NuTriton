import './App.css';
import Header from './views/header';
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
                    <Route exact path="/" element={<RestaurantList/>}/>
                    <Route path="/auth" element={<Auth/>}/>
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
