import { React, useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

function Change() {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    useEffect(() => {
        changeContent();
    }, []);
    const params = useParams();
    const changeContent = async () => {
//Fetching the data from the API and filling the initial entries to the change component
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setPrice(result.price);
        setCompany(result.company);
        setCategory(result.category);
    }
    const updateChanges=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-Type':"application/json"
            }
        });
        result=await result.json();
        console.log(result);
        navigate("/products")
    }


    return (
        <div>
            <h1>Update Product</h1>
            <input className='add-product' type='text' onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter the Product Name' />

            <input className='add-product' typeof='text' onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder='Price' />

            <input className='add-product' typeof='text' onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder='Company' />

            <input className='add-product' typeof='text' onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder='Category' />

            <button onClick={updateChanges} className='add-product' >Submit</button>
        </div>
    )
}

export default Change