import {BrowserRouter, BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
