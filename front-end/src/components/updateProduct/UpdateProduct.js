import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DisplayProd from '../DisplayProd/DisplayProd';
import './updateProduct.css'
import Bookmark from '../Bookmark';
function UpdateProduct() {
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);
  const [ids, setId] = useState("");
  let id = JSON.parse(localStorage.getItem('user'));
  console.log(id, "hello");

  useEffect(() => {
    getProduct();
    setId(id);
  }, [flag]);

  const getProduct = async () => {
    let result = await fetch('http://localhost:5000/products');
    const resss = await result.json();
    setProduct(resss);


  }

  const handleSearch = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    }
    else {
      getProduct();
    }

  }




  return (
    <>
      <h1>Hii this is updated product component</h1>
      <input type='text' style={{ "display": "flex", "margin": "auto", "marginTop": "30px", "marginBottom": "30px", "borderRadius": "20px", "width": "400px" }} className='searchbar'
        onChange={handleSearch} placeholder='search key' />

      <Link style={{ "display": "flex", "margin": "auto", "marginTop": "30px", "marginBottom": "30px", "marginLeft": "48%", "borderRadius": "20px", "textDecoration": "none", "border": "2px solid blue", "width": "150px", "textAlign": "center", "paddingLeft": "25px" }} to={`/favorite/${ids}`}>My Products</Link>
      {
        product.length > 0 ?
          product.map((item, index) =>
            <>
              <DisplayProd key={item._id} name={item.name} category={item.category} price={item.price} company={item.company} id={item._id} userId={item.userId} setFlag={setFlag} />
            </>
          ) :
          <h1>No Product Found</h1>}
    </>
  )
}

export default UpdateProduct