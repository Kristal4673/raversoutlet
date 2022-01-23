import {BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Main from './pages/Main/Main';
import { ApolloClient } from '@apollo/client';
import Footer from './Components/Footer/Footer';
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SignUp from './pages/SignUp/SignUp';
// import Profile from './pages/Profile/Profile';
import { Profiler } from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Main /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profiler />} />
          <Route path="/main/category/:name" element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
