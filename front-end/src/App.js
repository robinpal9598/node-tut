import React from 'react';
import './App.css';
import Login from './components/login/Login';
import AddProduct from './components/add-product/AddProduct';
import UpdateProduct from './components/updateProduct/UpdateProduct';
import Change from './components/change/Change';
import Favorite from './components/favorite/Favorite';
import Bookmark from './components/Bookmark';
// import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from './components/signup/SignUp';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<PrivateComponent />} >
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/about' element={ <><Navbar /><h1>About us</h1></>} />
          <Route exact path='/add-product' element={ <><Navbar /><AddProduct /></>} />
          <Route exact path='/products' element={ <><Navbar /><UpdateProduct /></>} />
          <Route exact path='/contact' element={<><Navbar /><h1>profile</h1></>} />
          <Route exact path='/user' element={<><Navbar /><h1>log in</h1></>} />
          <Route exact path='/change/:id' element={<><Navbar /><Change /></>} />
          <Route exact path='/favorite/:userId' element={<><Navbar /><Favorite /></>} />
          <Route exact path='/bookmark/:id' element={<><Navbar /><Bookmark /></>} />



          </Route>
          <Route exact path='/login' element={<><Navbar /><Login /></>} />
          <Route exact path='/signup' element={<><Navbar /><SignUp /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
