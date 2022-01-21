import {BrowserRouter, BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './pages/Main/Main';
import { ApolloClient } from '@apollo/client';
import Footer from './Components/Footer/Footer';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">   
      <Navbar />
        <Main />
      <Footer/>
    </div>
  );
}

export default App;
