import { React, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  let auth = localStorage.getItem('user');
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRUD Tutorial</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {auth ?
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                < Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                < Link className="nav-link active" aria-current="page" to="/add-product">Add Product</Link>
              </li>
              <li className="nav-item">
                < Link className="nav-link active" aria-current="page" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Link</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/change/:id">Update</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookmark/:id">Bookmark</Link>
              </li>
             
              <Link onClick={logout} className="nav-link" to="/signup">logout</Link>  </ul>:
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/signup">signUp</Link></li> 
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar