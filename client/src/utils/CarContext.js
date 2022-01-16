import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";


// Create our car context using React.CreateContext()
export const CarContext = React.createContext();

// Create a custom hook that allows easy access to our CarContext values
export const useCar = () => useContext(CarContext);

const randomNum = () => Math.floor(Math.random() * 20000);

// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {
  const cars = [
    {
      id: randomNum(),
      make: 'Honda',
      model: 'Civic',
      year: '2008',
      isRunning: false,
    },
    {
      id: randomNum(),
      make: 'Tesla',
      model: 'Y',
      year: '2021',
      isRunning: false,
    },
  ];

  // The provider component will wrap all other components inside of it that need access to our global state
  return <CarContext.Provider value={{ cars }} {...props} />;
}
