import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Favorite(props) {
  const [state, setState] = useState([]);
  const [flag, setFlag] = useState(false);
  let prev = false;
  const handleDelete = async (id) => {
    console.log("deleting the product");
    console.log(id);
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: 'Delete',

    });
    result = await result.json();
    setFlag(!flag);
    if (result) {

      alert('result is deleted');

    }
    console.log(result);


  }


  const [fav, setFav] = useState([]);
  const removeFav = () => {
    console.log("removing your fav");
  }
  useEffect(() => {
    favorite();
    

  }, [flag]);

  let result;
  const favorite = async () => {

    let id = JSON.parse(localStorage.getItem('user'));
    console.log(id);
    result = await fetch(`http://localhost:5000/favorite/${id._id}`);
    result = await result.json();
    if (result) {
      console.log(result);
      setFav(result);
    }
    else {
      console.log("No fav found");
    }
  }
  return (

    <div>

      {fav.length > 0 ? fav.map((props) => (

        <div className="card my-3 " style={{ "width": "400px", "display": "inline-block", "backgroundColor": "skyblue" }}>

          <ul className="list-group list-group-flush">

            <li className="list-group-item ">{props.name}</li>
            <li className="list-group-item">{props.price}</li>
            <li className="list-group-item">{props.company}</li>
            <li className="list-group-item">{props.category}</li>
          </ul>
         
          <button onClick={() => handleDelete(props._id)} className='delete'>Delete Products</button>

        </div>)
      )
        :
        <h2>not found</h2>}
    </div>
  )
}

export default Favorite