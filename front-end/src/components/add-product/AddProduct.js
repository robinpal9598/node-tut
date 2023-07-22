import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './addProduct.css'
function AddProduct() {
  const[name,setName]=new useState("");
  const[price,setPrice]=new useState("");
  const[company,setCompany]=new useState("");
  const[category,setCategory]=new useState("");
  const[error,setError]=new useState("");
  const navigate=useNavigate();
  const handleAddProduct=async()=>{
if(!name||!price||!category||!company)
{
  setError(true);
  return false;
}

   const userId=JSON.parse(localStorage.getItem('user'))._id;
    let result= await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,company,category,price,userId}),
        headers:{
            'Content-Type':'application/json'
        },
    })
   let results=await result.json();
    console.warn(results);
    navigate("/products")
  }
  return (
    <div className='add-products'>
        <h1>Add Product</h1>
        <input className='add-product' type='text' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter the Product Name' />
        {error&&!name&&<span className='validateEntry'>Enter valid name</span>}
        <input className='add-product' typeof='text' onChange={(e)=>{setPrice(e.target.value)}}  value={price} placeholder='Price' />
        {error&&!price&&<span className='validateEntry'>Enter valid price</span>}
        <input className='add-product' typeof='text' onChange={(e)=>{setCompany(e.target.value)}} value={company}  placeholder='Company' />
        {error&&!company&&<span className='validateEntry'>Enter valid company</span>}
        <input className='add-product' typeof='text' onChange={(e)=>{setCategory(e.target.value)}} value={category}  placeholder='Category' />
        {error&&!category&&<span className='validateEntry'>Enter valid category</span>}
        <button onClick={handleAddProduct} className='add-product' >Submit</button>
    </div>
  )
}

export default AddProduct