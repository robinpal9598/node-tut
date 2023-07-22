import { React, useState } from 'react'
import './displayProd.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function DisplayProd(props) {
    const [name, setName] = useState("d");
    const [ids, setId] = useState("d");
    const [price, setPrice] = useState("f");
    const [company, setCompany] = useState("f");
    const [category, setCategory] = useState("f");
    const [userId, setUserId] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        let userid = JSON.parse(localStorage.getItem('user'));
        let useridNo = userid._id;
        setCompany(props.company);
        setUserId(useridNo);
        setCategory(props.category);
        setPrice(props.price);
        setName(props.name);
    }, [])







    const handleBookmark = async (id) => {
        console.log("bookmarked", id);

        setId(id);
        let result = await fetch('http://localhost:5000/bookmark', {
            method: 'post',
            body: JSON.stringify({ name, userId, price, category, company, id }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }


    const handleDelete = async (id) => {
        console.log(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'Delete',

        });
        result = await result.json();
        props.setFlag((prev) => !prev)
        if (result) {

            alert('result is deleted');
        }
        console.log(result);


    }
    return (

        <div className='dispalyProd mx-2 my-3' style={{ "width": "400px", "display": "inline-block", "backgroundColor": "skyblue" }} >


            <div className="card my-3 " style={{ "width": "390px", "justifyContent": "center" }}>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item ">{props.name}</li>
                    <li className="list-group-item">{props.price}</li>
                    <li className="list-group-item">{props.company}</li>
                    <li className="list-group-item">{props.category}</li>
                </ul>
                {/* <button onClick={() => handleDelete((props.id))} className='delete'>Delete Products</button> */}
                <Link to={`/change/${props.id}`} >Update</Link>
                <button onClick={() => handleBookmark(props.id)}>bookmark</button>
                {/* <Link to={`/bookmark/${props.id}`}>Bookmark product</Link> */}

            </div>
        </div>
    )
}

export default DisplayProd