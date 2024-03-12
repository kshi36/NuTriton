import { render, fireEvent, screen } from "@testing-library/react"; 
import RestaurantList from "../views/restaurantlist";   
import React from 'react';
//test block 
test("restaurant lists", () => { 
  // render the component on virtual dom 
  render(<RestaurantList/>);   
  const element =  screen.getByText(/Restaurants/i);            
expect(element).toBeInTheDocument(); 
});