import {BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './pages/Main/Main';
import { ApolloClient } from '@apollo/client';
import Footer from './Components/Footer/Footer';
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./Components/Forms/Login";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SignUp from './pages/SignUp/SignUp';
// import Profile from './pages/Profile/Profile';
import { Profiler } from 'react';
import Shop from './pages/Shop/Shop';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        {/* <Main /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profiler />} />
          <Route path="/main/category/:name" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/main/category/:name" element={<Main/>} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
