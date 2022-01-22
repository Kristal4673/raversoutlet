import {BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './pages/Main/Main';
import { ApolloClient } from '@apollo/client';
import Footer from './Components/Footer/Footer';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:name" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
