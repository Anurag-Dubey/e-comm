import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from "./components/Header.js";
import Home from './components/Home';


function App() {
  return (
    <>
    <HashRouter>
      <Header />
      <div>
      <Routes>
        <Route path='/' exact element= {<Home />} /> 
        <Route path='/cart' exact element={<Cart />} /> 
      </Routes>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
