import './App.css';
import Header from './views/header';
import Navbar from './views/navbar';
import RestaurantList from './views/restaurantlist';
import Login from './views/login';
import Signup from './views/signup';

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
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </ContextProvider>
            <Navbar/>
        </Router>
    </div>
  );
}

export default App;
