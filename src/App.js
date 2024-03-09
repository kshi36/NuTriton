import './App.css';
import Header from './views/header';
import Navbar from './views/navbar';
import RestaurantList from './views/restaurantlist';

import Auth from './views/auth';

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
                </Routes>
            </ContextProvider>
            <Navbar/>
        </Router>
    </div>
  );
}

export default App;
