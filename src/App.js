import './App.css';
import Header from './components/header';
import RestaurantList from './components/restaurantlist';

import { ContextProvider } from "./controller/restaurantcontext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="ui container">
        <Router>
            <Header/>
            <ContextProvider>
                <Routes>
                    <Route exact path="/" element={<RestaurantList/>}/>
                </Routes>
            </ContextProvider>
        </Router>
    </div>
  );
}

export default App;
