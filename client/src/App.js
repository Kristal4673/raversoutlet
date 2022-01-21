import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './pages/Main/Main';
import { ApolloClient } from '@apollo/client';
import Footer from './Components/Footer/Footer';


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
