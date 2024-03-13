import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import RestaurantList from "../views/restaurantlist";   
import React from 'react';
import { useContextProvider } from '../controllers/restaurantcontext'

jest.mock('../controllers/restaurantcontext', () => ({
  // useContextProvider: {
  //   //Consumer: ({children}) => children({
  //     restaurants: {}, 
  //     getRestaurants: jest.fn(), 
  //     searchTerm: jest.fn(), 
  //     searchRes: jest.fn(), 
  //     searchHandler: jest.fn(), 
  //     filterHandler: jest.fn(), 
  //     filterParams: jest.fn(), 
  //     sortParam: jest.fn()
  //   //})
  // }
  useContextProvider: jest.fn()
}));
//test block 
test("restaurant lists", async () => { 
  const test_data = [
    {
        Name: 'Foodworx',
        Hours: 'Monday:?8:00 a.m. – 9:00 a.m.Tuesday:?8:00 a.m. – 9:00 a.m.Wednesday:?8:00 a.m. – 9:00 a.m.Thursday:?8:00 a.m. – 9:00 a.m.Friday:?8:00 a.m. – 8:00 a.m.Saturday:?10:00 a.m. – 8:00 a.m.Sunday:?10:00 a.m. – 8:00 a.m',
        menu: [
            {
                Name: 'Soy Sauce',
                Price: '$7.25',
                'Contains Dairy': 'FALSE',
                'Contains Eggs': 'FALSE',
                'Contains Fish': 'FALSE',
                'Contains Gluten': 'FALSE',
                'Contains Peanuts': 'FALSE',
                'Contains Sesame': 'FALSE',
                'Contains Shell Fish': 'FALSE',
                'Contains Soy': 'TRUE',
                'Contains Tree Nuts': 'FALSE',
                'Sustainability': 'FALSE',
                'Vegan': 'FALSE',
                'Vegetarian': 'FALSE',
                'Wellness': 'FALSE',
            },
            {
                Name: 'Seasame Sauce',
                Price: '$9.00',
                'Contains Dairy': 'FALSE',
                'Contains Eggs': 'FALSE',
                'Contains Fish': 'FALSE',
                'Contains Gluten': 'FALSE',
                'Contains Peanuts': 'FALSE',
                'Contains Sesame': 'TRUE',
                'Contains Shell Fish': 'FALSE',
                'Contains Soy': 'FALSE',
                'Contains Tree Nuts': 'FALSE',
                'Sustainability': 'FALSE',
                'Vegan': 'FALSE',
                'Vegetarian': 'FALSE',
                'Wellness': 'FALSE',
            },
            {
                Name: 'Egg Salad',
                Price: '$4.99',
                'Contains Dairy': 'FALSE',
                'Contains Eggs': 'TRUE',
                'Contains Fish': 'FALSE',
                'Contains Gluten': 'FALSE',
                'Contains Peanuts': 'FALSE',
                'Contains Sesame': 'FALSE',
                'Contains Shell Fish': 'FALSE',
                'Contains Soy': 'FALSE',
                'Contains Tree Nuts': 'FALSE',
                'Sustainability': 'FALSE',
                'Vegan': 'FALSE',
                'Vegetarian': 'TRUE',
                'Wellness': 'FALSE',
            },
        ],
    },
  ];

  useContextProvider.mockImplementation(() => {
    return {
      getRestaurants: jest.fn(),//.mockResolvedValue(test_data), 
      restaurants: test_data,
      searchTerm: [], 
      searchRes: [], 
      searchHandler: jest.fn(), 
      filterHandler: jest.fn(), 
      filterParams: [], 
      sortParam: null,
    };
  });  
  render(<RestaurantList/>);   

  await waitFor(() => expect(useContextProvider).toHaveBeenCalledTimes(3));

  const element =  screen.getByText('Foodworx');            
  expect(element).toBeInTheDocument(); 
});