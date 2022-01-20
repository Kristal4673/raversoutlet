import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/login'
import Signup from './Components/signup';
import { ApolloClient } from '@apollo/client';


function App() {
  return (
    <div className="App">
     < ApolloClient>
        <Navbar />
        <Signup />
        <Login />
      </ApolloClient>
    </div>
  );
}

export default App;
