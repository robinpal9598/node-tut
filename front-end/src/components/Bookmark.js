import {React,useEffect,useState} from 'react'

function Bookmark() {
    const[product,setProduct]=useState([]);
    
let id=JSON.parse(localStorage.getItem('user'));
id=id._id;
useEffect(() => {
  getProduct();
}, [])



    const getProduct = async () => {
        let result = await fetch(`http://localhost:5000/bookmark/${id}`);
        const resss = await result.json();
        
        setProduct(resss);
    
    
      }


  return (
    <div>
         <div className='dispalyProd mx-2 my-3 ' style={{ "width": "400px", "display": "inline-block", "backgroundColor": "skyblue" }} >
  {product.length>0?product.map((item)=>(
<div className="card my-3 " style={{ "width": "390px", "justifyContent": "center" }}>
<ul className="list-group list-group-flush">

    <li className="list-group-item">{item.price}</li>
    <li className="list-group-item">{item.company}</li>
    <li className="list-group-item">{item.category}</li>
    <li className="list-group-item ">{item.name}</li>
</ul>


</div>
  )):<h1>Nothing Bookmarked</h1>}


</div>
    </div>
  )
}

export default Bookmark